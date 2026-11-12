import { getServerLocale } from '@it-tech-blog/preferences/server';

import { NameAndLabelPage } from '@/components/accname/name-and-label/NameAndLabelPage';

const metadata = {
  ko: {
    title: '보이는 라벨 · 접근성 이름 · 설명 · 값 구분하기 — A11y Lab',
    description:
      '한 컨트롤의 화면 라벨 · 접근성 이름 · 설명 · 값 · 역할을 나란히 비교하고, 보이는 글자와 textContent가 계산된 이름이 아닌 이유와 이 장의 규격 판본을 보는 06장 첫 페이지.',
  },
  en: {
    title: 'Telling visible labels, accessible names, descriptions, and values apart — A11y Lab',
    description:
      'Chapter 06, page 1: comparing the visible label, accessible name, description, value, and role of one control, why visible text and textContent are not the computed name, and the spec editions this chapter uses.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <NameAndLabelPage locale={await getServerLocale()} />;

export default Page;
