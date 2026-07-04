# 작성 및 리뷰 스킬 차단 (Requirements 미비)

만약 현재 에이전트가 실행하려는 스킬의 Frontmatter에 `type: write` 또는 `type: review`가 설정되어 있다면, 에이전트는 작업을 수행하기 전 반드시 다음 사항을 확인해야 합니다:
- `.docs/requirements/` 디렉터리의 필수 요구사항 파일들(`readers.md`, `target-product.md`, `required-docs.md`)이 존재하는지
- 해당 파일들의 내용이 충분히 구체적이며 사용자의 최종 확정을 거친 상태인지

**위 조건이 충족되지 않은 불완전한 상태라면, 에이전트는 해당 스킬(write/review)의 작업을 즉시 중단(Refuse)해야 합니다.**
중단 후 사용자에게 "`requirements-analysis` 스킬을 통해 요구사항을 먼저 채우고 확정해 주세요."라고 안내하세요.
