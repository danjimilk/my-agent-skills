# Agent Plugin Development Rules

이 프로젝트는 Open Plugin Specification v1.0.0을 기반으로 Agent 플러그인을 개발하기 위한 저장소입니다. 향후 이 프로젝트에서 작업하는 모든 Agent는 아래의 규칙을 준수하여 플러그인을 개발해야 합니다.

## 1. 패키지 구조 및 규칙 (Plugin Package Model)
- 본 저장소는 여러 개의 플러그인을 포함하는 모노레포(Monorepo) 형식입니다. 각 플러그인은 프로젝트 루트 하위의 개별 디렉터리로 구성해야 합니다.
- 매니페스트는 각 플러그인 루트 디렉터리 기준 `.plugin/plugin.json` 경로에 위치해야 합니다.
- 매니페스트에 정의되는 모든 상대 경로는 해당 플러그인의 루트를 기준으로 `./`로 시작해야 하며, `../`를 사용해 플러그인 루트 밖으로 벗어나는 경로는 사용할 수 없습니다.
- 디렉터리 템플릿:
  ```text
  [plugin-name]/
  ├── .plugin/
  │   └── plugin.json
  ├── skills/
  │   └── <skill-name>/
  │       └── SKILL.md
  └── .mcp.json (필요 시)
  ```

## 2. 매니페스트 (plugin.json) 요구사항
- `name` 필드는 필수이며 1-64자의 영소문자, 숫자, 하이픈(-), 마침표(.)만 허용됩니다 (시작/끝은 영문자 또는 숫자).
- 호환성을 위해 `version` (SemVer 권장) 및 `description` 필드를 추가해야 합니다.
- 기본 Skill 스캔 경로는 `skills/` 이며, MCP 서버 설정은 `.mcp.json` 입니다. 만약 매니페스트에 해당 경로 필드(`skills`, `mcpServers`)를 오버라이드할 경우 명시된 경로를 따릅니다.

## 3. 컴포넌트 발견 (Component Discovery)
- **Skills**: 기본적으로 `skills/` 하위의 디렉터리에 위치하며, 각 디렉터리 안에는 `SKILL.md` 가 있어야 합니다.
  - **주의**: 앞으로 새로운 스킬을 작성할 때는 반드시 [Agent Skills 지침](https://github.com/agentskills/agentskills)을 참고해야 합니다. 구체적인 명세와 가이드는 로컬에 클론되어 있는 `/Users/danjimilk/Workspace/agentskills` 디렉터리를 참조하여 작성하세요.
- **MCP Servers**: 기본적으로 `.mcp.json` 파일에 정의하며, 필요한 경우 `plugin.json`의 `mcpServers` 필드에 인라인으로 작성하거나 다른 경로를 지정할 수 있습니다.

## 4. 환경 변수 및 확장 (Environment Variables)
- 서브프로세스를 실행하는 컴포넌트(예: MCP 서버) 설정의 `command`, `args`, `env`, `cwd` 등에는 `${PLUGIN_ROOT}` 및 `${PLUGIN_DATA}` 확장을 지원하도록 작성해야 합니다.

## 5. 언어 (Language)
- 이 프로젝트의 주요 사용자는 한국어 사용자입니다. 따라서 모든 플러그인의 메타데이터(설명 등), Skill 지시문(SKILL.md), 그리고 기타 리소스는 원칙적으로 **한국어**로 작성되어야 합니다.

## 6. 스킬 검증 및 품질 관리 (Skill Validation Rule)
- 에이전트가 새로운 스킬(SKILL.md)을 생성하거나 기존 스킬을 수정할 때는, 반드시 **Agent Skills Best Practices 명세서 준수 여부**를 엄격하게 검증해야 합니다.
- **필수 검증 항목**:
  1. `name`: 부모 디렉터리의 이름과 정확히 일치하는지 (영문 소문자, 숫자, 하이픈만 허용)
  2. `description` 최적화:
     - 스킬이 호출되어야 할 구체적인 상황(Trigger)을 명시하고 있습니까?
     - 명령형 문장(예: "Use this skill when...", "...할 때 이 스킬을 호출하세요")으로 작성되었습니까?
     - 단순한 기능 설명이 아니라 사용자 의도(Intent)에 초점을 맞추고 있습니까?
     - 1024자를 초과하지 않는지 확인하십시오.
  3. `SKILL.md` 본문 구조:
     - **YAML Frontmatter**: `name`과 `description`은 필수로 포함해야 하며, 필요시 `type` 메타데이터를 추가할 수 있습니다.
     - **표준 템플릿**: 문서 구조는 반드시 다음의 형식을 따릅니다:
       - `# <Skill Name>`
       - 스킬에 대한 간단한 소개
       - `## 유의 사항 (Gotchas)`
       - `## 워크플로우 (Workflow)`: `- [ ] **Step X:**` 형태의 체크리스트로 작성
       - `## 레퍼런스 (References)` (필요한 경우 추가)
     - 추상적이고 일반적인 설명(LLM이 이미 아는 내용)은 배제하고, 해당 작업에 특화된 절차, 예외 처리(Gotchas), 검증 루프(Validation loops) 등 실질적인 지침을 제공합니까?
     - 복잡한 템플릿이나 레퍼런스는 `references/` 폴더 등으로 분리하는 점진적 공개(Progressive Disclosure)를 적용했습니까?
     - 분량이 500줄(약 5000토큰) 이하로 억제되어 있습니까?
  4. **평가(Evals) 테스트 케이스 의무화**:
     - 모든 스킬은 반드시 `evals/evals.json` 파일을 가져야 합니다.
     - 테스트 케이스는 최소 2~3개 이상 포함되어야 하며, `prompt`, `expected_output`을 명시해야 합니다.
     - 검증 가능한 정량적/정성적 `assertions`를 정의하여, 결과물을 체계적으로 평가할 수 있어야 합니다.
- 위 항목 중 하나라도 누락되었거나 명세에 위반되는 부분이 발견되면 에이전트는 즉시 스스로 보완하여 수정해야 합니다.
