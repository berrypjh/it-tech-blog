import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  whyOpenSourceContent,
  WhyOpenSourceLearningPage,
} from '@/components/start/why-open-source';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = whyOpenSourceContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why GitHub-based learning works — React Lab'
        : '오픈소스 GitHub 기반 학습이 좋은 이유 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <WhyOpenSourceLearningPage locale={locale} />;
};

export default Page;
