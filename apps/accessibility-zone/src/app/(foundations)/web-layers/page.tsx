import { getServerLocale } from '@it-tech-blog/preferences/server';

import { WebLayersPage } from '@/components/foundations/web-layers/WebLayersPage';

const metadata = {
  ko: {
    title: 'HTML·DOM·CSS·JavaScript가 맡는 책임 구분하기 — A11y Lab',
    description:
      'HTML 소스와 브라우저가 만든 DOM을 구분하고, CSS의 표현과 JavaScript의 상태·이벤트 처리가 같은 과업에서 어떤 결함을 만드는지 나눠 보는 02장 첫 페이지.',
  },
  en: {
    title: 'What HTML, the DOM, CSS, and JavaScript are each responsible for — A11y Lab',
    description:
      'Chapter 02, page 1: telling HTML source from the DOM the browser builds, and how CSS presentation and JavaScript state and events each cause different defects in the same task.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <WebLayersPage locale={await getServerLocale()} />;

export default Page;
