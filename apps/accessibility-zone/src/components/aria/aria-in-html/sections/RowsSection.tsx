import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { htmlAria } from '@/components/shared/aria';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

type Row = {
  anchor: string;
  element: string;
  ko: [string, string, string];
  en: [string, string, string];
};

/** ARIA in HTML 4장 표의 행을 줄인 것. 열은 암시적 의미 · 허용 role · 덧붙인 조건 순서다. */
const rows: Row[] = [
  {
    anchor: 'el-button',
    element: '<button>',
    ko: [
      'role=button',
      'checkbox · link · menuitem · switch · tab 등 (button은 허용되지만 권장하지 않음)',
      '—',
    ],
    en: [
      'role=button',
      'checkbox, link, menuitem, switch, tab, and others (button is allowed but NOT RECOMMENDED)',
      '—',
    ],
  },
  {
    anchor: 'el-a',
    element: '<a href>',
    ko: [
      'role=link',
      'button · checkbox · menuitem · tab 등 (link는 권장하지 않음)',
      'aria-disabled="true"는 권장하지 않음. 비활성으로 알리려면 href를 뺌',
    ],
    en: [
      'role=link',
      'button, checkbox, menuitem, tab, and others (link is NOT RECOMMENDED)',
      'aria-disabled="true" is NOT RECOMMENDED; remove href to convey disabled',
    ],
  },
  {
    anchor: 'el-input-checkbox',
    element: '<input type="checkbox">',
    ko: [
      'role=checkbox',
      'menuitemcheckbox · option · switch, aria-pressed와 함께면 button',
      'aria-checked를 쓰면 안 됨(MUST NOT)',
    ],
    en: [
      'role=checkbox',
      'menuitemcheckbox, option, switch; button with aria-pressed',
      'MUST NOT use aria-checked',
    ],
  },
  {
    anchor: 'el-h1-h6',
    element: '<h1>–<h6>',
    ko: ['role=heading, aria-level=숫자', 'none · presentation · tab', '—'],
    en: ['role=heading, aria-level = the number', 'none, presentation, tab', '—'],
  },
  {
    anchor: 'el-div',
    element: '<div>',
    ko: [
      'role=generic',
      '어떤 역할이든 (dl의 직계 자식이면 presentation · none만)',
      'generic은 쓰지 않아야 함 (SHOULD NOT)',
    ],
    en: [
      'role=generic',
      'Any role (only presentation or none as a direct child of dl)',
      'generic SHOULD NOT be used',
    ],
  },
];

const content = {
  ko: {
    intro: (
      <>
        ARIA in HTML의 4장 표는 HTML 요소마다 한 행입니다. 첫 열은 요소, 둘째 열은 요소가 이미 가진
        암시적 의미, 셋째 열은 작성자가 붙여도 되는 role과 aria-* 속성입니다. 셋째 열에 없는 role을
        붙이면 문서가 적합하지 않습니다.
      </>
    ),
    caption: 'ARIA in HTML의 다섯 요소 행 (원문을 줄인 것)',
    head: ['요소 (원문 행으로)', '암시적 의미', '허용되는 role', '덧붙인 조건'],
    after: (
      <>
        이 표는 원문을 줄인 것이라 빠진 역할이 있습니다. 판단할 때는 요소 이름을 눌러 원문 행을 직접
        봅니다. 암시적 의미 자체는 HTML-AAM이 정하고, ARIA in HTML은 그 결과를 옮겨 적습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The table in section 4 of ARIA in HTML has one row per HTML element. The first column is the
        element, the second its implicit meaning, and the third the roles and aria-* attributes an
        author may add. Adding a role not in the third column makes the document non-conforming.
      </>
    ),
    caption: 'Five element rows from ARIA in HTML (shortened)',
    head: ['Element (to the spec row)', 'Implicit meaning', 'Allowed roles', 'Added conditions'],
    after: (
      <>
        This table shortens the spec, so some roles are missing. When judging, select the element
        name and read the spec row itself. The implicit meaning is defined by HTML-AAM; ARIA in HTML
        restates it.
      </>
    ),
  },
};

export const RowsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.rows.id}>
      <DocH2 {...toc.rows} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="normative" />
      </p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={rows.map((row) => [
          <ExternalLink key="el" href={htmlAria(row.anchor)}>
            <code>{row.element}</code>
          </ExternalLink>,
          ...row[locale],
        ])}
      />
      <p>{c.after}</p>
    </section>
  );
};
