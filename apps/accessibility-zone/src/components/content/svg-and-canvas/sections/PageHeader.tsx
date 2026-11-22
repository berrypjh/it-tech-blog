import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '09장 · 3 / 10',
    title: 'SVG · Canvas의 의미와 동등한 접근 경로 설계하기',
    lead: (
      <>
        도형을 그렸다고 이름이 생기지 않고, 픽셀을 칠했다고 키보드로 누를 수 있게 되지 않습니다. 이
        페이지는 SVG와 Canvas가 전하는 값과 기능을{' '}
        <strong className="text-text-default">같은 내용의 HTML 경로</strong>로 한 번씩만 제공합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'SVG · Canvas가 스스로 주지 않는 이름과 키보드 동작',
      'SVG 차트를 이름 있는 그림 하나로 만들기',
      'Canvas 기능을 HTML 버튼으로 제공하고 중복 노출 피하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 09 · 3 of 10',
    title: 'Designing the meaning of SVG and Canvas and an equivalent access path',
    lead: (
      <>
        Drawing a shape does not give it a name, and painting pixels does not make them pressable
        with a keyboard. This page provides the values and functions of SVG and Canvas once each,
        through <strong className="text-text-default">an HTML path with the same content</strong>.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'The names and keyboard behavior SVG and Canvas do not provide by themselves',
      'Turning an SVG chart into one named image',
      'Offering a Canvas function as HTML buttons without exposing it twice',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
