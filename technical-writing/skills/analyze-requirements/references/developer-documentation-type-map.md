# 주요 기업 개발자 문서 유형 맵 (Developer Documentation Type Map)

이 레퍼런스는 Google, AWS, Meta, Microsoft와 같은 주요 기업의 개발자 사이트에서 제공하는 문서 유형을 정리한 맵입니다. `required-docs.md`를 작성할 때, 해당 프로젝트의 제품 유형과 대상 독자에 맞는 문서 세트를 도출하기 위한 참고 자료로 활용합니다.

---

## 공통 문서 유형 (Cross-Industry Standard Document Types)

아래 표는 대부분의 대형 기업 개발자 사이트에서 공통적으로 발견되는 문서 유형입니다.

| 문서 유형 | 주요 독자 | 핵심 콘텐츠 | 참고 출처 |
|---|---|---|---|
| **Overview (개요)** | 의사결정자, 신규 사용자 | 제품/서비스 소개, 핵심 기능, 유스케이스, 아키텍처 다이어그램, 대안 비교 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [Meta](https://developers.facebook.com/docs/), [MS Learn](https://learn.microsoft.com/) |
| **Quickstart (빠른 시작)** | 신규 개발자 | 사전 준비, 최소 설정, 첫 번째 API 호출 또는 배포 (10~15분 내 완료), 리소스 정리 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [Meta](https://developers.facebook.com/docs/), [MS Learn](https://learn.microsoft.com/) |
| **Tutorial (튜토리얼)** | 중급 개발자 | 완전한 프로젝트 빌드, 다단계 가이드, 실제 시나리오 기반, 체크포인트 포함 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [Meta](https://developers.facebook.com/docs/), [MS Learn](https://learn.microsoft.com/) |
| **How-to Guide (사용법 가이드)** | 숙련된 개발자 | 특정 작업 중심의 단계별 절차, 사전 조건, 복수 접근법 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [MS Learn](https://learn.microsoft.com/) |
| **Concept (개념 문서)** | 전체 개발자 | 아키텍처 설명, 핵심 용어, 구성 요소 관계, 다이어그램, 설계 원칙 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [MS Learn](https://learn.microsoft.com/) |
| **API Reference (API 레퍼런스)** | 통합 개발자 | REST 엔드포인트, 메서드/파라미터, 요청/응답 스키마, 에러 코드, 코드 샘플 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [Meta](https://developers.facebook.com/docs/), [MS Learn](https://learn.microsoft.com/) |
| **SDK/Client Library Reference** | SDK 사용 개발자 | 클래스/메서드 문서, 설치 방법, 인증 설정, 언어별 레퍼런스 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [Meta](https://developers.facebook.com/docs/), [MS Learn](https://learn.microsoft.com/) |
| **CLI Reference (CLI 레퍼런스)** | DevOps, 자동화 엔지니어 | 커맨드 구문, 플래그, 사용 예시, 출력 형식 | [gcloud](https://cloud.google.com/sdk/gcloud), [AWS CLI](https://aws.amazon.com/cli/), [Azure CLI](https://learn.microsoft.com/cli/azure/) |
| **Release Notes (릴리스 노트)** | 기존 사용자 | 날짜순 변경사항, 신규 기능, 중대 변경, 폐기 예정, 버그 수정 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [Meta](https://developers.facebook.com/docs/), [MS Learn](https://learn.microsoft.com/) |
| **Migration Guide (마이그레이션 가이드)** | 플랫폼 전환 팀 | 평가, 계획, 실행 단계, 검증, 롤백 절차, 호환성 정보 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [Meta](https://developers.facebook.com/docs/), [MS Learn](https://learn.microsoft.com/) |
| **Best Practices (모범 사례)** | 시니어 개발자, 아키텍트 | 보안, 성능, 비용, 확장성 권장사항 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [MS Learn](https://learn.microsoft.com/) |
| **Troubleshooting (문제 해결)** | 지원 엔지니어, 운영자 | 증상 기반 구성, 진단 단계, 해결 방법, 알려진 이슈 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [MS Learn](https://learn.microsoft.com/) |
| **Sample Code (샘플 코드)** | 개발자 | GitHub 호스팅 프로젝트, 실행 가능한 예제, README 포함 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [Meta](https://developers.facebook.com/docs/), [MS Learn](https://learn.microsoft.com/) |
| **FAQ (자주 묻는 질문)** | 전체 사용자 | 주제별 공통 질문과 답변, 기능·가격·한도 관련 | [AWS](https://docs.aws.amazon.com/), [Meta](https://developers.facebook.com/docs/), [MS Learn](https://learn.microsoft.com/) |
| **Pricing (가격 안내)** | 의사결정자, 재무 담당 | 가격 모델, 무료 등급, 계산기 링크, 비용 최적화 | [Google Cloud](https://cloud.google.com/docs), [AWS](https://docs.aws.amazon.com/), [MS Learn](https://learn.microsoft.com/) |

---

## 제품 유형별 문서 세트 매핑 (Product-to-Documentation Map)

어떤 종류의 제품에 어떤 문서가 주로 필요한지를 보여주는 매핑 표입니다.

### 클라우드 인프라 서비스 (IaaS/PaaS)
> 예: Google Cloud, AWS, Azure

| 문서 유형 | 필수 여부 | 비고 |
|---|---|---|
| Overview | ✅ 필수 | 서비스 소개 및 유스케이스 |
| Quickstart | ✅ 필수 | 콘솔/CLI/SDK 각각 제공 |
| Concept | ✅ 필수 | 아키텍처, 네트워킹, 보안 개념 |
| How-to Guide | ✅ 필수 | 리소스 생성·관리·삭제 절차 |
| API Reference | ✅ 필수 | REST API, SDK 레퍼런스 |
| CLI Reference | ✅ 필수 | gcloud, aws, az 커맨드 |
| Best Practices | ✅ 필수 | 보안, 성능, 비용 최적화 |
| Architecture Guide | ⭐ 권장 | 참조 아키텍처, 설계 패턴 |
| Troubleshooting | ✅ 필수 | 일반적 오류와 진단 절차 |
| Migration Guide | ⭐ 권장 | 타 플랫폼 마이그레이션 |
| Pricing | ✅ 필수 | 가격 모델, 무료 등급 |
| Release Notes | ✅ 필수 | 기능 변경, 폐기 예정 |
| Service Quotas | ⭐ 권장 | 서비스 한도와 증가 방법 |
| Security Guide | ✅ 필수 | IAM, 암호화, 규정 준수 |
| Tutorial | ⭐ 권장 | 멀티 서비스 통합 시나리오 |

### 개발자 프레임워크 / SDK
> 예: React, React Native, .NET, Android SDK, Flutter

| 문서 유형 | 필수 여부 | 비고 |
|---|---|---|
| Get Started / Installation | ✅ 필수 | 환경 설정, 첫 프로젝트 |
| Tutorial | ✅ 필수 | "생각하며 배우기" 방식의 학습 가이드 |
| Concept/Fundamentals | ✅ 필수 | 핵심 원리(상태 관리, 라이프사이클 등) |
| API Reference | ✅ 필수 | 컴포넌트/클래스/함수 문서 |
| Guides (심화) | ✅ 필수 | 주제별(UI, 데이터, 네트워크) 가이드 |
| Sample Code | ✅ 필수 | 실행 가능한 예제 프로젝트 |
| Migration / Upgrade Guide | ✅ 필수 | 버전 업그레이드 절차 |
| What's New | ✅ 필수 | 버전별 신규 기능, 중대 변경 |
| Design Guidelines | ⭐ 권장 | UI/UX 패턴, 접근성 (모바일/웹 프레임워크) |
| Best Practices | ⭐ 권장 | 성능, 메모리, 보안 |
| Community / Contributing | ⭐ 권장 | 오픈소스 기여 가이드 |

### REST API / 플랫폼 API
> 예: Google Maps API, Graph API (Meta/MS), WhatsApp API

| 문서 유형 | 필수 여부 | 비고 |
|---|---|---|
| Overview | ✅ 필수 | API 기능, 사용 가능 리소스 |
| Get Started | ✅ 필수 | 앱 등록, 인증 설정, 첫 API 호출 |
| API Reference | ✅ 필수 | 엔드포인트, HTTP 메서드, 요청/응답 스키마, 에러 코드 |
| Authentication Guide | ✅ 필수 | OAuth, API 키, 토큰 관리 |
| SDK Reference | ✅ 필수 | 플랫폼별(iOS/Android/Web) SDK 문서 |
| Webhooks Reference | ⭐ 권장 | 이벤트 유형, 페이로드, 검증 |
| Rate Limits / Quotas | ✅ 필수 | 요청 제한, 쿼터 관리 |
| Permissions Reference | ✅ 필수 | 필요 권한 목록, 최소 권한 원칙 |
| Changelog / Versioning | ✅ 필수 | API 버전 수명주기, 폐기 일정 |
| Error Handling Guide | ⭐ 권장 | 일반적 오류, 해결 방법 |
| Pricing | ⭐ 권장 | 호출 기반 가격, 무료 등급 |
| Policies & Terms | ⭐ 권장 | 사용 정책, 앱 리뷰 가이드라인 (플랫폼 API) |
| FAQ | ⭐ 권장 | 일반적 질문과 답변 |

### AI/ML 모델 및 서비스
> 예: Gemini API, Bedrock, Llama, Vertex AI, SageMaker

| 문서 유형 | 필수 여부 | 비고 |
|---|---|---|
| Overview | ✅ 필수 | 모델 기능, 지원 모달리티 |
| Quickstart | ✅ 필수 | API 키/모델 설정, 첫 추론 |
| Model Cards | ✅ 필수 | 성능 벤치마크, 한계, 안전성 평가 |
| Prompting Guide | ✅ 필수 | 프롬프트 전략, 멀티모달 입력, 함수 호출 |
| API Reference | ✅ 필수 | 엔드포인트, 모델 파라미터, 스트리밍 |
| Cookbook / Recipes | ⭐ 권장 | Jupyter 노트북 기반 실용 예제 |
| Fine-tuning Guide | ⭐ 권장 | 모델 커스터마이징 절차 |
| Responsible AI / Safety | ✅ 필수 | 안전 모범 사례, 콘텐츠 필터링, 허용 정책 |
| Pricing | ✅ 필수 | 토큰 가격, 요청 한도, 쿼터 |
| Best Practices | ⭐ 권장 | 비용 최적화, 레이턴시 개선 |

### SaaS / 비즈니스 플랫폼
> 예: Microsoft 365, Power Platform, Firebase

| 문서 유형 | 필수 여부 | 비고 |
|---|---|---|
| Overview | ✅ 필수 | 제품 기능, 라이선싱, 거버넌스 |
| Get Started | ✅ 필수 | 계정 설정, 첫 번째 사용 |
| Tutorial | ✅ 필수 | 앱 또는 워크플로 빌드 |
| How-to Guide | ✅ 필수 | 기능별 설정 절차 |
| Admin Guide | ✅ 필수 | 환경 관리, DLP 정책, 사용자 관리 |
| API / SDK Reference | ⭐ 권장 | 확장 개발용 API |
| Pricing / Licensing | ✅ 필수 | 플랜별 기능, 가격 |
| Release Notes | ✅ 필수 | 업데이트 공지 |
| Security & Compliance | ✅ 필수 | 인증, 데이터 보호, 규정 준수 |
| Training / Learning Path | ⭐ 권장 | 큐레이트된 학습 경로 |

### 광고 플랫폼 API (Ad Platform APIs)
> 예: Google Ads API, Meta Marketing API, MS Advertising API, Amazon Ads API

| 문서 유형 | 필수 여부 | 비고 |
|---|---|---|
| Getting Started | ✅ 필수 | 개발자 토큰 신청, 인증, 첫 호출 |
| API Reference | ✅ 필수 | 리소스 엔드포인트, 필드/Enum 레퍼런스 |
| Authentication Guide | ✅ 필수 | OAuth 2.0 흐름, 시스템 사용자 토큰 등 |
| Campaign Management | ✅ 필수 | 캠페인, 광고세트, 광고 CRUD 작업 가이드 |
| Reporting / Insights | ✅ 필수 | 성과 지표 조회, 비동기 보고서 작성 |
| Targeting Guide | ✅ 필수 | 오디언스, 행동, 관심사 설정 |
| Sandbox / Test Guide | ✅ 필수 | 테스트 환경 설정, 프로덕션 간 차이점 |
| Best Practices | ✅ 필수 | 속도 제한(Rate limits), 최적화, 에러 핸들링 |
| Conversion Tracking | ⭐ 권장 | 서버사이드 이벤트(CAPI) 전송 및 어트리뷰션 |
| Creative / Asset Guide | ⭐ 권장 | 비디오, 이미지 등 광고 소재 업로드 규격 명세 |
| Ad Policy Guide | ✅ 필수 | 광고 정책, 크리에이티브 심사 기준 |
| Bulk Operations | ⭐ 권장 | CSV 대량 변경, 일괄 작업 가이드 |
| Release Notes | ✅ 필수 | 버전 변경 이력 및 Deprecation 일정 |

---

## 문서 유형별 상세 콘텐츠 가이드 (Detailed Content Guide by Document Type)

각 문서 유형에 포함되어야 하는 주요 콘텐츠 섹션을 정리합니다.

### Overview (개요)
| 섹션 | 설명 |
|---|---|
| 제품/서비스 소개 | 한 문장 요약 + 상세 설명 |
| 핵심 기능 (Key Features) | 주요 차별화 기능 목록 |
| 유스케이스 (Use Cases) | 구체적인 활용 시나리오 |
| 아키텍처 다이어그램 | 시스템 구성 요소 시각화 |
| 다른 제품과의 비교/관계 | 언제 이 제품을 사용해야 하는지 |
| 다음 단계 (Next Steps) | Quickstart 또는 관련 문서 링크 |

### Quickstart (빠른 시작)
| 섹션 | 설명 |
|---|---|
| 소요 시간 표시 | 예: "이 가이드는 약 10분이 소요됩니다" |
| 사전 준비 (Prerequisites) | 필요한 계정, 도구, SDK 버전 |
| 단계별 설정 (Step-by-step) | 최소한의 코드로 첫 결과 확인 |
| 결과 확인 | 예상 출력 또는 스크린샷 |
| 리소스 정리 (Clean up) | 비용 발생 방지를 위한 리소스 삭제 절차 |
| 다음 단계 (Next Steps) | 심화 튜토리얼, 관련 가이드 링크 |

### Tutorial (튜토리얼)
| 섹션 | 설명 |
|---|---|
| 학습 목표 (Learning Objectives) | 완료 후 독자가 할 수 있는 것 |
| 사전 준비 (Prerequisites) | 필요한 사전 지식 및 환경 |
| 단계별 구현 | 점진적으로 기능을 추가하며 완성 |
| 중간 체크포인트 | 각 단계에서 예상 결과 확인 |
| 최종 결과물 | 완성된 프로젝트/앱의 동작 확인 |
| 다음 단계 (Next Steps) | 심화 주제, 관련 튜토리얼 |

### API Reference (API 레퍼런스)
| 섹션 | 설명 |
|---|---|
| 엔드포인트 URL | HTTP 메서드 + 경로 |
| 파라미터 (Path/Query/Body) | 이름, 타입, 필수 여부, 설명 |
| 요청 예시 (Request Example) | curl 또는 SDK 코드 샘플 |
| 응답 스키마 (Response Schema) | 필드 설명, 타입, 중첩 구조 |
| 에러 코드 (Error Codes) | HTTP 상태 코드, 에러 메시지, 해결 방법 |
| 인증 (Authentication) | 필요한 인증 방식, 권한 |
| 속도 제한 (Rate Limits) | 분당/일당 요청 한도 |
| 코드 샘플 (다중 언어) | Python, Java, Node.js, Go 등 |

### How-to Guide (사용법 가이드)
| 섹션 | 설명 |
|---|---|
| 목표 (Goal) | 이 가이드를 통해 달성할 내용 |
| 사전 조건 (Prerequisites) | 필요한 권한, 리소스, 도구 |
| 절차 (Step-by-step) | 번호가 매겨진 순차적 단계 |
| 복수 접근법 | 콘솔/CLI/SDK/IaC 등 다양한 방법 제시 (클라우드) |
| 검증 (Verification) | 작업 완료 확인 방법 |
| 관련 가이드 | 연관된 작업 가이드 링크 |

### Concept (개념 문서)
| 섹션 | 설명 |
|---|---|
| 정의 (Definition) | 핵심 개념의 명확한 정의 |
| 작동 원리 (How it Works) | 내부 메커니즘, 프로세스 흐름 |
| 아키텍처 다이어그램 | 구성 요소 간 관계 시각화 |
| 핵심 용어 (Key Terms) | 관련 용어 정의 |
| 제약 사항 및 고려 사항 | 한계, 트레이드오프 |
| 관련 문서 | 실습 가이드, API 레퍼런스 링크 |

---

## 독자 유형별 관련 문서 매핑 (Audience-to-Documentation Map)

| 독자 유형 | 우선 필요 문서 | 보조 문서 |
|---|---|---|
| **신규 개발자** | Quickstart, Get Started, Tutorial | Overview, Concept |
| **숙련된 개발자** | API Reference, How-to Guide, SDK Reference | Best Practices, Sample Code |
| **아키텍트/테크 리드** | Architecture Guide, Concept, Best Practices | Overview, Migration Guide, Well-Architected Framework |
| **DevOps/SRE** | CLI Reference, How-to Guide, Troubleshooting | Service Quotas, Security Guide, Release Notes |
| **의사결정자 (PM/CTO)** | Overview, Pricing, FAQ | Architecture Guide, Comparison |
| **보안 엔지니어** | Security Guide, Permissions Reference, IAM | Best Practices, Compliance |
| **기술 지원/운영자** | Troubleshooting, FAQ, Release Notes | How-to Guide, Service Quotas |
| **학습자/입문자** | Tutorial, Training Module/Learning Path, Codelabs | Get Started, Concept |
| **오픈소스 기여자** | Contributing Guide, Architecture/Design Guide | API Reference, Development Setup |
| **IT 관리자** | Admin Guide, Security & Compliance | Pricing/Licensing, Release Notes |

---

## Agent 활용 지침

1. **제품 유형 먼저 분류**: 사용자의 제품이 어떤 카테고리(클라우드 인프라, 프레임워크, REST API, AI/ML, SaaS, 광고 플랫폼 API)에 속하는지 파악한 뒤, '제품 유형별 문서 세트 매핑' 표를 참고하여 필수/권장 문서 세트를 도출하세요.
2. **독자 기반 필터링**: '독자 유형별 관련 문서 매핑'을 활용하여, 해당 프로젝트의 대상 독자에게 실제로 필요한 문서만 선별하세요.
3. **콘텐츠 깊이 결정**: '문서 유형별 상세 콘텐츠 가이드'를 참고하여, 각 문서에 어떤 섹션을 포함해야 하는지 사용자에게 제안하세요.
4. **과도한 문서 지양**: 소규모 프로젝트에 대기업 수준의 전체 문서 세트를 제안하지 마세요. 프로젝트 규모와 팀 역량에 맞게 우선순위를 정하세요.
