import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  useEffectEventContent,
  UseEffectEventPage,
} from '@/components/react-19-changes/use-effect-event-design';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = useEffectEventContent[locale];

  return {
    title:
      locale === 'en'
        ? 'useEffectEvent · What did it add to Effect design? — React Lab'
        : 'useEffectEvent는 Effect 설계에 무엇을 새로 추가했나? — React Lab',
    description: c.hero.subtitleLines.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <UseEffectEventPage locale={locale} />;
};

export default Page;
