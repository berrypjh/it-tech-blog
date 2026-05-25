import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  actionsUpdateFlowContent,
  ActionsUpdateFlowPage,
} from '@/components/react-19-changes/actions-update-flow';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = actionsUpdateFlowContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Actions · Why Actions extend the update model — React Lab'
        : 'Actions는 왜 단순한 폼 API가 아니라 업데이트 모델의 확장일까? — React Lab',
    description: c.hero.subtitleLines.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ActionsUpdateFlowPage locale={locale} />;
};

export default Page;
