import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  currentWipAlternateContent,
  FiberCurrentWipAlternatePage,
} from '@/components/fiber-tree/current-wip-alternate';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = currentWipAlternateContent[locale];

  return {
    title:
      locale === 'en'
        ? 'current / workInProgress / alternate — React Lab'
        : 'current tree / workInProgress tree / alternate — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberCurrentWipAlternatePage locale={locale} />;
};

export default Page;
