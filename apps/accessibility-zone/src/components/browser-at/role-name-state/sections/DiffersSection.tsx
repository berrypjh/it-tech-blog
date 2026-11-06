import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<label for="qty">수량</label>
<input id="qty" type="number" value="2">
<!-- 보이는 글자: "수량"과 칸 안의 "2" -->
<!-- 이름: "수량" · 값: "2" -->`,
  en: `<label for="qty">Quantity</label>
<input id="qty" type="number" value="2">
<!-- visible text: "Quantity" and "2" in the box -->
<!-- name: "Quantity" · value: "2" -->`,
};

const content = {
  ko: {
    intro: (
      <>
        화면에 보이는 글자가 곧 이름은 아닙니다. 입력 칸에서는 보이는 글자의 일부가 이름이고 일부는
        값입니다. 체크박스에서는 체크 표시가 상태입니다.
      </>
    ),
    label: '보이는 글자가 이름과 값으로 나뉘는 예',
    caption: '헷갈리기 쉬운 다섯 가지',
    head: ['구분', '어디서 오나', '실습 패널에서'],
    rows: [
      ['보이는 텍스트', '화면에 그려진 글자 전부', '—'],
      ['접근성 이름', '브라우저가 이름 계산 규칙으로 정한 이름', '읽지 않음 (도구에서 확인)'],
      [
        '입력 값',
        <>
          입력 칸의 <code>value</code> 속성값(property)
        </>,
        '읽음',
      ],
      [
        '체크 상태',
        <>
          체크박스의 <code>checked</code> 속성값(property)
        </>,
        '읽음',
      ],
      [
        '레이블 관계',
        <>
          <code>label</code>의 <code>for</code>나 감싸기로 생긴 연결
        </>,
        <>
          <code>input.labels</code>로 읽음
        </>,
      ],
    ],
    controls: (
      <>
        컨트롤마다 주는 정보도 다릅니다. 버튼은 역할과 이름이 중심이고 값이 없습니다. 체크박스는
        체크 상태가 더해지고, 입력 칸은 값과 레이블 관계가 더해집니다. 같은 컨트롤이라도
        브라우저마다 노출하는 속성의 이름이나 범위가 다를 수 있습니다.
      </>
    ),
    calloutTitle: '"DOM에서 읽은 값"은 접근성 검사값이 아닙니다',
    callout: (
      <>
        실습 패널의 <code>checked</code> · <code>value</code> · label 글자는 실제 DOM에서 읽은
        값입니다. 브라우저가 이 값을 접근성 객체에 어떻게 반영했는지는 개발자 도구에서 확인합니다.
        일반 페이지의 스크립트는 접근성 트리 전체를 읽을 수 없습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The text you see on screen is not the name as is. In an input, part of the visible text is
        the name and part is the value. In a checkbox, the check mark is the state.
      </>
    ),
    label: 'Visible text splitting into a name and a value',
    caption: 'Five things that are easy to confuse',
    head: ['Item', 'Where it comes from', 'In the exercise panel'],
    rows: [
      ['Visible text', 'All the text drawn on screen', '—'],
      [
        'Accessible name',
        'The name the browser decides with the name computation rules',
        'Not read (check in tools)',
      ],
      [
        'Input value',
        <>
          The input&apos;s <code>value</code> property
        </>,
        'Read',
      ],
      [
        'Checked state',
        <>
          The checkbox&apos;s <code>checked</code> property
        </>,
        'Read',
      ],
      [
        'Label relation',
        <>
          The link made by <code>label</code>&apos;s <code>for</code> or by wrapping
        </>,
        <>
          Read with <code>input.labels</code>
        </>,
      ],
    ],
    controls: (
      <>
        Each control gives different information, too. A button centers on role and name and has no
        value. A checkbox adds a checked state, and an input adds a value and a label relation. Even
        for the same control, the names and range of exposed properties can differ between browsers.
      </>
    ),
    calloutTitle: '"Values read from the DOM" are not accessibility inspection values',
    callout: (
      <>
        The <code>checked</code>, <code>value</code>, and label text in the exercise panel are read
        from the real DOM. How the browser reflected them in the accessible object is checked in
        developer tools. A regular page&apos;s script cannot read the whole accessibility tree.
      </>
    ),
  },
};

export const DiffersSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.differs.id}>
      <DocH2 {...toc.differs} />
      <p>{c.intro}</p>
      <CodeBlock label={c.label} code={code[locale]} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.controls}</p>
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
        <p>
          <SourceTag locale={locale} id="dom" /> <SourceTag locale={locale} id="devtools" />
        </p>
      </Callout>
    </section>
  );
};
