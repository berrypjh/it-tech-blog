import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  hostComponentContent,
  HostComponentRenderPhasePage,
} from '@/components/render-phase/host-component-process';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = hostComponentContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How Host Components Are Processed in Render Phase — React Lab'
        : 'Host Component는 Render Phase에서 어떻게 처리되는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <HostComponentRenderPhasePage locale={locale} />;
};

export default Page;
