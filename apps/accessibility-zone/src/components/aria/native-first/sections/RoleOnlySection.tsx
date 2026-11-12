import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeCompare, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: {
    before: `<div class="btn" role="button" tabindex="0"
     onclick="addToCart()" onkeydown="onKey(event)">
  장바구니 담기
</div>
<script>
  // Enter · Space · 비활성 · 폼 제출을 직접 다시 만든다
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      addToCart();
    }
  };
</script>`,
    after: `<button class="btn" type="button" onclick="addToCart()">
  장바구니 담기
</button>`,
  },
  en: {
    before: `<div class="btn" role="button" tabindex="0"
     onclick="addToCart()" onkeydown="onKey(event)">
  Add to cart
</div>
<script>
  // Rebuild Enter, Space, disabled, and form submission by hand
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      addToCart();
    }
  };
</script>`,
    after: `<button class="btn" type="button" onclick="addToCart()">
  Add to cart
</button>`,
  },
};

const content = {
  ko: {
    intro: (
      <>
        CSS로 모양을 맞추면 <code>div</code>도 버튼과 똑같아 보입니다. 여기에{' '}
        <code>role=&quot;button&quot;</code>을 붙이면 접근성 트리에 노출되는 역할은 버튼으로
        바뀝니다. 하지만 바뀌는 것은 거기까지입니다. 포커스와 키 동작은 하나씩 직접 더해야 합니다.
      </>
    ),
    caption: '같은 모양의 컨트롤에 무엇을 더하면 무엇이 생기는가',
    head: ['코드', '노출되는 역할', 'Tab 포커스', 'Enter · Space로 실행'],
    rows: [
      [
        <code key="c">&lt;div role=&quot;button&quot;&gt;</code>,
        '버튼',
        '받지 않습니다',
        '되지 않습니다',
      ],
      [
        <code key="c">&lt;div role=&quot;button&quot; tabindex=&quot;0&quot;&gt;</code>,
        '버튼',
        '받습니다',
        '되지 않습니다',
      ],
      ['위 코드 + 키 처리 스크립트', '버튼', '받습니다', '작성자가 만든 만큼만 됩니다'],
      [<code key="c">&lt;button type=&quot;button&quot;&gt;</code>, '버튼', '받습니다', '됩니다'],
    ],
    compare: (
      <>
        셋째 줄도 아직 끝이 아닙니다. 비활성 처리, 폼 안에서의 동작, 키를 뗄 때 실행하는 관례까지
        버튼이 하던 일을 계속 다시 만들어야 합니다. 같은 일을 하는 HTML 요소가 있으면 그 요소를
        씁니다.
      </>
    ),
    calloutTitle: '역할 선언은 동작의 증거가 아닙니다',
    callout: (
      <>
        접근성 트리에 &quot;버튼&quot;이 보여도 키보드로 쓸 수 있다는 뜻은 아닙니다. 두 가지는 따로
        확인합니다. <PageLink locale="ko" id="text-and-controls" hash="link-or-button" />의 실습에서{' '}
        <code>role=&quot;button&quot;</code>만 붙인 div에 Enter · Space를 눌러 보면 차이를 볼 수
        있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Styled with CSS, a <code>div</code> can look exactly like a button. Adding{' '}
        <code>role=&quot;button&quot;</code> changes the role exposed in the accessibility tree to
        button. But that is all it changes. Focus and key behavior have to be added one by one.
      </>
    ),
    caption: 'What each addition creates on controls that look the same',
    head: ['Code', 'Exposed role', 'Tab focus', 'Activates with Enter and Space'],
    rows: [
      [<code key="c">&lt;div role=&quot;button&quot;&gt;</code>, 'button', 'No', 'No'],
      [
        <code key="c">&lt;div role=&quot;button&quot; tabindex=&quot;0&quot;&gt;</code>,
        'button',
        'Yes',
        'No',
      ],
      [
        'The code above + a key handling script',
        'button',
        'Yes',
        'Only as far as the author built it',
      ],
      [<code key="c">&lt;button type=&quot;button&quot;&gt;</code>, 'button', 'Yes', 'Yes'],
    ],
    compare: (
      <>
        Even the third row is not finished. Disabled handling, behavior inside a form, and the
        convention of activating on key release all have to be rebuilt from what the button already
        did. If an HTML element does the same job, use that element.
      </>
    ),
    calloutTitle: 'A role declaration is not evidence of behavior',
    callout: (
      <>
        Seeing &quot;button&quot; in the accessibility tree does not mean it works with a keyboard.
        Check the two separately. In the exercise on{' '}
        <PageLink locale="en" id="text-and-controls" hash="link-or-button" />, press Enter and Space
        on the div with only <code>role=&quot;button&quot;</code> to see the difference.
      </>
    ),
  },
};

export const RoleOnlySection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.roleOnly.id}>
      <DocH2 {...toc.roleOnly} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <CodeCompare before={code[locale].before} after={code[locale].after} />
      <p>{c.compare}</p>
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
