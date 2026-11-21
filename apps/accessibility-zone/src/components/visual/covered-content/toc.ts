import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    fixes: 'covering-fixes',
    practice: 'covered-form-practice',
    keyboard: 'virtual-keyboard-check',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      fixes: '가림의 원인과 수정안 비교',
      practice: '같은 폼에서 가림 확인하기',
      keyboard: '가상 키보드는 실제 기기에서 확인하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      fixes: 'Causes of covering and possible fixes',
      practice: 'Checking covering in one form',
      keyboard: 'Checking virtual keyboards on real devices',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
