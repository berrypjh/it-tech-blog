import { getServerLocale } from '@it-tech-blog/preferences/server';

import { NavigationAndCurrentPage } from '@/components/widgets/navigation-and-current/NavigationAndCurrentPage';

const metadata = {
  ko: {
    title: '내비게이션 · Breadcrumb · Pagination에 위치와 목적 전달하기 — A11y Lab',
    description:
      '사이트 메뉴 · 현재 경로 · 쪽 번호를 실제 링크로 만들고, 현재 위치와 선택 상태를 나누며, 주소가 바뀌는 이동과 같은 화면의 목록 갱신을 구분하는 12장 넷째 페이지.',
  },
  en: {
    title: 'Conveying location and purpose in navigation, breadcrumb, and pagination — A11y Lab',
    description:
      'Chapter 12, fourth page: building a site menu, a breadcrumb, and page numbers from real links, separating current location from selection, and telling address-changing navigation from in-place list updates.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <NavigationAndCurrentPage locale={await getServerLocale()} />;

export default Page;
