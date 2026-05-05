module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 여기에 커스텀 규칙을 정의할 수 있습니다.
  rules: {
    // Type(태그)의 종류를 제한합니다. (레벨: 2=에러)
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']],
    // Subject(제목)의 대소문자 규칙을 정합니다. (여기서는 대문자 시작 금지 = 소문자 강제)
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // Subject가 비어있으면 안 됩니다.
    'subject-empty': [2, 'never'],
    // Type이 비어있으면 안 됩니다.
    'type-empty': [2, 'never'],
    // 헤더의 최대 길이를 100자로 제한합니다.
    'header-max-length': [2, 'always', 100],
  },
};
