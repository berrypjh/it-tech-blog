import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { apg, aria12, whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { ContractsSection } from './sections/ContractsSection';
import { NativeSection } from './sections/NativeSection';
import { PageHeader } from './sections/PageHeader';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '컨트롤은 과업에서 고릅니다. 여러 개를 따로 고르면 checkbox, 하나만 고르면 radio, 누르는 즉시 켜고 끄면 switch, 명령이 눌린 채 남으면 toggle button입니다.',
    'Checkbox와 radio는 네이티브 요소와 fieldset · legend로 만듭니다. radio 그룹은 방향키로 옮기며 고르고 Tab으로 나가며, 고른 항목은 다시 눌러도 풀리지 않습니다.',
    'Switch와 toggle button은 이름을 그대로 두고 aria-checked · aria-pressed만 바꿉니다.',
    '혼합 상태는 checkbox와 toggle button에서만 뜻을 갖습니다. radio와 switch의 mixed는 false로 다뤄집니다.',
  ],
  en: [
    'Choose a control from the task: a checkbox to choose several independently, a radio to choose only one, a switch to turn on or off immediately, a toggle button when a command stays pressed.',
    'Build checkboxes and radios from native elements with fieldset and legend. A radio group moves and chooses with arrow keys and is left with Tab; a chosen item is not cleared by pressing again.',
    'A switch and a toggle button keep their name and change only aria-checked or aria-pressed.',
    'The mixed state has meaning only on a checkbox and a toggle button. mixed on a radio or switch is treated as false.',
  ],
};

const references: DocReference[] = [
  {
    href: whatwg('input', 'checkbox-state-(type=checkbox)'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — Checkbox state'),
    note: {
      ko: 'checked와 indeterminate의 정의',
      en: 'The definition of checked and indeterminate',
    },
  },
  {
    href: whatwg('input', 'radio-button-state-(type=radio)'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — Radio Button state'),
    note: { ko: 'radio 그룹의 정의', en: 'The definition of a radio button group' },
  },
  {
    href: aria12('aria-checked'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-checked'),
    note: {
      ko: '규범 근거. radio · switch의 mixed는 false로 취급 (2023-06-06)',
      en: 'The normative basis; mixed on radio and switch is treated as false (2023-06-06)',
    },
  },
  {
    href: aria12('aria-pressed'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — aria-pressed'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: apg('switch'),
    source: same('W3C WAI'),
    title: same('APG — Switch Pattern'),
    note: { ko: '권장 패턴. 규범이 아님', en: 'A recommended pattern; not normative' },
  },
  {
    href: apg('button'),
    source: same('W3C WAI'),
    title: same('APG — Button Pattern'),
    note: {
      ko: 'toggle button의 권장 패턴. 규범이 아님',
      en: 'The recommended toggle button pattern; not normative',
    },
  },
  {
    href: apg('radio'),
    source: same('W3C WAI'),
    title: same('APG — Radio Group Pattern'),
    note: { ko: '권장 패턴. 규범이 아님', en: 'A recommended pattern; not normative' },
  },
];

export const SelectionControlsPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <ContractsSection locale={locale} />
      <NativeSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="disclosure-and-accordion" />
    </DocLayout>
  );
};
