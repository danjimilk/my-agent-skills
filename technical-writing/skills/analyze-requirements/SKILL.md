---
name: analyze-requirements
description: 새로운 기술 문서 프로젝트를 시작하거나 기존 문서를 분석하여 대상 독자, 제품, 목표 등 요구사항을 재정립할 때 이 스킬을 호출하세요. 사용자가 '문서 요구사항을 파악해줘', '어떤 문서를 작성해야 할지 기획해줘' 등 프로젝트 기획 및 분석 요청을 할 때 사용합니다.
type: plan
---

# 문서 요구사항 분석 (Analyze Requirements)

이 스킬은 기술 문서나 문서 프로젝트를 본격적으로 시작하기 전, 사용자와 대화하거나 제공받은 컨텍스트를 분석하여 핵심 요구 사항을 명확히 정의하고 결과를 저장하는 워크플로우를 제공합니다.

## 유의 사항 (Gotchas)
- 사용자가 초기 컨텍스트를 충분히 제공하지 않은 경우, **절대로 추측해서 작성하지 말고** 반드시 사용자에게 질문하여 명확히 하세요.
- 분석 결과는 반드시 지정된 3개의 파일(`.docs/requirements/readers.md`, `target-product.md`, `required-docs.md`)로 **나누어** 저장해야 합니다. 하나의 파일로 합치지 마세요.

## 워크플로우 (Workflow)

- [ ] **Step 1: 컨텍스트 분석 및 질의**
  - 제공된 정보를 바탕으로 다음 4가지 핵심 요소를 파악합니다. 부족한 정보가 있다면 사용자에게 질문합니다.
  1. **대상 제품**: 문서가 다루는 제품/서비스/기능
  2. **문서 독자**: 독자의 사전 지식수준과 대상
  3. **문서 세트**: 전체 프로젝트를 구성하는 문서 종류
  4. **목표/목적**: 각 문서가 독자에게 전달할 가치

- [ ] **Step 2: 요약 제공 및 검토 (Validation Loop)**
  - 파악된 내용으로 1차 요약본을 사용자에게 제시합니다.
  - 사용자가 피드백이나 추가 정보를 제공하면 요약본을 업데이트합니다.
  - 사용자가 명시적으로 '최종 확정'을 할 때까지 이 검토 루프를 반복합니다.

- [ ] **Step 3: 결과물 저장**
  - 최종 확정된 내용을 다음 3개의 파일로 저장합니다 (디렉터리가 없으면 생성):
  - `.docs/requirements/readers.md`: 독자 분석 결과
  - `.docs/requirements/target-product.md`: 기술 문서 대상 분석 결과
  - `.docs/requirements/required-docs.md`: 필요 문서 세트 및 목표

## 레퍼런스 (References)
- [Read Me First! - 문서 기획 및 분석 가이드](references/read-me-first.md)
- [Managing Enterprise Content - 콘텐츠 분석 가이드](references/managing-enterprise-content.md)
- [주요 기업 개발자 문서 유형 맵](references/developer-documentation-type-map.md): `required-docs.md` 작성 시 제품 유형별·독자별 필요 문서 세트를 도출하기 위한 참고 자료
