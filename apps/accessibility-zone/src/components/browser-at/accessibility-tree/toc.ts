import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    compare: 'compare-dom-and-tree',
    hiding: 'hiding-and-style',
    notOneToOne: 'not-one-to-one',
    hiddenName: 'hidden-and-name',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      compare: '같은 UI를 DOM과 접근성 트리에서 비교하기',
      hiding: '네이티브 의미 · 숨김 · 스타일이 노출을 바꾸는 사례',
      notOneToOne: 'DOM 노드와 접근성 노드는 일대일이 아니다',
      hiddenName: '트리에 없는 것과 이름에 쓰이는 것은 다른 질문이다',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      compare: 'Comparing one UI in the DOM and the accessibility tree',
      hiding: 'How native meaning, hiding, and style change what is exposed',
      notOneToOne: 'DOM nodes and accessibility nodes are not one-to-one',
      hiddenName: 'Not in the tree and used in a name are different questions',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
