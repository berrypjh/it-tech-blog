import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  startWithQuestionContent,
  StartWithQuestionPage,
} from '@/components/source-reading-checklist/start-with-question';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = startWithQuestionContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Start with a question — Source reading checklist'
        : '질문으로 시작한다 — 실전 소스코드 읽기 체크리스트',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <StartWithQuestionPage locale={locale} />;
};

export default Page;
