import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  refAsPropElementShapeContent,
  RefAsPropElementShapePage,
} from '@/components/react-19-changes/ref-as-prop-element-shape';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = refAsPropElementShapeContent[locale];

  return {
    title:
      locale === 'en'
        ? 'ref as prop · How React Element and component call path changed — React Lab'
        : 'ref as prop은 React Element와 컴포넌트 호출 경로를 어떻게 바꿨나? — React Lab',
    description: c.hero.subtitleLines.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <RefAsPropElementShapePage locale={locale} />;
};

export default Page;
