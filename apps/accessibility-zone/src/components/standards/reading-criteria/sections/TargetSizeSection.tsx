import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { Copy, Globe, MoveHorizontal, ShieldCheck, Type } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { ThemedFigure } from '@/components/shared/ThemedFigure';
import { wcag22 } from '@/components/shared/wcag';

import targetSpacingDark from '../images/target-spacing-dark.webp';
import targetSpacingLight from '../images/target-spacing-light.webp';
import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 간격 · 동등 · 인라인 · 사용자 에이전트 제어 · 필수. */
const rowIcons = [MoveHorizontal, Copy, Type, Globe, ShieldCheck];

const content = {
  ko: {
    figure: {
      alt: '위 줄에는 둥근 버튼 두 개가 멀리 떨어져 있고, 각 버튼을 둘러싼 같은 크기의 점선 원이 서로 닿지 않습니다. 사이에 확인 표시가 있습니다. 아래 줄에는 별 버튼 다섯 개가 붙어 있어 이웃한 점선 원끼리 겹치고, 겹친 부분이 강조되어 있습니다. 옆에 엑스 표시가 있습니다.',
      caption:
        '버튼 크기가 같아도 간격에 따라 간격 예외의 결론이 달라집니다. 원은 어느 대상이든 같은 크기로 그립니다. 학습용으로 단순화한 그림입니다.',
    },
    intro: (
      <>
        2.5.8에는 숫자 24가 있지만, 그 숫자만으로 판정하지 않습니다. 대상(target)의 정의와 다섯
        예외를 함께 봅니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.5.8',
    definition: (
      <>
        정의: <strong>대상(target)</strong>은 포인터 동작을 받는 화면 영역입니다. 대상이 겹치면 같은
        동작이나 같은 페이지로 가는 경우를 빼고 겹친 부분은 크기에 넣지 않는 것으로 봅니다(원문은
        &quot;should not&quot;). 원문의 주석은 슬라이더 · 색 선택기처럼 위치로 값을 고르는 대상을
        하나의 대상으로 보고, 세로쓰기에서는 줄 높이를 글줄에 수직인 방향으로 해석하라고 덧붙입니다.
      </>
    ),
    caption: '2.5.8의 다섯 예외와 확인할 증거',
    head: ['예외', '해당하려면', '확인할 증거'],
    rows: [
      [
        '간격',
        '작은 대상마다 지름 24 CSS 픽셀 원을 그려도 다른 대상이나 다른 작은 대상의 원과 겹치지 않음',
        '대상 크기, 중심 사이 거리, 주변 대상',
      ],
      [
        '동등',
        '같은 페이지의 다른 컨트롤이 같은 기능을 하고 그 컨트롤은 이 기준을 충족함',
        '대체 컨트롤의 위치와 크기',
      ],
      [
        '인라인',
        '대상이 문장 안에 있거나 크기가 주변 글자의 줄 높이로 정해짐',
        '문장 구조와 줄 높이',
      ],
      [
        '사용자 에이전트 제어',
        '크기를 사용자 에이전트가 정하고 작성자가 바꾸지 않음',
        '작성자 스타일이 크기를 바꾸는지',
      ],
      [
        '필수',
        '그 모양이 전달하는 정보에 필수이거나 법적으로 요구됨',
        '왜 다른 모양이 불가능한지에 대한 근거',
      ],
    ],
    pitfallTitle: '"모든 버튼은 24px 이상"이라는 규칙을 만들지 않습니다',
    pitfall: (
      <>
        24 미만이어도 예외로 충족할 수 있고, 24 이상이어도 겹친 부분을 빼면 작아질 수 있습니다.
        숫자는 첫 확인일 뿐이고, 판정은 대상마다 예외까지 대조해서 냅니다.
      </>
    ),
  },
  en: {
    figure: {
      alt: 'In the top row, two round buttons sit far apart, and the same-sized dashed circles around them do not touch; a check mark sits between them. In the bottom row, five star buttons are packed together so neighboring dashed circles overlap, with the overlaps highlighted; a cross mark sits beside them.',
      caption:
        'With the same button size, spacing alone changes the outcome of the Spacing exception. The circle is the same size for every target. A simplified teaching picture.',
    },
    intro: (
      <>
        2.5.8 contains the number 24, but you do not judge by the number alone. Look at the
        definition of target and the five exceptions together.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.5.8',
    definition: (
      <>
        Definition: a <strong>target</strong> is a region of the display that will accept a pointer
        action. If targets overlap, the overlapping area should not be included in the measurement,
        except when they perform the same action or open the same page. The notes add that targets
        that select values by position, such as sliders and color pickers, count as one target, and
        that line height is read perpendicular to the flow of text in vertical writing.
      </>
    ),
    caption: 'The five exceptions in 2.5.8 and the evidence to check',
    head: ['Exception', 'To apply', 'Evidence to check'],
    rows: [
      [
        'Spacing',
        'A 24 CSS pixel diameter circle centered on each undersized target does not intersect another target or another undersized target’s circle',
        'Target size, distance between centers, nearby targets',
      ],
      [
        'Equivalent',
        'Another control on the same page does the same thing and meets this criterion',
        'Location and size of the alternative control',
      ],
      [
        'Inline',
        'The target is in a sentence or its size is set by the line height of the text',
        'Sentence structure and line height',
      ],
      [
        'User agent control',
        'The user agent decides the size and the author did not modify it',
        'Whether author styles change the size',
      ],
      [
        'Essential',
        'That presentation is essential to the information, or legally required',
        'Reasons another presentation is not possible',
      ],
    ],
    pitfallTitle: 'Do not make a rule that "every button must be 24px or more"',
    pitfall: (
      <>
        Under 24 can still be satisfied through an exception, and 24 or more can shrink once overlap
        is removed. The number is only the first check; the judgment comes from checking each target
        against the exceptions too.
      </>
    ),
  },
};

export const TargetSizeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.targetSize.id}>
      <DocH2 {...toc.targetSize} />
      <p>{c.intro}</p>
      <NormativeQuote locale={locale} href={wcag22('target-size-minimum')} cite={c.cite}>
        <p>
          <strong>Success Criterion 2.5.8 Target Size (Minimum)</strong> (Level AA)
        </p>
        <p>
          The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except when:
        </p>
        <ul className="mt-xs flex list-disc flex-col gap-2xs pl-lg">
          <li>
            <strong>Spacing:</strong> Undersized targets (those less than 24 by 24 CSS pixels) are
            positioned so that if a 24 CSS pixel diameter circle is centered on the bounding box of
            each, the circles do not intersect another target or the circle for another undersized
            target;
          </li>
          <li>
            <strong>Equivalent:</strong> The function can be achieved through a different control on
            the same page that meets this criterion;
          </li>
          <li>
            <strong>Inline:</strong> The target is in a sentence or its size is otherwise
            constrained by the line-height of non-target text;
          </li>
          <li>
            <strong>User Agent Control:</strong> The size of the target is determined by the user
            agent and is not modified by the author;
          </li>
          <li>
            <strong>Essential:</strong> A particular presentation of the target is essential or is
            legally required for the information being conveyed.
          </li>
        </ul>
      </NormativeQuote>
      <p>{c.definition}</p>
      <ThemedFigure light={targetSpacingLight} dark={targetSpacingDark} {...c.figure} />
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
      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>{c.pitfall}</p>
      </Callout>
    </section>
  );
};
