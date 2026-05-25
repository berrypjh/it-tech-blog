import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  suspenseHydrationLinkContent,
  SuspenseHydrationLinkPage,
} from '@/components/suspense-error-hydration/suspense-hydration-link';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = suspenseHydrationLinkContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Where Suspense and Hydration meet — React Lab'
        : 'Suspense와 Hydration은 어디서 만나는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <SuspenseHydrationLinkPage locale={locale} />;
};

export default Page;
