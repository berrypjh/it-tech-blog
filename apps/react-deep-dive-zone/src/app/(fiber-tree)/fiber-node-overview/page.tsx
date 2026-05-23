import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  fiberNodeOverviewContent,
  FiberNodeOverviewPage,
} from '@/components/fiber-tree/fiber-node-overview';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberNodeOverviewContent[locale];

  return {
    title:
      locale === 'en' ? 'What is a Fiber node? — React Lab' : 'Fiber node란 무엇인가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberNodeOverviewPage locale={locale} />;
};

export default Page;
