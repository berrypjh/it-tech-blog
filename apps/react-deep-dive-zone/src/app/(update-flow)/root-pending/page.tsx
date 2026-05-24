import { getServerLocale } from '@it-tech-blog/preferences/server';

import { eagerBailoutContent, EagerBailoutPage } from '@/components/updates/eager-bailout';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = eagerBailoutContent[locale];

  return {
    title:
      locale === 'en'
        ? 'eager bailout — React Lab'
        : 'eager bailout: 같은 상태면 왜 렌더를 건너뛸 수 있나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <EagerBailoutPage locale={locale} />;
};

export default Page;
