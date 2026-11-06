import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AccessibilityApisPage } from '@/components/browser-at/accessibility-apis/AccessibilityApisPage';

const metadata = {
  ko: {
    title: 'HTML-AAM · Core-AAM과 운영체제 접근성 API의 역할 — A11y Lab',
    description:
      'HTML 의미가 브라우저 정보와 운영체제 접근성 API를 거쳐 보조기술에 닿는 흐름을 도식과 체크박스 추적 사례로 보고, HTML-AAM과 Core-AAM의 대상 · 독자 · 발행 상태를 구분하는 03장 세 번째 페이지.',
  },
  en: {
    title: 'The roles of HTML-AAM, Core-AAM, and operating system accessibility APIs — A11y Lab',
    description:
      'Chapter 03, page 3: the flow from HTML meaning through browser information and OS accessibility APIs to assistive technology, shown with a diagram and one checkbox trace, and the scope, audience, and status of HTML-AAM and Core-AAM.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <AccessibilityApisPage locale={await getServerLocale()} />;

export default Page;
