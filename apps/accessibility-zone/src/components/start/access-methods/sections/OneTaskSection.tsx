import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import type { FailureStageId } from '@/components/shared/failureStages';
import { StageLabel } from '@/components/shared/StageLabel';

import { IconOnlyDiagram, NameRowsDiagram } from '../diagrams/NameRowsDiagram';
import { getToc } from '../toc';

type Row = [string, string, string, FailureStageId];

const content = {
  ko: {
    intro: (
      <>
        과업은 &quot;주문 목록에서 두 번째 주문 취소하기&quot;입니다. 주문마다 줄 끝에 휴지통 아이콘
        버튼이 있고, 마우스를 올리면 &quot;주문 취소&quot; 툴팁이 뜹니다.{' '}
        <code>&lt;button&gt;</code> 요소라 키보드로 누를 수는 있지만 접근 가능한 이름이 없습니다.
      </>
    ),
    codeLabel: '가상의 화면 — 아이콘만 있는 취소 버튼',
    code: `<button type="button" class="icon-btn" onmouseenter="showTip('주문 취소')">
  <svg aria-hidden="true">…휴지통…</svg>
</button>`,
    tableCaption:
      '같은 취소 버튼이 방식별로 막힐 것으로 예상되는 지점 (코드로 예상한 결과, 측정값 아님)',
    tableHead: ['방식', '의존하는 것', '예상되는 장벽', '실패 단계'],
    rows: [
      [
        '키보드',
        '포커스 표시와 버튼의 의미',
        '포커스는 가지만 툴팁이 마우스를 올릴 때만 떠서 아이콘의 뜻을 확인할 수 없습니다',
        'understand',
      ],
      [
        '화면 낭독기',
        '접근 가능한 이름',
        '이름이 없어 "버튼" 같은 역할만 전달될 수 있고, 무엇을 하는 버튼인지 알 수 없습니다',
        'understand',
      ],
      [
        '확대',
        '아이콘 크기와 툴팁 위치',
        '툴팁이 확대 영역 밖에서 뜨면 보이지 않고, 작은 아이콘은 뜻을 알아보기 어렵습니다',
        'perceive',
      ],
      [
        '음성 입력',
        '말로 부를 수 있는 보이는 이름',
        '부를 단어가 화면에 없어 번호나 격자로 대신 골라야 하고, 주문마다 반복됩니다',
        'operate',
      ],
      [
        '스위치',
        '스캔 순서와 항목의 구분',
        '줄마다 같은 아이콘 버튼이 있어, 하이라이트된 버튼이 몇 번째 주문의 것인지 알기 어렵습니다',
        'navigate',
      ],
    ] satisfies Row[],
    body: '같은 버튼이 방식마다 다른 이유로 막히지만, 고치는 방법은 하나로 모입니다. 버튼 안에 보이는 글자 "주문 취소"를 두면 화면 낭독기가 전할 이름, 음성 입력으로 부를 단어, 툴팁 없이도 보이는 뜻이 함께 생깁니다.',
    rowNote:
      '다만 모든 줄의 버튼 이름이 같으면 음성 입력과 스위치 사용자는 여전히 어느 주문의 버튼인지 구분하기 어렵습니다. 주문 번호처럼 줄을 구분하는 정보도 함께 전달해야 합니다.',
    rowFixLabel: '수정 — 보이는 글자와 주문 번호를 담은 취소 버튼',
    rowFix: `<button type="button">
  <svg aria-hidden="true">…휴지통…</svg>
  주문 취소<span class="visually-hidden">, 주문 1024</span>
</button>`,
    rowFixNote:
      '코드는 보이는 글자 "주문 취소" 뒤에, 화면에는 보이지 않는 주문 번호를 더합니다. 이름이 보이는 글자로 시작하므로 음성 입력 사용자는 여전히 "주문 취소"라고 말해 부를 수 있습니다. aria-label로 이름을 통째로 바꾸면 보이는 글자와 이름이 어긋나니 피합니다.',
    modelTitle: '표와 그림은 측정이 아니라 코드로 한 예상입니다',
    model: (link: React.ReactNode) => (
      <>
        화면 낭독기가 무엇을 어떤 순서로 읽는지, 음성 입력 소프트웨어가 버튼에 번호를 어떻게
        붙이는지, 스위치 스캔이 몇 단계인지는 제품 · 버전 · 브라우저 · 설정마다 다릅니다. 그래서 이
        페이지는 특정 발화 문장을 정답처럼 보여주지 않고, 보조기술을 흉내 내는 데모도 두지 않습니다.
        직접 확인할 때도 문장이 아니라 역할 · 이름 · 상태가 빠짐없이 전달되는지를 봅니다. 방법은{' '}
        {link}에 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The task is &quot;cancel the second order in the order list&quot;. At the end of each order
        row is a trash-can icon button, and hovering shows a &quot;Cancel order&quot; tooltip. It is
        a <code>&lt;button&gt;</code> element, so it can be pressed by keyboard, but it has no
        accessible name.
      </>
    ),
    codeLabel: 'Hypothetical screen — icon-only cancel button',
    code: `<button type="button" class="icon-btn" onmouseenter="showTip('Cancel order')">
  <svg aria-hidden="true">…trash can…</svg>
</button>`,
    tableCaption:
      'Where the same cancel button is expected to block each method (predicted from code, not measured)',
    tableHead: ['Method', 'Depends on', 'Expected barrier', 'Failure stage'],
    rows: [
      [
        'Keyboard',
        'Focus indicator and meaning of the button',
        'Focus arrives, but the tooltip only appears on mouse hover, so the icon’s meaning cannot be checked',
        'understand',
      ],
      [
        'Screen reader',
        'Accessible name',
        'With no name, only a role like "button" may come through, so what it does is unknown',
        'understand',
      ],
      [
        'Magnification',
        'Icon size and tooltip position',
        'A tooltip outside the magnified area is not seen, and a small icon is hard to recognize',
        'perceive',
      ],
      [
        'Speech input',
        'A visible name to say',
        'There is no word on screen to say, so they must pick by numbers or grid, again for every order',
        'operate',
      ],
      [
        'Switch',
        'Scan order and telling items apart',
        'Every row has the same icon button, so it is hard to tell which order the highlighted button belongs to',
        'navigate',
      ],
    ] satisfies Row[],
    body: 'The same button blocks each method for a different reason, but the fix converges on one change. Putting the visible text "Cancel order" inside the button gives a screen reader a name to convey, gives speech input a word to say, and shows the meaning without a tooltip.',
    rowNote:
      'If every row’s button has the same name, though, speech input and switch users still struggle to tell which order a button belongs to. Information that tells rows apart, such as the order number, must come through as well.',
    rowFixLabel: 'Fix — cancel button with visible text and the order number',
    rowFix: `<button type="button">
  <svg aria-hidden="true">…trash can…</svg>
  Cancel order<span class="visually-hidden">, order 1024</span>
</button>`,
    rowFixNote:
      'The code adds the order number after the visible text "Cancel order", hidden from the screen. Because the name starts with the visible text, speech input users can still say "Cancel order". Replacing the whole name with aria-label would split the name from the visible text, so avoid it.',
    modelTitle: 'The table and figures are predictions from code, not measurements',
    model: (link: React.ReactNode) => (
      <>
        What a screen reader announces and in what order, how voice control numbers the button, and
        how many steps switch scanning takes vary by product, version, browser, and settings. So
        this page shows no announcement string as the right answer and has no demo imitating
        assistive technology. When you check directly, look not for a sentence but for whether role,
        name, and state all get through. The methods are in {link}.
      </>
    ),
  },
};

export const OneTaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([method, depends, barrier, stage]) => [
    method,
    depends,
    barrier,
    <StageLabel key="stage" locale={locale} id={stage} />,
  ]);

  return (
    <section aria-labelledby={toc.oneTask.id}>
      <DocH2 {...toc.oneTask} />
      <p>{c.intro}</p>
      <IconOnlyDiagram locale={locale} />
      <CodeBlock label={c.codeLabel} tone="bad" code={c.code} />
      <DocTable caption={c.tableCaption} head={c.tableHead} rows={rows} />
      <p>{c.body}</p>
      <p>{c.rowNote}</p>
      <NameRowsDiagram locale={locale} />
      <CodeBlock label={c.rowFixLabel} tone="good" code={c.rowFix} />
      <p>{c.rowFixNote}</p>
      <Callout variant="note" title={c.modelTitle}>
        <p>{c.model(<a href={`#${toc.realCheck.id}`}>{toc.realCheck.title}</a>)}</p>
      </Callout>
    </section>
  );
};
