import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reactDomContent,
  ReactDomPackagePage,
} from '@/components/packages-internals/react-dom-package';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactDomContent[locale];

  return {
    title:
      locale === 'en'
        ? 'react-dom: the renderer that connects React to browser & server — React Lab'
        : 'react-dom 패키지: 브라우저와 서버 환경으로 연결되는 renderer — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactDomPackagePage locale={locale} />;
};

export default Page;
