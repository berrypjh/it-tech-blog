import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  serverComponentsContractContent,
  ServerComponentsContractPage,
} from '@/components/react-19-changes/server-components-contract';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = serverComponentsContractContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Server Components · Boundary & contract stabilized in React 19 — React Lab'
        : 'Server Components는 React 19에서 어떤 경계와 계약을 안정화했나? — React Lab',
    description: c.hero.subtitleLines.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ServerComponentsContractPage locale={locale} />;
};

export default Page;
