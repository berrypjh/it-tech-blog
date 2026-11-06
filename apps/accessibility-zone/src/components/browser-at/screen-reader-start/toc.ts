import { tocOf } from '@/components/shared/DocPage';

export const getToc = tocOf(
  {
    choose: 'choose-a-path',
    sample: 'practice-sample',
    nvda: 'path-nvda',
    voiceover: 'path-voiceover',
    expected: 'expected-meaning',
    noAt: 'without-at',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      choose: '경로 고르기',
      sample: '실습 예제',
      nvda: 'Windows · NVDA로 하기',
      voiceover: 'macOS · VoiceOver로 하기',
      expected: '기대하는 뜻과 기록',
      noAt: '보조기술이 없을 때',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      choose: 'Choosing a path',
      sample: 'Practice sample',
      nvda: 'With Windows and NVDA',
      voiceover: 'With macOS and VoiceOver',
      expected: 'Expected meaning and recording',
      noAt: 'Without assistive technology',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
