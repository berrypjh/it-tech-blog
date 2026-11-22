import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';
import { formsTutorial, understanding, wcag22 } from '@/components/shared/wcag';

import { InstructionsSection } from './sections/InstructionsSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { RolesSection } from './sections/RolesSection';
import { ScopeSection } from './sections/ScopeSection';
import { getToc } from './toc';

const points = {
  ko: [
    'type은 값의 종류와 기본 검사를, inputmode는 가상 키보드 힌트를, autocomplete는 사용자 정보의 입력 목적을 맡습니다. 하나가 다른 하나를 대신하지 않습니다.',
    '필수 여부는 라벨 글자에, 형식 예시는 입력 칸 밖 도움말에 두고 설명으로 연결합니다. 입력한 뒤에도 사라지지 않습니다.',
    '1.3.5는 사용자 자신에 관한 정보를 받는 칸 가운데 표준 목록의 목적에 해당하는 칸에 적용됩니다.',
    '가상 키보드의 종류와 자동 채움 제안은 기기와 브라우저에서 직접 확인합니다.',
  ],
  en: [
    'type handles the kind of value and the built-in check, inputmode the virtual keyboard hint, and autocomplete the input purpose of user information. None replaces another.',
    'Put the required state in the label text and the format example in a hint outside the field, connected as a description. They stay after input.',
    '1.3.5 applies to fields that collect information about the user and serve a purpose in the standard’s list.',
    'Check the kind of virtual keyboard and autofill suggestions on the device and browser themselves.',
  ],
};

const references: DocReference[] = [
  {
    href: wcag22('identify-input-purpose'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 1.3.5 Identify Input Purpose (Level AA)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: wcag22('labels-or-instructions'),
    source: same('W3C'),
    title: same('WCAG 2.2 — 3.3.2 Labels or Instructions (Level A)'),
    note: { ko: '규범 근거 (2024-12-12)', en: 'The normative basis (2024-12-12)' },
  },
  {
    href: understanding('identify-input-purpose'),
    source: same('W3C WAI'),
    title: same('Understanding SC 1.3.5: Identify Input Purpose'),
    note: { ko: '적용 대상의 해설 (보충 자료)', en: 'Explains the scope (supporting)' },
  },
  {
    href: whatwg('form-control-infrastructure', 'autofill'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — Autofill'),
    note: { ko: 'autocomplete 토큰의 정의', en: 'The definition of autocomplete tokens' },
  },
  {
    href: whatwg('interaction', 'attr-inputmode'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — The inputmode attribute'),
    note: { ko: '가상 키보드 힌트의 정의', en: 'The definition of the virtual keyboard hint' },
  },
  {
    href: formsTutorial('instructions/'),
    source: same('W3C WAI'),
    title: same('Forms Tutorial — Form Instructions'),
    note: {
      ko: '안내 글의 위치와 연결 (보충 자료)',
      en: 'Placing and connecting instructions (supporting)',
    },
  },
];

export const InputPurposePage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <RolesSection locale={locale} />
      <InstructionsSection locale={locale} />
      <PracticeSection locale={locale} />
      <ScopeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="validation-responsibility" />
    </DocLayout>
  );
};
