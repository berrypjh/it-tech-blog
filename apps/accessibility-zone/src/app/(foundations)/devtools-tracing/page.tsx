import { getServerLocale } from '@it-tech-blog/preferences/server';

import { DevtoolsTracingPage } from '@/components/foundations/devtools-tracing/DevtoolsTracingPage';

const metadata = {
  ko: {
    title: '개발자 도구로 동작을 추적하고 기본 HTML 기능 보존하기 — A11y Lab',
    description:
      '개발자 도구로 요소·속성·포커스·이벤트를 관찰하고, 준비된 결함을 최소 재현→원인 가설→수정→키보드 재검증 순서로 고치는 02장 마지막 페이지.',
  },
  en: {
    title: 'Tracing behavior with developer tools and preserving built-in HTML features — A11y Lab',
    description:
      'The last page of chapter 02: observing elements, attributes, focus, and events with developer tools, and fixing prepared defects through minimal reproduction, hypothesis, fix, and keyboard re-check.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <DevtoolsTracingPage locale={await getServerLocale()} />;

export default Page;
