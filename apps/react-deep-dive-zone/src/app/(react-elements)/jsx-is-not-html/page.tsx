import { getServerLocale } from '@it-tech-blog/preferences/server';

import { jsxIsNotHtmlContent, JsxIsNotHtmlPage } from '@/components/react-elements/jsx-is-not-html';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = jsxIsNotHtmlContent[locale];

  return {
    title:
      locale === 'en'
        ? 'JSX Is Not HTML — Then What? — React Lab'
        : 'JSX는 HTML이 아니라 무엇인가? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <JsxIsNotHtmlPage locale={locale} />;
};

export default Page;
