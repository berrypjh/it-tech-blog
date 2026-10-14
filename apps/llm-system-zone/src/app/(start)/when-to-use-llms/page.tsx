import { getServerLocale } from '@it-tech-blog/preferences/server';

import { WhenToUseLlmsPage } from '@/components/start/when-to-use-llms/WhenToUseLlmsPage';

const metadata = {
  ko: {
    title: 'LLM을 사용해야 하는 문제와 사용하지 말아야 할 문제 — LLM Lab',
    description:
      '기능을 작업 단위로 나누고 제약과 대안을 근거로 코드, 검색, ML, LLM 가운데 구현 방식을 고르는 챕터.',
  },
  en: {
    title: 'Problems to Use an LLM For, and Problems to Avoid — LLM Lab',
    description:
      'A chapter on splitting a feature into task units and choosing among code, search, ML, and an LLM by constraints and alternatives.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <WhenToUseLlmsPage locale={await getServerLocale()} />;

export default Page;
