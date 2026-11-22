import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    types: 'media-types-and-criteria',
    clip: 'clip-sounds-and-visuals',
    roles: 'alternatives-do-not-replace',
    practice: 'classify-clip-information',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      types: '녹화 · 실시간과 미디어 종류마다 다른 기준',
      clip: '한 클립에서 자막에 담을 소리와 설명할 화면',
      roles: '네 가지 대안은 서로를 대신하지 않는다',
      practice: '클립의 정보를 자막 · 설명으로 나누기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      types: 'Different criteria for prerecorded, live, and each media type',
      clip: 'In one clip: sounds for captions and visuals to describe',
      roles: 'The four alternatives do not replace each other',
      practice: 'Sorting the clip’s information into captions and description',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
