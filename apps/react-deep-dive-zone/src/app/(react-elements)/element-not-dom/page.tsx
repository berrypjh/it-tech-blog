import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reactElementSummaryBeforeFiberContent,
  ReactElementSummaryBeforeFiberPage,
} from '@/components/react-elements/react-element-summary-before-fiber';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactElementSummaryBeforeFiberContent[locale];

  return {
    title:
      locale === 'en'
        ? 'An Element Is Not the DOM — It Is a Description Before Fiber — React Lab'
        : 'Element는 DOM이 아니라 Fiber 이전 단계의 설명 객체다 — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactElementSummaryBeforeFiberPage locale={locale} />;
};

export default Page;
