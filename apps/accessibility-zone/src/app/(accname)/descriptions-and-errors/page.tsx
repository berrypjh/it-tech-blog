import { getServerLocale } from '@it-tech-blog/preferences/server';

import { DescriptionsAndErrorsPage } from '@/components/accname/descriptions-and-errors/DescriptionsAndErrorsPage';

const metadata = {
  ko: {
    title: 'aria-describedby · aria-description · 오류 메시지의 관계 — A11y Lab',
    description:
      '이름과 설명을 서로 다른 경로로 추적하고, aria-description의 문서 상태를 확인하며, 안내 · 오류 표시 · aria-invalid · aria-errormessage를 나누는 06장 다섯 번째 페이지.',
  },
  en: {
    title: 'How aria-describedby, aria-description, and error messages relate — A11y Lab',
    description:
      'Chapter 06, page 5: tracing names and descriptions on separate paths, checking the document status of aria-description, and separating hints, error display, aria-invalid, and aria-errormessage.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <DescriptionsAndErrorsPage locale={await getServerLocale()} />;

export default Page;
