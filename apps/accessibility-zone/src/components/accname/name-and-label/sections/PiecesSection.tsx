import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable, PracticeFrame } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const sample = {
  ko: { label: '연락처', value: '010-1234-5678', hint: '배송 기사님이 연락할 번호입니다.' },
  en: { label: 'Phone', value: '555-0123', hint: 'The number the courier will call.' },
};

const codeOf = (s: (typeof sample)['ko']) => `<label for="phone">${s.label}</label>
<input id="phone" type="tel" value="${s.value}" aria-describedby="phone-hint">
<p id="phone-hint">${s.hint}</p>`;

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="role-name-state" hash="five-parts" />
        에서 접근성 객체를 역할 · 이름 · 상태 · 값 · 관계로 나눠 읽었습니다. 여기서는 그중 이름에
        화면 라벨과 설명을 더해, 한 입력 칸에서 다섯 가지를 나란히 봅니다.
      </>
    ),
    label: '라벨 · 설명이 연결된 입력 칸',
    caption: '한 입력 칸의 다섯 정보',
    head: ['정보', '이 예제에서', '어디서 오나', '출처'],
    rows: (s: (typeof sample)['ko']) => [
      [
        '역할',
        'textbox',
        'input type="tel"의 암시적 역할',
        <SourceTag key="s" locale="ko" id="model" />,
      ],
      [
        '화면 라벨',
        `"${s.label}"`,
        '화면에 보이는 label 글자',
        <SourceTag key="s" locale="ko" id="dom" />,
      ],
      [
        '접근성 이름',
        `"${s.label}" (예상)`,
        'for · id로 연결된 label을 계산한 결과',
        <SourceTag key="s" locale="ko" id="model" />,
      ],
      [
        '설명',
        `"${s.hint}" (예상)`,
        'aria-describedby가 가리키는 글자를 계산한 결과',
        <SourceTag key="s" locale="ko" id="model" />,
      ],
      [
        '값',
        `"${s.value}"`,
        '입력 칸의 value 프로퍼티(지금 입력된 값)',
        <SourceTag key="s" locale="ko" id="dom" />,
      ],
    ],
    after: (
      <>
        역할은 객체의 종류이고, 값은 사용자가 지금 입력하거나 고른 정보입니다. 이름은 &quot;무엇을
        입력하는 칸인가&quot;, 설명은 그 밖의 보충 정보입니다. 이름과 설명은 브라우저가 규칙에 따라
        계산하므로, 표에서 &quot;예상&quot;이라고 적었습니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — Definition: label',
    practice: '실습',
    instructions:
      '아래 입력 칸을 개발자 도구의 접근성 탭에서 고르고, 이름 · 설명 · 역할 · 값을 위 표와 비교해 보세요. 값을 바꿔 입력하면 무엇이 바뀌고 무엇이 그대로인지도 봅니다.',
  },
  en: {
    intro: (
      <>
        On <PageLink locale="en" id="role-name-state" hash="five-parts" />, we read an accessible
        object as role, name, state, value, and relations. Here we add the visible label and the
        description to the name, and look at five pieces side by side on one input.
      </>
    ),
    label: 'An input with a connected label and description',
    caption: 'Five pieces of information on one input',
    head: ['Piece', 'In this example', 'Where it comes from', 'Source'],
    rows: (s: (typeof sample)['en']) => [
      [
        'Role',
        'textbox',
        'The implicit role of input type="tel"',
        <SourceTag key="s" locale="en" id="model" />,
      ],
      [
        'Visible label',
        `"${s.label}"`,
        'The label text shown on screen',
        <SourceTag key="s" locale="en" id="dom" />,
      ],
      [
        'Accessible name',
        `"${s.label}" (expected)`,
        'The result of computing the label connected by for and id',
        <SourceTag key="s" locale="en" id="model" />,
      ],
      [
        'Description',
        `"${s.hint}" (expected)`,
        'The result of computing the text aria-describedby points to',
        <SourceTag key="s" locale="en" id="model" />,
      ],
      [
        'Value',
        `"${s.value}"`,
        'The input’s value property (what is entered now)',
        <SourceTag key="s" locale="en" id="dom" />,
      ],
    ],
    after: (
      <>
        A role is the kind of object, and a value is the information the user has entered or chosen
        right now. The name says &quot;what this field is for,&quot; and the description is extra
        information. Names and descriptions are computed by the browser according to rules, so the
        table marks them &quot;expected.&quot;
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — Definition: label',
    practice: 'Exercise',
    instructions:
      'Select the input below in the Accessibility tab of developer tools, and compare its name, description, role, and value with the table above. Type a different value and see what changes and what stays.',
  },
};

export const PiecesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const s = sample[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.pieces.id}>
      <DocH2 {...toc.pieces} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={codeOf(s)} label={c.label} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows(s)} />
      <p>{c.after}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('dfn-labels')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        A label is presented to all users whereas the name may be hidden and only exposed by
        assistive technology. In many (but not all) cases the name and the label are the same.
      </NormativeQuote>
      <PracticeFrame label={c.practice} instructions={c.instructions}>
        <div className="flex flex-col gap-xs text-xsm">
          <label htmlFor="name-and-label-phone">{s.label}</label>
          <input
            id="name-and-label-phone"
            type="tel"
            defaultValue={s.value}
            aria-describedby="name-and-label-phone-hint"
            className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm"
          />
          <p id="name-and-label-phone-hint" className="text-xxsm text-text-light">
            {s.hint}
          </p>
        </div>
      </PracticeFrame>
    </section>
  );
};
