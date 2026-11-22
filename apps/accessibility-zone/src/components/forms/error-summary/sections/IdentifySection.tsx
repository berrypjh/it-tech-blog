import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { FORMS_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        WCAG 2.2는 오류에 대해 두 가지를 따로 요구합니다. 어느 항목이 틀렸는지 글로 알리는 것과,
        고칠 방법을 알고 있으면 그 방법을 알려 주는 것입니다. 수준도 다릅니다.
      </>
    ),
    cite1: 'WCAG 2.2 — 3.3.1 Error Identification (Level A)',
    cite2: 'WCAG 2.2 — 3.3.3 Error Suggestion (Level AA)',
    caption: '신청서의 오류를 식별과 제안으로 나눈 문구',
    head: ['상황', '오류 식별 (3.3.1)', '수정 제안 (3.3.3)'],
    rows: [
      ['이름을 비움', '이름 칸이 비어 있습니다.', '확인서에 표시할 이름을 입력하세요.'],
      [
        '이메일에 “kim@”',
        '이메일 “kim@”은 주소 형식이 아닙니다.',
        '@ 뒤에 도메인까지 입력하세요. 예: name@example.com',
      ],
      [
        '참가 인원에 “7”',
        '참가 인원 “7”은 받을 수 없는 값입니다.',
        '1부터 4 사이의 숫자로 바꾸세요.',
      ],
    ],
    note: (
      <>
        3.3.3에는 예외가 있습니다. 제안이 보안이나 콘텐츠의 목적을 해치면 제안하지 않습니다. 틀린
        비밀번호에 맞는 값을 알려 줄 수 없는 것이 그 예입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        WCAG 2.2 asks for two separate things about errors: saying in text which item is in error,
        and giving the correction when one is known. The levels differ too.
      </>
    ),
    cite1: 'WCAG 2.2 — 3.3.1 Error Identification (Level A)',
    cite2: 'WCAG 2.2 — 3.3.3 Error Suggestion (Level AA)',
    caption: 'Application errors worded as identification and suggestion',
    head: ['Situation', 'Error identification (3.3.1)', 'Error suggestion (3.3.3)'],
    rows: [
      ['Name left empty', 'Name is empty.', 'Enter the name to show on the confirmation.'],
      [
        '“kim@” as the email',
        'The email “kim@” is not in address format.',
        'Include the domain after the @. Example: name@example.com',
      ],
      [
        '“7” as the number of people',
        'The number of people “7” cannot be accepted.',
        'Change it to a number from 1 to 4.',
      ],
    ],
    note: (
      <>
        3.3.3 has an exception: do not suggest when it would jeopardize the security or purpose of
        the content. A wrong password cannot be answered with the right one.
      </>
    ),
  },
};

export const IdentifySection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.identify.id}>
      <DocH2 {...toc.identify} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('error-identification')}
        cite={c.cite1}
        checkedOn={FORMS_CHECKED_ON}
      >
        If an input error is automatically detected, the item that is in error is identified and the
        error is described to the user in text.
      </NormativeQuote>
      <NormativeQuote
        locale={locale}
        href={wcag22('error-suggestion')}
        cite={c.cite2}
        checkedOn={FORMS_CHECKED_ON}
      >
        If an input error is automatically detected and suggestions for correction are known, then
        the suggestions are provided to the user, unless it would jeopardize the security or purpose
        of the content.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.note}</p>
    </section>
  );
};
