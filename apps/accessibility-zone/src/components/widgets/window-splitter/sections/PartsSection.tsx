import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `<div id="list">안내 목록 …</div>

<div role="separator" tabindex="0" aria-orientation="vertical"
     aria-label="안내 목록" aria-controls="list"
     aria-valuenow="40" aria-valuemin="0" aria-valuemax="80"
     aria-valuetext="너비의 40퍼센트"></div>

<div>안내 내용 …</div>

<button type="button">안내 목록 5 줄이기</button>
<button type="button">안내 목록 5 늘리기</button>
<button type="button" aria-pressed="false">안내 목록 접기</button>`,
  en: `<div id="list">Guide list …</div>

<div role="separator" tabindex="0" aria-orientation="vertical"
     aria-label="Guide list" aria-controls="list"
     aria-valuenow="40" aria-valuemin="0" aria-valuemax="80"
     aria-valuetext="40 percent of the width"></div>

<div>Guide content …</div>

<button type="button">Decrease guide list by 5</button>
<button type="button">Increase guide list by 5</button>
<button type="button" aria-pressed="false">Collapse guide list</button>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <code>separator</code>는 보통 내용을 나누는 선일 뿐입니다. 그런데 초점을 받을 수 있게 만들면
        WAI-ARIA 1.2에서 값을 가진 위젯이 되고, <code>aria-valuenow</code>가 필수가 됩니다.{' '}
        <PageLink locale={locale} id="slider-values" />의 slider와 같은 값 속성을 쓰지만, 값이
        뜻하는 것은 영역 하나의 크기입니다. 크기가 바뀌는 쪽을 주 영역이라 부르고, 경계의 이름은 그
        영역의 이름과 맞춥니다.
      </>
    ),
    label: '두 영역과 경계의 완성 코드',
    caption: '분할 경계 예제의 의미 · 상태 · 키 · 초점 · 복원',
    head: ['항목', '계약'],
    rows: [
      ['의미', '초점을 받는 separator. aria-controls로 주 영역을, 이름으로 그 영역을 가리킴'],
      ['방향', '세로로 선 경계이므로 aria-orientation="vertical". 좌우 화살표로 옮김'],
      ['값', '주 영역이 전체 너비에서 차지하는 퍼센트. 접으면 0'],
      [
        '범위',
        '방향키와 버튼은 20에서 80 사이를 5씩. aria-valuemin은 접힌 값인 0, aria-valuemax는 80',
      ],
      ['좌우 화살표', '주 영역을 5씩 줄이거나 늘림. 끝에서는 그대로'],
      ['Home · End', '가장 좁은 크기(20) · 가장 넓은 크기(80)로'],
      ['Enter', '접혀 있지 않으면 접고, 접혀 있으면 접기 전 위치로 복원'],
      ['초점', '어느 조작에서도 경계나 누른 버튼에 그대로'],
    ],
    after: (locale: Locale) => (
      <>
        가로로 누운 경계라면 <code>aria-orientation=&quot;horizontal&quot;</code>이고 위아래
        화살표로 옮깁니다. 접힌 영역의 내용은 <code>hidden</code>으로 감춰 Tab 순서에서 빼고(
        <PageLink locale={locale} id="hiding-and-inert" />
        ), 복원하면 그대로 돌아옵니다. 영역이 좁아져도 내용이 잘리지 않도록 각 영역은 스스로
        스크롤합니다(
        <PageLink locale={locale} id="zoom-and-reflow" />
        ).
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        A <code>separator</code> is usually just a line dividing content. Made focusable, it becomes
        a widget with a value in WAI-ARIA 1.2, and <code>aria-valuenow</code> becomes required. It
        uses the same value attributes as the slider on{' '}
        <PageLink locale={locale} id="slider-values" />, but the value means the size of one pane.
        The pane whose size changes is called the primary pane, and the boundary’s name matches that
        pane’s name.
      </>
    ),
    label: 'Complete code of the two panes and the boundary',
    caption: 'Semantics, state, keys, focus, and restore in the splitter example',
    head: ['Item', 'Contract'],
    rows: [
      [
        'Semantics',
        'A focusable separator pointing to the primary pane with aria-controls and by name',
      ],
      [
        'Orientation',
        'A vertical boundary, so aria-orientation="vertical"; moved with left and right arrows',
      ],
      ['Value', 'The percent of the whole width the primary pane takes; 0 when collapsed'],
      [
        'Range',
        'Arrow keys and buttons move between 20 and 80 in steps of 5; aria-valuemin is 0, the collapsed value, and aria-valuemax is 80',
      ],
      ['Left and right arrows', 'Shrink or grow the primary pane by 5; unchanged at the ends'],
      ['Home, End', 'To the narrowest size (20) or the widest (80)'],
      ['Enter', 'Collapses if not collapsed; restores the position before collapsing if collapsed'],
      ['Focus', 'Stays on the boundary or the pressed button in every action'],
    ],
    after: (locale: Locale) => (
      <>
        A horizontal boundary takes <code>aria-orientation=&quot;horizontal&quot;</code> and moves
        with up and down arrows. The content of a collapsed pane is hidden with <code>hidden</code>{' '}
        so it leaves the Tab order (
        <PageLink locale={locale} id="hiding-and-inert" />
        ), and comes back intact on restore. Each pane scrolls by itself so content is not cut off
        when it narrows (<PageLink locale={locale} id="zoom-and-reflow" />
        ).
      </>
    ),
  },
};

export const PartsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.parts.id}>
      <DocH2 {...toc.parts} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after(locale)}</p>
    </section>
  );
};
