import type { Locale } from '@it-tech-blog/preferences';
import {
  Callout,
  CodeBlock,
  CodeCompare,
  DocH2,
  DocH3,
  DocTable,
  ExternalLink,
} from '@it-tech-blog/ui';

import { getToc } from '../toc';

const REACT_USE_ID = 'https://react.dev/reference/react/useId';

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
        'HTML 자동 완성 토큰. WCAG 2.2 성공 기준 1.3.5(AA)를 충족하는 기법',
      ],
      [<code key="a">required</code>, '브라우저 기본 검사, 보조기술에 "필수" 전달', 'HTML'],
    ],
    purposeTitle: '1.3.5가 요구하는 것은 결과입니다',
    purpose: (
      <>
        WCAG 2.2 성공 기준 1.3.5 입력 목적 식별(AA)은 <strong>사용자 본인에 관한 정보</strong>를
        받는 칸에 적용됩니다. 그 목적이 WCAG의 입력 목적 목록에 있고, 목적을 알릴 수 있는 기술로
        만들었을 때입니다. 요구하는 결과는 그 칸의 목적을 프로그램이 알 수 있는 것입니다. HTML에서는
        알맞은 <code>autocomplete</code> 토큰을 쓰는 것이 그 결과를 내는 기법입니다. 받는 사람
        이메일처럼 다른 사람의 정보를 받는 칸은 이 기준의 대상이 아닙니다.
      </>
    ),
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
        React에서는{' '}
        <ExternalLink href={REACT_USE_ID}>
          <code>useId</code>
        </ExternalLink>
        로 인스턴스마다 다른 id를 만듭니다. 이 페이지의 문의 폼도 이 방법으로 id를 만듭니다.
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
        'An HTML autofill token; a technique for meeting WCAG 2.2 SC 1.3.5 (AA)',
      ],
      [
        <code key="a">required</code>,
        'The browser’s built-in check; "required" reaches assistive technology',
        'HTML',
      ],
    ],
    purposeTitle: 'What 1.3.5 requires is an outcome',
    purpose: (
      <>
        WCAG 2.2 Success Criterion 1.3.5 Identify Input Purpose (AA) applies to fields that collect{' '}
        <strong>information about the user</strong>, when the purpose is in WCAG&apos;s list of
        input purposes and the technology can identify that meaning. The required outcome is that
        the field&apos;s purpose can be programmatically determined. In HTML, using the right{' '}
        <code>autocomplete</code> token is a technique that produces that outcome. A field for
        someone else&apos;s information, such as a recipient&apos;s email, is not in scope.
      </>
    ),
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
        In React,{' '}
        <ExternalLink href={REACT_USE_ID}>
          <code>useId</code>
        </ExternalLink>{' '}
        creates a different id for each instance. The contact form on this page creates its ids this
        way too.
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
      <Callout variant="note" title={c.purposeTitle}>
        <p>{c.purpose}</p>
      </Callout>

      <DocH3>{c.idsHeading}</DocH3>
      <p>{c.ids}</p>
      <CodeCompare before={duplicate[locale].before} after={duplicate[locale].after} />
      <p>{c.useId}</p>
      <CodeBlock label={c.useIdLabel} code={useIdCode[locale]} />
    </section>
  );
};
