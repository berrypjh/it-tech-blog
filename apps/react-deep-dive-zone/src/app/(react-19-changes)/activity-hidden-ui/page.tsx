import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  activityHiddenUiContent,
  ActivityHiddenUiPage,
} from '@/components/react-19-changes/activity-hidden-ui';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = activityHiddenUiContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Activity · How React 19.2 manages hidden UI and lowers priority — React Lab'
        : 'React 19.2의 Activity는 숨긴 UI를 어떻게 관리하고 우선순위를 낮출까? — React Lab',
    description: c.hero.subtitleLines.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <ActivityHiddenUiPage locale={locale} />;
};

export default Page;
