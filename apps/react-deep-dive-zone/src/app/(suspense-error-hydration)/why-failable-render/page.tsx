import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  whyFailableRenderContent,
  WhyFailableRenderPage,
} from '@/components/suspense-error-hydration/why-failable-render';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = whyFailableRenderContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why look at failable renders? — React Lab'
        : '왜 실패 가능한 렌더링을 봐야 하는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <WhyFailableRenderPage locale={locale} />;
};

export default Page;
