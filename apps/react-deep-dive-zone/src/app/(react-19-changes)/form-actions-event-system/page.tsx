import { getServerLocale } from '@it-tech-blog/preferences/server';

import {
  formActionsEventSystemContent,
  FormActionsEventSystemPage,
} from '@/components/react-19-changes/form-actions-event-system';

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = formActionsEventSystemContent[locale];

  return {
    title:
      locale === 'en'
        ? 'Form Actions × event system · React internals pipeline — React Lab'
        : 'Form Actions는 이벤트 시스템과 어떻게 연결되는가? — React Lab',
    description: c.hero.subtitleLines.join(' '),
  };
};

const Page = async () => {
  const locale = await getServerLocale();
  return <FormActionsEventSystemPage locale={locale} />;
};

export default Page;
