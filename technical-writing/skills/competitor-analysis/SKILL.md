---
name: competitor-analysis
description: "새로운 기술 문서를 작성하기 전에, 구글(Google), 메타(Meta), 아마존(Amazon) 등 빅테크 기업이나 유사 경쟁사 서비스의 공식 문서를 찾아 벤치마킹하고 문서 종류와 구조를 분석해야 할 때 이 스킬을 호출하세요."
type: plan
---

# 경쟁사 및 레퍼런스 분석 (Competitor Analysis)

기술 문서를 작성하기 전, 대상 제품과 유사한 타사 서비스의 문서를 분석하여 `.docs/content-analysis/competitors.md`에 결과를 정리합니다.

## 유의 사항 (Gotchas)
- **검색 결과의 질**: 광고 페이지나 블로그 리뷰가 아닌, 실제 "공식 기술 문서(Official Documentation)" 페이지를 위주로 참조하세요.
- **포괄성**: 단순히 경쟁사 이름만 나열하지 말고, **어떤 종류의 문서가 있고, 구조가 어떠한지**에 대한 구체적인 분석이 들어가야 합니다.

## 워크플로우 (Workflow)

- [ ] **Step 1: 사전 준비 (Context Gathering)**
  - **사전 조건 검증**: 이 스킬을 실행하기 위해서는 사전에 `content-analysis-and-structuring` 스킬의 결과물이 존재해야 합니다.
  - 먼저 `.docs/content-analysis/content-structure.md` 파일을 비롯하여 `.docs/content-analysis/` 디렉터리에 있는 문서 구조 및 요구사항 분석 파일들(예: `concept.md`, `task.md`, `reference.md` 등)을 직접 열어보고 내용을 파악하세요.
  - 기존 분석 결과물에서 도출된 문서 구조와 대상 제품/기능의 핵심을 파악하여 경쟁사 분석의 기준으로 삼습니다.
  - 만약 해당 파일들이 존재하지 않거나 내용이 충분하지 않다면, 사용자에게 먼저 `content-analysis-and-structuring` 작업을 통해 요구사항 분석 및 구조화를 진행해야 한다고 안내하세요.

- [ ] **Step 2: 조사 및 분석 절차 (Research & Analysis)**
  - **웹 검색 수행 (Web Search)**: 
    - 사용자가 제공한 제품과 직접적으로 경쟁하는 서비스 2~3개를 웹 검색을 통해 찾습니다.
    - 빅테크(Google, Meta, AWS, Azure 등)에서 제공하는 유사 플랫폼이나 SaaS도 함께 탐색합니다.
  - **공식 기술 문서 벤치마킹**:
    - 식별된 각 서비스의 공식 개발자 문서(Developer Docs), 사용자 가이드(User Guide)를 분석합니다.
    - **문서의 종류**: Getting Started, API Reference, Tutorials, Concepts 등 어떠한 문서 셋을 제공하고 있는지 확인합니다.
    - **정보 아키텍처 (IA)**: 목차 구성 및 분류 체계를 분석합니다.
    - **특장점 및 차별점**: 검색 기능, 대화형 예제, 디자인 구조 등 참조할 만한 우수 사례를 식별합니다.

- [ ] **Step 3: 결과물 작성 (Output Generation)**
  - 위에서 분석한 결과를 **반드시 `.docs/content-analysis/competitors.md`** 경로에 마크다운 파일로 생성합니다.
  - 디렉토리가 존재하지 않을 경우 새로 생성하세요.

- [ ] **Step 4: 검증 루프 (Validation Loop)**
  - `.docs/content-analysis/competitors.md` 파일이 정상적으로 생성되었고, 분석 대상 서비스가 2개 이상 포함되었는지 스스로 확인한 후 완료를 보고하세요.
