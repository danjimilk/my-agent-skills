---
name: glossary
description: 기술 문서 내 도메인 특화 용어 및 내부 용어를 식별하여 용어집(glossary.json)을 구성하거나 갱신할 때 이 스킬을 호출하세요. 사용자가 '용어 정리를 해줘', '새로운 문서에서 용어를 추출해줘'라고 요청할 때 사용합니다.
type: [reference, write]
---

# 용어집(Glossary) 관리 지침

이 스킬은 문서 컨텍스트에서 식별된 특수 용어들을 모아 `.docs/glossary.json` 에 기록하고 최신 상태로 유지하는 역할을 합니다.

## 유의 사항 (Gotchas)
- 일반 외부 검색으로 조회 가능한 범용 단어라도, **우리 도메인에서 특별한 의미로 쓰이는 경우** 반드시 용어집에 추가해야 합니다.
- 동의어가 여러 개 식별된다면 가장 적절한 대표 용어로 통일하고, 정의(definition)에 동의어를 병기하세요.
- JSON 문법 오류(쉼표 누락 등)에 각별히 주의하세요.

## 워크플로우 (Workflow)

- [ ] **Step 1: 용어 식별 및 통합**
  - 새로운 분석 결과물이나 문서를 읽고, 문서에 등장하는 도메인 용어를 추출합니다.
  
- [ ] **Step 2: JSON 파일 업데이트**
  - `.docs/glossary.json` 파일에 용어를 추가하거나 업데이트합니다. 파일이 없다면 새로 생성합니다. 
  - 다음과 같은 배열 포맷을 반드시 유지해야 합니다:
  ```json
  [
    {
      "term": "API",
      "definition": "애플리케이션 프로그래밍 인터페이스"
    }
  ]
  ```

- [ ] **Step 3: 용어 정렬 및 유효성 검사 (Validation Loop)**
  - 용어를 갱신한 후에는 반드시 JSON이 정상적인지 확인하고, 사전 순(Alphabetical)으로 정렬해야 합니다. Python을 이용해 정렬을 수행할 수 있습니다.
  ```bash
  python3 -c "import json; f='.docs/glossary.json'; d=json.load(open(f)); json.dump(sorted(d, key=lambda x: x.get('term', '').lower()), open(f, 'w'), indent=2, ensure_ascii=False)"
  ```
  - 명령어가 실패하면 JSON 문법을 고치고 다시 실행하세요.
