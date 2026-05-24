import { getServerLocale } from '@it-tech-blog/preferences/server';

import { rulesOfHooksContent, RulesOfHooksPage } from '@/components/hooks-internals/rules-of-hooks';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = rulesOfHooksContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Why Rules of Hooks Exist — React Lab'
        : 'Rules of Hooks는 왜 필요한가? — React Lab',
    description: c.question.title,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <RulesOfHooksPage locale={locale} />;
};

export default Page;
