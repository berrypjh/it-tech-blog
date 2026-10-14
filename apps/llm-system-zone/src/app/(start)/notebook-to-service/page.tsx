import { getServerLocale } from '@it-tech-blog/preferences/server';

import { NotebookToServicePage } from '@/components/start/notebook-to-service/NotebookToServicePage';

const metadata = {
  ko: {
    title: 'Python Notebook과 서비스 코드는 어떻게 역할이 다른가? — LLM Lab',
    description:
      '실험 결과를 버전이 있는 출력 스키마, 임계값 정책, 실패 처리, 확인 사례를 담은 계약으로 옮기는 챕터.',
  },
  en: {
    title: 'How Do a Python Notebook and Service Code Differ in Role? — LLM Lab',
    description:
      'A chapter on moving experiment results into a contract with a versioned output schema, threshold policy, failure handling, and confirmation cases.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <NotebookToServicePage locale={await getServerLocale()} />;

export default Page;
