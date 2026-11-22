import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    semantics: 'no-automatic-semantics',
    svg: 'svg-as-image',
    practice: 'canvas-equivalent-path',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      semantics: '도형과 픽셀은 스스로 이름을 갖지 않는다',
      svg: 'SVG 차트를 그림 하나로 읽히게 하기',
      practice: 'Canvas 좌석 선택에 HTML 경로 더하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      semantics: 'Shapes and pixels do not name themselves',
      svg: 'Making an SVG chart read as one image',
      practice: 'Adding an HTML path to a Canvas seat picker',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
