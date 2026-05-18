import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  type AssistiveTechLocale,
  AssistiveTechnologyPage,
} from '@/components/start/assistive-tech';
import { assistiveTechContent } from '@/components/start/assistive-tech/content';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const lang = ((locale as AssistiveTechLocale) ?? 'ko') as AssistiveTechLocale;
  return { title: assistiveTechContent[lang].meta.pageTitle };
};

const AssistiveTechPage = async () => {
  const locale = await getServerLocale();
  const lang = ((locale as AssistiveTechLocale) ?? 'ko') as AssistiveTechLocale;
  return <AssistiveTechnologyPage locale={lang} />;
};

export default AssistiveTechPage;
