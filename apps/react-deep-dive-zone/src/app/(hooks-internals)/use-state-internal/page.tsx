import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  useStateInternalsContent,
  UseStateInternalsPage,
} from '@/components/hooks-internals/use-state-internal';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = useStateInternalsContent[locale];

  return {
    title:
      locale === 'en'
        ? 'useState Internals: state, queue, dispatch — React Lab'
        : 'useState 내부 구조: state, queue, dispatch — React Lab',
    description: c.question.title,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <UseStateInternalsPage locale={locale} />;
};

export default Page;
