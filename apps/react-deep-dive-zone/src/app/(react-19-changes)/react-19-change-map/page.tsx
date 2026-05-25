import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  react19ChangeMapContent,
  React19ChangeMapPage,
} from '@/components/react-19-changes/react-19-change-map';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = react19ChangeMapContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Change map · What changed in React 19 and how to read it — React Lab'
        : 'React 19는 무엇이 달라졌고, 어떤 기준으로 읽어야 할까? — React Lab',
    description: c.hero.subtitleLines.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <React19ChangeMapPage locale={locale} />;
};

export default Page;
