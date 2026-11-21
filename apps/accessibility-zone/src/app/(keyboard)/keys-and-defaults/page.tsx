import { getServerLocale } from '@it-tech-blog/preferences/server';

import { KeysAndDefaultsPage } from '@/components/keyboard/keys-and-defaults/KeysAndDefaultsPage';

const metadata = {
  ko: {
    title: 'Enter · Space · 방향키와 텍스트 편집의 기본 동작 보존하기 — A11y Lab',
    description:
      '링크 · 버튼 · 입력 칸의 기본 키 동작을 한 과업에서 확인하고, 위젯이 맡는 키와 브라우저 · 텍스트 입력이 맡는 키를 나누는 페이지.',
  },
  en: {
    title: 'Preserving the default behavior of Enter, Space, arrows, and text editing — A11y Lab',
    description:
      'Checking the default key behavior of links, buttons, and text fields in one task, and separating the keys a widget owns from those the browser and text input own.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <KeysAndDefaultsPage locale={await getServerLocale()} />;

export default Page;
