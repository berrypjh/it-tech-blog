import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    method: 'reading-order',
    inputPurpose: 'case-identify-input-purpose',
    targetSize: 'case-target-size',
    practice: 'choose-the-basis',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      method: '성공 기준을 읽는 다섯 단계',
      inputPurpose: '사례 1: 1.3.5 입력 목적 식별',
      targetSize: '사례 2: 2.5.8 목표 크기(최소)',
      practice: '관찰값으로 근거 고르기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      method: 'Five steps to read a success criterion',
      inputPurpose: 'Case 1: 1.3.5 Identify Input Purpose',
      targetSize: 'Case 2: 2.5.8 Target Size (Minimum)',
      practice: 'Choosing the basis from observed values',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
