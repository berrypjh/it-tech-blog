import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

import { Chip, List, ListItem, VisuallyHidden } from '@berrypjh/react-ui';
import { RotateCcw } from 'lucide-react';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '접근성을 화면마다 챙기면 놓치는 곳이 생깁니다. 반복되는 UI라면 컴포넌트에 담는 편이 확실합니다.',
    loopHeading: '화면 단위로 고치면 같은 문제가 반복된다',
    loopSteps: ['페이지 구현', '접근성 문제 발견', '해당 페이지만 수정', '다음 페이지에서 재발'],
    loopRepeat: '처음으로 반복',
    loopBody: (
      <>
        원인은 페이지가 아니라 <strong>재사용되는 UI 조각</strong>에 있습니다. 포커스 표시가 없는
        버튼 컴포넌트를 40개 화면이 쓰면 결함도 40번 복제됩니다.
      </>
    ),
    contractHeading: '컴포넌트 계약으로 옮기기',
    contractBody:
      '같은 요구를 시스템 수준으로 올리면, 한 번 고친 것이 이 컴포넌트를 쓰는 모든 화면에 반영됩니다.',
    tableCaption: '접근성 요구를 담는 컴포넌트 계약',
    tableHead: ['계약', '정의하는 것', 'Button / Dialog 예시'],
    labels: ['디자인 토큰', '컴포넌트 API', 'DOM 계약', '키보드 계약', '포커스 계약'],
    always: '항상',
    token: ['대비 · 포커스 표시 · 간격 값이 정해져 있나요?', '포커스 링 색·두께를 토큰으로 고정'],
    api: ['label · 상태 · 설명을 받나요?', '<IconButton label="닫기" />'],
    dom: ['어떤 요소로 렌더링되나요?', '<button type="button">'],
    keyboard: ['어떤 키로 조작되나요?', 'Esc로 Dialog 닫기 · Tab은 Dialog 안에서만 이동'],
    focus: ['포커스가 어디로 가고 돌아오나요?', 'Dialog가 닫히면 연 버튼으로 복귀'],
    note: (
      <>
        좋은 디자인 시스템에서 접근성의 상당 부분은{' '}
        <strong>컴포넌트의 계약과 기본 동작에 포함됩니다</strong>. 화면에서는 대체 텍스트 · 제목
        구조 · 라벨 문구처럼 내용에 달린 것을 확인하고, 검토는 컴포넌트와 조합 지점에 집중합니다.
      </>
    ),
  },
  en: {
    intro:
      'Handling accessibility screen by screen leaves gaps. For repeated UI, building it into the component is more reliable.',
    loopHeading: 'Fixing screen by screen repeats the same problem',
    loopSteps: [
      'Build a page',
      'Find an accessibility issue',
      'Fix only that page',
      'It recurs on the next page',
    ],
    loopRepeat: 'repeat from the start',
    loopBody: (
      <>
        The cause is not the page but <strong>reusable UI pieces</strong>. If 40 screens use a
        button component with no focus indicator, the defect is copied 40 times.
      </>
    ),
    contractHeading: 'Move it into component contracts',
    contractBody:
      'Raise the same requirement to the system level, and one fix reaches every screen that uses the component.',
    tableCaption: 'Component contracts that carry accessibility requirements',
    tableHead: ['Contract', 'What it defines', 'Button / Dialog example'],
    labels: [
      'Design tokens',
      'Component API',
      'DOM contract',
      'Keyboard contract',
      'Focus contract',
    ],
    always: 'Always',
    token: [
      'Are contrast, focus indicator and spacing values defined?',
      'Focus ring color and width fixed as tokens',
    ],
    api: ['Does it accept label, state, description?', '<IconButton label="Close" />'],
    dom: ['Which element does it render?', '<button type="button">'],
    keyboard: ['Which keys operate it?', 'Esc closes Dialog · Tab stays inside Dialog'],
    focus: ['Where does focus go and return?', 'Returns to the opener when Dialog closes'],
    note: (
      <>
        In a good design system, much of accessibility is{' '}
        <strong>built into component contracts and default behavior</strong>. Screens still check
        what depends on content, such as text alternatives, heading structure and label wording, and
        review focuses on components and how they are composed.
      </>
    ),
  },
};

export const DesignSystemSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const [token, api, dom, keyboard, focus] = c.labels;
  const rows = [
    [token, ...c.token],
    [api, c.api[0], <code key="api">{c.api[1]}</code>],
    [
      dom,
      c.dom[0],
      <span key="dom">
        {c.always} <code>{c.dom[1]}</code>
      </span>,
    ],
    [keyboard, ...c.keyboard],
    [focus, ...c.focus],
  ];

  return (
    <section aria-labelledby={toc.designSystem.id}>
      <DocH2 {...toc.designSystem} />
      <p>{c.intro}</p>

      <DocH3>{c.loopHeading}</DocH3>
      <div className="my-lg">
        <List ordered className="flex flex-wrap items-center gap-sm">
          {c.loopSteps.map((step, i) => (
            <ListItem key={step} className="flex items-center gap-sm">
              <Chip>{step}</Chip>
              {i < c.loopSteps.length - 1 ? (
                <span aria-hidden="true" className="text-text-light">
                  →
                </span>
              ) : (
                <>
                  <RotateCcw className="h-4 w-4 text-text-error" aria-hidden="true" />
                  <VisuallyHidden>{c.loopRepeat}</VisuallyHidden>
                </>
              )}
            </ListItem>
          ))}
        </List>
      </div>
      <p>{c.loopBody}</p>

      <DocH3>{c.contractHeading}</DocH3>
      <p>{c.contractBody}</p>
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={rows} />
      <Callout variant="note">
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
