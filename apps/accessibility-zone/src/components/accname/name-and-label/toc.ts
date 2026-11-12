import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    pieces: 'five-pieces',
    notName: 'text-is-not-the-name',
    versions: 'spec-versions',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      pieces: '한 컨트롤의 라벨 · 이름 · 설명 · 값 · 역할',
      notName: '보이는 글자와 textContent는 계산된 이름이 아니다',
      versions: '이 장이 쓰는 규격 판본',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      pieces: 'Label, name, description, value, and role of one control',
      notName: 'Visible text and textContent are not the computed name',
      versions: 'Spec editions used in this chapter',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
