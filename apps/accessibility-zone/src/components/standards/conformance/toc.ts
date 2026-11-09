import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    claims: 'component-vs-conformance',
    requirements: 'five-requirements',
    process: 'booking-process',
    alternate: 'conforming-alternate-version',
    exclusion: 'excluding-is-not-conforming',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      claims: '컴포넌트 · 표본 검사와 적합성 주장은 다르다',
      requirements: '적합성 요구 다섯 가지',
      process: '목록 → 예약 → 확인 과정으로 판단하기',
      alternate: '적합 대체 버전의 조건',
      exclusion: '범위에서 빼는 것은 적합하게 만드는 것이 아니다',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      claims: 'Component and sample tests differ from conformance claims',
      requirements: 'The five conformance requirements',
      process: 'Judging a list → booking → confirmation process',
      alternate: 'Conditions for a conforming alternate version',
      exclusion: 'Excluding something does not make it conform',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
