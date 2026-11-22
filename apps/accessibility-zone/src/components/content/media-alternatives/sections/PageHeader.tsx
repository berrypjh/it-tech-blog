import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '09장 · 6 / 10',
    title: '자막 · 대본 · 오디오 설명 · 수화의 역할과 적용 조건 구분하기',
    lead: (
      <>
        자막이 있으면 다 된 것처럼 보이지만, 자막은 화면만 보여 주는 정보를 전하지 못합니다. 이
        페이지는 미디어의 종류마다 적용되는 기준을 비교하고, 한 클립에서{' '}
        <strong className="text-text-default">자막에 담을 소리와 설명할 화면</strong>을 나눕니다.
      </>
    ),
    readingTime: '읽는 시간 약 14분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '녹화 · 실시간 × 오디오만 · 영상만 · 동기화별 WCAG 1.2 기준과 예외',
      '한 클립에서 자막과 오디오 설명이 맡는 정보',
      '자막 · 대본 · 오디오 설명 · 수화가 서로를 대신하지 못하는 이유',
    ],
  },
  en: {
    eyebrow: 'Chapter 09 · 6 of 10',
    title:
      'Distinguishing the roles and conditions of captions, transcripts, audio description, and sign language',
    lead: (
      <>
        Captions can look like the whole answer, but they do not carry information shown only on
        screen. This page compares the criteria for each kind of media and, in one clip, separates{' '}
        <strong className="text-text-default">sounds for captions from visuals to describe</strong>.
      </>
    ),
    readingTime: 'About 14 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'WCAG 1.2 criteria and exceptions by prerecorded or live, and audio-only, video-only, or synchronized',
      'Which information captions and audio description carry in one clip',
      'Why captions, transcripts, audio description, and sign language do not replace each other',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
