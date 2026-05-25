import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  metadataResourceContent,
  MetadataResourceReactDomPage,
} from '@/components/react-19-changes/metadata-resource-react-dom';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = metadataResourceContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Metadata & Resource Components · How react-dom broadened its role — React Lab'
        : 'Metadata와 Resource Components는 react-dom의 역할을 어떻게 넓혔나? — React Lab',
    description: c.hero.subtitleLines.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <MetadataResourceReactDomPage locale={locale} />;
};

export default Page;
