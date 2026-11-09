import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { NextPage } from '@/components/shared/PageLink';

import { DefaultsSection } from './sections/DefaultsSection';
import { FlowSection } from './sections/FlowSection';
import { PageHeader } from './sections/PageHeader';
import { StateSection } from './sections/StateSection';
import { getToc } from './toc';

const points = {
  ko: [
    'target은 이벤트가 생긴 요소, currentTarget은 지금 리스너가 붙은 요소입니다. 이벤트는 캡처로 내려갔다가 버블링으로 올라옵니다.',
    'preventDefault는 기본 동작이 하던 일을 직접 대신할 수 있을 때만 씁니다. 링크 이동 · 체크 · 키 입력을 막으면 기능이 사라집니다.',
    'click은 마우스 · 키보드 · 보조기술 · 음성 입력 모두에서 생깁니다. 이벤트 값 하나로 장치를 추측해 동작을 나누지 않습니다.',
    'value · checked 속성은 처음 값, 프로퍼티는 지금 값입니다. ARIA 상태는 브라우저가 바꿔 주지 않으므로 상태를 바꿀 때 함께 바꿉니다.',
  ],
  en: [
    'target is where the event started; currentTarget is where the running listener is attached. Events go down by capturing and back up by bubbling.',
    'Use preventDefault only when you can replace what the default action did. Blocking navigation, checking, or typing removes features.',
    'click comes from the mouse, keyboard, assistive technology, and voice input. Do not guess the device from one event value and split behavior.',
    'The value and checked attributes are initial values; the properties are current values. The browser does not update ARIA states, so change them along with the state.',
  ],
};

const references: DocReference[] = [
  {
    href: 'https://dom.spec.whatwg.org/#dispatching-events',
    source: same('WHATWG'),
    title: same('DOM Standard — Dispatching events'),
    note: {
      ko: '캡처 · 대상 · 버블링 단계의 정의 (규범)',
      en: 'Capturing, target, and bubbling phases (normative)',
    },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault',
    source: same('MDN'),
    title: same('Event: preventDefault() method'),
    note: { ko: '기본 동작 취소', en: 'Cancelling default actions' },
  },
  {
    href: 'https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes',
    source: same('WHATWG'),
    title: same('HTML Standard — Reflecting content attributes in IDL attributes'),
    note: {
      ko: '속성과 프로퍼티가 함께 바뀌는 규칙',
      en: 'Rules for attributes and properties that reflect',
    },
  },
  {
    href: 'https://react.dev/reference/react-dom/components/common#react-event-object',
    source: same('React'),
    title: same('React event object'),
    note: {
      ko: 'React 이벤트와 DOM 이벤트의 관계',
      en: 'How React events relate to DOM events',
    },
  },
];

export const EventsAndStatePage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <FlowSection locale={locale} />
      <DefaultsSection locale={locale} />
      <StateSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="devtools-tracing" />
    </DocLayout>
  );
};
