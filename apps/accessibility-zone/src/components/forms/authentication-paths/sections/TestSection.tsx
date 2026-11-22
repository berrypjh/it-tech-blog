import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { FORMS_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        WCAG 2.2는 기억하거나, 옮겨 적거나, 문제를 풀어야 하는 과업을{' '}
        <strong className="text-text-default">인지 기능 시험</strong>이라고 부릅니다. 인증의 어느
        단계에서든 이런 시험을 요구한다면, 그 단계가 아래 조건 가운데 하나를 제공해야 합니다.
      </>
    ),
    cite: 'WCAG 2.2 — 3.3.8 Accessible Authentication (Minimum) (Level AA)',
    caption: '인지 기능 시험을 요구할 때 허용되는 조건',
    head: ['조건', '뜻', '3.3.8 (AA)', '3.3.9 (AAA)'],
    rows: [
      ['대체 방법', '인지 기능 시험에 기대지 않는 다른 인증 방법', '허용', '허용'],
      ['보조 메커니즘', '시험을 마치도록 돕는 수단. 예: 비밀번호 관리자, 붙여넣기', '허용', '허용'],
      ['객체 인식', '사물을 알아보는 시험', '허용', '허용하지 않음'],
      [
        '개인 콘텐츠',
        '사용자가 그 사이트에 제공한 비텍스트 콘텐츠를 알아보는 시험',
        '허용',
        '허용하지 않음',
      ],
    ],
    after: (
      <>
        단계가 여럿이면 모든 단계가 조건을 지켜야 합니다. 비밀번호 단계는 붙여넣기를 허용하면서 코드
        단계에서 직접 옮겨 적게 하면 충족하지 못합니다. 객체 인식과 개인 콘텐츠는 AA에서 허용되지만,
        W3C의 해설은 가능하면 피하라고 권합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        WCAG 2.2 calls a task that requires remembering, transcribing, or solving a problem a{' '}
        <strong className="text-text-default">cognitive function test</strong>. If any step of
        authentication requires such a test, that step must provide one of the conditions below.
      </>
    ),
    cite: 'WCAG 2.2 — 3.3.8 Accessible Authentication (Minimum) (Level AA)',
    caption: 'Conditions allowed when a cognitive function test is required',
    head: ['Condition', 'Meaning', '3.3.8 (AA)', '3.3.9 (AAA)'],
    rows: [
      [
        'Alternative',
        'Another authentication method that does not rely on a cognitive function test',
        'Allowed',
        'Allowed',
      ],
      [
        'Mechanism',
        'A means that helps complete the test, e.g. password managers, paste',
        'Allowed',
        'Allowed',
      ],
      ['Object recognition', 'A test of recognizing objects', 'Allowed', 'Not allowed'],
      [
        'Personal content',
        'A test of identifying non-text content the user provided to the site',
        'Allowed',
        'Not allowed',
      ],
    ],
    after: (
      <>
        With several steps, every step must meet a condition. Allowing paste for the password but
        requiring manual transcription of the code does not satisfy it. Object recognition and
        personal content are allowed at AA, but W3C’s explanation advises avoiding them where
        possible.
      </>
    ),
  },
};

export const TestSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.test.id}>
      <DocH2 {...toc.test} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('accessible-authentication-minimum')}
        cite={c.cite}
        checkedOn={FORMS_CHECKED_ON}
      >
        A cognitive function test (such as remembering a password or solving a puzzle) is not
        required for any step in an authentication process unless that step provides at least one of
        the following: Alternative — another authentication method that does not rely on a cognitive
        function test. Mechanism — a mechanism is available to assist the user in completing the
        cognitive function test. Object Recognition — the cognitive function test is to recognize
        objects. Personal Content — the cognitive function test is to identify non-text content the
        user provided to the website.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
