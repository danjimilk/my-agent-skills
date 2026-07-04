---
name: getting-started
description: 소프트웨어 프로젝트의 '시작하기(Getting Started)' 가이드나 튜토리얼 문서를 작성할 때 이 스킬을 호출하세요. 사용자가 '시작하기 문서를 써줘', '초보자용 튜토리얼을 만들어줘'라고 요청할 때 사용합니다.
type: [task, write]
---

# Getting Started 가이드 작성 지침

소프트웨어의 완벽한 시작 가이드를 작성하기 위해 이 워크플로우를 따릅니다.

## 유의 사항 (Gotchas)
- 대상 소프트웨어가 어떻게 작동하는지 명확하지 않다면, 추측하지 말고 사용자에게 설치 방법이나 핵심 기능을 먼저 질문하세요.
- 터미널 명령어에는 반드시 코드 블록을 사용하고, 오타가 없는지 한 번 더 확인해야 합니다.

## 워크플로우 (Workflow)

- [ ] **Step 1: 메타데이터 추가**
  - 작성되는 문서의 최상단(또는 YAML Frontmatter)에 해당 문서가 Task 타입임을 나타내는 라벨(예: `type: task` 또는 `[Type: Task]`)을 추가합니다.

- [ ] **Step 2: 사전 분석 결과 확인 (Validation Loop)**
  - `.docs/requirements/`나 `.docs/content-analysis/` 디렉터리에 기존 분석 파일이 있다면 읽어옵니다. 없다면 작성 전에 `requirements-analysis` 스킬 호출을 사용자에게 제안합니다. 분석 결과를 참고하여 목적과 대상 독자를 문서 서두에 1~2줄로 요약합니다.

- [ ] **Step 3: 필수 요건(Prerequisites) 작성**
  - 사용자가 사전에 갖춰야 할 의존성(Node.js, Docker 등), 계정, 시스템 요구사항 등을 명확히 나열합니다.

- [ ] **Step 4: 단계별 설치 지침 작성**
  - 기본 설정을 위한 과정을 터미널 명령어 위주로 간결하게 작성합니다.
  ```bash
  # 예시
  git clone https://github.com/example/repo.git
  npm install
  npm start
  ```

- [ ] **Step 5: 첫 성공적인 액션 (Hello World) 안내**
  - 사용자가 소프트웨어가 정상 작동함을 확인할 수 있는 최소한의 실습(예: 첫 API 호출, 결과 화면 스크린샷 묘사 등)을 추가합니다.

- [ ] **Step 6: 다음 단계 (Next Steps) 링크 제공**
  - 심화 학습을 위한 API 레퍼런스, 기여 가이드 등의 링크나 안내를 문서 마지막에 추가합니다.
