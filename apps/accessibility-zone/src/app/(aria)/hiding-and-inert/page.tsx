import { getServerLocale } from '@it-tech-blog/preferences/server';

import { HidingAndInertPage } from '@/components/aria/hiding-and-inert/HidingAndInertPage';

const metadata = {
  ko: {
    title: 'hidden · display · visibility · aria-hidden · inert의 차이 — A11y Lab',
    description:
      '다섯 가지 숨김 방법을 화면 표시 · 포커스와 조작 · 접근성 노출의 세 축으로 비교하고, aria-hidden 아래 포커스 가능한 요소의 오류를 보는 05장 네 번째 페이지.',
  },
  en: {
    title: 'How hidden, display, visibility, aria-hidden, and inert differ — A11y Lab',
    description:
      'Chapter 05, page 4: comparing five hiding methods on display, focus and interaction, and exposure, and the error of focusable content under aria-hidden.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <HidingAndInertPage locale={await getServerLocale()} />;

export default Page;
