import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { FileCode, Network, Palette, Zap } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { PageLink } from '@/components/shared/PageLink';
import { ThemedFigure } from '@/components/shared/ThemedFigure';

import layersDark from '../images/layers-dark.webp';
import layersLight from '../images/layers-light.webp';
import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 네 층 — HTML · DOM · CSS · JavaScript. */
const rowIcons = [FileCode, Network, Palette, Zap];

const content = {
  ko: {
    figure: {
      alt: '페이지 뼈대, DOM 트리, 꾸민 화면, 동작을 뜻하는 톱니바퀴가 네 층으로 쌓여 있고, 번개 화살표가 DOM 트리의 한 노드를 가리킵니다. 꾸민 화면과 DOM 트리에서 나온 점선은 오른쪽의 작은 트리를 거쳐 스피커로 이어집니다.',
      caption:
        '웹 페이지는 네 층이 함께 만듭니다. JavaScript는 DOM을 바꾸고, 보조기술은 DOM과 스타일에서 만든 접근성 트리를 받습니다. 학습용으로 단순화한 그림입니다.',
    },
    intro: (
      <>
        웹 페이지는 네 층이 함께 만듭니다. 각 층이 맡는 일이 다르므로 결함을 찾을 때도 먼저{' '}
        <strong>어느 층의 책임인가</strong>를 묻습니다.
      </>
    ),
    caption: '네 층이 맡는 일과 접근성에 닿는 지점',
    head: ['층', '맡는 일', '접근성에 닿는 지점'],
    rows: [
      [
        'HTML',
        '문서의 구조와 의미, 요소의 기본 동작',
        <>
          <code>button</code>은 포커스와 Enter · Space 실행을, <code>label</code>은 입력 칸의 이름을
          기본으로 줍니다
        </>,
      ],
      [
        'DOM',
        '브라우저가 HTML을 읽어 만든 객체 트리이자 스크립트가 읽고 바꾸는 대상',
        '보조기술에 전달되는 정보는 소스 파일이 아니라 지금 이 순간의 DOM에서 나옵니다',
      ],
      [
        'CSS',
        '색 · 크기 · 배치 · 표시 여부 같은 표현',
        <>
          <code>display: none</code>은 화면과 접근성 트리에서 함께 빠집니다. 배치를 바꿔도 DOM
          순서는 그대로입니다
        </>,
      ],
      [
        'JavaScript',
        '이벤트를 받아 상태를 바꾸고 DOM에 반영',
        <>
          바뀐 상태를 속성(<code>hidden</code> · <code>aria-expanded</code> 등)으로 DOM에 남겨야
          화면과 보조기술이 같은 상태를 봅니다
        </>,
      ],
    ],
    tree: (
      <>
        브라우저는 DOM과 계산된 스타일에서 <strong>접근성 트리</strong>를 만들고, 운영체제의 접근성
        API를 거쳐 화면 낭독기 같은 보조기술에 역할 · 이름 · 상태를 전달합니다. 이 흐름의 그림은{' '}
        <PageLink locale="ko" id="intro" hash="why-frontend" />의 &quot;프론트엔드에게 중요한
        이유&quot;에 있습니다.
      </>
    ),
    aria: (
      <>
        표에 나온 <code>aria-expanded</code>처럼 <code>aria-</code>로 시작하는 속성을{' '}
        <strong>ARIA</strong>라고 합니다. HTML 요소만으로는 전달되지 않는 상태나 이름을 보조기술에
        알려 주는 속성입니다. 이 장에서는 &quot;펼침 상태&quot;와 &quot;이름&quot; 정도만 쓰고,
        자세한 내용은 뒤 장에서 다룹니다.
      </>
    ),
    modelTitle: '이 표는 고칠 층을 정하기 위한 학습용 구분입니다',
    model: (
      <>
        실제 브라우저는 파싱 · 스타일 계산 · 레이아웃 · 접근성 트리 생성을 더 잘게 나누고, 층끼리
        서로 영향을 주며, 구현도 브라우저마다 다릅니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'Four stacked layers: a page skeleton, a node tree, a styled page, and gears standing for behavior. A lightning arrow points at one node in the tree. Dotted lines from the styled page and the node tree lead through a small tree on the right to a speaker.',
      caption:
        'Four layers build a web page together. JavaScript changes the DOM, and assistive technology receives an accessibility tree built from the DOM and styles. A simplified teaching picture.',
    },
    intro: (
      <>
        Four layers build a web page together. Each does a different job, so when you look for a
        defect, start by asking <strong>which layer it belongs to</strong>.
      </>
    ),
    caption: 'What each layer does and where it touches accessibility',
    head: ['Layer', 'What it does', 'Where it touches accessibility'],
    rows: [
      [
        'HTML',
        'Document structure and meaning, and the built-in behavior of elements',
        <>
          <code>button</code> gives focus and Enter/Space activation; <code>label</code> gives an
          input its name
        </>,
      ],
      [
        'DOM',
        'The object tree the browser builds from HTML; what scripts read and change',
        'What reaches assistive technology comes from the DOM as it is right now, not the source file',
      ],
      [
        'CSS',
        'Presentation: color, size, layout, whether something is shown',
        <>
          <code>display: none</code> removes an element from the screen and the accessibility tree.
          Changing the layout does not change the DOM order
        </>,
      ],
      [
        'JavaScript',
        'Receives events, changes state, and writes it to the DOM',
        <>
          State has to be left in the DOM as attributes (<code>hidden</code>,{' '}
          <code>aria-expanded</code>, …) so the screen and assistive technology see the same state
        </>,
      ],
    ],
    tree: (
      <>
        The browser builds an <strong>accessibility tree</strong> from the DOM and computed styles,
        and passes role, name, and state through the operating system&apos;s accessibility API to
        assistive technology such as screen readers. A diagram of this flow is in &quot;Why it
        matters to frontend&quot; on <PageLink locale="en" id="intro" hash="why-frontend" />.
      </>
    ),
    aria: (
      <>
        Attributes that start with <code>aria-</code>, like <code>aria-expanded</code> in the table,
        are called <strong>ARIA</strong>. They tell assistive technology a state or name that HTML
        elements alone do not convey. This chapter uses only &quot;expanded state&quot; and
        &quot;name&quot;; later chapters cover the rest.
      </>
    ),
    modelTitle: 'This table is a teaching split for deciding which layer to fix',
    model: (
      <>
        Real browsers divide parsing, style calculation, layout, and accessibility tree building
        more finely, the layers affect each other, and implementations differ between browsers.
      </>
    ),
  },
};

export const LayersSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.layers.id}>
      <DocH2 {...toc.layers} />
      <p>{c.intro}</p>
      <ThemedFigure light={layersLight} dark={layersDark} {...c.figure} />
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
      <p>{c.tree}</p>
      <p>{c.aria}</p>
      <Callout variant="note" title={c.modelTitle}>
        <p>{c.model}</p>
      </Callout>
    </section>
  );
};
