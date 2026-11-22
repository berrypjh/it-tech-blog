import type { Locale } from '@it-tech-blog/preferences';
import { DocLayout, type DocReference } from '@it-tech-blog/ui';
import { ReferencesSection, same, SummarySection } from '@it-tech-blog/ui';

import { apg, aria12, whatwg } from '@/components/shared/aria';
import { NextPage } from '@/components/shared/PageLink';

import { EditingSection } from './sections/EditingSection';
import { PageHeader } from './sections/PageHeader';
import { PartsSection } from './sections/PartsSection';
import { PracticeSection } from './sections/PracticeSection';
import { getToc } from './toc';

const points = {
  ko: [
    '치는 도중의 빈 값과 불완전한 값은 그대로 두고, 칸을 떠날 때 검사합니다. 글자마다 보정하면 숫자를 완성할 수 없습니다.',
    '빈 값 · 숫자가 아닌 값 · 범위 밖 · 소수를 구분해 알리고, 틀린 글자를 조용히 바꾸지 않습니다.',
    '네이티브 number 칸에 이름을 가진 증감 버튼을 더하고, 범위와 단계의 규칙은 칸의 stepUp() · stepDown() 한 곳에 둡니다.',
    '위아래 화살표의 증감은 브라우저에 맡기고, Home · End 같은 텍스트 편집 키는 가로채지 않습니다.',
  ],
  en: [
    'Leave empty and incomplete values alone while typing and check on leaving the field. Correcting on every character makes a number impossible to finish.',
    'Tell apart empty, not-a-number, out-of-range, and decimal values when reporting, and do not silently change wrong characters.',
    'Add named stepping buttons to the native number field, and keep the rules of range and step in one place, the field’s stepUp() and stepDown().',
    'Leave stepping with the up and down arrows to the browser, and do not intercept text-editing keys such as Home and End.',
  ],
};

const references: DocReference[] = [
  {
    href: whatwg('input', 'number-state-(type=number)'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — Number state'),
    note: {
      ko: 'min · max · step과 stepUp() · stepDown()',
      en: 'min, max, step, and stepUp() and stepDown()',
    },
  },
  {
    href: whatwg('form-control-infrastructure', 'the-constraint-validation-api'),
    source: same('WHATWG'),
    title: same('HTML Living Standard — The constraint validation API'),
    note: { ko: 'validity의 항목들', en: 'The entries of validity' },
  },
  {
    href: aria12('spinbutton'),
    source: same('W3C'),
    title: same('WAI-ARIA 1.2 — spinbutton'),
    note: { ko: '규범 근거 (2023-06-06)', en: 'The normative basis (2023-06-06)' },
  },
  {
    href: apg('spinbutton'),
    source: same('W3C WAI'),
    title: same('APG — Spinbutton Pattern'),
    note: {
      ko: '직접 만든 위젯의 권장 키. 규범이 아님',
      en: 'Recommended keys for a hand-built widget; not normative',
    },
  },
];

export const SpinbuttonInputPage = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <DocLayout toc={Object.values(toc)}>
      <PageHeader locale={locale} />
      <EditingSection locale={locale} />
      <PartsSection locale={locale} />
      <PracticeSection locale={locale} />
      <SummarySection item={toc.summary} points={points[locale]} />
      <ReferencesSection item={toc.references} locale={locale} references={references} />
      <NextPage locale={locale} id="window-splitter" />
    </DocLayout>
  );
};
