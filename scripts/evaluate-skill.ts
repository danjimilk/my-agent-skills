import fs from 'fs';
import path from 'path';

interface Assertion {
  description: string;
  type: 'file_exists' | 'regex_match' | 'json_schema' | 'llm_judge';
  target?: string; // file path relative to output dir
  pattern?: string; // for regex
  // other fields can be added
}

interface EvalCase {
  id: string | number;
  prompt: string;
  expected_output: string;
  files?: string[];
  assertions?: (string | Assertion)[];
}

interface EvalsConfig {
  skill_name: string;
  evals: EvalCase[];
}

function checkFileExists(targetPath: string): boolean {
  return fs.existsSync(targetPath);
}

function checkRegexMatch(targetPath: string, pattern: string): boolean {
  if (!fs.existsSync(targetPath)) return false;
  const content = fs.readFileSync(targetPath, 'utf8');
  const regex = new RegExp(pattern, 'm');
  return regex.test(content);
}

function evaluateAssertion(assertion: Assertion, outputDir: string): { passed: boolean; evidence: string } {
  if (assertion.type === 'file_exists' && assertion.target) {
    const targetPath = path.join(outputDir, assertion.target);
    const passed = checkFileExists(targetPath);
    return {
      passed,
      evidence: passed ? `File found: ${assertion.target}` : `File not found: ${assertion.target}`,
    };
  }

  if (assertion.type === 'regex_match' && assertion.target && assertion.pattern) {
    const targetPath = path.join(outputDir, assertion.target);
    const passed = checkRegexMatch(targetPath, assertion.pattern);
    return {
      passed,
      evidence: passed ? `Pattern matched in ${assertion.target}` : `Pattern not matched in ${assertion.target}`,
    };
  }

  if (assertion.type === 'llm_judge') {
    return { passed: false, evidence: 'Requires manual LLM judge execution' };
  }

  return { passed: false, evidence: `Unsupported or misconfigured assertion type: ${assertion.type}` };
}

function processEval(evalCase: EvalCase, evalDir: string, variant: 'with_skill' | 'without_skill') {
  const outputDir = path.join(evalDir, variant, 'outputs');
  if (!fs.existsSync(outputDir)) {
    console.warn(`[!] Output directory not found for ${variant}: ${outputDir}`);
    return null;
  }

  const results = [];
  let passedCount = 0;
  let totalCount = 0;

  for (const ast of evalCase.assertions || []) {
    if (typeof ast === 'string') {
      // It's a string, meaning it requires LLM or manual grading
      results.push({ text: ast, passed: false, evidence: 'Requires LLM/manual grading' });
      totalCount++;
    } else {
      // Programmatic assertion
      const res = evaluateAssertion(ast, outputDir);
      results.push({
        text: ast.description,
        passed: res.passed,
        evidence: res.evidence
      });
      if (res.passed) passedCount++;
      totalCount++;
    }
  }

  return {
    assertion_results: results,
    summary: {
      passed: passedCount,
      failed: totalCount - passedCount,
      total: totalCount,
      pass_rate: totalCount > 0 ? passedCount / totalCount : 0
    }
  };
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Usage: tsx scripts/evaluate-skill.ts <path-to-skill-dir>');
    process.exit(1);
  }

  const skillDir = path.resolve(args[0]);
  const evalsPath = path.join(skillDir, 'evals', 'evals.json');

  if (!fs.existsSync(evalsPath)) {
    console.error(`Evals file not found: ${evalsPath}`);
    process.exit(1);
  }

  const config: EvalsConfig = JSON.parse(fs.readFileSync(evalsPath, 'utf8'));
  console.log(`Evaluating skill: ${config.skill_name}`);

  // We assume the workspace is created at <skill_name>-workspace at the same level as the skill dir
  const workspaceDir = path.join(path.dirname(skillDir), `${path.basename(skillDir)}-workspace`);
  const iterationDir = path.join(workspaceDir, 'iteration-1'); // Currently hardcoded to iteration-1 for simplicity

  if (!fs.existsSync(iterationDir)) {
    console.error(`Workspace iteration directory not found: ${iterationDir}`);
    console.log(`Please run the agent tests first and save outputs to: ${iterationDir}/eval-<id>/with_skill/outputs/`);
    process.exit(1);
  }

  const benchmark: any = {
    run_summary: {
      with_skill: { pass_rate: { mean: 0 } },
      without_skill: { pass_rate: { mean: 0 } }
    }
  };

  let withSkillTotalPassRate = 0;
  let withoutSkillTotalPassRate = 0;
  let validEvals = 0;

  for (const evalCase of config.evals) {
    const evalDir = path.join(iterationDir, `eval-${evalCase.id}`);
    
    console.log(`\nProcessing Eval [${evalCase.id}]:`);

    const withSkillRes = processEval(evalCase, evalDir, 'with_skill');
    if (withSkillRes) {
      fs.writeFileSync(path.join(evalDir, 'with_skill', 'grading.json'), JSON.stringify(withSkillRes, null, 2));
      console.log(`  with_skill    -> pass_rate: ${withSkillRes.summary.pass_rate}`);
      withSkillTotalPassRate += withSkillRes.summary.pass_rate;
    }

    const withoutSkillRes = processEval(evalCase, evalDir, 'without_skill');
    if (withoutSkillRes) {
      fs.writeFileSync(path.join(evalDir, 'without_skill', 'grading.json'), JSON.stringify(withoutSkillRes, null, 2));
      console.log(`  without_skill -> pass_rate: ${withoutSkillRes.summary.pass_rate}`);
      withoutSkillTotalPassRate += withoutSkillRes.summary.pass_rate;
    }

    if (withSkillRes || withoutSkillRes) {
      validEvals++;
    }
  }

  if (validEvals > 0) {
    benchmark.run_summary.with_skill.pass_rate.mean = withSkillTotalPassRate / validEvals;
    benchmark.run_summary.without_skill.pass_rate.mean = withoutSkillTotalPassRate / validEvals;
    benchmark.run_summary.delta = {
      pass_rate: benchmark.run_summary.with_skill.pass_rate.mean - benchmark.run_summary.without_skill.pass_rate.mean
    };
    
    fs.writeFileSync(path.join(iterationDir, 'benchmark.json'), JSON.stringify(benchmark, null, 2));
    console.log(`\nSaved benchmark.json to ${iterationDir}`);
  }
}

main().catch(console.error);
