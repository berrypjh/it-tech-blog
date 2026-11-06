import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { Keyboard, ScanEye, ToggleLeft } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { SourceTag } from '@/components/shared/SourceTag';
import { ThemedFigure } from '@/components/shared/ThemedFigure';

import focusAndCursorDark from '../images/focus-and-cursor-dark.webp';
import focusAndCursorLight from '../images/focus-and-cursor-light.webp';
import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: DOM · 키보드 포커스 · 읽기 위치 · 입력 모드. */
const rowIcons = [Keyboard, ScanEye, ToggleLeft];

const content = {
  ko: {
    figure: {
      alt: '브라우저 창 아래쪽의 장바구니 버튼에 강조된 포커스 테두리가 있고, 키보드에서 점선 화살표가 그 버튼으로 이어집니다. 창 위쪽의 둘째 제목에는 헤드폰 표시가 달린 점선 테두리가 따로 있습니다.',
      caption:
        '키보드 포커스와 화면 낭독기의 읽기 위치는 서로 다른 곳에 있을 수 있습니다. 학습용으로 단순화한 그림입니다.',
    },
    intro: (
      <>
        키보드만 쓸 때는 &quot;지금 위치&quot;가 하나입니다. 화면 낭독기를 쓰면 적어도 세 가지를
        따로 생각해야 합니다.
      </>
    ),
    caption: '"지금 위치"를 이루는 세 가지',
    head: ['구분', '무엇인가', '누가 옮기나', '확인할 수 있는 곳'],
    rows: [
      [
        'DOM · 키보드 포커스',
        '키 입력을 받는 요소. 보이는 포커스 표시가 붙는 곳',
        'Tab, 클릭, 스크립트의 focus()',
        'dom',
      ],
      [
        '화면 낭독기 읽기 위치',
        '화면 낭독기가 지금 읽거나 가리키는 곳. 포커스를 받지 않는 글자 · 제목에도 갈 수 있음',
        '화면 낭독기의 탐색 명령',
        'at',
      ],
      [
        '입력 · 상호작용 모드',
        '누른 키를 화면 낭독기가 쓸지, 페이지의 컨트롤로 넘길지',
        '화면 낭독기가 자동으로, 또는 사용자가 직접',
        'at',
      ],
    ] as const,
    after: (
      <>
        읽기 위치가 포커스를 받을 수 있는 요소에 닿으면, 화면 낭독기와 설정에 따라 DOM 포커스가 함께
        옮겨지기도 합니다. 그래서 둘이 &quot;항상 다르다&quot;도 &quot;항상 같다&quot;도 아닙니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'In a browser window, the cart button near the bottom has a highlighted focus ring, and a dotted arrow leads to it from a keyboard. Separately, the second heading near the top has a dashed outline with a headphone badge.',
      caption:
        'Keyboard focus and the screen reader’s reading position can be in different places. A simplified teaching picture.',
    },
    intro: (
      <>
        With a keyboard alone there is one &quot;current position.&quot; With a screen reader you
        have to think about at least three things separately.
      </>
    ),
    caption: 'Three things that make up the "current position"',
    head: ['Item', 'What it is', 'What moves it', 'Where it can be checked'],
    rows: [
      [
        'DOM and keyboard focus',
        'The element that receives key input; where the visible focus indicator goes',
        'Tab, clicks, a script’s focus()',
        'dom',
      ],
      [
        'Screen reader reading position',
        'Where the screen reader is reading or pointing now; it can go to text and headings that do not take focus',
        'The screen reader’s navigation commands',
        'at',
      ],
      [
        'Input or interaction mode',
        'Whether the screen reader uses the keys you press or passes them to the page’s control',
        'The screen reader automatically, or the user',
        'at',
      ],
    ] as const,
    after: (
      <>
        When the reading position reaches an element that can take focus, DOM focus may move with
        it, depending on the screen reader and its settings. So the two are neither &quot;always
        different&quot; nor &quot;always the same.&quot;
      </>
    ),
  },
};

export const ThreeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.three.id}>
      <DocH2 {...toc.three} />
      <p>{c.intro}</p>
      <ThemedFigure light={focusAndCursorLight} dark={focusAndCursorDark} {...c.figure} />
      <DocTable
        caption={c.caption}
        head={[...c.head]}
        rows={c.rows.map(([a, b, d, source], i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {a}
          </IconLabel>,
          b,
          d,
          <SourceTag key="source" locale={locale} id={source} />,
        ])}
      />
      <p>{c.after}</p>
    </section>
  );
};
