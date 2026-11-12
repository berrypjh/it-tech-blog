import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<a href="/cart" role="button">장바구니 비우기</a>`,
  en: `<a href="/cart" role="button">Empty cart</a>`,
};

const content = {
  ko: {
    intro: (
      <>
        ARIA in HTML의 <code>a href</code> 행은 button 역할을 허용합니다. 그래서 아래 코드는 문서
        적합성으로는 문제가 없습니다. 하지만 허용은 &quot;이렇게 적어도 된다&quot;는 뜻이지,
        &quot;이렇게 적으면 동작한다&quot;는 뜻이 아닙니다.
      </>
    ),
    label: '허용되는 선언 — 링크에 button 역할',
    caption: '허용된 선언이 증명하는 것과 증명하지 않는 것',
    head: ['질문', '답', '확인할 곳'],
    rows: [
      ['문서가 ARIA in HTML에 맞는가', '맞습니다', 'ARIA in HTML의 a href 행'],
      ['노출되는 역할은 무엇인가', '버튼으로 기대합니다', '브라우저 도구의 접근성 트리'],
      [
        'Space로 실행되는가',
        '링크의 기본 동작이 남아 실행되지 않습니다. 스크립트가 필요합니다',
        '키보드로 직접',
      ],
      [
        'Enter를 누르면 무엇이 일어나는가',
        '스크립트가 막지 않으면 /cart로 이동합니다',
        '키보드로 직접',
      ],
      ['보조기술이 버튼으로 다루는가', '조합마다 다릅니다', '실제 보조기술 · 브라우저 조합'],
    ],
    after: (
      <>
        첫 줄은 규범 문서로, 둘째 줄은 브라우저 도구로, 나머지는 실제 동작과 보조기술로 확인합니다.
        한 칸의 답으로 다른 칸을 채우지 않습니다. WCAG 적합성의 &quot;접근성 지원&quot; 요구는{' '}
        <PageLink locale="ko" id="conformance" />
        에서 다뤘습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The <code>a href</code> row in ARIA in HTML allows the button role. So the code below is
        fine for document conformance. But &quot;allowed&quot; means &quot;you may write it this
        way,&quot; not &quot;written this way, it works.&quot;
      </>
    ),
    label: 'An allowed declaration — the button role on a link',
    caption: 'What an allowed declaration proves and what it does not',
    head: ['Question', 'Answer', 'Where to check'],
    rows: [
      ['Does the document conform to ARIA in HTML?', 'Yes', 'The a href row of ARIA in HTML'],
      ['What role is exposed?', 'Expected to be button', 'The accessibility tree in browser tools'],
      [
        'Does Space activate it?',
        'No; the link’s default behavior remains. A script is needed',
        'Directly with the keyboard',
      ],
      [
        'What happens on Enter?',
        'It goes to /cart unless a script prevents it',
        'Directly with the keyboard',
      ],
      [
        'Does assistive technology treat it as a button?',
        'It differs by combination',
        'Real assistive technology and browser combinations',
      ],
    ],
    after: (
      <>
        Check the first row with the normative document, the second with browser tools, and the rest
        with real behavior and assistive technology. Do not fill one cell from another&apos;s
        answer. The &quot;accessibility supported&quot; requirement of WCAG conformance was covered
        on <PageLink locale="en" id="conformance" />.
      </>
    ),
  },
};

export const AllowedSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.allowed.id}>
      <DocH2 {...toc.allowed} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={code[locale]} label={c.label} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
