# Google Developer Documentation Style

Google Developer Documentation Style Guide는 개발자 대상 기술 문서(API 가이드, 튜토리얼, 레퍼런스 등)를 작성하고 구조화할 때 지켜야 할 명확한 표준을 제공합니다.

## 핵심 가이드 및 구조화 원칙

### 1. 명확하고 간결한 서술
- 문서는 코드 작성이나 문제 해결을 돕는 '도구'입니다. 불필요한 마케팅 용어나 장황한 배경 설명을 배제하고 핵심에 집중합니다.
- 독자를 칭할 때는 2인칭('you')을 사용하고, 가능하면 능동태로 작성하여 절차를 명확하게 지시합니다.

### 2. 코드 스니펫 및 예제 우선
- 개발자는 텍스트보다 코드를 먼저 읽습니다. 콘텐츠를 분석할 때 이 개념을 설명하기 위해 어떤 코드 예제가 필요한지 최우선으로 고려합니다.
- 코드는 복사해서 바로 실행할 수 있도록 완결성을 갖춰야 합니다.

### 3. 일관된 구조화 (Standard Document Structures)
Google은 목적에 따라 문서 구조를 일관되게 가져갑니다:
- **튜토리얼 (Tutorials)**: 학습 목표 -> 선행 조건(Prerequisites) -> 단계별 지침 -> 결과 및 다음 단계.
- **개념 문서 (Conceptual Docs)**: 전체 아키텍처 개요 -> 구성 요소 설명 -> 유즈케이스.
- **태스크 가이드 (How-to Guides)**: 목표 서술 -> 사전 준비 -> 해결 단계 (Step-by-step) -> 검증.

### 4. 가독성 향상 (Formatting)
- 짧은 단락, 번호 매기기(순서가 있는 절차), 글머리 기호(순서가 없는 목록), 표를 적극적으로 활용하여 정보의 위계를 시각적으로 구조화합니다.

## Agent 활용 지침
- 개발자 대상 기술 문서를 기획할 때는, 콘텐츠 분석(Concept, Task, Reference) 결과를 Google의 일관된 문서 구조 프레임워크(Prerequisites, Step-by-step, Code examples 등)에 맞게 `content-structure.md`에 매핑하세요.
