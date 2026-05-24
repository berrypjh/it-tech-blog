import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  setStateFlowContent,
  SetStateUpdateFlowPage,
} from '@/components/hooks-internals/set-state-flow';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = setStateFlowContent[locale];

  return {
    title:
      locale === 'en'
        ? 'What Really Happens After setState? — React Lab'
        : 'setState 이후 실제로 무슨 일이 일어나는가? — React Lab',
    description: c.question.title,
  };
};

const Page = async () => {
  const locale = await getServerLocale();

  return <SetStateUpdateFlowPage locale={locale} />;
};

export default Page;
