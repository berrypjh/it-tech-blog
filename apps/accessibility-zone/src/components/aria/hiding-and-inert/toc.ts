import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    axes: 'three-axes',
    focusable: 'aria-hidden-and-focus',
    practice: 'hiding-practice',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      axes: '화면 표시 · 포커스와 조작 · 접근성 노출, 세 축으로 비교하기',
      focusable: 'aria-hidden 아래에 포커스 가능한 요소를 두는 오류',
      practice: '다섯 방법을 직접 바꿔 관찰하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      axes: 'Comparing on three axes: display, focus and interaction, exposure',
      focusable: 'The error of focusable content under aria-hidden',
      practice: 'Switching the five methods and observing',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
