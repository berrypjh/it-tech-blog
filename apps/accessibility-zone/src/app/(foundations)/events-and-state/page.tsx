import { getServerLocale } from '@it-tech-blog/preferences/server';

import { EventsAndStatePage } from '@/components/foundations/events-and-state/EventsAndStatePage';

const metadata = {
  ko: {
    title: '이벤트·기본 동작·버블링과 상태·속성·프로퍼티 이해하기 — A11y Lab',
    description:
      '이벤트의 대상과 전파, 기본 동작과 preventDefault, HTML 속성과 DOM 프로퍼티와 화면 상태의 관계를 실제 이벤트 기록과 값으로 확인하는 02장 여섯 번째 페이지.',
  },
  en: {
    title:
      'Understanding events, default actions, bubbling, state, attributes, and properties — A11y Lab',
    description:
      'Chapter 02, page 6: event targets and propagation, default actions and preventDefault, and how HTML attributes, DOM properties, and UI state relate, checked with real event logs and values.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <EventsAndStatePage locale={await getServerLocale()} />;

export default Page;
