import { getServerLocale } from '@it-tech-blog/preferences/server';

import { FailureDiagnosisPage } from '@/components/start/failure-diagnosis/FailureDiagnosisPage';

const metadata = {
  ko: {
    title: '실패하는 AI 기능에서 먼저 살펴볼 것들 — LLM Lab',
    description:
      '관측한 실패에서 원인 후보를 세우고, 증거를 확인해 가설을 바꾸며, 수정 뒤 재검증하는 진단 챕터.',
  },
  en: {
    title: 'What to Check First When an AI Feature Fails — LLM Lab',
    description:
      'A diagnosis chapter on building candidate causes from an observed failure, changing hypotheses with evidence, and re-verifying after a fix.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <FailureDiagnosisPage locale={await getServerLocale()} />;

export default Page;
