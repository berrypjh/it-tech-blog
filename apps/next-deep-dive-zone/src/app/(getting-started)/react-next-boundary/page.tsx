import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reactNextBoundaryContent,
  ReactNextBoundaryPage,
} from '@/components/getting-started/react-next-boundary';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactNextBoundaryContent[locale];

  return {
    title:
      locale === 'en'
        ? 'The Role Boundary Between React and Next.js — Next Lab'
        : 'React와 Next.js의 역할 경계 — Next Lab',
    description: c.hero.highlight.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <ReactNextBoundaryPage locale={locale} />;
};

export default Page;
