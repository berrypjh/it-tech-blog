import { getServerLocale } from '@it-tech-blog/preferences/server';

import { DomOrderPage } from '@/components/foundations/dom-order/DomOrderPage';

const metadata = {
  ko: {
    title: 'DOM 순서와 화면 배치가 읽기·조작 순서에 미치는 영향 — A11y Lab',
    description:
      'DOM 순서·화면 순서·포커스 순서의 관계를 배우고, CSS로 시각 순서만 바꿨을 때 생기는 불일치를 실제 Tab 이동으로 확인하는 02장 다섯 번째 페이지.',
  },
  en: {
    title: 'How DOM order and visual layout affect reading and operating order — A11y Lab',
    description:
      'Chapter 02, page 5: how DOM order, visual order, and focus order relate, and checking with real Tab movement the mismatch caused by changing only the visual order with CSS.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <DomOrderPage locale={await getServerLocale()} />;

export default Page;
