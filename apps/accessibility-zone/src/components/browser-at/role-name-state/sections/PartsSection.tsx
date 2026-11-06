import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { Link2, Shapes, Tag, TextCursorInput, ToggleRight } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { ThemedFigure } from '@/components/shared/ThemedFigure';

import objectPartsDark from '../images/object-parts-dark.webp';
import objectPartsLight from '../images/object-parts-light.webp';
import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 역할 · 이름 · 상태 · 값 · 관계. */
const rowIcons = [Shapes, Tag, ToggleRight, TextCursorInput, Link2];

const content = {
  ko: {
    figure: {
      alt: '장바구니 버튼, 체크박스, 입력 칸이 각각 다섯 칸짜리 카드로 이어집니다. 버튼의 카드는 역할과 이름 칸만 차 있고, 체크박스의 카드는 역할 · 이름 · 상태 · 관계 칸이 차 있으며 상태 칸이 강조되어 있습니다. 입력 칸의 카드는 역할 · 이름 · 값 · 관계 칸이 차 있습니다.',
      caption:
        '버튼 · 체크박스 · 입력 칸은 다섯 가지 정보 가운데 주는 것이 서로 다릅니다. 학습용으로 단순화한 그림입니다.',
    },
    intro: (
      <>
        브라우저가 만든 접근성 객체에는 여러 정보가 있습니다. 이 장에서는 다섯 가지를 기준으로
        읽습니다. 모든 객체가 다섯 가지를 다 갖지는 않습니다.
      </>
    ),
    caption: '접근성 객체에서 읽는 다섯 가지',
    head: ['정보', '묻는 것', '예'],
    rows: [
      ['역할', '이것은 무엇인가', '버튼, 체크박스, 입력 칸, 제목, 링크'],
      ['이름', '무엇이라고 부르나', '"장바구니에 담기", "받는 분 이름"'],
      ['상태', '지금 어떤 상태인가', '체크됨, 펼침, 사용할 수 없음, 필수'],
      ['값', '사용자가 넣거나 고른 것은 무엇인가', '입력 칸에 적은 글자, 슬라이더의 숫자'],
      ['관계', '다른 객체와 어떻게 이어지나', '입력 칸을 이름 짓는 레이블, 설명을 주는 요소'],
    ],
  },
  en: {
    figure: {
      alt: 'A cart button, a checkbox, and a text input each connect to a card with five slots. The button’s card fills only role and name. The checkbox’s card fills role, name, state, and relation, with the state slot highlighted. The input’s card fills role, name, value, and relation.',
      caption:
        'A button, a checkbox, and an input each give different parts of the five kinds of information. A simplified teaching picture.',
    },
    intro: (
      <>
        An accessible object the browser builds carries a lot of information. This chapter reads it
        by five parts. Not every object has all five.
      </>
    ),
    caption: 'The five parts read from an accessible object',
    head: ['Part', 'What it answers', 'Example'],
    rows: [
      ['Role', 'What is this?', 'Button, checkbox, text box, heading, link'],
      ['Name', 'What is it called?', '"Add to cart", "Recipient name"'],
      ['State', 'What state is it in now?', 'Checked, expanded, disabled, required'],
      [
        'Value',
        'What has the user entered or chosen?',
        'Text typed in an input, a slider’s number',
      ],
      [
        'Relations',
        'How does it connect to other objects?',
        'The label that names an input, an element that describes it',
      ],
    ],
  },
};

export const PartsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.parts.id}>
      <DocH2 {...toc.parts} />
      <p>{c.intro}</p>
      <ThemedFigure light={objectPartsLight} dark={objectPartsDark} {...c.figure} />
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
    </section>
  );
};
