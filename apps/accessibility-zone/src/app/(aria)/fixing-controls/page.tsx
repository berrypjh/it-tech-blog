import { getServerLocale } from '@it-tech-blog/preferences/server';

import { FixingControlsPage } from '@/components/aria/fixing-controls/FixingControlsPage';

const metadata = {
  ko: {
    title: '이름 · 상태 · 키보드 동작이 서로 모순되는 컨트롤 고치기 — A11y Lab',
    description:
      '상세 보기 컨트롤의 의미 · 이름 · 상태 · 관계 불일치를 찾고, 네이티브 버튼과 한 상태로 고친 뒤 DOM 관찰과 보조기술 확인 항목을 나눠 기록하는 05장 마지막 페이지.',
  },
  en: {
    title:
      'Fixing a control whose name, state, and keyboard behavior contradict each other — A11y Lab',
    description:
      'Chapter 05, last page: finding mismatches in meaning, name, state, and relation in a Show details control, fixing it with a native button and one state, and recording DOM observations separately from items to check with assistive technology.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <FixingControlsPage locale={await getServerLocale()} />;

export default Page;
