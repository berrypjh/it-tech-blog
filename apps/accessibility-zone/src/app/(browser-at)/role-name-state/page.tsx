import { getServerLocale } from '@it-tech-blog/preferences/server';

import { RoleNameStatePage } from '@/components/browser-at/role-name-state/RoleNameStatePage';

const metadata = {
  ko: {
    title: '접근성 객체의 역할 · 이름 · 상태 · 값 · 관계 읽기 — A11y Lab',
    description:
      '이름 있는 버튼 · 체크박스 · 레이블이 연결된 입력 칸에서 보이는 텍스트 · 접근성 이름 · 입력 값 · 체크 상태 · 레이블 관계를 구분해 읽는 03장 두 번째 페이지.',
  },
  en: {
    title: 'Reading role, name, state, value, and relations of accessible objects — A11y Lab',
    description:
      'Chapter 03, page 2: telling apart visible text, accessible name, input value, checked state, and label relation on a named button, a checkbox, and a labeled input.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <RoleNameStatePage locale={await getServerLocale()} />;

export default Page;
