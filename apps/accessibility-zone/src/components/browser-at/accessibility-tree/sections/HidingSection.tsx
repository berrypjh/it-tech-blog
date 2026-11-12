import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { EyeOff, Palette, Tag } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { ThemedFigure } from '@/components/shared/ThemedFigure';

import { HidingDemo } from '../demos/HidingDemo';
import hidingTreeDark from '../images/hiding-tree-dark.webp';
import hidingTreeLight from '../images/hiding-tree-light.webp';
import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 네이티브 의미 · 숨김 상태 · 스타일 변화. */
const rowIcons = [Tag, EyeOff, Palette];

const content = {
  ko: {
    figure: {
      alt: '브라우저 창 안에 같은 모양의 문단 카드 다섯 장이 있고, 앞의 두 장만 또렷하고 나머지 세 장은 흐립니다. 아래 접근성 트리에는 또렷한 두 장과 흐린 카드 하나만 점선으로 이어진 노드가 있고, 흐린 카드에서 이어진 노드는 강조되어 있습니다. 나머지 두 자리는 비어 있습니다.',
      caption:
        '화면에서 안 보이는 요소도 숨기는 방법에 따라 접근성 트리에 남기도 하고 빠지기도 합니다. 학습용으로 단순화한 그림입니다.',
    },
    intro: (
      <>
        아래 표는 같은 글자나 컨트롤이 접근성 트리에서 어떻게 달라지는지 보여 주는 사례입니다. 표의
        결과는 교육용 모델이고, 실습에서 지금 쓰는 브라우저로 직접 확인합니다.
      </>
    ),
    caption: '노출을 바꾸는 세 가지 원인',
    head: ['원인', '사례', '흔히 보이는 결과'],
    rows: [
      [
        '네이티브 의미',
        <>
          <code>&lt;button&gt;</code>과 클릭 핸들러만 붙인 <code>&lt;div&gt;</code>
        </>,
        <>
          button은 역할 &quot;button&quot;과 포커스, Enter · Space 키 동작을 기본으로 갖습니다.
          div에는 버튼 의미와 기본 키보드 동작이 없고, 트리에 일반 노드로 남을지는 브라우저마다 다를
          수 있습니다. <PageLink locale="ko" id="text-and-controls" />의 사례입니다
        </>,
      ],
      [
        '숨김 상태',
        <>
          <code>hidden</code> · <code>display: none</code> · <code>visibility: hidden</code>
        </>,
        '화면과 접근성 트리에서 함께 빠집니다. visibility: hidden은 자리를 남기고, 자식에 visibility: visible을 주면 그 자식은 다시 보이고 노출됩니다',
      ],
      [
        '스타일 변화',
        <>
          <code>opacity: 0</code>, 화면 밖으로 옮기기, 시각적으로만 숨기는 클래스
        </>,
        '화면에서는 안 보여도 접근성 트리에는 남습니다',
      ],
    ],
    after: (
      <>
        마지막 두 줄이 갈리는 지점이 중요합니다. 눈으로 &quot;안 보인다&quot;는 같아도 접근성
        트리에서는 결과가 다릅니다. 그래서 숨김을 확인할 때는 화면이 아니라 트리를 봅니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'A browser window holds five identical paragraph cards; the first two are clear and the other three are faded. In the accessibility tree below, only the two clear cards and one faded card connect to nodes by dotted lines, and the node from the faded card is highlighted. The two remaining slots are empty.',
      caption:
        'Elements you cannot see on screen may stay in or drop out of the accessibility tree, depending on how they are hidden. A simplified teaching picture.',
    },
    intro: (
      <>
        The table below shows how the same text or control can change in the accessibility tree. The
        results are a teaching model; the exercise checks them in the browser you are using.
      </>
    ),
    caption: 'Three causes that change what is exposed',
    head: ['Cause', 'Example', 'Commonly seen result'],
    rows: [
      [
        'Native meaning',
        <>
          A <code>&lt;button&gt;</code> and a <code>&lt;div&gt;</code> with only a click handler
        </>,
        <>
          The button has the role &quot;button&quot;, focus, and Enter and Space activation by
          default. The div has no button meaning and no default keyboard behavior; whether it stays
          in the tree as a generic node can vary by browser. This is the case from{' '}
          <PageLink locale="en" id="text-and-controls" />
        </>,
      ],
      [
        'Hidden state',
        <>
          <code>hidden</code>, <code>display: none</code>, <code>visibility: hidden</code>
        </>,
        'Removed from the screen and the accessibility tree together. visibility: hidden keeps the space, and a child set to visibility: visible is shown and exposed again',
      ],
      [
        'Style change',
        <>
          <code>opacity: 0</code>, moving off screen, a visually-hidden class
        </>,
        'Not visible on screen, but stays in the accessibility tree',
      ],
    ],
    after: (
      <>
        Where the last two rows split matters. &quot;I can&apos;t see it&quot; is the same, but the
        accessibility tree differs. So to check hiding, look at the tree, not the screen.
      </>
    ),
  },
};

export const HidingSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.hiding.id}>
      <DocH2 {...toc.hiding} />
      <p>{c.intro}</p>
      <ThemedFigure light={hidingTreeLight} dark={hidingTreeDark} {...c.figure} />
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
      <HidingDemo />
    </section>
  );
};
