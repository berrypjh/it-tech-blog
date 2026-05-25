import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  after192Content,
  After192Page,
} from '@/components/react-19-changes/react-19-2-reading-method';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = after192Content[locale];

  return {
    title:
      locale === 'en'
        ? 'Reading React 19.2 and beyond — React Lab'
        : 'React 19.2 이후 변화 읽기 — React Lab',
    description: c.hero.subtitleLines.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <After192Page locale={locale} />;
};

export default Page;
