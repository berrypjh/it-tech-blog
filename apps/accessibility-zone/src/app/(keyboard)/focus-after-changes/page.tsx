import { getServerLocale } from '@it-tech-blog/preferences/server';

import { FocusAfterChangesPage } from '@/components/keyboard/focus-after-changes/FocusAfterChangesPage';

const metadata = {
  ko: {
    title: '추가 · 삭제 · 비활성화 이후 논리적인 포커스 위치 유지하기 — A11y Lab',
    description:
      '반복 목록에서 삭제 · 추가 · 비활성화 뒤 포커스가 어디로 갈지 먼저 정하고, DOM 반영 뒤 필요한 경우에만 옮기는 페이지.',
  },
  en: {
    title: 'Keeping a logical focus position after adding, deleting, and disabling — A11y Lab',
    description:
      'Deciding first where focus goes after delete, add, and disable in a repeating list, and moving it only when needed after the DOM updates.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <FocusAfterChangesPage locale={await getServerLocale()} />;

export default Page;
