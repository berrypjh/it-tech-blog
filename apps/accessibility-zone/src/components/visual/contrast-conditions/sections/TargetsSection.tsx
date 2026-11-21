import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';
import { VISUAL_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        글자는 1.4.3, 글자가 아닌 시각 정보는 1.4.11이 다룹니다. 큰 텍스트는 18pt 이상이거나 14pt
        이상의 굵은 글자이고, CSS에서 1pt는 4/3px이므로 대략 24px과 18.66px입니다. 한중일 글꼴은
        그에 맞먹는 크기로 판단합니다.
      </>
    ),
    textCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.3 Contrast (Minimum) (AA)',
    nonTextCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.11 Non-text Contrast (AA)',
    caseIntro: (
      <>
        1.4.11은 모든 선과 아이콘에 3:1을 요구하지 않습니다. 없으면 컨트롤이나 상태, 내용을 알아볼
        수 없는 부분을 먼저 찾고, 그 부분과 맞닿은 색을 비교합니다.
      </>
    ),
    caption: '사례별로 찾는 비교 대상',
    head: ['사례', '식별에 필요한 부분', '비교할 색', '판단'],
    rows: [
      ['본문 글자', '글자', '글자 뒤 배경', '1.4.3, 4.5:1'],
      ['24px 제목', '글자', '글자 뒤 배경', '1.4.3 큰 텍스트, 3:1'],
      [
        '글자가 있는 버튼의 테두리',
        '글자로 버튼을 알 수 있으면 테두리는 아님',
        '해당 없음',
        '테두리에 1.4.11 요구 없음',
      ],
      ['경계로만 알아보는 입력 칸', '칸의 경계', '경계 안팎의 색', '1.4.11, 3:1'],
      ['글자 없는 아이콘 버튼', '아이콘의 모양', '아이콘 뒤 배경', '1.4.11, 3:1'],
      ['체크된 체크박스', '체크 표시', '표시와 맞닿은 상자 색', '1.4.11, 3:1'],
      ['글자 옆 장식 아이콘', '없어도 뜻이 같음', '해당 없음', '요구 없음'],
      ['비활성 버튼', '비활성 컴포넌트', '해당 없음', '두 기준의 예외'],
    ],
  },
  en: {
    intro: (
      <>
        Text falls under 1.4.3 and non-text visual information under 1.4.11. Large text is at least
        18 point, or 14 point bold. In CSS 1pt is 4/3px, so that is roughly 24px and 18.66px. For
        Chinese, Japanese, and Korean fonts, judge by an equivalent size.
      </>
    ),
    textCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.3 Contrast (Minimum) (AA)',
    nonTextCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.11 Non-text Contrast (AA)',
    caseIntro: (
      <>
        1.4.11 does not demand 3:1 of every line and icon. First find the part without which the
        control, state, or content could not be identified, then compare it with the colors touching
        it.
      </>
    ),
    caption: 'What to compare, case by case',
    head: ['Case', 'Part needed for identification', 'Colors to compare', 'Judgment'],
    rows: [
      ['Body text', 'The characters', 'Background behind them', '1.4.3, 4.5:1'],
      ['24px heading', 'The characters', 'Background behind them', '1.4.3 large text, 3:1'],
      [
        'Border of a button with text',
        'Not the border, if the text identifies the button',
        'Not applicable',
        'No 1.4.11 requirement on the border',
      ],
      ['Input known only by its boundary', 'The boundary', 'Colors on both sides', '1.4.11, 3:1'],
      ['Icon button with no text', 'The icon shape', 'Background behind it', '1.4.11, 3:1'],
      ['Checked checkbox', 'The check mark', 'Box color touching it', '1.4.11, 3:1'],
      [
        'Decorative icon beside text',
        'Meaning is the same without it',
        'Not applicable',
        'No requirement',
      ],
      ['Disabled button', 'An inactive component', 'Not applicable', 'Excepted by both criteria'],
    ],
  },
};

export const TargetsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const quote = { locale, checkedOn: VISUAL_CHECKED_ON };

  return (
    <section aria-labelledby={toc.targets.id}>
      <DocH2 {...toc.targets} />
      <p>{c.intro}</p>
      <NormativeQuote {...quote} href={wcag22('contrast-minimum')} cite={c.textCite}>
        The visual presentation of text and images of text has a contrast ratio of at least 4.5:1,
        except for the following: <strong>Large Text</strong> Large-scale text and images of
        large-scale text have a contrast ratio of at least 3:1; <strong>Incidental</strong> Text or
        images of text that are part of an inactive user interface component, that are pure
        decoration, that are not visible to anyone, or that are part of a picture that contains
        significant other visual content, have no contrast requirement. <strong>Logotypes</strong>{' '}
        Text that is part of a logo or brand name has no contrast requirement.
      </NormativeQuote>
      <NormativeQuote {...quote} href={wcag22('non-text-contrast')} cite={c.nonTextCite}>
        The visual presentation of the following have a contrast ratio of at least 3:1 against
        adjacent color(s): <strong>User Interface Components</strong> Visual information required to
        identify user interface components and states, except for inactive components or where the
        appearance of the component is determined by the user agent and not modified by the author;{' '}
        <strong>Graphical Objects</strong> Parts of graphics required to understand the content,
        except when a particular presentation of graphics is essential to the information being
        conveyed.
      </NormativeQuote>
      <p>{c.caseIntro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
    </section>
  );
};
