import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    pause: 'pause-stop-hide',
    practice: 'safe-update-practice',
    flash: 'flash-and-motion-preference',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      pause: '움직임 · 자동 갱신을 멈추는 조건',
      practice: '직접 시작하고 멈추는 좌석 현황 갱신',
      flash: '점멸 기준과 모션 선호는 다른 문제다',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      pause: 'When movement and auto-updates must be stoppable',
      practice: 'A seat status update you start and stop',
      flash: 'The flash threshold and motion preference are different matters',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
