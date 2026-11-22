import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SpinbuttonInputPage } from '@/components/widgets/spinbutton-input/SpinbuttonInputPage';

const metadata = {
  ko: {
    title: 'Spinbutton의 직접 입력 · 증감 · 잘못된 값 처리하기 — A11y Lab',
    description:
      '숫자를 직접 치는 도중의 빈 값과 불완전한 값을 그대로 두고, 칸을 떠날 때 범위 · 소수 · 단계를 검사하며, 증감 버튼으로 복구하는 12장 일곱째 페이지.',
  },
  en: {
    title: 'Handling direct entry, stepping, and invalid values in a spinbutton — A11y Lab',
    description:
      'Chapter 12, seventh page: leaving empty and incomplete values alone while a number is being typed, checking range, decimals, and step on leaving the field, and recovering with stepping buttons.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SpinbuttonInputPage locale={await getServerLocale()} />;

export default Page;
