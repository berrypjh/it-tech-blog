import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        반응형 레이아웃은 화면 폭에 따라 배치를 바꿉니다. 넓은 화면에서는 순서가 맞아도, 좁은
        화면에서 사이드바를 본문 위로 올리거나 카드 순서를 바꾸면 그 폭에서만 어긋날 수 있습니다.
        브라우저를 확대해도 같은 일이 생깁니다. 확대하면 CSS 픽셀 폭이 줄어 좁은 화면 배치가
        적용되기 때문입니다.
      </>
    ),
    steps: [
      '넓은 화면에서 과업을 처음부터 끝까지 Tab으로 진행하며 포커스가 화면을 읽는 순서대로 움직이는지 봅니다.',
      '브라우저를 400%로 확대하거나 창 폭을 320 CSS 픽셀 정도로 줄이고 같은 과업을 다시 진행합니다(WCAG 2.2 성공 기준 1.4.10 리플로우(AA)가 기준으로 삼는 폭).',
      '배치가 바뀐 지점마다 포커스가 갑자기 위아래로 튀거나, 보이지 않는 곳으로 가는지 기록합니다.',
      '어긋나면 CSS 순서 속성을 지우고, 모든 폭에서 자연스러운 순서로 DOM을 다시 씁니다.',
    ],
    stepsLabel: '좁은 화면·확대 점검 순서',
    noteTitle: '결제 영역 데모도 좁은 화면에서 같은 불일치가 생깁니다',
    note: (
      <>
        결제 영역 데모도 좁은 화면에서는 세 요소가 세로로 쌓입니다. 창 폭을 줄인 뒤 다시 Tab으로
        지나가 보면, &quot;CSS order&quot; 배치에서는 위아래 방향으로 같은 불일치가 생깁니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Responsive layouts change arrangement with screen width. The order may be right on a wide
        screen, but moving the sidebar above the content or reordering cards on narrow screens can
        break it at that width only. Browser zoom does the same thing: zooming reduces the width in
        CSS pixels, so the narrow layout kicks in.
      </>
    ),
    steps: [
      'On a wide screen, complete the task from start to finish with Tab and check that focus moves in the order you read the screen.',
      'Zoom the browser to 400%, or narrow the window to about 320 CSS pixels, and do the same task again (the width WCAG 1.4.10 Reflow uses as its baseline).',
      'Wherever the layout changes, note whether focus suddenly jumps up or down or goes somewhere not visible.',
      'If it breaks, remove the CSS ordering and rewrite the DOM in an order that works at every width.',
    ],
    stepsLabel: 'Checking at narrow widths and zoom',
    noteTitle: 'The checkout demo shows the same mismatch on narrow screens',
    note: (
      <>
        The checkout demo also stacks its three elements vertically on narrow screens. Narrow the
        window and Tab through again: the &quot;CSS order&quot; layout shows the same mismatch, now
        top to bottom.
      </>
    ),
  },
};

export const NarrowSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.narrow.id}>
      <DocH2 {...toc.narrow} />
      <p>{c.intro}</p>
      <p>
        <strong>{c.stepsLabel}</strong>
      </p>
      <ol>
        {c.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <Callout variant="practice" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
