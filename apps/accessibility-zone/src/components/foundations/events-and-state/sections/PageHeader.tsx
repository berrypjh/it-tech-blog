import type { Locale } from '@it-tech-blog/preferences';

import { DocPageHeader, type HeaderContent } from '@/components/shared/DocPage';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '02장 · 6 / 7',
    title: '이벤트·기본 동작·버블링과 상태·속성·프로퍼티 이해하기',
    lead: (
      <>
        버튼을 누르면 이벤트가 생기고, 그 이벤트는 여러 요소를 거쳐 전달되며, 브라우저는 기본 동작을
        실행합니다. 이 페이지는 그 경로를 실제 기록으로 따라가고, 바뀐 상태가{' '}
        <strong className="text-text-default">
          어디에 남아야 화면과 보조기술이 같은 상태를 보는지
        </strong>
        를 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 15분',
    practices: '브라우저 실습 2개',
    learnItems: [
      'target · currentTarget과 캡처 · 버블링으로 이벤트 경로 읽기',
      '기본 동작을 막아도 되는 경우와 막으면 안 되는 경우 구분하기',
      '이벤트 값 하나로 입력 장치를 단정하면 안 되는 이유 알기',
      'HTML 속성 · DOM 프로퍼티 · 화면 상태 일치시키기',
    ],
  },
  en: {
    eyebrow: 'Chapter 02 · 6 of 7',
    title: 'Understanding events, default actions, bubbling, state, attributes, and properties',
    lead: (
      <>
        Pressing a button creates an event, the event travels through several elements, and the
        browser runs a default action. This page follows that path with a real log and checks{' '}
        <strong className="text-text-default">
          where changed state has to live so the screen and assistive technology see the same state
        </strong>
        .
      </>
    ),
    readingTime: 'About 15 min read',
    practices: '2 in-browser exercises',
    learnItems: [
      'Reading the event path with target, currentTarget, capturing, and bubbling',
      'Default actions and preventDefault — when blocking is fine and when it is not',
      'Why a single event value cannot tell you the input device',
      'Keeping HTML attributes, DOM properties, and UI state in agreement',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
