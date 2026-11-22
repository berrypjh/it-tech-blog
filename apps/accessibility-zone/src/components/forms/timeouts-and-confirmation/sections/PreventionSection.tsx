import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { FORMS_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        되돌리기 어려운 제출에는 실수를 막을 장치가 요구됩니다. 다만 AA 수준의 3.3.4는 모든 폼이
        아니라 정해진 종류의 페이지에만 적용됩니다.
      </>
    ),
    cite: 'WCAG 2.2 — 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)',
    caption: '3.3.4와 3.3.6의 적용 범위',
    head: ['기준', '적용되는 페이지', '충족하는 방법'],
    rows: [
      [
        '3.3.4 (AA)',
        '법적 약속이나 금융 거래를 일으키는 페이지, 저장된 사용자 데이터를 고치거나 지우는 페이지, 시험 답안을 제출하는 페이지',
        '되돌릴 수 있음 · 오류를 검사하고 고칠 기회를 줌 · 확정 전에 검토 · 확인 · 정정할 수 있음 가운데 하나',
      ],
      ['3.3.6 (AAA)', '사용자가 정보를 제출해야 하는 모든 페이지', '위와 같은 세 방법 가운데 하나'],
    ],
    noteTitle: '이 예제의 검토 화면은 제품 결정입니다',
    note: (
      <>
        익명 행사 신청은 법적 약속이나 금융 거래가 아니므로 3.3.4의 적용 대상이라고 단정할 수
        없습니다. 이 예제가 확정 전에 검토 화면을 둔 것은 흐름을 배우기 위한 제품 결정이고, 모든
        제출에 확인 단계가 있어야 한다는 뜻이 아닙니다. 세 방법 가운데 하나면 되므로, 오류를
        검사하고 고칠 기회를 주는 것만으로 충족하는 폼도 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A submission that is hard to undo calls for a safeguard against mistakes. But 3.3.4 at Level
        AA applies only to defined kinds of pages, not to every form.
      </>
    ),
    cite: 'WCAG 2.2 — 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)',
    caption: 'Scope of 3.3.4 and 3.3.6',
    head: ['Criterion', 'Pages it applies to', 'How to satisfy it'],
    rows: [
      [
        '3.3.4 (AA)',
        'Pages that cause legal commitments or financial transactions, that modify or delete user-controllable stored data, or that submit test responses',
        'One of: reversible; checked for errors with a chance to correct; reviewed, confirmed, and corrected before finalizing',
      ],
      [
        '3.3.6 (AAA)',
        'All pages that require the user to submit information',
        'One of the same three',
      ],
    ],
    noteTitle: 'The review screen in this example is a product decision',
    note: (
      <>
        An anonymous event application is not a legal commitment or a financial transaction, so it
        cannot be assumed to fall under 3.3.4. The review screen before confirming is a product
        decision made to teach the flow; it does not mean every submission must have a confirmation
        step. One of the three is enough, so some forms satisfy it just by checking for errors and
        giving a chance to correct them.
      </>
    ),
  },
};

export const PreventionSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.prevention.id}>
      <DocH2 {...toc.prevention} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('error-prevention-legal-financial-data')}
        cite={c.cite}
        checkedOn={FORMS_CHECKED_ON}
      >
        For web pages that cause legal commitments or financial transactions for the user to occur,
        that modify or delete user-controllable data in data storage systems, or that submit user
        test responses, at least one of the following is true: Reversible — submissions are
        reversible. Checked — data entered by the user is checked for input errors and the user is
        provided an opportunity to correct them. Confirmed — a mechanism is available for reviewing,
        confirming, and correcting information before finalizing the submission.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="note" title={c.noteTitle}>
        {c.note}
      </Callout>
    </section>
  );
};
