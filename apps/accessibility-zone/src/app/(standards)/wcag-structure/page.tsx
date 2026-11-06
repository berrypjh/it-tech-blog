import { getServerLocale } from '@it-tech-blog/preferences/server';

import { WcagStructurePage } from '@/components/standards/wcag-structure/WcagStructurePage';

const metadata = {
  ko: {
    title: 'POUR에서 지침 · 성공 기준 · A · AA · AAA로 이어지는 구조 — A11y Lab',
    description:
      '성공 기준 2.5.8 하나를 원칙 → 지침 → 성공 기준 → 수준으로 따라가며 WCAG 2.2의 짜임을 읽고, 목표 적합 수준에 따라 판정할 기준을 정하는 04장 첫 페이지.',
  },
  en: {
    title: 'The structure from POUR to guidelines, success criteria, and A, AA, AAA — A11y Lab',
    description:
      'Chapter 04, page 1: reading the structure of WCAG 2.2 by following success criterion 2.5.8 from principle to guideline to criterion to level, and deciding which criteria to judge for a target level.',
  },
};

export const generateMetadata = async () => metadata[await getServerLocale()];

const Page = async () => <WcagStructurePage locale={await getServerLocale()} />;

export default Page;
