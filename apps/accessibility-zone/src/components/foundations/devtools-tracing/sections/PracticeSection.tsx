import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeCompare, DocH2, DocH3, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { Keyboard, Lightbulb, RotateCcw, Search, Wrench } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';

import { TraceDemo } from '../demos/TraceDemo';
import { getToc } from '../toc';

const IMPLICIT_SUBMISSION =
  'https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#implicit-submission';

const code = {
  ko: {
    before: `<form>
  <label for="qty">수량</label>
  <input id="qty" inputmode="numeric" />
  <button onclick="add()">1개 추가</button>
  <a onclick="goShipping()">배송 안내</a>
  <button type="submit">주문하기</button>
</form>`,
    after: `<form>
  <label for="qty">수량</label>
  <input id="qty" inputmode="numeric" />
  <button type="button" onclick="add()">1개 추가</button>
  <a href="#shipping">배송 안내</a>
  <button type="submit">주문하기</button>
</form>`,
  },
  en: {
    before: `<form>
  <label for="qty">Quantity</label>
  <input id="qty" inputmode="numeric" />
  <button onclick="add()">Add one</button>
  <a onclick="goShipping()">Shipping info</a>
  <button type="submit">Place order</button>
</form>`,
    after: `<form>
  <label for="qty">Quantity</label>
  <input id="qty" inputmode="numeric" />
  <button type="button" onclick="add()">Add one</button>
  <a href="#shipping">Shipping info</a>
  <button type="submit">Place order</button>
</form>`,
  },
};

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 재현 · 가설 · 확인 · 수정 · 재검증. */
const rowIcons = [RotateCcw, Lightbulb, Search, Wrench, Keyboard];

const content = {
  ko: {
    intro: (
      <>
        이제 세 수준을 결함 하나하나에 써 봅니다. 이 장바구니 폼에 결함 두 개를 넣어 두었습니다.
        증상만 보고 바로 고치지 않고, 폼을 직접 눌러 재현한 뒤 &quot;두 결함을 고치는 순서&quot;
        표를 한 칸씩 따라갑니다. 폼에 딸린 관찰 패널은 실제 포커스 · click · submit 이벤트를 보여
        주고, 개발자 도구로는 같은 요소의 속성과 리스너를 확인합니다.
      </>
    ),
    caption: '두 결함을 고치는 순서',
    head: ['단계', '결함 1 — "1개 추가"', '결함 2 — "배송 안내"'],
    rows: [
      [
        '최소 재현',
        '수량을 바꾸지 않고 "1개 추가"만 누르면 주문 접수 메시지가 나옵니다',
        '수량 칸에서 Tab을 두 번 누르면 포커스가 "1개 추가" 다음 "배송 안내"를 건너뛰고 "주문하기"로 갑니다',
      ],
      [
        '원인 가설',
        'form 안의 button에 type이 없어 submit으로 동작합니다',
        'a에 href가 없어 링크가 아니고 포커스 대상도 아닙니다',
      ],
      [
        '확인',
        <>
          관찰 패널의 &quot;제출한 버튼&quot;이 1개 추가로 나옵니다. 콘솔에서 <code>$0.type</code>은{' '}
          <code>&quot;submit&quot;</code>, <code>$0.getAttribute(&apos;type&apos;)</code>은{' '}
          <code>null</code>입니다
        </>,
        <>
          Elements 패널에 <code>href</code>가 없습니다. 접근성 정보의 역할이 링크가 아닙니다.
          콘솔에서 <code>$0.matches(&apos;:any-link&apos;)</code>는 <code>false</code>입니다
        </>,
      ],
      [
        '수정',
        <>
          <code>type=&quot;button&quot;</code>을 더합니다. submit 처리를 막는 리스너는 더하지
          않습니다
        </>,
        <>
          이동이므로 <code>href</code>를 줍니다. 키 처리를 직접 더하지 않습니다
        </>,
      ],
      [
        '키보드 재검증',
        '"1개 추가"를 Enter · Space로 눌러 수량만 바뀌는지, 수량 칸에서 Enter를 누르면 제출한 버튼이 "주문하기"인지 확인합니다',
        'Tab으로 닿는지, Enter로 배송 안내 위치로 가는지, 새 탭 열기가 되는지 확인합니다',
      ],
    ],
    preserve: (
      <>
        수정은 HTML 한 줄씩입니다. 결함 1을 &quot;submit 이벤트를 막는다&quot;로 고치면 수량 칸에서
        Enter로 주문하는 기본 동작(
        <ExternalLink href={IMPLICIT_SUBMISSION}>암시적 제출</ExternalLink>)까지 사라지고, 결함 2를
        &quot;tabindex와 keydown을 더한다&quot;로 고치면 새 탭 열기 · 주소 복사는 여전히 없습니다.{' '}
        <strong>원인이 있는 곳을 고치면 기본 기능이 그대로 남습니다.</strong>
      </>
    ),
    implicitTitle: '결함 버전에서는 수량 칸의 Enter로도 주문이 접수됩니다',
    implicit: (
      <>
        결함 버전에서 수량 칸에 있을 때 Enter를 눌러 보세요. 폼의 첫 번째 submit 버튼이 &quot;1개
        추가&quot;라서 브라우저가 그 버튼을 눌러 수량이 늘고 주문도 접수됩니다. 관찰 패널의
        &quot;제출한 버튼&quot;으로 확인할 수 있습니다.
      </>
    ),
    codeHeading: '수정한 마크업 비교',
  },
  en: {
    intro: (
      <>
        Now put the three levels to work on real defects. The cart form below has two defects. Do
        not fix them from the symptom alone: reproduce them by pressing the form yourself, then
        follow the &quot;order for fixing both defects&quot; table one cell at a time. The
        form&apos;s observation panel shows real focus, click, and submit events, and developer
        tools show the same elements&apos; attributes and listeners.
      </>
    ),
    caption: 'The order for fixing both defects',
    head: ['Step', 'Defect 1 — "Add one"', 'Defect 2 — "Shipping info"'],
    rows: [
      [
        'Minimal reproduction',
        'Without changing the quantity, press only "Add one" → an order-received message appears',
        'Press Tab twice from the quantity field → after "Add one", focus skips "Shipping info" and goes to "Place order"',
      ],
      [
        'Hypothesis',
        'The button inside the form has no type, so it acts as submit',
        'The a has no href, so it is not a link and not focusable',
      ],
      [
        'Check',
        <>
          The panel&apos;s &quot;submitted by&quot; shows Add one. In the console,{' '}
          <code>$0.type</code> is <code>&quot;submit&quot;</code> and{' '}
          <code>$0.getAttribute(&apos;type&apos;)</code> is <code>null</code>
        </>,
        <>
          No <code>href</code> in Elements. The role in the accessibility information is not link.
          In the console, <code>$0.matches(&apos;:any-link&apos;)</code> is <code>false</code>
        </>,
      ],
      [
        'Fix',
        <>
          Add <code>type=&quot;button&quot;</code>. Do not add a listener that blocks submit
        </>,
        <>
          It navigates, so give it an <code>href</code>. Do not add key handling yourself
        </>,
      ],
      [
        'Keyboard re-check',
        'Press "Add one" with Enter and Space and confirm only the quantity changes; press Enter in the quantity field and confirm the submitter is "Place order"',
        'Confirm Tab reaches it, Enter goes to the shipping info, and open-in-new-tab works',
      ],
    ],
    preserve: (
      <>
        Each fix is one line of HTML. Fixing defect 1 by &quot;blocking the submit event&quot; would
        also remove ordering with Enter from the quantity field (
        <ExternalLink href={IMPLICIT_SUBMISSION}>implicit submission</ExternalLink>), and fixing
        defect 2 by &quot;adding tabindex and keydown&quot; still leaves no open-in-new-tab or
        copy-link. <strong>Fix it where the cause is, and the built-in features stay.</strong>
      </>
    ),
    implicitTitle: 'In the defect version, Enter in the quantity field also places an order',
    implicit: (
      <>
        In the defect version, press Enter while in the quantity field. The form&apos;s first submit
        button is &quot;Add one&quot;, so the browser presses it: the quantity goes up and the order
        is placed. The panel&apos;s &quot;submitted by&quot; shows it.
      </>
    ),
    codeHeading: 'Comparing the fixed markup',
  },
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{c.intro}</p>
      <TraceDemo />
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map((row, i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {row[0]}
          </IconLabel>,
          ...row.slice(1),
        ])}
      />
      <Callout variant="practice" title={c.implicitTitle}>
        <p>{c.implicit}</p>
      </Callout>
      <DocH3>{c.codeHeading}</DocH3>
      <CodeCompare before={code[locale].before} after={code[locale].after} />
      <p>{c.preserve}</p>
    </section>
  );
};
