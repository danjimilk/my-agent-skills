---
name: review
description: 작성된 문서의 품질을 다각도(PM, 테크니컬 라이터, 독자, AI 에이전트)로 검토하고 종합 리뷰 리포트를 생성할 때 이 스킬을 호출하세요. 사용자가 '문서를 리뷰해줘', '가이드에 오류가 없는지 검토해줘'라고 요청할 때 사용합니다.
type: review
---

# Review Skill

이 스킬은 작성된 문서를 4가지의 다른 시각(페르소나)으로 철저하게 리뷰하고, 결과를 바탕으로 종합적인 리뷰 리포트를 생성하는 워크플로우입니다.

## 유의 사항 (Gotchas)
- 문서 리뷰를 위해서는 반드시 이전에 작성된 `.docs/requirements/target-product.md` 및 `.docs/requirements/readers.md` 파일이 존재해야 합니다. 없다면 먼저 요구사항 분석 스킬을 실행하도록 제안하세요.
- 서브 에이전트들이 독립적으로 문서를 리뷰해야 하므로, 명확하게 역할을 분리하여 `invoke_subagent`로 호출해야 합니다.

## 워크플로우 (Workflow)

- [ ] **Step 1: 전제 조건 확인**
  - 리뷰를 시작하기 전 `.docs/requirements/target-product.md`와 `.docs/requirements/readers.md` 파일이 존재하는지 확인합니다.

- [ ] **Step 2: 다각도 문서 리뷰 (서브 에이전트 호출)**
  - `invoke_subagent` 도구를 사용하여 다음 4개의 서브 에이전트를 동시에 호출합니다.
  1. **PM & Engineer 에이전트**: 원래 콘텐츠 기획 의도 및 제품 스펙(`target-product.md`)과의 일치 여부, 기술 정합성 검토
  2. **Technical Writer 에이전트**: 문서의 명확성, 가독성, 용어 일관성, 깨진 링크, 오타 검토 및 구글 기술 문서 스타일 가이드(https://developers.google.com/style) 준수 여부 검토
  3. **독자 에이전트**: 대상 독자(`readers.md`) 입장에서 이해하기 어려운 맥락이나 용어 검토
  4. **AI 에이전트**: 작성된 문서가 AI 에이전트나 LLM이 이해하고 재사용하기 좋게 구조화 및 명확하게 작성되었는지 검토

- [ ] **Step 3: 리뷰 리포트 생성 및 우선순위 지정 (Validation Loop)**
  - 4개의 에이전트로부터 피드백을 수집하여 하나의 리포트로 작성합니다.
  - **최우선 항목**: 2개 이상의 에이전트가 공통으로 지적한 사항을 최상단에 강조
  - **기타 항목**: 페르소나별 지적 사항을 정리

- [ ] **Step 4: 리포트 파일 저장**
  - 완성된 리포트를 `.docs/review-reports/` 디렉터리에 원본 문서와 동일한 이름(예: `guide.md` -> `.docs/review-reports/guide.md`)으로 저장합니다.

- [ ] **Step 5: 사용자 검토 요청**
  - 리포트가 생성되면 사용자에게 피드백 확인 및 수동 검토를 요청합니다.
