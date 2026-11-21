import { getServerLocale } from '@it-tech-blog/preferences/server';

import { FocusAndTabindexPage } from '@/components/keyboard/focus-and-tabindex/FocusAndTabindexPage';

const metadata = {
  ko: {
    title: '순차 포커스 · 프로그램 포커스와 tabindex의 동작 — A11y Lab',
    description:
      'Tab 이동과 focus()가 해결하는 과업을 나누고, 기본 HTML · tabindex 0 · -1 · 양수를 실제 document.activeElement로 비교하는 페이지.',
  },
  en: {
    title: 'Sequential focus, programmatic focus, and how tabindex behaves — A11y Lab',
    description:
      'Separating the tasks Tab and focus() solve, and comparing default HTML and tabindex 0, -1, and positive values with the real document.activeElement.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <FocusAndTabindexPage locale={await getServerLocale()} />;

export default Page;
