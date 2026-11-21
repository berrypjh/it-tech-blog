import { getServerLocale } from '@it-tech-blog/preferences/server';

import { KeyboardPathCheckPage } from '@/components/keyboard/keyboard-path-check/KeyboardPathCheckPage';

const metadata = {
  ko: {
    title: '포커스 · 선택 · 활성 상태를 분리하고 키보드 경로 검증하기 — A11y Lab',
    description:
      '옵션 목록의 진입 · 이동 · 선택 · 이탈 · 삭제 뒤 재개를 실제 키보드로 따라가며, 세 상태와 수정 · 재검증을 기록하는 07장 마지막 페이지.',
  },
  en: {
    title:
      'Separating focus, selection, and active state, and verifying a keyboard path — A11y Lab',
    description:
      'Chapter 07, last page: following entry, movement, selection, exit, and resuming after removal with a real keyboard, and recording the three states, the fix, and the retest.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <KeyboardPathCheckPage locale={await getServerLocale()} />;

export default Page;
