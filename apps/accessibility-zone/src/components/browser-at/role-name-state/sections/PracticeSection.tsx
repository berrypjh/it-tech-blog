import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { MousePointerClick, SquareCheck, TextCursorInput } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { SourceTag } from '@/components/shared/SourceTag';

import { ObjectReadDemo } from '../demos/ObjectReadDemo';
import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 버튼 · 체크박스 · 입력 칸. */
const rowIcons = [MousePointerClick, SquareCheck, TextCursorInput];

const content = {
  ko: {
    predict: (
      <>
        먼저 예상합니다. 아래 표는 세 컨트롤에서 흔히 기대하는 결과입니다. 브라우저가 계산한 값이
        아니라 이 페이지가 적어 둔 예상입니다.
      </>
    ),
    caption: '세 컨트롤에서 예상하는 다섯 가지',
    head: ['컨트롤', '역할', '이름', '상태', '값', '관계'],
    rows: [
      ['장바구니에 담기', '버튼', '"장바구니에 담기" (안쪽 글자)', '—', '—', '—'],
      [
        '선물 포장',
        '체크박스',
        '"선물 포장" (label)',
        '체크됨 / 체크 안 됨',
        '—',
        'label이 이름을 줌',
      ],
      ['받는 분 이름', '입력 칸', '"받는 분 이름" (label)', '—', '적은 글자', 'label이 이름을 줌'],
    ],
    observe: (
      <>
        그다음 조작하고 관찰합니다. 실습 패널은 페이지 스크립트가 실제 DOM에서 읽은 값만 보여
        줍니다. 역할과 이름은 브라우저가 계산하는 값이라 이 패널에 없습니다. 개발자 도구의 접근성
        탭에서 세 컨트롤을 하나씩 골라 예상 표와 비교합니다.
      </>
    ),
    interpretTitle: '해석할 때 묻는 것',
    interpret: (
      <>
        예상과 다른 칸이 있으면 그 칸이 다섯 가지 중 무엇인지 먼저 적습니다. 그다음 원인이 HTML 요소
        선택인지, label 연결인지, 스크립트가 상태를 남기지 않은 것인지 찾습니다.
      </>
    ),
  },
  en: {
    predict: (
      <>
        Predict first. The table below is the commonly expected result for three controls. It is
        what this page wrote down, not what a browser computed.
      </>
    ),
    caption: 'The five parts expected on three controls',
    head: ['Control', 'Role', 'Name', 'State', 'Value', 'Relations'],
    rows: [
      ['Add to cart', 'Button', '"Add to cart" (its text)', '—', '—', '—'],
      [
        'Gift wrap',
        'Checkbox',
        '"Gift wrap" (label)',
        'Checked / not checked',
        '—',
        'The label gives the name',
      ],
      [
        'Recipient name',
        'Text box',
        '"Recipient name" (label)',
        '—',
        'The typed text',
        'The label gives the name',
      ],
    ],
    observe: (
      <>
        Then change and observe. The exercise panel only shows values the page&apos;s script read
        from the real DOM. Role and name are computed by the browser, so they are not in the panel.
        Select each of the three controls in the Accessibility tab of developer tools and compare
        with the prediction table.
      </>
    ),
    interpretTitle: 'What to ask when interpreting',
    interpret: (
      <>
        If a cell differs from your prediction, first note which of the five parts it is. Then look
        for the cause: the choice of HTML element, the label association, or a script that did not
        leave the state behind.
      </>
    ),
  },
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{c.predict}</p>
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
      <p>{c.observe}</p>
      <ObjectReadDemo />
      <Callout variant="note" title={c.interpretTitle}>
        <p>{c.interpret}</p>
      </Callout>
    </section>
  );
};
