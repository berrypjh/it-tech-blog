import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  useReducerSharedContent,
  UseReducerSharedModelPage,
} from '@/components/hooks-internals/use-reducer-shared';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = useReducerSharedContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What Does useReducer Share with useState? — React Lab'
        : 'useReducer는 useState와 무엇을 공유하는가? — React Lab',
    description: c.question.title,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <UseReducerSharedModelPage locale={locale} />;
};

export default Page;
