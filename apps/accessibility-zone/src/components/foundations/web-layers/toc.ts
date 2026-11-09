import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    layers: 'four-layers',
    sourceVsDom: 'source-vs-dom',
    oneTask: 'one-task',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      layers: '네 층이 맡는 일',
      sourceVsDom: 'HTML 소스와 DOM은 같지 않다',
      oneTask: '한 과업, 층마다 다른 결함',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      layers: 'What each of the four layers does',
      sourceVsDom: 'HTML source and the DOM are not the same',
      oneTask: 'One task, a different defect in each layer',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
