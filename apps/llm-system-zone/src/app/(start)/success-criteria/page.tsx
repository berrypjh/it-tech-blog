import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SuccessCriteriaPage } from '@/components/start/success-criteria/SuccessCriteriaPage';

const metadata = {
  ko: {
    title: 'AI 기능의 성공 조건을 먼저 정의하는 방법 — LLM Lab',
    description:
      '모호한 요구사항을 대상, 출력, 판정 기준, 측정 방법, 실패 처리를 포함한 수용 기준으로 바꾸고 사례에 적용하는 챕터.',
  },
  en: {
    title: 'How to Define an AI Feature’s Success Criteria First — LLM Lab',
    description:
      'A chapter on turning a vague requirement into acceptance criteria with target, output, judging criteria, measurement, and failure handling, and applying them to cases.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SuccessCriteriaPage locale={await getServerLocale()} />;

export default Page;
