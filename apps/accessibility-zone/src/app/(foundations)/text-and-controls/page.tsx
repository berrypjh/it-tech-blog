import { getServerLocale } from '@it-tech-blog/preferences/server';

import { TextAndControlsPage } from '@/components/foundations/text-and-controls/TextAndControlsPage';

const metadata = {
  ko: {
    title: '목록·인용·강조와 링크·버튼을 목적에 맞게 선택하기 — A11y Lab',
    description:
      '목록·인용·강조 요소의 의미와 흔한 오용, 이동은 링크·동작은 버튼이라는 선택 기준, 네이티브 요소의 키보드 기본 동작을 직접 확인하는 02장 세 번째 페이지.',
  },
  en: {
    title: 'Choosing lists, quotes, emphasis, links, and buttons for their purpose — A11y Lab',
    description:
      'Chapter 02, page 3: what list, quote, and emphasis elements mean and how they are misused, links for navigation and buttons for actions, and checking native keyboard behavior yourself.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <TextAndControlsPage locale={await getServerLocale()} />;

export default Page;
