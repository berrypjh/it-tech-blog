import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<!-- ① 내용만 -->
<button type="button">예약 변경</button>

<!-- ② aria-label -->
<button type="button" aria-label="예약 수정하기">예약 변경</button>

<!-- ③ 유효한 aria-labelledby -->
<h3 id="room">객실 A</h3>
<button type="button" id="change" aria-labelledby="change room">예약 변경</button>`,
  en: `<!-- ① Content only -->
<button type="button">Change booking</button>

<!-- ② aria-label -->
<button type="button" aria-label="Edit reservation">Change booking</button>

<!-- ③ A valid aria-labelledby -->
<h3 id="room">Room A</h3>
<button type="button" id="change" aria-labelledby="change room">Change booking</button>`,
};

const content = {
  ko: {
    intro: (
      <>
        화면에는 세 버튼 모두 &quot;예약 변경&quot;이 보입니다. 하지만 이름은 서로 다른 단계에서
        정해집니다. 표는 각 버튼을 같은 네 칸으로 기록한 것입니다.
      </>
    ),
    label: '같은 모양의 세 버튼',
    caption: '세 버튼의 계산 기록',
    head: [
      '버튼',
      '역할의 이름 허용',
      '적용 가능한 출처',
      '참조가 유효한가',
      '끝난 단계',
      '예상 이름',
    ],
    rows: [
      ['①', '허용 (button)', '내용', '—', 'Name From Content', '"예약 변경"'],
      ['②', '허용 (button)', 'aria-label, 내용', '—', 'AriaLabel', '"예약 수정하기"'],
      [
        '③',
        '허용 (button)',
        'aria-labelledby, 내용',
        'change · room 둘 다 있음',
        'LabelledBy',
        '"예약 변경 객실 A"',
      ],
    ],
    after: (
      <>
        세 버튼 모두 button 역할이라 이름이 허용되고, 내용도 후보입니다. ②와 ③은 앞 단계가 비어 있지
        않은 결과를 돌려주며 끝나서, 내용 단계까지 가지 않습니다. 끝난 단계를 적어 두면 화면의
        글자가 왜 이름에 없는지 바로 설명할 수 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        All three buttons show &quot;Change booking&quot; on screen. But their names are settled at
        different steps. The table records each button in the same four columns.
      </>
    ),
    label: 'Three buttons that look the same',
    caption: 'Computation record of the three buttons',
    head: [
      'Button',
      'Role allows a name?',
      'Applicable sources',
      'Are references valid?',
      'Step that finished',
      'Expected name',
    ],
    rows: [
      ['①', 'Yes (button)', 'Content', '—', 'Name From Content', '"Change booking"'],
      ['②', 'Yes (button)', 'aria-label, content', '—', 'AriaLabel', '"Edit reservation"'],
      [
        '③',
        'Yes (button)',
        'aria-labelledby, content',
        'Both change and room exist',
        'LabelledBy',
        '"Change booking Room A"',
      ],
    ],
    after: (
      <>
        All three have the button role, so a name is allowed and content is a candidate. ② and ③
        stop when an earlier step returns a non-empty result, so they never reach the content step.
        Writing down the step that finished explains at once why visible text is missing from a
        name.
      </>
    ),
  },
};

export const TraceSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.trace.id}>
      <DocH2 {...toc.trace} />
      <p>{c.intro}</p>
      <p className="flex flex-wrap gap-sm">
        <SourceTag locale={locale} id="example" />
        <SourceTag locale={locale} id="model" />
      </p>
      <CodeBlock code={code[locale]} label={c.label} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
