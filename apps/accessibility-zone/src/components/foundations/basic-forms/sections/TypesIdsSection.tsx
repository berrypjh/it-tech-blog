import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, CodeCompare, DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const duplicate = {
  ko: {
    before: `<!-- 같은 컴포넌트를 두 번 그림 -->
<label for="email">받는 사람 이메일</label>
<input id="email" type="email" />

<label for="email">보내는 사람 이메일</label>
<input id="email" type="email" />  <!-- 이름 없음 -->`,
    after: `<label for="to-email">받는 사람 이메일</label>
<input id="to-email" type="email" />

<label for="from-email">보내는 사람 이메일</label>
<input id="from-email" type="email" />`,
  },
  en: {
    before: `<!-- the same component rendered twice -->
<label for="email">Recipient email</label>
<input id="email" type="email" />

<label for="email">Sender email</label>
<input id="email" type="email" />  <!-- no name -->`,
    after: `<label for="to-email">Recipient email</label>
<input id="to-email" type="email" />

<label for="from-email">Sender email</label>
<input id="from-email" type="email" />`,
  },
};

const useIdCode = {
  ko: `import { useId } from 'react';

const EmailField = ({ label }: { label: string }) => {
  const id = useId(); // 컴포넌트 인스턴스마다 다른 id
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="email" autoComplete="email" />
    </>
  );
};`,
  en: `import { useId } from 'react';

const EmailField = ({ label }: { label: string }) => {
  const id = useId(); // a different id for each instance
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="email" autoComplete="email" />
    </>
  );
};`,
};

const content = {
  ko: {
    intro: (
      <>
        <code>input</code>의 속성은 입력을 돕는 정보를 브라우저와 보조기술에 함께 줍니다. 필요한
        것만 정확히 씁니다.
      </>
    ),
    caption: '입력을 돕는 속성',
    head: ['속성', '주는 것', '근거'],
    rows: [
      [
        <code key="a">type=&quot;email&quot;</code>,
        '모바일에서 @가 있는 자판, 브라우저의 형식 검사',
        'HTML',
      ],
      [
        <code key="a">type=&quot;tel&quot;</code>,
        '모바일에서 숫자 자판. 형식 검사는 없습니다',
        'HTML',
      ],
      [
        <code key="a">autocomplete=&quot;email&quot;</code>,
        '저장된 값 자동 완성. 입력 목적을 기계가 알 수 있습니다',
        '요구 — WCAG 2.2 성공 기준 1.3.5 입력 목적 식별(AA), 사용자 본인 정보 칸',
      ],
      [<code key="a">required</code>, '브라우저 기본 검사, 보조기술에 "필수" 전달', 'HTML'],
    ],
    idsHeading: 'id는 문서 안에서 하나여야 한다',
    ids: (
      <>
        <code>label</code>의 <code>for</code>는 id가 같은 <strong>첫 번째</strong> 요소를
        가리킵니다. 같은 입력 컴포넌트를 한 페이지에 두 번 그리면서 id를 고정해 두면 두 라벨이 모두
        첫 번째 칸에 연결되고, 두 번째 칸은 이름이 없어집니다.
      </>
    ),
    useId: (
      <>
        React에서는 <code>useId</code>로 인스턴스마다 다른 id를 만듭니다. 이 페이지의 문의 폼도 이
        방법으로 id를 만듭니다.
      </>
    ),
    useIdLabel: 'useId로 인스턴스마다 다른 id 만들기',
  },
  en: {
    intro: (
      <>
        Attributes on <code>input</code> give information that helps input to the browser and
        assistive technology at once. Use only what you need, accurately.
      </>
    ),
    caption: 'Attributes that help input',
    head: ['Attribute', 'What it gives', 'Basis'],
    rows: [
      [
        <code key="a">type=&quot;email&quot;</code>,
        'A keyboard with @ on mobile, the browser’s format check',
        'HTML',
      ],
      [
        <code key="a">type=&quot;tel&quot;</code>,
        'A numeric keypad on mobile. No format check',
        'HTML',
      ],
      [
        <code key="a">autocomplete=&quot;email&quot;</code>,
        'Autofill from saved values; the input purpose is machine-readable',
        'Required — WCAG 1.3.5 (AA), for fields about the user',
      ],
      [
        <code key="a">required</code>,
        'The browser’s built-in check; "required" reaches assistive technology',
        'HTML',
      ],
    ],
    idsHeading: 'An id must be unique in the document',
    ids: (
      <>
        A <code>label</code>&apos;s <code>for</code> points to the <strong>first</strong> element
        with that id. If you render the same input component twice on a page with a fixed id, both
        labels connect to the first input and the second one is left without a name.
      </>
    ),
    useId: (
      <>
        In React, <code>useId</code> creates a different id for each instance. The contact form on
        this page creates its ids this way too.
      </>
    ),
    useIdLabel: 'A different id per instance with useId',
  },
};

export const TypesIdsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.typesIds.id}>
      <DocH2 {...toc.typesIds} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />

      <DocH3>{c.idsHeading}</DocH3>
      <p>{c.ids}</p>
      <CodeCompare before={duplicate[locale].before} after={duplicate[locale].after} />
      <p>{c.useId}</p>
      <CodeBlock label={c.useIdLabel} code={useIdCode[locale]} />
    </section>
  );
};
