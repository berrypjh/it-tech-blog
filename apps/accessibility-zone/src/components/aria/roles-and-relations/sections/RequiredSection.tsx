import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable, ExternalLink, PracticeFrame } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, aria12 } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { Steps } from '@/components/shared/Steps';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        WAI-ARIA는 역할마다 특성 표(Characteristics)를 둡니다. 이 표에서 세 줄을 보면 그 역할이
        반드시 갖춰야 할 것을 알 수 있습니다.
      </>
    ),
    caption: '특성 표에서 볼 세 줄',
    head: ['원문의 줄', '뜻'],
    rows: [
      ['Required States and Properties', '이 역할에 반드시 있어야 하는 상태 · 속성'],
      ['Required Context Role', '이 역할이 안에 있어야(또는 소유되어야) 하는 부모 역할'],
      ['Required Owned Elements', '이 역할이 소유해야 하는 자식 역할'],
    ],
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — 5.2.7 Required Context Role',
    practice: '실습',
    instructions:
      '세 역할 가운데 하나를 골라 WAI-ARIA 1.2 원문의 특성 표에서 세 줄을 찾아 적어 보세요. 줄이 없으면 "없음"으로 적습니다.',
    roles: [
      { id: 'checkbox', label: 'checkbox' },
      { id: 'tab', label: 'tab' },
      { id: 'tablist', label: 'tablist' },
    ],
    stepsLabel: '찾는 순서',
    steps: [
      '아래 역할 이름을 눌러 원문의 그 역할 절을 엽니다.',
      '정의 문단 아래의 Characteristics 표로 내려갑니다.',
      '세 줄의 값을 적습니다. 줄 자체가 없으면 요구가 없다는 뜻입니다.',
    ],
    reveal: '풀이 보기',
    answerCaption: '세 역할의 필수 요구 (WAI-ARIA 1.2)',
    answerHead: ['역할', '필수 상태 · 속성', '필요한 부모 역할', '소유해야 할 자식'],
    answers: [
      ['checkbox', 'aria-checked', '없음', '없음'],
      ['tab', '없음', 'tablist', '없음'],
      ['tablist', '없음', '없음', 'tab'],
    ],
    answerNote: (
      <>
        checkbox의 aria-checked는 ARIA로 만든 체크박스에 필요한 것입니다.{' '}
        <code>&lt;input type=&quot;checkbox&quot;&gt;</code>는 checked 상태를 스스로 노출하므로
        aria-checked를 붙이지 않습니다. 이 규칙은 <PageLink locale="ko" id="aria-in-html" />
        에서 봅니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        WAI-ARIA gives each role a Characteristics table. Three rows of that table tell you what the
        role must have.
      </>
    ),
    caption: 'Three rows to read in the Characteristics table',
    head: ['Row in the spec', 'Meaning'],
    rows: [
      ['Required States and Properties', 'States and properties this role must have'],
      ['Required Context Role', 'The parent role this role must be inside (or owned by)'],
      ['Required Owned Elements', 'The child roles this role must own'],
    ],
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — 5.2.7 Required Context Role',
    practice: 'Exercise',
    instructions:
      'Pick one of the three roles and write down the three rows from its Characteristics table in the WAI-ARIA 1.2 text. If a row is missing, write "none."',
    roles: [
      { id: 'checkbox', label: 'checkbox' },
      { id: 'tab', label: 'tab' },
      { id: 'tablist', label: 'tablist' },
    ],
    stepsLabel: 'How to find them',
    steps: [
      'Select a role name below to open that role’s section in the spec.',
      'Scroll to the Characteristics table under the definition.',
      'Write down the values of the three rows. A missing row means there is no requirement.',
    ],
    reveal: 'Show solution',
    answerCaption: 'Requirements of the three roles (WAI-ARIA 1.2)',
    answerHead: [
      'Role',
      'Required states and properties',
      'Required parent role',
      'Required owned children',
    ],
    answers: [
      ['checkbox', 'aria-checked', 'None', 'None'],
      ['tab', 'None', 'tablist', 'None'],
      ['tablist', 'None', 'None', 'tab'],
    ],
    answerNote: (
      <>
        The aria-checked requirement on checkbox is for checkboxes built with ARIA.{' '}
        <code>&lt;input type=&quot;checkbox&quot;&gt;</code> exposes its checked state itself, so do
        not add aria-checked to it. That rule is covered on{' '}
        <PageLink locale="en" id="aria-in-html" />.
      </>
    ),
  },
};

export const RequiredSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.required.id}>
      <DocH2 {...toc.required} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <NormativeQuote
        locale={locale}
        href={aria12('scope')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        If a role has a required context, authors MUST ensure that an element with the role is
        contained inside (or owned by) an element with the required context role.
      </NormativeQuote>
      <PracticeFrame label={c.practice} instructions={c.instructions}>
        <div className="flex flex-col gap-sm text-xsm">
          <p className="font-semiBold text-text-default">{c.stepsLabel}</p>
          <Steps items={c.steps} />
        </div>
        <ul className="flex flex-wrap gap-md text-xsm">
          {c.roles.map((role) => (
            <li key={role.id}>
              <ExternalLink href={aria12(role.id)}>
                <code>{role.label}</code>
              </ExternalLink>
            </li>
          ))}
        </ul>
        <details className="rounded-sm border border-stroke-light p-md text-xsm">
          <summary className="cursor-pointer font-semiBold text-text-default">{c.reveal}</summary>
          <DocTable caption={c.answerCaption} head={c.answerHead} rows={c.answers} />
          <p>{c.answerNote}</p>
        </details>
      </PracticeFrame>
    </section>
  );
};
