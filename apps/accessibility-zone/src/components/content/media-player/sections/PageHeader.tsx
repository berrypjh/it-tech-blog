import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '09장 · 7 / 10',
    title: '미디어 플레이어 · 자동 재생 · 배경음의 제어 검증하기',
    lead: (
      <>
        페이지를 열자마자 소리가 나면 화면 낭독기의 목소리가 묻힙니다. 이 페이지는 직접 만든 짧은
        클립을 <strong className="text-text-default">사용자가 시작하고 멈추는 플레이어</strong>로
        재생하고, 자막 · 대본 · 오류 경로를 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '자동 재생과 배경음에 적용되는 1.4.2의 조건',
      '브라우저 미디어 컨트롤과 키보드로 재생 · 음소거 · 자막 다루기',
      '영상 · 자막을 못 불러올 때 대본으로 이어지는 경로',
    ],
  },
  en: {
    eyebrow: 'Chapter 09 · 7 of 10',
    title: 'Verifying control of media players, autoplay, and background audio',
    lead: (
      <>
        Sound that starts as soon as a page opens drowns out the screen reader’s voice. This page
        plays a short clip made in-house in{' '}
        <strong className="text-text-default">a player users start and stop</strong>, and checks
        captions, the transcript, and the error paths.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'The conditions of 1.4.2 for autoplay and background audio',
      'Play, mute, and captions with browser media controls and the keyboard',
      'The path to the transcript when video or captions fail to load',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
