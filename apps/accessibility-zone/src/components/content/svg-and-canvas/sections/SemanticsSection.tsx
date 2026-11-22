import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<!-- 원 하나: 화면에는 보이지만 이름도, 포커스도 없다 -->
<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" /></svg>

<!-- 칠한 픽셀: DOM 안에 도형이 없다. 안쪽 내용은 대체 내용이다 -->
<canvas width="240" height="120">좌석 배치도. 선택은 아래 버튼으로 합니다.</canvas>`,
  en: `<!-- One circle: visible, but no name and no focus -->
<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" /></svg>

<!-- Painted pixels: no shapes in the DOM. The content inside is fallback content -->
<canvas width="240" height="120">Seat map. Choose with the buttons below.</canvas>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        SVG의 도형은 DOM 요소이지만, 원이나 사각형이 무엇을 뜻하는지는 아무도 알려 주지 않습니다.
        Canvas는 더 멀리 있습니다. 그린 뒤에는 픽셀만 남아 DOM에 도형이 없습니다. 클릭 처리도 같은
        문제를 만듭니다. <PageLink locale={locale} id="text-and-controls" />
        에서 본 div 버튼처럼, 포인터 이벤트만 붙이면 키보드로 닿지 않습니다.
      </>
    ),
    label: '이름 없는 SVG 도형과 Canvas',
    caption: '스스로 생기지 않는 것과 작성자가 줄 것',
    head: ['대상', '스스로 생기지 않는 것', '작성자가 줄 것'],
    rows: [
      ['정보를 전하는 SVG', '그림이라는 역할과 이름', 'role="img"와 짧은 이름, 값은 HTML로'],
      ['장식 SVG', '건너뛰어도 된다는 표시', 'aria-hidden="true"'],
      ['Canvas 그림', 'DOM 안의 도형, 이름', '대체 내용이나 바깥의 같은 내용 HTML'],
      ['Canvas 위의 조작', '포커스, 키 처리, 상태', '같은 기능을 하는 HTML 컨트롤'],
    ],
    note: '보조기술에 무엇이 노출되는지는 브라우저마다 다를 수 있으니, 실제 결과는 개발자 도구와 보조기술에서 확인합니다.',
  },
  en: {
    intro: (locale: Locale) => (
      <>
        SVG shapes are DOM elements, but nothing says what a circle or a rectangle means. Canvas is
        further away: once drawn, only pixels remain and the DOM has no shapes. Click handling has
        the same problem. Like the div button on <PageLink locale={locale} id="text-and-controls" />
        , adding only pointer events leaves it out of reach of the keyboard.
      </>
    ),
    label: 'An unnamed SVG shape and a Canvas',
    caption: 'What does not appear by itself, and what the author gives',
    head: ['Target', 'Does not appear by itself', 'The author gives'],
    rows: [
      [
        'SVG that carries information',
        'The image role and a name',
        'role="img" and a short name; values in HTML',
      ],
      ['Decorative SVG', 'A sign that it can be skipped', 'aria-hidden="true"'],
      [
        'A Canvas drawing',
        'Shapes in the DOM, a name',
        'Fallback content, or the same content in HTML outside',
      ],
      [
        'Interaction on a Canvas',
        'Focus, key handling, state',
        'HTML controls that do the same job',
      ],
    ],
    note: 'What is exposed to assistive technology can differ between browsers, so check the real result in devtools and assistive technology.',
  },
};

export const SemanticsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.semantics.id}>
      <DocH2 {...toc.semantics} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="devtools" />
        <span>{c.note}</span>
      </p>
    </section>
  );
};
