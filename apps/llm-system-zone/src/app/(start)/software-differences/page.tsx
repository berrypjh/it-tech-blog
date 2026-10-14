import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SoftwareDifferencesPage } from '@/components/start/software-differences/SoftwareDifferencesPage';

const metadata = {
  ko: {
    title: 'LLM 애플리케이션은 일반 소프트웨어와 무엇이 다른가? — LLM Lab',
    description:
      '실행 오류, 구조 위반, 의미적 오답을 구별하고 코드와 평가 데이터로 무엇을 확인할지 고르는 챕터.',
  },
  en: {
    title: 'How Do LLM Applications Differ from Regular Software? — LLM Lab',
    description:
      'A chapter on telling execution errors, structure violations, and semantic wrong answers apart, and choosing what to check in code versus evaluation data.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SoftwareDifferencesPage locale={await getServerLocale()} />;

export default Page;
