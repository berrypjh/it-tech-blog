import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SliderValuesPage } from '@/components/widgets/slider-values/SliderValuesPage';

const metadata = {
  ko: {
    title: 'Slider에 값 · 범위 · 키보드 · 터치 대안 제공하기 — A11y Lab',
    description:
      'input type=range의 이름 · 범위 · 현재 값과 단위를 보여 주고, 끌지 않고도 같은 값에 닿는 버튼과 직접 선택을 함께 두는 12장 여섯째 페이지.',
  },
  en: {
    title: 'Giving a slider its value, range, keyboard, and touch alternatives — A11y Lab',
    description:
      'Chapter 12, sixth page: showing the name, range, current value, and unit of input type=range, with buttons and direct choices that reach the same value without dragging.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SliderValuesPage locale={await getServerLocale()} />;

export default Page;
