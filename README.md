# My Agent Plugins

이 프로젝트는 [Open Plugin Specification](https://github.com/vercel-labs/open-plugin-spec.git) v1.0.0을 준수하여 작성한 개인용 Agent 플러그인을 모아두는 저장소입니다. (테스트용)

## 프로젝트 구조
- `.agents/AGENTS.md`: Agent가 준수해야 할 플러그인 개발 규칙이 명시되어 있습니다.
- `[플러그인 이름]/`: 각 플러그인은 개별 폴더 내에서 독립적으로 구성됩니다.
  - `.plugin/plugin.json`: 해당 플러그인의 필수 메타데이터
  - `skills/`: 해당 플러그인에 종속된 Skill들

## 플러그인 목록

이 절에서는 정의한 각각의 플러그인을 간략히 설명합니다.

### `technical-writing`
기술 문서 작성을 보조하고 자동화하는 에이전트 플러그인입니다. 다음의 스킬들을 포함하고 있습니다.

- **`requirements-analysis`**: 새로운 기술 문서 프로젝트를 시작하거나 기존 문서를 분석하여 대상 독자, 제품, 목표 등 요구사항을 재정립할 때 사용합니다.
- **`competitor-analysis`**: 기술 문서 작성 전, 빅테크 기업이나 유사 경쟁사 서비스의 공식 문서를 벤치마킹하고 문서 종류와 구조를 분석할 때 사용합니다.
- **`content-analysis-and-structuring`**: 분석된 요구사항을 바탕으로 콘텐츠를 Concept, Task, Reference 타입으로 분류하고 문서 구조(IA)를 설계할 때 사용합니다.
- **`getting-started`**: 소프트웨어 프로젝트의 '시작하기(Getting Started)' 가이드나 튜토리얼 문서를 작성할 때 사용합니다.
- **`glossary`**: 기술 문서 내 도메인 특화 용어 및 내부 용어를 식별하여 용어집(glossary.json)을 구성하거나 갱신할 때 사용합니다.
- **`oas-api-reference`**: 비표준 형태(일반 텍스트 등)의 API 레퍼런스 초안을 OpenAPI Specification 3.0 스펙 기반의 정식 API 명세(json/yaml/md)로 생성할 때 사용합니다.
- **`review`**: 작성된 문서의 품질을 PM, 테크니컬 라이터, 독자, AI 에이전트 등 4가지 페르소나의 다각도로 검토하고 종합 리뷰 리포트를 생성할 때 사용합니다.
