import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { EyeOff, Layers, Link2, Type } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 배치용 요소 · 숨긴 하위 트리 · CSS가 만든 글자 · 합쳐지는 정보. */
const rowIcons = [Layers, EyeOff, Type, Link2];

const content = {
  ko: {
    intro: (
      <>
        접근성 트리는 DOM을 그대로 복사한 트리가 아닙니다. 노드 하나가 빠지기도 하고, DOM에 없는
        노드가 생기기도 하고, 여러 노드가 하나의 정보로 합쳐지기도 합니다.
      </>
    ),
    caption: 'DOM과 접근성 트리가 어긋나는 흔한 경우',
    head: ['경우', 'DOM', '접근성 트리에서'],
    rows: [
      [
        '배치용 요소',
        <>
          의미 없이 감싸는 <code>&lt;div&gt;</code> 여러 겹
        </>,
        '무시되거나 정리되어 트리에서 잘 보이지 않을 수 있습니다',
      ],
      [
        '숨긴 하위 트리',
        <>
          <code>aria-hidden=&quot;true&quot;</code>를 붙인 아이콘 묶음
        </>,
        '요소와 그 안쪽이 함께 빠집니다',
      ],
      [
        'CSS가 만든 글자',
        <>
          <code>::before</code>의 <code>content</code>
        </>,
        'DOM 노드가 없어도 글자 노드로 나타나고 이름에 들어갈 수 있습니다',
      ],
      [
        '합쳐지는 정보',
        <>
          <code>&lt;label&gt;</code>과 <code>&lt;input&gt;</code>
        </>,
        'label의 글자가 입력 칸의 이름이 되어, 두 요소가 입력 칸 객체 하나로 전달됩니다',
      ],
    ],
    after: (
      <>
        그래서 &quot;DOM의 이 노드가 트리의 저 노드&quot;라고 한 줄씩 짝짓지 않습니다. 개발자
        도구에서 노드를 고르면 서로 대응하는 쪽을 보여 주지만, 대응하는 노드가 없는 쪽도 있습니다.
        정리되는 방식은 브라우저마다 다를 수 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The accessibility tree is not a copy of the DOM. A node may drop out, a node with no DOM
        counterpart may appear, and several nodes may merge into one piece of information.
      </>
    ),
    caption: 'Common cases where the DOM and the accessibility tree diverge',
    head: ['Case', 'DOM', 'In the accessibility tree'],
    rows: [
      [
        'Layout elements',
        <>
          Several layers of wrapping <code>&lt;div&gt;</code>s with no meaning
        </>,
        'May be ignored or pruned and hard to see in the tree',
      ],
      [
        'Hidden subtree',
        <>
          An icon group with <code>aria-hidden=&quot;true&quot;</code>
        </>,
        'The element and everything inside it are removed',
      ],
      [
        'Text made by CSS',
        <>
          <code>content</code> in <code>::before</code>
        </>,
        'Appears as a text node with no DOM node, and can go into a name',
      ],
      [
        'Merged information',
        <>
          A <code>&lt;label&gt;</code> and an <code>&lt;input&gt;</code>
        </>,
        'The label’s text becomes the input’s name, so the two elements are conveyed as one input object',
      ],
    ],
    after: (
      <>
        So do not pair them line by line as &quot;this DOM node is that tree node.&quot; Selecting a
        node in developer tools shows its counterpart, but some nodes have none. How nodes are
        pruned can differ between browsers.
      </>
    ),
  },
};

export const NotOneToOneSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.notOneToOne.id}>
      <DocH2 {...toc.notOneToOne} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="model" />
      </p>
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
      <p>{c.after}</p>
    </section>
  );
};
