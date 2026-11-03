import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { ThemedFigure } from '@/components/shared/ThemedFigure';

import { OrderDemo } from '../demos/OrderDemo';
import magnifierFocusDark from '../images/magnifier-focus-dark.webp';
import magnifierFocusLight from '../images/magnifier-focus-light.webp';
import { getToc } from '../toc';

const code = {
  ko: `<div class="actions">
  <label>쿠폰 코드 <input /></label>   <!-- DOM 1 -->
  <button>쿠폰 적용</button>          <!-- DOM 2 -->
  <button class="pay">결제하기</button> <!-- DOM 3 -->
</div>

<style>
  .actions { display: flex; }
  .pay { order: -1; } /* 화면에서는 맨 앞, Tab으로는 맨 끝 */
</style>`,
  en: `<div class="actions">
  <label>Coupon code <input /></label> <!-- DOM 1 -->
  <button>Apply coupon</button>        <!-- DOM 2 -->
  <button class="pay">Pay now</button> <!-- DOM 3 -->
</div>

<style>
  .actions { display: flex; }
  .pay { order: -1; } /* first on screen, last for Tab */
</style>`,
};

const content = {
  ko: {
    figure: {
      alt: '모니터 화면 일부를 크게 보여 주는 원형 렌즈 안에는 입력 칸의 이전 위치가 점선으로만 남아 있고, 점선 화살표가 렌즈 밖 오른쪽 위 버튼으로 이어집니다. 포커스 링은 그 먼 버튼에만 있습니다.',
      caption:
        '화면 확대 사용자는 화면 일부만 봅니다. 포커스가 확대한 영역 밖으로 튀면 위치를 놓칩니다.',
    },
    intro: (
      <>
        아래 CSS는 모두 <strong>화면에서의 위치만</strong> 바꿉니다. DOM은 그대로이므로 Tab 순서도
        그대로입니다.
      </>
    ),
    caption: '화면 순서만 바꾸는 CSS',
    head: ['CSS', '화면', 'DOM · Tab 순서'],
    rows: [
      [<code key="c">order</code>, '항목을 앞뒤로 옮깁니다', '그대로'],
      [<code key="c">flex-direction: row-reverse</code>, '항목을 거꾸로 놓습니다', '그대로'],
      [<code key="c">grid-area · grid-row</code>, '칸 위치를 자유롭게 정합니다', '그대로'],
      [<code key="c">position: absolute</code>, '다른 곳에 띄워 놓습니다', '그대로'],
    ],
    codeLabel: '가상의 화면 — 결제 버튼만 CSS order로 맨 앞에 둔 결제 영역',
    after: (
      <>
        화면을 보며 Tab을 누르는 사용자는 &quot;결제하기&quot;에서 시작할 거라 예상하지만, 포커스는
        쿠폰 칸 → 쿠폰 적용 → 결제하기 순서로 이동해 왼쪽에서 오른쪽으로 가다가 갑자기 맨 왼쪽으로
        돌아갑니다. 화면 확대 사용자는 화면 일부만 보므로 포커스가 엉뚱한 곳으로 가면 위치를 놓치기
        쉽습니다.
      </>
    ),
    demoLead: (
      <>
        이 결제 영역을 직접 Tab으로 지나가 보면 두 순서의 차이가 보입니다. 결제 영역 데모는 같은 세
        요소를 세 가지 배치로 바꿔 가며, 화면 순서는 렌더링된 요소의 위치로 계산하고 포커스 이동
        기록은 실제 포커스 이벤트로 남깁니다(클릭으로 옮긴 포커스도 기록됩니다).
      </>
    ),
    observe: (
      <>
        &quot;CSS order&quot; 배치에서는 결제하기가 화면 맨 앞에 있지만 포커스 기록에서는 맨 끝에
        나옵니다. &quot;DOM 순서 자체를 결제 먼저로&quot; 배치는 두 순서가 다시 같아지지만, 쿠폰을
        넣기 전에 결제 버튼부터 지나가게 됩니다. 순서를 <strong>일치</strong>시키는 것과{' '}
        <strong>과업에 맞는 순서</strong>를 고르는 것은 따로 판단해야 하고, 이 과업에서는 첫 번째
        배치가 답입니다.
      </>
    ),
    readingFlow: (
      <>
        최근 CSS에는 flex · grid의 화면 순서대로 포커스를 이동하게 하는 <code>reading-flow</code>{' '}
        속성이 추가되고 있습니다. 아직 지원하는 브라우저가 일부이므로 이 속성에 기대지 말고 DOM
        순서를 먼저 맞춥니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'A circular lens magnifies part of a monitor screen. Inside it, only a dashed outline marks the previous position of an input, and a dotted arrow leads outside the lens to a button at the top right. Only that distant button has a focus ring.',
      caption:
        'Screen magnifier users see only part of the screen. When focus jumps outside the magnified area, they lose their place.',
    },
    intro: (
      <>
        All of the CSS below changes <strong>only the position on screen</strong>. The DOM stays the
        same, so the Tab order stays the same.
      </>
    ),
    caption: 'CSS that changes only the visual order',
    head: ['CSS', 'On screen', 'DOM and Tab order'],
    rows: [
      [<code key="c">order</code>, 'Moves items forward or back', 'Unchanged'],
      [<code key="c">flex-direction: row-reverse</code>, 'Lays items out backwards', 'Unchanged'],
      [<code key="c">grid-area · grid-row</code>, 'Places items in any cell', 'Unchanged'],
      [<code key="c">position: absolute</code>, 'Floats it somewhere else', 'Unchanged'],
    ],
    codeLabel:
      'Hypothetical screen — a checkout area with only the pay button moved to the front with CSS order',
    after: (
      <>
        A user looking at the screen while pressing Tab expects to start at &quot;Pay now&quot;, but
        focus moves coupon field → apply coupon → pay now, going left to right and then jumping back
        to the far left. Screen magnifier users see only part of the screen, so when focus jumps
        somewhere unexpected they easily lose their place.
      </>
    ),
    demoLead: (
      <>
        Tab through this checkout area yourself and the difference between the two orders shows. The
        checkout demo rearranges the same three elements in three layouts; the visual order is
        computed from the rendered positions, and the focus log records real focus events (focus
        moved by clicking is logged too).
      </>
    ),
    observe: (
      <>
        In the &quot;CSS order&quot; layout, Pay now is first on screen but last in the focus log.
        In &quot;Pay moved first in the DOM itself&quot; the two orders match again, but you pass
        the pay button before entering a coupon. <strong>Making the orders match</strong> and{' '}
        <strong>choosing the order the task needs</strong> are separate decisions; for this task,
        the first layout is the answer.
      </>
    ),
    readingFlow: (
      <>
        CSS is gaining a <code>reading-flow</code> property that makes focus follow the visual order
        of flex and grid layouts. Only some browsers support it so far, so do not rely on it; fix
        the DOM order first.
      </>
    ),
  },
};

export const CssReorderSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.cssReorder.id}>
      <DocH2 {...toc.cssReorder} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <CodeBlock label={c.codeLabel} code={code[locale]} />
      <p>{c.after}</p>
      <ThemedFigure light={magnifierFocusLight} dark={magnifierFocusDark} {...c.figure} />
      <p>{c.demoLead}</p>
      <OrderDemo />
      <p>{c.observe}</p>
      <p>{c.readingFlow}</p>
    </section>
  );
};
