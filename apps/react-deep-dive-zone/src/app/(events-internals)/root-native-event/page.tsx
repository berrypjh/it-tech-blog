import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  rootNativeEventContent,
  RootNativeEventPage,
} from '@/components/events-internals/root-native-event';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = rootNativeEventContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why does createRoot attach native events to the root? — React Lab'
        : 'createRoot는 왜 root에 Native Event를 등록할까? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <RootNativeEventPage locale={locale} />;
};

export default Page;
