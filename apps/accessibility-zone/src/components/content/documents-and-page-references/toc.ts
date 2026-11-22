import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    download: 'download-information',
    html: 'html-version',
    pages: 'fixed-page-references',
    task: 'final-task',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      download: '내려받기 링크의 정보를 실제 파일과 맞추기',
      html: '같은 안내를 HTML로 읽고 대조하기',
      pages: '고정된 참조 위치와 번호 혼동 피하기',
      task: '최종 과업: 마지막 회차와 변경된 입구 찾기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      download: 'Matching download link information to the real file',
      html: 'Reading the same notice in HTML and comparing',
      pages: 'Fixed reference points without mixing up numbers',
      task: 'Final task: finding the last session and the changed entrance',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
