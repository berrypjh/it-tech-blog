import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  reactElementRefReact19Content,
  ReactElementRefReact19Page,
} from '@/components/element-jsx/react-element-ref-react19';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = reactElementRefReact19Content[locale];

  return {
    title:
      locale === 'en'
        ? 'How Did ref Change in React 19? — React Lab'
        : 'ref는 React 19에서 어떻게 달라졌나? — React Lab',
    description: c.hero.description,
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ReactElementRefReact19Page locale={locale} />;
};

export default Page;
