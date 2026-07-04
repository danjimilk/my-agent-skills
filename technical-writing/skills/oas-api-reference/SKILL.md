---
name: oas-api-reference
description: "개발자가 API 레퍼런스 초안을 비표준 형태(일반 텍스트 등)로 전달할 때 이 스킬을 호출하세요. 입력된 초안을 바탕으로 OpenAPI Specification 3.0 스펙 기반의 정식 API 명세(json 또는 yaml)를 생성하고, 필요 시 마크다운(md) 포맷으로 변환합니다."
type: [reference, write]
---

# OAS API Reference Generation Skill

이 스킬은 개발자가 OAS 스펙이 아닌 비표준 형태(일반 텍스트, 위키, 소스 코드 주석 등)로 API 레퍼런스 초안을 전달할 때, 이를 바탕으로 **OpenAPI Specification 3.1 (OAS 3.1)** 규격에 맞는 정식 API 레퍼런스 문서를 생성하는 절차를 정의합니다.

- **지원 포맷**: JSON, YAML, Markdown

## 유의 사항 (Gotchas)
- 사용자가 OAS 3.1 버전(예: Swagger 2.0 또는 OAS 3.0)을 원하지 않는 이상 항상 **3.1** 스펙을 타겟팅합니다.
- `md` 파일 변환 시, 생성된 마크다운 내용이 너무 길 경우 파일로 직접 저장하고 결과를 브리핑만 합니다.

## 워크플로우 (Workflow)

- [ ] **Step 1: 비표준 초안 분석 및 스펙 초안 작성**
  - 개발자가 제공한 비표준 형태의 API 설명, 엔드포인트 정보, 파라미터, 응답 모델 등을 분석하여 OAS 3.1 문법에 맞춰 초안을 작성합니다.
  - 요청받은 포맷(`json`, `yaml`, `md`)을 확인합니다.

- [ ] **Step 2: JSON 또는 YAML 결과 생성 (`format: json | yaml`)**
  - 요청 포맷이 `json` 또는 `yaml`인 경우, OAS 3.1 규칙에 맞춰 유효한 형식의 코드 블록을 제공하거나 파일로 저장합니다.
  - 문서는 `openapi: 3.1.0`, `info`, `paths`, `components` 등의 필수 필드를 모두 포함해야 합니다.
  - 이 단계에서 작업을 완료하고 결과를 반환합니다.

- [ ] **Step 3: 마크다운 생성 및 변환 (`format: md`)**
  - 요청 포맷이 `md`인 경우, 먼저 임시로 OAS 3.1 스펙 파일(`.json` 또는 `.yaml`)을 작업 디렉터리에 작성합니다.
  - `npx` 커맨드를 활용하여 `widdershins`를 직접 실행하고 마크다운을 렌더링합니다.
  - 실행 예시: `npx --yes widdershins --search true --language_tabs 'shell:Shell' 'http:HTTP' 'javascript:JavaScript' 'javascript--nodejs:Node.JS' 'python:Python' 'java:Java' 'go:Go' --theme darkula temp-openapi.json -o output.md`
  - 최종적으로 생성된 `output.md` 파일의 내용을 사용자에게 제공하거나 파일 링크로 안내합니다.
