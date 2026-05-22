import { getServerLocale } from '@it-tech-blog/preferences/server';

import { keyFiberReuseContent, KeyFiberReusePage } from '@/components/element-to-fiber/key-reuse';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = keyFiberReuseContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How key Connects to Fiber Reuse — React Lab'
        : 'key는 Fiber 재사용에 어떻게 연결되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <KeyFiberReusePage locale={locale} />;
};

export default Page;
