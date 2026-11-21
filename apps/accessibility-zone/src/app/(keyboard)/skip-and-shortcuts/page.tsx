import { getServerLocale } from '@it-tech-blog/preferences/server';

import { SkipAndShortcutsPage } from '@/components/keyboard/skip-and-shortcuts/SkipAndShortcutsPage';

const metadata = {
  ko: {
    title: '건너뛰기 링크 · 반복 영역 우회 · 문자 단축키 충돌 해결하기 — A11y Lab',
    description:
      '건너뛰기 링크의 도착 위치와 다음 Tab을 관찰하고, WCAG 2.4.1과 2.1.4의 조건으로 반복 영역 우회와 문자 단축키를 판단하는 페이지.',
  },
  en: {
    title: 'Skip links, bypassing repeated blocks, and character key shortcut conflicts — A11y Lab',
    description:
      'Observing where a skip link lands and where the next Tab goes, and judging bypass and character shortcuts by WCAG 2.4.1 and 2.1.4.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <SkipAndShortcutsPage locale={await getServerLocale()} />;

export default Page;
