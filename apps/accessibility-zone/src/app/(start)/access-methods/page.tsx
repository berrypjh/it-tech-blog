import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AccessMethodsPage } from '@/components/start/access-methods/AccessMethodsPage';

const metadata = {
  ko: {
    title: '키보드·화면 낭독기·확대·음성 입력·스위치의 사용 방식 비교하기 — A11y Lab',
    description:
      '다섯 가지 사용 방식이 페이지의 무엇에 의존하는지 비교하고, 코드로 예상한 결과와 실제 환경에서 확인할 것을 구분하는 01장 세 번째 페이지.',
  },
  en: {
    title:
      'Comparing keyboard, screen reader, magnification, speech input, and switch use — A11y Lab',
    description:
      'Chapter 01, page 3: what five ways of use depend on in a page, and how to separate predictions from code from what to check in a real setup.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <AccessMethodsPage locale={await getServerLocale()} />;

export default Page;
