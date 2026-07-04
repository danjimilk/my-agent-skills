---
name: content-analysis-and-structuring
description: 분석된 요구사항을 바탕으로 콘텐츠를 Concept, Task, Reference 타입으로 분류하고 문서 구조를 설계할 때 이 스킬을 호출하세요. 사용자가 '문서 목차를 짜줘', '분석된 요구사항으로 문서 작성 계획을 세워줘'라고 요청할 때 사용합니다.
type: plan
---

# Content Analysis and Structuring

이 스킬은 문서 요구 사항 분석이 완료된 후, 파악된 항목들을 Diátaxis 프레임워크 기반으로 분류 및 구조화하는 워크플로우를 제공합니다.

## 유의 사항 (Gotchas)
- 각 분류 항목 작성 시, 반드시 원본 파일명(줄 번호 포함)이나 참조 링크 등 **명확한 출처**를 명시해야 합니다. 출처가 없으면 나중에 내용을 검증할 수 없습니다.
- 분류 작업과 구조화 작업은 순차적으로 이루어져야 합니다.

## 워크플로우 (Workflow)

- [ ] **Step 1: 콘텐츠 타입 분류 및 파일 생성**
  - 모든 콘텐츠 항목을 3가지 타입으로 분류하여 `.docs/content-analysis/` 디렉터리에 저장합니다.
  1. `concept.md`: 배경 지식이나 개념 설명
  2. `task.md`: 순서대로 따라야 하는 절차적 가이드
  3. `reference.md`: API 스펙, 명령어 목록 등 참조용 정보

- [ ] **Step 2: 출처 기입 검증 (Validation Loop)**
  - 분류된 3개의 마크다운 파일을 생성한 후, 모든 항목에 출처가 올바르게 기입되었는지 스스로 검증합니다.
  - 오류 예시: `- 인증 아키텍처 개요 (출처 없음)`
  - 정상 예시: `- 인증 아키텍처 개요 (출처: requirements/auth-req.md#L10-L15)`
  - 출처가 누락된 항목이 있다면 다시 확인하여 기입합니다.

- [ ] **Step 3: 문서 구조 매핑 (Content Structure 생성)**
  - `.docs/content-analysis/content-structure.md`를 작성하여 각 항목을 테크니컬 라이팅 구조(Tutorials, How-to Guides, Reference, Explanation)에 맞게 매핑합니다.

  ```markdown
  # Content Structure 템플릿

  ## 1. Tutorials (학습용 튜토리얼)
  - **[문서명] 빠른 시작 가이드**
    - 포함 Concept: [concept.md의 항목 A]
    - 포함 Task: [task.md의 항목 B]

  ## 2. How-to Guides (문제 해결 가이드)

  ## 3. Reference (참조 가이드)

  ## 4. Explanation (개념 문서)
  ```

- [ ] **Step 4: 사용자 최종 검토**
  - 작성된 `content-structure.md`의 구조에 대해 사용자에게 피드백을 요청하고 확정받습니다.

- [ ] **Step 5: 경쟁사 분석 연계 (Competitor Analysis)**
  - 구조화가 확정되고 문서 분석이 끝나면, 즉시 `competitor-analysis` 스킬을 호출하여 해당 제품과 유사한 경쟁사 및 레퍼런스 서비스의 문서를 분석하도록 워크플로우를 넘기세요.

## 레퍼런스 (References)
- [Single Sourcing: Building Modular Documentation](references/single-sourcing.md)
- [Developing Quality Technical Information](references/developing-quality-technical-information.md)
- [Every Page is Page One](references/every-page-is-page-one.md)
- [Google Developer Documentation Style](references/google-developer-documentation-style.md)
