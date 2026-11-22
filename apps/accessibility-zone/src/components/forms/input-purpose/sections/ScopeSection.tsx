import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { FORMS_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        WCAG 2.2의 1.3.5는 모든 입력 칸이 아니라{' '}
        <strong className="text-text-default">사용자 자신에 관한 정보</strong>를 받는 칸 가운데,
        표준이 목록으로 정한 목적에 해당하는 칸에 적용됩니다.
      </>
    ),
    cite: 'WCAG 2.2 — 1.3.5 Identify Input Purpose (Level AA)',
    caption: '신청서의 칸마다 1.3.5 적용 여부',
    head: ['칸', '누구의 정보인가', '1.3.5', '이 예제의 표시'],
    rows: [
      ['이름', '신청하는 사용자', '적용', 'autocomplete="name"'],
      ['이메일', '신청하는 사용자', '적용', 'autocomplete="email"'],
      ['전화번호', '신청하는 사용자', '적용', 'autocomplete="tel"'],
      ['참가 인원', '사용자 정보가 아님', '대상 아님', '목적 토큰 없음'],
      ['동반자 이름', '다른 사람', '대상 아님', '사용자 토큰을 달지 않음'],
    ],
    note: (
      <>
        HTML의 autocomplete 토큰 가운데에는 WCAG 목록에 없는 것도 있습니다. 일회용 코드에 쓰는{' '}
        <code>one-time-code</code>가 그 예로, 자동 채움에는 쓸모가 있지만 1.3.5가 요구하는 목적은
        아닙니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        WCAG 2.2’s 1.3.5 does not apply to every field. It applies to fields that collect{' '}
        <strong className="text-text-default">information about the user</strong> and serve a
        purpose in the list the standard defines.
      </>
    ),
    cite: 'WCAG 2.2 — 1.3.5 Identify Input Purpose (Level AA)',
    caption: 'Whether 1.3.5 applies to each field of the application',
    head: ['Field', 'Whose information', '1.3.5', 'Marking in this example'],
    rows: [
      ['Name', 'The applying user', 'Applies', 'autocomplete="name"'],
      ['Email', 'The applying user', 'Applies', 'autocomplete="email"'],
      ['Phone', 'The applying user', 'Applies', 'autocomplete="tel"'],
      ['Number of people', 'Not user information', 'Out of scope', 'No purpose token'],
      ['Companion’s name', 'Another person', 'Out of scope', 'No user token is added'],
    ],
    note: (
      <>
        Some HTML autocomplete tokens are not in the WCAG list. <code>one-time-code</code>, used for
        one-time codes, is an example: useful for autofill, but not a purpose 1.3.5 requires.
      </>
    ),
  },
};

export const ScopeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.scope.id}>
      <DocH2 {...toc.scope} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('identify-input-purpose')}
        cite={c.cite}
        checkedOn={FORMS_CHECKED_ON}
      >
        The purpose of each input field collecting information about the user can be
        programmatically determined when: the input field serves a purpose identified in the Input
        Purposes for user interface components section; and the content is implemented using
        technologies with support for identifying the expected meaning for form input data.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.note}</p>
    </section>
  );
};
