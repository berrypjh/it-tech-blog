import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  FiberReuseTypeKeyPage,
  typeKeyReuseContent,
} from '@/components/render-phase/type-key-reuse';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = typeKeyReuseContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How Same type and key Lead to Fiber Reuse — React Lab'
        : '같은 type과 key는 어떻게 Fiber 재사용으로 이어지는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <FiberReuseTypeKeyPage locale={locale} />;
};

export default Page;
