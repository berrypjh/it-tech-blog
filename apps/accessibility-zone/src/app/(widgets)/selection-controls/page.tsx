import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SelectionControlsPage } from '@/components/widgets/selection-controls/SelectionControlsPage';

const metadata = {
  ko: {
    title: 'Checkbox · Radio · Switch · Toggle Button의 상태 계약 구분하기 — A11y Lab',
    description:
      '같은 알림 설정에서 독립 선택 · 상호 배타 · 즉시 켜짐과 꺼짐 · 명령 눌림을 나누고, 키와 선택 취소와 혼합 상태를 실제 DOM 값으로 비교하는 12장 첫 페이지.',
  },
  en: {
    title:
      'Telling apart the state contracts of checkbox, radio, switch, and toggle button — A11y Lab',
    description:
      'Chapter 12, first page: separating independent choice, mutual exclusion, immediate on and off, and a pressed command in one notification settings screen, and comparing keys, deselection, and the mixed state with real DOM values.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SelectionControlsPage locale={await getServerLocale()} />;

export default Page;
