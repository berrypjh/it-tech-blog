import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  pluginEventSystemContent,
  PluginEventSystemPage,
} from '@/components/events-internals/plugin-event-system';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = pluginEventSystemContent[locale];

  return {
    title:
      locale === 'en'
        ? 'How does the Plugin Event System interpret events? — React Lab'
        : 'Plugin Event System은 이벤트를 어떻게 해석할까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <PluginEventSystemPage locale={locale} />;
};

export default Page;
