import { getServerLocale } from '@it-tech-blog/preferences/server';

import { RolesAndRelationsPage } from '@/components/aria/roles-and-relations/RolesAndRelationsPage';

const metadata = {
  ko: {
    title: 'role · state · property와 필수 소유 · 참조 관계 읽기 — A11y Lab',
    description:
      '역할 · 상태 · 속성 · 관계를 나눠 읽고, 한 역할의 필수 요구를 WAI-ARIA 원문에서 찾고, DOM 자식 · 접근성 소유 · ID 참조를 구분하는 05장 두 번째 페이지.',
  },
  en: {
    title: 'Reading roles, states, properties, and required ownership and references — A11y Lab',
    description:
      'Chapter 05, page 2: reading role, state, property, and relation apart, finding one role’s requirements in the WAI-ARIA text, and telling DOM children, accessibility ownership, and ID references apart.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <RolesAndRelationsPage locale={await getServerLocale()} />;

export default Page;
