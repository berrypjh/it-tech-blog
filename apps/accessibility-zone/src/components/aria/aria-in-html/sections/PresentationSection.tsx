import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable, PracticeFrame } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, aria12 } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';

import { getToc } from '../toc';

const code = {
  ko: `<!-- 1. 적용됨: 배치에만 쓴 표의 표 의미를 지운다 -->
<table role="presentation">…</table>

<!-- 2. 무시됨: 포커스를 받는 요소는 원래 역할(버튼)로 노출 -->
<button role="none">저장</button>

<!-- 3. 무시됨: 전역 속성(aria-describedby)이 있으면 원래 역할(제목)로 노출 -->
<h2 role="presentation" aria-describedby="note">배송</h2>`,
  en: `<!-- 1. Applied: removes table meaning from a table used only for layout -->
<table role="presentation">…</table>

<!-- 2. Ignored: a focusable element is exposed with its own role (button) -->
<button role="none">Save</button>

<!-- 3. Ignored: with a global attribute (aria-describedby), exposed as its own role (heading) -->
<h2 role="presentation" aria-describedby="note">Shipping</h2>`,
};

const exercise = [
  '<ul role="list">…</ul>',
  '<input type="checkbox" role="switch">',
  '<h3 role="tab">배송비</h3>',
  '<div role="button">저장</div>',
  '<a href="/coupon" aria-disabled="true">쿠폰 받기</a>',
  '<button type="button" aria-pressed="false">굵게</button>',
];

const exerciseEn = [
  '<ul role="list">…</ul>',
  '<input type="checkbox" role="switch">',
  '<h3 role="tab">Fees</h3>',
  '<div role="button">Save</div>',
  '<a href="/coupon" aria-disabled="true">Get coupon</a>',
  '<button type="button" aria-pressed="false">Bold</button>',
];

const content = {
  ko: {
    intro: (
      <>
        <code>role=&quot;presentation&quot;</code>과 <code>role=&quot;none&quot;</code>은 요소의
        의미를 지웁니다. 그런데 WAI-ARIA는 지우면 안 되는 경우를 정해 두고, 그때는 브라우저가 이
        역할을 무시하게 합니다.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — Presentational Roles Conflict Resolution',
    label: 'presentation · none이 적용되는 경우와 무시되는 경우',
    after: (
      <>
        둘째 줄은 ARIA in HTML의 button 행에도 none이 없어 적합하지 않습니다. 그래도 누군가 적으면
        브라우저는 충돌 규칙에 따라 버튼으로 노출해야 합니다. 이 결과는 명세가 기대하는 노출이므로,
        실제 노출은 브라우저 도구로 확인합니다.
      </>
    ),
    practice: '실습',
    instructions:
      '여섯 코드를 각각 ARIA in HTML의 요소 행과 대조해 "중복 선언", "부적절한 덮어쓰기 · 권장하지 않음", "필요한 보완", "허용되는 역할 변경", "허용되지만 동작은 직접 만들어야 함" 가운데 하나로 분류해 보세요.',
    stepsLabel: '분류 순서',
    steps: [
      '요소 이름으로 원문 행을 찾습니다.',
      'role이 있으면 허용되는 role 목록에 있는지 봅니다. 암시적 의미와 같으면 중복입니다.',
      'aria-* 속성이 있으면 그 행의 덧붙인 조건을 봅니다.',
      '허용되더라도 포커스 · 키 동작 · 필요한 부모 역할이 남는지 봅니다.',
    ],
    reveal: '풀이 보기',
    answerCaption: '여섯 코드의 분류',
    answerHead: ['코드', '분류', '근거'],
    answers: [
      [
        '중복 선언',
        'ul 행: list는 권장하지 않음. 다만 목록 표시를 CSS로 지워 목록 의미를 숨기는 브라우저에서는 예외로 쓸 수 있다고 원문 3.2가 적음',
      ],
      ['허용되는 역할 변경', 'input type=checkbox 행이 switch를 허용. 지원은 직접 확인'],
      [
        '허용되지만 동작은 직접 만들어야 함',
        'h1–h6 행이 tab을 허용. tablist 안에 두고 키 동작을 만들어야 함(05.2)',
      ],
      [
        '허용되지만 동작은 직접 만들어야 함',
        'div는 어떤 역할이든 허용. 포커스와 키 동작이 없음(05.1)',
      ],
      ['권장하지 않음', 'a href 행: aria-disabled="true"는 권장하지 않음. href를 뺌'],
      ['필요한 보완', 'button이 가진 역할에 aria-pressed가 적용됨'],
    ],
  },
  en: {
    intro: (
      <>
        <code>role=&quot;presentation&quot;</code> and <code>role=&quot;none&quot;</code> remove an
        element&apos;s meaning. But WAI-ARIA lists cases where meaning must not be removed, and then
        has the browser ignore the role.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — Presentational Roles Conflict Resolution',
    label: 'When presentation and none apply and when they are ignored',
    after: (
      <>
        The second line is also non-conforming, because the button row of ARIA in HTML does not list
        none. Even so, if someone writes it, the browser must expose a button under the conflict
        rules. That result is the exposure the spec expects, so check the actual exposure in browser
        tools.
      </>
    ),
    practice: 'Exercise',
    instructions:
      'Check each of the six snippets against its element row in ARIA in HTML and classify it as "redundant declaration," "inappropriate override or not recommended," "needed addition," "allowed role change," or "allowed, but behavior must be built."',
    stepsLabel: 'How to classify',
    steps: [
      'Find the spec row by element name.',
      'If there is a role, check whether it is in the allowed roles. If it equals the implicit meaning, it is redundant.',
      'If there are aria-* attributes, read the added conditions in that row.',
      'Even if allowed, check whether focus, key behavior, or a required parent role remain.',
    ],
    reveal: 'Show solution',
    answerCaption: 'Classification of the six snippets',
    answerHead: ['Code', 'Kind', 'Basis'],
    answers: [
      [
        'Redundant declaration',
        'ul row: list is NOT RECOMMENDED. Section 3.2 notes an exception where some browsers drop list semantics when markers are removed with CSS',
      ],
      ['Allowed role change', 'The input type=checkbox row allows switch. Check support yourself'],
      [
        'Allowed, but behavior must be built',
        'The h1–h6 row allows tab. Put it in a tablist and build the keys (05.2)',
      ],
      [
        'Allowed, but behavior must be built',
        'div allows any role. Focus and key behavior are missing (05.1)',
      ],
      ['Not recommended', 'a href row: aria-disabled="true" is NOT RECOMMENDED. Remove href'],
      ['Needed addition', 'aria-pressed applies to the role button has'],
    ],
  },
};

export const PresentationSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const snippets = locale === 'ko' ? exercise : exerciseEn;

  return (
    <section aria-labelledby={toc.presentation.id}>
      <DocH2 {...toc.presentation} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('conflict_resolution_presentation_none')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        If an element is focusable, or otherwise interactive, user agents MUST ignore the
        presentation role and expose the element with its implicit role, in order to ensure that the
        element is operable. … If an element has global WAI-ARIA states or properties, user agents
        MUST ignore the presentation role and expose the element with its implicit role.
      </NormativeQuote>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={code[locale]} label={c.label} />
      <p>{c.after}</p>
      <PracticeFrame label={c.practice} instructions={c.instructions}>
        <div className="flex flex-col gap-sm text-xsm">
          <p className="font-semiBold text-text-default">{c.stepsLabel}</p>
          <Steps items={c.steps} />
        </div>
        <ol className="flex list-decimal flex-col gap-xs pl-xl text-xsm">
          {snippets.map((snippet) => (
            <li key={snippet}>
              <code>{snippet}</code>
            </li>
          ))}
        </ol>
        <details className="rounded-sm border border-stroke-light p-md text-xsm">
          <summary className="cursor-pointer font-semiBold text-text-default">{c.reveal}</summary>
          <DocTable
            caption={c.answerCaption}
            head={c.answerHead}
            rows={c.answers.map((answer, i) => [<code key="code">{snippets[i]}</code>, ...answer])}
          />
        </details>
      </PracticeFrame>
    </section>
  );
};
