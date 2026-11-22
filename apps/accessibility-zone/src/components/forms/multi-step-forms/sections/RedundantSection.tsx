import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { FORMS_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        1단계에서 이름을 넣었는데 2단계에서 “받는 사람 이름”을 처음부터 다시 치게 하면, 같은 일을 두
        번 시키는 것입니다. WCAG 2.2는 같은 과정 안에서 이미 받은 정보를 다시 요구할 때 자동으로
        채워 주거나 고를 수 있게 하라고 요구합니다.
      </>
    ),
    cite: 'WCAG 2.2 — 3.3.7 Redundant Entry (Level A)',
    caption: '다시 입력시키지 않는 사례와 3.3.7의 예외',
    head: ['상황', '판단', '이 예제 또는 근거'],
    rows: [
      ['2단계의 받는 사람 이름', '자동 채움', '1단계의 이름으로 채우고 고칠 수 있게 둠'],
      ['배송지와 청구지가 같음', '선택 제공', '“위와 같음”을 고르게 하는 방식도 충족'],
      ['비밀번호를 만들 때 한 번 더 입력', '예외: 필수', '다시 입력하는 것 자체가 확인의 목적'],
      ['결제 직전의 보안 코드', '예외: 보안', '콘텐츠의 보안을 위해 필요'],
      ['만료된 인증 코드', '예외: 유효하지 않음', '이전에 넣은 정보를 더 쓸 수 없음'],
    ],
    note: (
      <>
        이 기준은 같은 과정 안의 정보에만 적용됩니다. 다른 날 다시 방문했을 때의 정보나 브라우저의
        자동 채움은 이 기준이 요구하는 수단이 아닙니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Having entered a name in step 1 and then being made to type the “recipient name” from
        scratch in step 2 is doing the same work twice. WCAG 2.2 requires that information already
        given in the same process, when asked for again, be auto-populated or available to select.
      </>
    ),
    cite: 'WCAG 2.2 — 3.3.7 Redundant Entry (Level A)',
    caption: 'Cases of not asking again, and the exceptions of 3.3.7',
    head: ['Situation', 'Judgment', 'This example or the basis'],
    rows: [
      [
        'Recipient name in step 2',
        'Auto-populated',
        'Filled with the name from step 1 and left editable',
      ],
      [
        'Billing same as shipping',
        'Available to select',
        'Offering “same as above” also satisfies it',
      ],
      [
        'Typing a new password twice',
        'Exception: essential',
        'Re-entering is itself the confirmation',
      ],
      [
        'Security code right before payment',
        'Exception: security',
        'Required to ensure the security of the content',
      ],
      [
        'An expired verification code',
        'Exception: no longer valid',
        'The earlier information can no longer be used',
      ],
    ],
    note: (
      <>
        The criterion covers only information within the same process. Information from a visit on
        another day, or the browser’s autofill, is not the means this criterion requires.
      </>
    ),
  },
};

export const RedundantSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.redundant.id}>
      <DocH2 {...toc.redundant} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('redundant-entry')}
        cite={c.cite}
        checkedOn={FORMS_CHECKED_ON}
      >
        Information previously entered by or provided to the user that is required to be entered
        again in the same process is either: auto-populated, or available for the user to select.
        Except when: re-entering the information is essential, the information is required to ensure
        the security of the content, or previously entered information is no longer valid.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.note}</p>
    </section>
  );
};
