import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  useEffectEventContent,
  UseEffectEventDesignPage,
} from '@/components/react-19-changes/use-effect-event-design';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = useEffectEventContent[locale];

  return {
    title:
      locale === 'en'
        ? 'useEffectEvent · What did it add to Effect design? — React Lab'
        : 'useEffectEvent는 Effect 설계에 무엇을 새로 추가했나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <UseEffectEventDesignPage locale={locale} />;
};

export default Page;
