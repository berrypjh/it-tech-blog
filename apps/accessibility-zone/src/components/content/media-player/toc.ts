import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    start: 'user-start-and-audio',
    practice: 'player-practice',
    transcript: 'clip-transcript',
    assets: 'asset-record',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      start: '재생은 사용자가 시작하고, 소리는 멈출 수 있게',
      practice: '실제 클립으로 재생 · 음소거 · 자막 · 오류 확인하기',
      transcript: '설명을 담은 대본',
      assets: '자산 기록: 출처 · 언어 · 크기 · 사용권',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      start: 'Users start playback, and sound can be stopped',
      practice: 'Checking play, mute, captions, and errors with a real clip',
      transcript: 'Descriptive transcript',
      assets: 'Asset record: source, language, size, license',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
