import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `<!-- 1. for와 id로 연결 -->
<label for="full-name">이름</label>
<input id="full-name" name="name" />

<!-- 2. 감싸서 연결 — id가 필요 없음 -->
<label>
  이름
  <input name="name" />
</label>`,
  en: `<!-- 1. Associate with for and id -->
<label for="full-name">Name</label>
<input id="full-name" name="name" />

<!-- 2. Associate by wrapping — no id needed -->
<label>
  Name
  <input name="name" />
</label>`,
};

const content = {
  ko: {
    intro: (
      <>
        <code>label</code>을 입력 칸과 연결하면 두 가지가 생깁니다. 보조기술이 입력 칸에 도착했을 때
        읽을 <strong>이름</strong>(접근 가능한 이름), 그리고 라벨 글자를 눌러도 입력 칸에 포커스가
        가는 <strong>넓은 누름 영역</strong>입니다. 연결 방법은 두 가지이고 결과는 같습니다.
      </>
    ),
    codeLabel: '라벨을 연결하는 두 방법',
    idName: (
      <>
        <code>id</code>와 <code>name</code>은 하는 일이 다릅니다. <code>id</code>는 문서 안에서
        요소를 가리키는 이름이라 <code>label</code>의 <code>for</code>가 이것을 씁니다.{' '}
        <code>name</code>은 폼을 제출할 때 값에 붙는 이름입니다. 그래서 예제의 <code>id</code>와{' '}
        <code>name</code>은 일부러 다르게 썼습니다.
      </>
    ),
    placeholderIntro: (
      <>
        <code>placeholder</code>는 입력 예시를 보여 주는 힌트이지 라벨이 아닙니다.
      </>
    ),
    caption: '보이는 라벨과 placeholder의 역할',
    head: ['비교 항목', 'label', 'placeholder만'],
    rows: [
      ['입력 중에도 보임', '보임', '글자를 쓰면 사라집니다'],
      ['누르면 입력 칸에 포커스', '됨', '해당 없음'],
      ['기본 글자 대비', '본문과 같음', '흐리게 표시되는 경우가 많습니다'],
      [
        '접근 가능한 이름',
        '라벨 글자',
        '다른 이름이 없을 때 마지막 후보로 쓰이지만, 브라우저 · 보조기술 조합에 따라 다르게 전달될 수 있습니다',
      ],
    ],
    after: (
      <>
        그래서 보이는 라벨을 두고, 형식 예시가 필요하면 라벨 아래 설명 글로 씁니다. placeholder만
        있는 칸과 라벨이 있는 칸은 <PageLink locale="ko" id="intro" hash="why-frontend" />의
        &quot;프론트엔드에게 중요한 이유&quot;에서 직접 비교해 볼 수 있습니다.
      </>
    ),
    pitfallTitle: '화면에 보이는 라벨도 연결해야 이름이 됩니다',
    pitfall: (
      <>
        라벨이 화면에 있어도 연결되지 않으면 보조기술에는 이름 없는 입력 칸입니다. 라벨 글자를
        눌러서 입력 칸에 포커스가 가는지 보면 연결 여부를 빠르게 확인할 수 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Associating a <code>label</code> with an input gives two things: the <strong>name</strong>{' '}
        assistive technology reads when it reaches the input, and{' '}
        <strong>a larger click target</strong>, because clicking the label text also focuses the
        input. There are two ways to associate them, with the same result.
      </>
    ),
    codeLabel: 'Two ways to associate a label',
    idName: (
      <>
        <code>id</code> and <code>name</code> do different jobs. <code>id</code> identifies the
        element in the document, so a <code>label</code>&apos;s <code>for</code> uses it.{' '}
        <code>name</code> is the key attached to the value when the form is submitted. The example
        above makes them different on purpose.
      </>
    ),
    placeholderIntro: (
      <>
        <code>placeholder</code> is a hint that shows an example; it is not a label.
      </>
    ),
    caption: 'What a visible label and a placeholder each do',
    head: ['Compared', 'label', 'placeholder only'],
    rows: [
      ['Visible while typing', 'Yes', 'Disappears once you type'],
      ['Clicking it focuses the input', 'Yes', 'Not applicable'],
      ['Default text contrast', 'Same as body text', 'Often shown faded'],
      [
        'Accessible name',
        'The label text',
        'Used as a last resort when there is no other name, but may be conveyed differently across browser and assistive technology combinations',
      ],
    ],
    after: (
      <>
        So keep a visible <code>label</code>, and if a format example is needed, write it as
        description text below the label. You can compare a placeholder-only input with a labeled
        one yourself in &quot;Why it matters to frontend&quot; on{' '}
        <PageLink locale="en" id="intro" hash="why-frontend" />.
      </>
    ),
    pitfallTitle: 'A label on screen becomes a name only when it is associated',
    pitfall: (
      <>
        Even if a label is on screen, an input without an association has no name for assistive
        technology. A quick check is to click the label text and see whether the input gets focus.
      </>
    ),
  },
};

export const LabelsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.labels.id}>
      <DocH2 {...toc.labels} />
      <p>{c.intro}</p>
      <CodeBlock label={c.codeLabel} code={code[locale]} />
      <p>{c.idName}</p>
      <p>{c.placeholderIntro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>{c.pitfall}</p>
      </Callout>
    </section>
  );
};
