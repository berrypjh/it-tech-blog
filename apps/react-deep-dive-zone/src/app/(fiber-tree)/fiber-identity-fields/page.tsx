import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  fiberIdentityFieldsContent,
  FiberIdentityFieldsPage,
} from '@/components/fiber-tree/fiber-identity-fields';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = fiberIdentityFieldsContent[locale];

  return {
    title:
      locale === 'en'
        ? 'tag / key / elementType / type — React Lab'
        : 'tag / key / elementType / type은 무엇을 나타내나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FiberIdentityFieldsPage locale={locale} />;
};

export default Page;
