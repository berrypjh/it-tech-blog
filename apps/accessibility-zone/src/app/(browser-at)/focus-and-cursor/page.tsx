import { getServerLocale } from '@it-tech-blog/preferences/server';

import { FocusAndCursorPage } from '@/components/browser-at/focus-and-cursor/FocusAndCursorPage';

const metadata = {
  ko: {
    title: '시스템 포커스와 화면 낭독기 커서 · 탐색 모드 구분하기 — A11y Lab',
    description:
      'DOM · 키보드 포커스, 화면 낭독기 읽기 위치, 입력 · 상호작용 모드를 구분하고, 같은 문서에서 제목 탐색과 Tab 이동을 비교하며, NVDA와 VoiceOver의 모드를 따로 익히는 03장 네 번째 페이지.',
  },
  en: {
    title: 'Telling system focus apart from screen reader cursors and modes — A11y Lab',
    description:
      'Chapter 03, page 4: telling apart DOM and keyboard focus, the screen reader reading position, and input or interaction modes; comparing heading navigation and Tab in one document; and learning NVDA’s and VoiceOver’s modes separately.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <FocusAndCursorPage locale={await getServerLocale()} />;

export default Page;
