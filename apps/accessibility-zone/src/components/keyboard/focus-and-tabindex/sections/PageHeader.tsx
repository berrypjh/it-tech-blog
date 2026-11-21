import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '07장 · 1 / 7',
    title: '순차 포커스 · 프로그램 포커스와 tabindex의 동작',
    lead: (
      <>
        키보드 사용자의 위치는 포커스 하나로 정해집니다. 이 페이지는{' '}
        <strong className="text-text-default">
          사용자가 옮기는 포커스와 스크립트가 옮기는 포커스
        </strong>
        를 나누고, tabindex 값이 그중 무엇을 바꾸는지 실제 포커스로 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'Tab · Shift+Tab과 focus()가 각각 해결하는 과업',
      '기본 HTML과 tabindex 0 · -1 · 양수의 차이',
      '포커스 가능 여부를 숨김 · inert · 비활성 · 환경과 함께 확인하는 방법',
    ],
  },
  en: {
    eyebrow: 'Chapter 07 · 1 of 7',
    title: 'Sequential focus, programmatic focus, and how tabindex behaves',
    lead: (
      <>
        A keyboard user&apos;s position comes down to one thing: focus. This page separates{' '}
        <strong className="text-text-default">
          focus the user moves from focus a script moves
        </strong>
        , and checks with real focus which of them each tabindex value changes.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'The tasks Tab, Shift+Tab, and focus() each solve',
      'How default HTML differs from tabindex 0, -1, and positive values',
      'Checking focusability together with hiding, inert, disabled, and the environment',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
