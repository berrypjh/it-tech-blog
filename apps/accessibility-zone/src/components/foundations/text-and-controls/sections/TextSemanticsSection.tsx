import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeCompare, DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const code = {
  ko: {
    before: `<div>· 무료 배송</div>
<div>· 30일 반품</div>
<p>"쉽게 연결된다"고 리뷰어 김민지가 말했다.</p>
<p><b>품절 시 자동 취소됩니다.</b></p>`,
    after: `<ul>
  <li>무료 배송</li>
  <li>30일 반품</li>
</ul>
<blockquote>
  <p>쉽게 연결된다.</p>
</blockquote>
<p>— 리뷰어 김민지</p>
<p><strong>품절 시 자동 취소됩니다.</strong></p>`,
  },
  en: {
    before: `<div>· Free shipping</div>
<div>· 30-day returns</div>
<p>"It connects easily," said reviewer Jamie Lee.</p>
<p><b>Out-of-stock orders are cancelled automatically.</b></p>`,
    after: `<ul>
  <li>Free shipping</li>
  <li>30-day returns</li>
</ul>
<blockquote>
  <p>It connects easily.</p>
</blockquote>
<p>— reviewer Jamie Lee</p>
<p><strong>Out-of-stock orders are cancelled automatically.</strong></p>`,
  },
};

const content = {
  ko: {
    intro: (
      <>
        글의 구조도 마크업으로 전달됩니다. 목록으로 표시하면 화면 낭독기는 흔히 &quot;목록, 항목
        3개&quot;처럼 개수를 먼저 알려 주고, 사용자는 목록을 통째로 건너뛸 수 있습니다. 가운뎃점과
        줄바꿈으로만 만든 목록은 이런 정보가 없습니다.
      </>
    ),
    caption: '글의 의미를 나타내는 요소',
    head: ['요소', '뜻', '흔한 오용'],
    rows: [
      [<code key="e">ul · ol</code>, '순서 없는 / 있는 목록', '들여쓰기를 하려고 ul을 씁니다'],
      [<code key="e">dl · dt · dd</code>, '용어와 설명의 짝', '두 열 배치를 하려고 씁니다'],
      [<code key="e">blockquote</code>, '다른 곳에서 가져온 긴 인용', '글을 들여 쓰려고 씁니다'],
      [<code key="e">q</code>, '문장 안의 짧은 인용', '따옴표를 직접 쓰고 q로 또 감쌉니다'],
      [<code key="e">cite</code>, '작품의 제목(책 · 글 · 영화 등)', '말한 사람의 이름에 씁니다'],
      [<code key="e">strong</code>, '중요함 · 긴급함', '굵게 보이려고 씁니다'],
      [<code key="e">em</code>, '말할 때의 강세(뜻이 달라지는 강조)', '기울이려고 씁니다'],
      [
        <code key="e">b · i</code>,
        '특별한 의미 없이 문체만 구분',
        '중요한 경고를 b로만 표시합니다',
      ],
    ],
    emphasis: (
      <>
        많은 화면 낭독기는 기본 설정에서 <code>strong</code>과 <code>em</code>을 따로 읽어 주지
        않습니다. 그래서 강조 요소는 의미를 올바르게 표시하는 수단이지, 중요한 정보를 전달하는
        유일한 수단이 되어서는 안 됩니다. &quot;품절 시 자동 취소&quot;처럼 놓치면 안 되는 정보는
        문장 자체로 분명하게 씁니다.
      </>
    ),
    listNoteTitle: '목록 기호를 지우면 목록의 의미가 빠지기도 합니다',
    listNote: (
      <>
        CSS로 목록 기호를 지우면(<code>list-style: none</code>) 일부 브라우저(Safari)는 목록의
        의미를 접근성 트리에서 빼기도 합니다. 브라우저마다 다르므로, 기호 없는 목록이 목록으로
        전달되는지는 실제 환경에서 확인합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The structure of text is conveyed through markup too. When something is marked up as a list,
        screen readers often announce the count first, like &quot;list, 3 items&quot;, and users can
        skip the whole list. A list built from bullets and line breaks carries none of that.
      </>
    ),
    caption: 'Elements that give text meaning',
    head: ['Element', 'Meaning', 'Common misuse'],
    rows: [
      [<code key="e">ul · ol</code>, 'Unordered / ordered list', 'Using ul just to indent'],
      [
        <code key="e">dl · dt · dd</code>,
        'Pairs of terms and descriptions',
        'Using it for a two-column layout',
      ],
      [
        <code key="e">blockquote</code>,
        'A longer quotation from another source',
        'Using it to indent text',
      ],
      [
        <code key="e">q</code>,
        'A short inline quotation',
        'Typing quote marks and wrapping in q as well',
      ],
      [
        <code key="e">cite</code>,
        'The title of a work (book, article, film…)',
        'Using it for the speaker’s name',
      ],
      [<code key="e">strong</code>, 'Importance or urgency', 'Using it just to make text bold'],
      [
        <code key="e">em</code>,
        'Stress emphasis that changes meaning',
        'Using it just to italicize',
      ],
      [
        <code key="e">b · i</code>,
        'A stylistic offset with no extra meaning',
        'Marking a critical warning only with b',
      ],
    ],
    emphasis: (
      <>
        Many screen readers do not announce <code>strong</code> and <code>em</code> with default
        settings. So emphasis elements are a way to mark meaning correctly, not the only way to
        convey important information. Write information that must not be missed, like
        &quot;out-of-stock orders are cancelled&quot;, clearly in the sentence itself.
      </>
    ),
    listNoteTitle: 'Removing list markers can remove list semantics',
    listNote: (
      <>
        When CSS removes list markers (<code>list-style: none</code>), some browsers (Safari) may
        drop the list semantics from the accessibility tree. This differs between browsers, so check
        in real environments whether a list without markers is still conveyed as a list.
      </>
    ),
  },
};

export const TextSemanticsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.textSemantics.id}>
      <DocH2 {...toc.textSemantics} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <CodeCompare before={code[locale].before} after={code[locale].after} />
      <p>{c.emphasis}</p>
      <Callout variant="pitfall" title={c.listNoteTitle}>
        <p>{c.listNote}</p>
      </Callout>
    </section>
  );
};
