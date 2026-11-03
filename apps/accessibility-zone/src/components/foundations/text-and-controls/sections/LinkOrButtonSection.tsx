import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeCompare, DocH2, DocTable } from '@it-tech-blog/ui';

import { Link, MousePointerClick } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { Kbd } from '@/components/shared/Kbd';
import { PageLink } from '@/components/shared/PageLink';

import { KeyActivationDemo } from '../demos/KeyActivationDemo';
import { getToc } from '../toc';

const code = {
  ko: {
    before: `<a href="#" onclick="addToCart()">장바구니 담기</a>
<button onclick="location.href='/cart'">장바구니 보기</button>
<a onclick="openHelp()">도움말</a>  <!-- href 없음 -->`,
    after: `<button type="button" onclick="addToCart()">장바구니 담기</button>
<a href="/cart">장바구니 보기</a>
<a href="/help">도움말</a>`,
  },
  en: {
    before: `<a href="#" onclick="addToCart()">Add to cart</a>
<button onclick="location.href='/cart'">View cart</button>
<a onclick="openHelp()">Help</a>  <!-- no href -->`,
    after: `<button type="button" onclick="addToCart()">Add to cart</button>
<a href="/cart">View cart</a>
<a href="/help">Help</a>`,
  },
};

const content = {
  ko: {
    rule: (
      <>
        기준은 하나입니다. <strong>누르면 다른 페이지나 위치로 가는가</strong>(URL이 바뀌는가)?
        그렇다면 <code>&lt;a href&gt;</code>입니다. <strong>지금 페이지에서 무언가를 하는가</strong>
        (제출 · 열기 · 추가 · 삭제)? 그렇다면 <code>&lt;button&gt;</code>입니다. 모양은 CSS로 바꿀
        수 있으니 버튼처럼 보이는 링크도, 링크처럼 보이는 버튼도 괜찮습니다.
      </>
    ),
    cards: {
      link: {
        title: '이동한다 → 링크',
        body: '다른 페이지나 같은 페이지의 다른 위치로 갑니다. URL이 바뀝니다.',
      },
      button: {
        title: '동작한다 → 버튼',
        body: '제출 · 열기 · 추가 · 삭제처럼 지금 페이지에서 무언가를 합니다.',
      },
    },
    basis: (
      <>
        이 기준은 HTML이 정한 두 요소의 뜻과 널리 쓰는 관례에서 나온 것이고, WCAG 성공 기준의 문장은
        아닙니다. 다만 잘못 고르면 보조기술이 알리는 역할과 실제 동작이 달라져, 사용자가 예상한
        방법으로 쓸 수 없게 됩니다.
      </>
    ),
    caption: '링크와 버튼의 기본 동작',
    head: ['동작', '<a href>', '<button>'],
    rows: [
      ['Tab으로 포커스', '받습니다', '받습니다'],
      [
        <>
          <Kbd>Enter</Kbd>로 실행
        </>,
        '이동',
        '실행',
      ],
      [
        <>
          <Kbd>Space</Kbd>로 실행
        </>,
        '실행되지 않습니다 — 페이지가 스크롤됩니다',
        '실행 (키를 뗄 때)',
      ],
      ['새 탭에서 열기 · 주소 복사', '브라우저가 제공합니다', '없음'],
      ['폼 안에서', '영향이 없습니다', <>type을 쓰지 않으면 submit입니다 — 폼이 제출됩니다</>],
      ['보조기술이 알리는 역할', '링크', '버튼'],
    ],
    rows2: (
      <>
        이 차이 때문에 잘못 고르면 사용자의 예상이 깨집니다. 링크인 줄 알고 새 탭으로 열려 했는데
        아무 일도 없거나, 버튼인 줄 알고 <Kbd>Space</Kbd>를 눌렀는데 페이지만 내려갑니다.{' '}
        <code>href</code>가 없는 <code>a</code>는 링크가 아니어서 Tab으로 닿지도 않습니다.
      </>
    ),
    safari: (
      <>
        macOS Safari는 기본 설정에서 Tab이 링크와 버튼을 건너뜁니다. Safari에서 확인할 때는{' '}
        <Kbd>Option</Kbd>+<Kbd>Tab</Kbd>으로 이동하거나, Safari 설정의 고급에서 &apos;Tab 키를 눌러
        웹 페이지의 각 항목 강조&apos;를 켭니다.
      </>
    ),
    demoIntro: (
      <>
        표의 차이는 이 브라우저에서 직접 눌러 보면 보입니다. 세 번째 요소는 <code>div</code>에{' '}
        <code>role=&quot;button&quot;</code>과 <code>tabindex=&quot;0&quot;</code>만 붙이고 click
        처리만 둔 것입니다. 결과 칸은 키를 누른 뒤 실제로 click 이벤트가 일어났는지를 기록합니다.
      </>
    ),
    observe: (
      <>
        <strong>관찰할 것:</strong> 링크는 <Kbd>Enter</Kbd>에만 반응하고 <Kbd>Space</Kbd>에서는
        페이지가 스크롤됩니다. 버튼은 둘 다에 반응합니다. <code>role=&quot;button&quot;</code>을
        붙인 <code>div</code>는 Tab으로 닿고 보조기술에 &quot;버튼&quot;으로 알려지지만, 두 키 모두
        click을 일으키지 않습니다.
      </>
    ),
    ariaTitle: 'ARIA 역할은 무엇인지만 알리고 동작은 더하지 않습니다',
    aria: (
      <>
        키 처리를 직접 더해도 <code>disabled</code> · 폼 제출 · 플랫폼별 세부 동작까지 같아지지는
        않으므로, 같은 일을 하는 HTML 요소가 있으면 그 요소를 씁니다. 하나씩 다시 만들어야 하는
        목록은 <PageLink locale="ko" id="intro" hash="semantic-html" />의 &quot;접근성과 시맨틱
        HTML&quot;에 있습니다.
      </>
    ),
  },
  en: {
    rule: (
      <>
        There is one test. <strong>Does pressing it go to another page or place</strong> (does the
        URL change)? Then it is <code>&lt;a href&gt;</code>.{' '}
        <strong>Does it do something on this page</strong> (submit, open, add, delete)? Then it is{' '}
        <code>&lt;button&gt;</code>. CSS can change the look, so a link styled as a button or a
        button styled as a link is fine.
      </>
    ),
    cards: {
      link: {
        title: 'Goes somewhere → link',
        body: 'To another page or another place on this page. The URL changes.',
      },
      button: {
        title: 'Does something → button',
        body: 'Submit, open, add, delete — an action on this page.',
      },
    },
    basis: (
      <>
        This test comes from what HTML defines the two elements to mean and from common practice; it
        is not the wording of a WCAG success criterion. But the wrong choice makes the role
        announced by assistive technology differ from the actual behavior, so users cannot use it
        the way they expect.
      </>
    ),
    caption: 'Built-in behavior of links and buttons',
    head: ['Behavior', '<a href>', '<button>'],
    rows: [
      ['Receives Tab focus', 'Yes', 'Yes'],
      [
        <>
          Activated by <Kbd>Enter</Kbd>
        </>,
        'Navigates',
        'Activates',
      ],
      [
        <>
          Activated by <Kbd>Space</Kbd>
        </>,
        'No — the page scrolls',
        'Yes (on key release)',
      ],
      ['Open in new tab, copy address', 'Provided by the browser', 'None'],
      ['Inside a form', 'No effect', <>Without a type it is submit — the form is submitted</>],
      ['Role announced by assistive technology', 'Link', 'Button'],
    ],
    rows2: (
      <>
        Because of these differences, the wrong choice breaks users&apos; expectations. They try to
        open what looks like a link in a new tab and nothing happens, or press <Kbd>Space</Kbd> on
        what they think is a button and the page just scrolls. An <code>a</code> without{' '}
        <code>href</code> is not a link, so Tab does not even reach it.
      </>
    ),
    safari: (
      <>
        With default settings, Tab in macOS Safari skips links and buttons. When checking in Safari,
        use <Kbd>Option</Kbd>+<Kbd>Tab</Kbd>, or turn on &quot;Press Tab to highlight each item on a
        webpage&quot; in Safari Settings → Advanced.
      </>
    ),
    demoIntro: (
      <>
        You can see the table&apos;s differences by pressing the keys yourself in this browser. The
        third element is a <code>div</code> with only <code>role=&quot;button&quot;</code>,{' '}
        <code>tabindex=&quot;0&quot;</code>, and a click handler. The result rows record whether a
        click event actually fired after you pressed the key.
      </>
    ),
    observe: (
      <>
        <strong>What to look for:</strong> the link responds only to <Kbd>Enter</Kbd>, and{' '}
        <Kbd>Space</Kbd> scrolls the page. The button responds to both. The <code>div</code> with{' '}
        <code>role=&quot;button&quot;</code> is reachable with Tab and announced as a
        &quot;button&quot;, but neither key fires a click.
      </>
    ),
    ariaTitle: 'An ARIA role only says what something is; it adds no behavior',
    aria: (
      <>
        Even if you add key handling yourself, <code>disabled</code>, form submission, and
        platform-specific details still differ, so use the HTML element that does the same job when
        there is one. The list of things you would have to rebuild is in &quot;Accessibility and
        semantic HTML&quot; on <PageLink locale="en" id="intro" hash="semantic-html" />.
      </>
    ),
  },
};

export const LinkOrButtonSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.linkOrButton.id}>
      <DocH2 {...toc.linkOrButton} />
      <p>{c.rule}</p>
      <div className="my-lg grid gap-sm sm:grid-cols-2">
        {(['link', 'button'] as const).map((kind) => (
          <div
            key={kind}
            className="flex flex-col gap-xs rounded-md border border-stroke-light bg-background-surface p-lg"
          >
            <span className="text-xsm font-semiBold">
              <IconLabel icon={kind === 'link' ? Link : MousePointerClick}>
                {c.cards[kind].title}
              </IconLabel>
            </span>
            <span className="text-xsm text-text-light">{c.cards[kind].body}</span>
          </div>
        ))}
      </div>
      <p>{c.basis}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.rows2}</p>
      <CodeCompare before={code[locale].before} after={code[locale].after} />
      <p>{c.safari}</p>
      <p>{c.demoIntro}</p>
      <KeyActivationDemo />
      <p>{c.observe}</p>
      <Callout variant="note" title={c.ariaTitle}>
        <p>{c.aria}</p>
      </Callout>
    </section>
  );
};
