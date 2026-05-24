import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  useEffectInternalsContent,
  UseEffectInternalsPage,
} from '@/components/hooks-internals/use-effect-internal';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = useEffectInternalsContent[locale];

  return {
    title:
      locale === 'en'
        ? 'useEffect Internals: Effect Object and Commit Link — React Lab'
        : 'useEffect 내부 구조: Effect 객체와 Commit 연결 — React Lab',
    description: c.question.title,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <UseEffectInternalsPage locale={locale} />;
};

export default Page;
