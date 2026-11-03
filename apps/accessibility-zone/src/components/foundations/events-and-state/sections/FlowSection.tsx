import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { ThemedFigure } from '@/components/shared/ThemedFigure';

import eventFlowDark from '../images/event-flow-dark.webp';
import eventFlowLight from '../images/event-flow-light.webp';
import { getToc } from '../toc';

const code = {
  ko: `<ul id="cart">
  <li>키보드 <button data-id="kb">삭제</button></li>
  <li>마우스 <button data-id="ms">삭제</button></li>
</ul>

<script>
  // 버튼마다 붙이지 않고 목록 하나에 붙인다(위임).
  cart.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    // event.target: 실제로 눌린 요소 / event.currentTarget: #cart
    removeItem(button.dataset.id);
  });
</script>`,
  en: `<ul id="cart">
  <li>Keyboard <button data-id="kb">Remove</button></li>
  <li>Mouse <button data-id="ms">Remove</button></li>
</ul>

<script>
  // One listener on the list instead of one per button (delegation).
  cart.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    // event.target: what was pressed / event.currentTarget: #cart
    removeItem(button.dataset.id);
  });
</script>`,
};

const content = {
  ko: {
    figure: {
      alt: '겹친 상자 네 개의 가장 안쪽에 누른 버튼이 있습니다. 왼쪽 화살표는 바깥 상자에서 상자 경계마다 점을 지나 버튼까지 내려가고, 오른쪽 화살표는 버튼에서 같은 경계를 지나 바깥 상자까지 올라갑니다.',
      caption:
        '이벤트는 바깥에서 대상까지 내려갔다가(캡처) 다시 바깥으로 올라갑니다(버블링). 경계의 점마다 그 요소의 리스너가 실행될 수 있습니다.',
    },
    task: (
      <>
        메뉴를 연 사용자가 메뉴 바깥을 눌러 닫으려 합니다. 그런데 페이지의 한 카드가 click 이벤트를
        멈추게(<code>stopPropagation()</code>) 해 두어서, 문서 전체에 붙은 &quot;바깥을 누르면
        닫기&quot; 리스너(이벤트가 생기면 실행되도록 요소에 붙여 둔 함수)가 이벤트를 받지 못합니다.
        메뉴는 열린 채로 뒤 내용을 가리고, 화면 확대 사용자는 무엇이 가리고 있는지조차 보기
        어렵습니다. 이런 결함을 추적하려면 이벤트가 어디서 생겨 어디로 가는지 알아야 합니다.
      </>
    ),
    intro: (
      <>
        이벤트는 사용자가 누른 가장 안쪽 요소에서 생기지만, 그 요소에서만 끝나지 않습니다. 문서의
        바깥에서 안으로 내려왔다가(<strong>캡처</strong>) 다시 바깥으로 올라갑니다(
        <strong>버블링</strong>). 그 경로에 있는 요소의 리스너가 차례로 실행됩니다.
      </>
    ),
    caption: '이벤트 경로를 읽는 값',
    head: ['값', '뜻'],
    rows: [
      [<code key="v">event.target</code>, '이벤트가 생긴 요소로, 경로 내내 같습니다'],
      [
        <code key="v">event.currentTarget</code>,
        '지금 실행 중인 리스너가 붙은 요소로, 단계마다 바뀝니다',
      ],
      [
        <code key="v">event.stopPropagation()</code>,
        '이벤트를 이 뒤의 경로로 전달하지 않습니다(위 메뉴 결함의 원인)',
      ],
    ],
    delegation: (
      <>
        버블링 덕분에 바깥 요소 하나에 리스너를 붙여 안쪽 여러 요소의 이벤트를 처리할 수 있습니다
        (이벤트 위임). 이때 <code>target</code>과 <code>currentTarget</code>이 서로 다릅니다.
      </>
    ),
    codeLabel: '이벤트 위임 — target과 currentTarget',
    notBubble: (
      <>
        모든 이벤트가 버블링되지는 않습니다. <code>focus</code> · <code>blur</code>는 버블링되지
        않아서, 바깥에서 포커스 이동을 지켜보려면 버블링되는 <code>focusin</code> ·{' '}
        <code>focusout</code>을 씁니다. <PageLink locale="ko" id="dom-order" />의 포커스 기록도 이
        방법으로 남기고, 이 장 마지막 페이지의 관찰 패널도 같습니다.
      </>
    ),
    deeperTitle: 'React와 shadow DOM은 이벤트 경로를 조금 바꿉니다',
    deeper: (
      <>
        React는 이벤트를 앱의 루트에서 받아 컴포넌트에 나눠 주고, <code>onFocus</code>는 내부적으로{' '}
        <code>focusin</code>을 씁니다. 또 shadow DOM을 쓰는 컴포넌트에서는 이벤트가 경계를 넘을 때{' '}
        <code>target</code>이 바깥에서 보이는 요소로 바뀝니다. 처음에는 위 표만으로 충분합니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'Four nested boxes with the pressed button in the innermost one. The left arrow goes down from the outermost box through a dot at each box border to the button; the right arrow goes from the button back up through the same borders to the outermost box.',
      caption:
        'An event travels down from the outside to its target (capturing) and back up (bubbling). At each dot on a border, that element’s listeners can run.',
    },
    task: (
      <>
        A user opens a menu and clicks outside it to close it. But a card on the page stops click
        events (<code>stopPropagation()</code>), so the &quot;close when clicking outside&quot;
        listener (a function attached to an element to run when an event happens) on the document
        never receives the event. The menu stays open over the content, and screen magnifier users
        may not even see what is covering it. To trace a defect like this, you need to know where
        events start and where they go.
      </>
    ),
    intro: (
      <>
        An event starts at the innermost element the user pressed, but it does not stop there. It
        travels down from the outside of the document (<strong>capturing</strong>) and back up again
        (<strong>bubbling</strong>), running the listeners on each element along the path.
      </>
    ),
    caption: 'Values for reading the event path',
    head: ['Value', 'Meaning'],
    rows: [
      [
        <code key="v">event.target</code>,
        'The element where the event started. Same along the path',
      ],
      [
        <code key="v">event.currentTarget</code>,
        'The element whose listener is running now. Changes at each step',
      ],
      [
        <code key="v">event.stopPropagation()</code>,
        'Stops the event from going further along the path — the cause of the menu defect above',
      ],
    ],
    delegation: (
      <>
        Bubbling lets one listener on an outer element handle events from many inner elements (event
        delegation). Then <code>target</code> and <code>currentTarget</code> differ.
      </>
    ),
    codeLabel: 'Event delegation — target and currentTarget',
    notBubble: (
      <>
        Not every event bubbles. <code>focus</code> and <code>blur</code> do not, so to watch focus
        moves from an outer element, use <code>focusin</code> and <code>focusout</code>, which do.
        The focus log in <PageLink locale="en" id="dom-order" /> records focus this way, and so does
        the observation panel on the last page of this chapter.
      </>
    ),
    deeperTitle: 'React and shadow DOM change the event path a little',
    deeper: (
      <>
        React receives events at the app root and distributes them to components, and its{' '}
        <code>onFocus</code> uses <code>focusin</code> internally. In components that use shadow
        DOM, <code>target</code> changes to the element visible from outside when an event crosses
        the boundary. The table above is enough to start with.
      </>
    ),
  },
};

export const FlowSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.flow.id}>
      <DocH2 {...toc.flow} />
      <p>{c.task}</p>
      <p>{c.intro}</p>
      <ThemedFigure light={eventFlowLight} dark={eventFlowDark} {...c.figure} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.delegation}</p>
      <CodeBlock label={c.codeLabel} code={code[locale]} />
      <p>{c.notBubble}</p>
      <Callout variant="note" title={c.deeperTitle}>
        <p>{c.deeper}</p>
      </Callout>
    </section>
  );
};
