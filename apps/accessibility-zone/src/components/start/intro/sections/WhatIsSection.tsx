import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';
import { Layers, X } from 'lucide-react';

import { type FailureStageId, failureStages } from '@/components/shared/failureStages';
import { StageLabel } from '@/components/shared/StageLabel';

import { TaskFlowDiagram } from '../diagrams/TaskFlowDiagram';
import { getToc } from '../toc';

const WAI_INTRO = 'https://www.w3.org/WAI/fundamentals/accessibility-intro/';

const content = {
  ko: {
    intro: (
      <>
        W3C의 Web Accessibility Initiative(WAI)는 웹접근성을{' '}
        <ExternalLink href={WAI_INTRO}>이렇게 정의합니다</ExternalLink>.
      </>
    ),
    definitionTitle: '정의',
    definition: (
      <>
        웹접근성은 장애가 있는 사람이 웹사이트, 도구, 기술을 <strong>사용할 수 있도록</strong>{' '}
        설계하고 개발하는 것입니다. 구체적으로는 웹을 인식·이해·탐색·상호작용하고, 웹에{' '}
        <strong>기여</strong>할 수 있게 하는 것입니다.
      </>
    ),
    usable:
      '"사용할 수 있다"는 말이 핵심입니다. 사용자는 화면을 감상하러 오지 않습니다. 회원가입을 하고, 주문을 취소하고, 예약을 변경하러 옵니다.',
    contribute:
      '"기여"는 읽고 누르는 것 너머의 활동입니다. 리뷰와 댓글을 쓰고, 문서를 편집하고, 사진을 올리고, 설문에 답하는 일도 접근성이 가능하게 해야 하는 활동입니다. 접근성을 볼 때는 "볼 수 있나"보다 "이 사람이 하려던 일을 끝낼 수 있나"를 묻습니다.',
    flowHeading: '사용자가 작업을 끝내기까지',
    flowBody: (
      <>
        접근성은 사용자의 능력이나 사용하는 기술 때문에 이 흐름에 <strong>불필요한 장벽</strong>이
        생기지 않도록 만드는 일입니다.
      </>
    ),
    notHeading: '접근성을 좁게 보는 생각',
    notItems: [
      {
        title: '스크린 리더만 대응하면 된다',
        missing: '확대, 키보드, 음성 입력, 스위치, 인지적 필요를 가진 사용자가 빠집니다.',
      },
      {
        title: 'aria-* 속성을 붙이면 된다',
        missing:
          'ARIA는 HTML의 의미를 보충할 뿐입니다. 알맞은 요소를 먼저 쓰지 않으면 오히려 장벽이 됩니다.',
      },
      {
        title: '색상 대비만 맞추면 된다',
        missing: '대비는 "인식" 단계의 한 조건입니다. 탐색 · 조작 · 오류 이해는 그대로 남습니다.',
      },
      {
        title: '출시 직전에 QA로 확인하면 된다',
        missing: '구조와 컴포넌트에서 생긴 장벽은 마지막에 고치기 어렵고, 화면마다 다시 생깁니다.',
      },
      {
        title: '장애가 있는 사용자용 화면을 따로 만들면 된다',
        missing:
          '따로 만든 화면은 기능과 갱신이 뒤처집니다. 목표는 하나의 제품을 여러 방식으로 쓰게 하는 것입니다.',
      },
    ],
    notBody: (
      <>
        다섯 가지 모두 접근성 작업의 <strong>일부</strong>일 수는 있지만, 어느 하나도 접근성 전체를
        대신하지 못합니다.
      </>
    ),
    scopeHeading: '접근성이 실제로 포괄하는 범위',
    scopeIntro: '위의 과업 흐름에 맞춰 보면, 단계마다 페이지가 갖춰야 할 것이 있습니다.',
    scopeCaption: '과업 단계별로 페이지가 갖춰야 할 것',
    scopeHead: ['과업 단계', '페이지가 갖춰야 할 것'],
    scopeAll: '모든 단계',
    scope: {
      perceive: ['대체 텍스트와 자막', '충분한 대비와 크기', '색에만 기대지 않는 표시'],
      understand: ['HTML 구조와 의미', '알기 쉬운 문구', '예측 가능한 동작'],
      navigate: ['키보드로 닿는 모든 기능', '포커스 위치와 순서', '제목과 랜드마크'],
      operate: ['여러 입력 방식', '충분한 대상 크기', '드래그 없이 쓰는 방법'],
      state: ['상태 변화 알림(선택 · 펼침 · 로딩)', '무엇을 고칠지 알려주는 오류 안내'],
      complete: [
        '조절할 수 있는 시간 제한',
        '중간에 사라지지 않는 입력',
        '확정 전 확인 · 되돌리기',
      ],
      all: ['보조기술 호환성', '확대와 리플로우', '모션 줄이기'],
    } satisfies Record<FailureStageId | 'all', string[]>,
    scopeBody: (
      <>
        한 단계라도 비면 그 지점에서 과업이 멈춥니다. 그래서 접근성은 항목을 하나씩 체크하는 일이
        아니라, <strong>과업 흐름 전체가 끊기지 않는지</strong> 보는 일입니다. 위의 좁은 생각들은
        모두 이 표의 한두 줄만 보고 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The W3C Web Accessibility Initiative (WAI){' '}
        <ExternalLink href={WAI_INTRO}>defines web accessibility</ExternalLink> as follows.
      </>
    ),
    definitionTitle: 'Definition',
    definition: (
      <>
        Web accessibility means that websites, tools, and technologies are designed and developed so
        that people with disabilities <strong>can use them</strong>. More specifically, people can
        perceive, understand, navigate, and interact with the web, and <strong>contribute</strong>{' '}
        to it.
      </>
    ),
    usable:
      '"Can use" is the key phrase. People do not come to admire a screen. They come to sign up, cancel an order, or change a booking.',
    contribute:
      '"Contribute" goes beyond reading and pressing. Writing reviews and comments, editing documents, uploading photos, and answering surveys are activities accessibility must make possible too. Instead of asking "can they see it?", ask "can this person finish what they came to do?"',
    flowHeading: 'From arrival to a finished task',
    flowBody: (
      <>
        Accessibility means making sure no <strong>unnecessary barrier</strong> appears in this flow
        because of a person&apos;s abilities or the technology they use.
      </>
    ),
    notHeading: 'Narrow views of accessibility',
    notItems: [
      {
        title: 'Supporting screen readers is enough',
        missing:
          'People who use magnification, keyboards, speech input, switches, or have cognitive needs are left out.',
      },
      {
        title: 'Adding aria-* attributes is enough',
        missing:
          'ARIA only supplements HTML semantics. Without the right element first, it can become a barrier.',
      },
      {
        title: 'Fixing color contrast is enough',
        missing:
          'Contrast is one condition of the "perceive" stage. Navigation, operation, and understanding errors remain.',
      },
      {
        title: 'A QA check right before release is enough',
        missing:
          'Barriers built into structure and components are hard to fix at the end and reappear on every screen.',
      },
      {
        title: 'A separate screen for disabled users is enough',
        missing:
          'Separate screens fall behind in features and updates. The goal is one product that works in many ways.',
      },
    ],
    notBody: (
      <>
        Each of the five can be <strong>part</strong> of accessibility work, but none of them
        replaces the whole.
      </>
    ),
    scopeHeading: 'What accessibility actually covers',
    scopeIntro: 'Along the task flow above, each stage has things the page must provide.',
    scopeCaption: 'What the page must provide at each task stage',
    scopeHead: ['Task stage', 'What the page must provide'],
    scopeAll: 'Every stage',
    scope: {
      perceive: [
        'Text alternatives and captions',
        'Enough contrast and size',
        'Not relying on color alone',
      ],
      understand: ['HTML structure and meaning', 'Plain wording', 'Predictable behavior'],
      navigate: [
        'Every function reachable by keyboard',
        'Focus position and order',
        'Headings and landmarks',
      ],
      operate: ['Many input methods', 'Large enough targets', 'A way to work without dragging'],
      state: [
        'Announcing state changes (selected · expanded · loading)',
        'Error guidance that says what to fix',
      ],
      complete: [
        'Adjustable time limits',
        'Input that is not lost midway',
        'Review before submitting · undo',
      ],
      all: ['Assistive technology support', 'Zoom and reflow', 'Reduced motion'],
    } satisfies Record<FailureStageId | 'all', string[]>,
    scopeBody: (
      <>
        If any one stage is missing, the task stops right there. So accessibility is not ticking off
        items one by one but checking that <strong>the whole task flow never breaks</strong>. Each
        narrow view above looks at only one or two of these rows.
      </>
    ),
  },
};

/** 범위 표의 한 칸 — 항목을 가로로 흘리고 사이에 넉넉한 구분점을 둔다. 좁으면 줄을 바꾼다. */
const ScopeItems = ({ items }: { items: string[] }) => (
  <List className="flex flex-wrap gap-x-md gap-y-2xs">
    {items.map((item, i) => (
      <ListItem key={item} className="flex items-center gap-x-md">
        {i > 0 && (
          <span aria-hidden="true" className="text-text-light">
            ·
          </span>
        )}
        {item}
      </ListItem>
    ))}
  </List>
);

export const WhatIsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.whatIs.id}>
      <DocH2 {...toc.whatIs} />
      <p>{c.intro}</p>

      <Callout variant="note" title={c.definitionTitle}>
        <p>{c.definition}</p>
      </Callout>

      <p>{c.usable}</p>
      <p>{c.contribute}</p>

      <DocH3>{c.flowHeading}</DocH3>
      <TaskFlowDiagram locale={locale} />
      <p>{c.flowBody}</p>

      <DocH3>{c.notHeading}</DocH3>
      <div className="my-lg">
        <List className="flex flex-col gap-md">
          {c.notItems.map((item) => (
            <ListItem key={item.title} className="flex gap-sm">
              <X className="mt-xs h-4 w-4 shrink-0 text-text-error" aria-hidden="true" />
              <span className="flex flex-col gap-2xs">
                <span className="font-semiBold text-text-default">{item.title}</span>
                <span className="text-xsm leading-xsm text-text-light">{item.missing}</span>
              </span>
            </ListItem>
          ))}
        </List>
      </div>
      <p>{c.notBody}</p>

      <DocH3>{c.scopeHeading}</DocH3>
      <p>{c.scopeIntro}</p>
      <DocTable
        caption={c.scopeCaption}
        head={c.scopeHead}
        rows={[
          ...failureStages[locale].map((stage) => [
            <StageLabel
              key="stage"
              locale={locale}
              id={stage.id}
              className="font-bold text-text-default"
            />,
            <ScopeItems key="items" items={c.scope[stage.id]} />,
          ]),
          [
            <span
              key="stage"
              className="inline-flex items-center gap-xs font-bold text-text-default"
            >
              <Layers className="h-4 w-4 shrink-0 text-text-primary" aria-hidden="true" />
              {c.scopeAll}
            </span>,
            <ScopeItems key="items" items={c.scope.all} />,
          ],
        ]}
      />
      <p>{c.scopeBody}</p>
    </section>
  );
};
