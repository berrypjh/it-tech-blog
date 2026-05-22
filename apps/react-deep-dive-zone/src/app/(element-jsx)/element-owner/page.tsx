import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reactElementOwnerDevInfoContent,
  ReactElementOwnerDevInfoPage,
} from '@/components/element-jsx/react-element-owner-dev-info';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactElementOwnerDevInfoContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why Do owner and Dev-mode Info Get Attached? — React Lab'
        : 'owner와 개발 모드 정보는 왜 붙는가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactElementOwnerDevInfoPage locale={locale} />;
};

export default Page;
