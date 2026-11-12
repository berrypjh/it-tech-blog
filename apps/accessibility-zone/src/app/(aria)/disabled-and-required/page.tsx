import { getServerLocale } from '@it-tech-blog/preferences/server';

import { DisabledAndRequiredPage } from '@/components/aria/disabled-and-required/DisabledAndRequiredPage';

const metadata = {
  ko: {
    title: 'disabled · aria-disabled · readonly · required의 의미와 동작 — A11y Lab',
    description:
      '폼 컨트롤에서 편집 · 포커스 · 활성화 · 제출 데이터 · 기본 유효성 검사가 속성마다 어떻게 다른지, aria-disabled와 aria-required가 동작을 바꾸지 않는 이유를 보는 05장 다섯 번째 페이지.',
  },
  en: {
    title: 'The meaning and behavior of disabled, aria-disabled, readonly, and required — A11y Lab',
    description:
      'Chapter 05, page 5: how editing, focus, activation, submitted data, and built-in validation differ by attribute on form controls, and why aria-disabled and aria-required do not change behavior.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <DisabledAndRequiredPage locale={await getServerLocale()} />;

export default Page;
