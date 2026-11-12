import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    native: 'native-attributes',
    ariaDisabled: 'aria-disabled-meaning',
    ariaRequired: 'aria-required-meaning',
    practice: 'form-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      native: 'disabled · readonly · required가 바꾸는 다섯 가지',
      ariaDisabled: 'aria-disabled는 의미를 알릴 뿐 실행을 막지 않는다',
      ariaRequired: 'aria-required와 네이티브 필수 검증은 다르다',
      practice: '같은 폼에서 차이를 관찰하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      native: 'Five things disabled, readonly, and required change',
      ariaDisabled: 'aria-disabled conveys meaning; it does not block activation',
      ariaRequired: 'aria-required is not native required validation',
      practice: 'Observing the differences in one form',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
