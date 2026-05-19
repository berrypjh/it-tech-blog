import { getServerLocale } from '@it-tech-blog/preferences/server';

import { AssistiveTechnologyPage } from '@/components/start/assistive-tech';
import { assistiveTechContent } from '@/components/start/assistive-tech/content';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  return { title: assistiveTechContent[locale].meta.pageTitle };
};

const AssistiveTechPage = async () => {
  const locale = await getServerLocale();
  return <AssistiveTechnologyPage locale={locale} />;
};

export default AssistiveTechPage;
