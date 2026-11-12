import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, aria12 } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<label for="checkin">체크인 날짜</label>
<input id="checkin" type="text"
       aria-describedby="checkin-hint"
       aria-invalid="true" aria-errormessage="checkin-error">
<p id="checkin-hint">YYYY-MM-DD 형식으로 적습니다.</p>
<p id="checkin-error">체크인 날짜는 오늘 이후여야 합니다.</p>`,
  en: `<label for="checkin">Check-in date</label>
<input id="checkin" type="text"
       aria-describedby="checkin-hint"
       aria-invalid="true" aria-errormessage="checkin-error">
<p id="checkin-hint">Use the format YYYY-MM-DD.</p>
<p id="checkin-error">The check-in date must be after today.</p>`,
};

const content = {
  ko: {
    intro: (
      <>
        오류가 난 입력 칸에는 네 가지가 겹쳐 있습니다. 하나로 묶어 생각하면 &quot;오류 메시지를
        연결했으니 바로 읽어 주겠지&quot; 같은 잘못된 기대가 생깁니다.
      </>
    ),
    label: '오류 상태의 입력 칸 (교육 예시)',
    caption: '오류 입력 칸의 네 가지 정보',
    head: ['정보', '이 예제에서', '무엇인가'],
    rows: [
      ['안내', 'aria-describedby → checkin-hint', '설명 계산에 들어가는 보충 정보'],
      ['오류 표시', '빨간 테두리 · 아이콘 등', '화면의 표시. 그 자체로는 상태를 전하지 않음'],
      ['유효 상태', 'aria-invalid="true"', '값이 기대한 형식에 맞지 않는다는 상태'],
      [
        '오류 메시지 관계',
        'aria-errormessage → checkin-error',
        '오류 문구를 가리키는 관계. aria-invalid가 false가 아닐 때(예: true)만 노출됨',
      ],
    ],
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-errormessage',
    notDescription: (
      <>
        aria-errormessage는 AccName의 설명 계산 표에 없습니다. 그래서 오류 문구가 설명에 들어간다고
        가정하지 않습니다. 오류 메시지를 언제, 어떻게 읽어 주는지도 명세가 보장하지 않습니다. 새로
        나타난 오류를 바로 알리고 싶다면 WAI-ARIA가 말하듯 라이브 영역 같은 별도 수단이 필요합니다.
      </>
    ),
    laterTitle: '폼 오류 복구는 뒤 장에서 다룹니다',
    later: (
      <>
        언제 aria-invalid를 켜고 끌지, 오류 요약과 포커스 이동을 어떻게 설계할지는 폼 오류 복구를
        다루는 뒤 장의 내용입니다. 이 페이지는 상태와 관계를 나누는 데까지만 봅니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Four things overlap on an input with an error. Treating them as one leads to wrong
        expectations such as &quot;I connected the error message, so it will be read right
        away.&quot;
      </>
    ),
    label: 'An input in an error state (teaching example)',
    caption: 'Four pieces of information on an input with an error',
    head: ['Piece', 'In this example', 'What it is'],
    rows: [
      [
        'Hint',
        'aria-describedby → checkin-hint',
        'Extra information that goes into the description computation',
      ],
      [
        'Error display',
        'A red border, an icon, and so on',
        'What is shown on screen. It conveys no state by itself',
      ],
      [
        'Validity state',
        'aria-invalid="true"',
        'The state that the value does not match the expected format',
      ],
      [
        'Error message relation',
        'aria-errormessage → checkin-error',
        'A relation that points to the error text; exposed only when aria-invalid is not false (e.g. true)',
      ],
    ],
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-errormessage',
    notDescription: (
      <>
        aria-errormessage is not in AccName&apos;s description table. So do not assume the error
        text becomes part of the description. The specs also do not guarantee when or how an error
        message is read. To announce a newly shown error at once, a separate means such as a live
        region is needed, as WAI-ARIA says.
      </>
    ),
    laterTitle: 'Form error recovery is covered in a later chapter',
    later: (
      <>
        When to turn aria-invalid on and off, and how to design an error summary and focus movement,
        belong to the later chapter on form error recovery. This page stops at separating the state
        and the relation.
      </>
    ),
  },
};

export const ErrorsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.errors.id}>
      <DocH2 {...toc.errors} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={code[locale]} label={c.label} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <NormativeQuote
        locale={locale}
        href={aria12('aria-errormessage')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        Authors MUST use aria-invalid in conjunction with aria-errormessage. … User agents MUST NOT
        expose aria-errormessage for an object with an aria-invalid value of false. Authors MAY call
        attention to a newly rendered error message with a live region
      </NormativeQuote>
      <p>{c.notDescription}</p>
      <Callout variant="note" title={c.laterTitle}>
        {c.later}
      </Callout>
    </section>
  );
};
