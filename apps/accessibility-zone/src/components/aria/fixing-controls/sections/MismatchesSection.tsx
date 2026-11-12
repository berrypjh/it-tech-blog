import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

/** 수정 전 코드. 정적 예시로만 보여 주고, 실습의 수정 전 컨트롤도 같은 결함을 재현한다. */
export const beforeCode = `<div class="toggle" role="button" aria-expanded="true"
     aria-controls="order-detail" onclick="toggle()">
  <svg class="chevron">…</svg>
</div>
<div id="order-details" class="panel" hidden>…</div>
<script>
  const toggle = () => {
    const panel = document.querySelector('.panel');
    panel.hidden = !panel.hidden;
  };
</script>`;

const content = {
  ko: {
    intro: (
      <>
        아래 코드는 마우스로 누르면 패널이 열리고 닫힙니다. 화면만 보면 문제가 없어 보입니다. 하지만
        의미 · 이름 · 상태 · 관계를 하나씩 따져 보면 네 군데가 어긋납니다.
      </>
    ),
    label: '수정 전 — 화면에서는 동작하는 상세 보기',
    caption: '수정 전 코드의 불일치',
    head: ['항목', '수정 전', '어긋나는 점', '다룬 곳'],
    rows: [
      [
        '의미 · 키보드',
        'div + role="button", tabindex · 키 처리 없음',
        '버튼으로 노출되지만 Tab으로 닿지 않고 Enter · Space로 실행되지 않습니다',
        <PageLink key="p" locale="ko" id="native-first" />,
      ],
      [
        '이름',
        '안에 svg 하나뿐',
        '버튼 역할은 이름이 필요한데 보이는 글자가 없습니다',
        <PageLink key="p" locale="ko" id="role-name-state" />,
      ],
      [
        '상태',
        'aria-expanded="true" 고정',
        '패널은 처음에 숨어 있는데 펼침이라고 알리고, 눌러도 값이 바뀌지 않습니다',
        <PageLink key="p" locale="ko" id="roles-and-relations" />,
      ],
      [
        '관계',
        'aria-controls="order-detail"',
        '패널의 id는 order-details라 가리키는 대상이 없습니다',
        <PageLink key="p" locale="ko" id="roles-and-relations" />,
      ],
    ],
    after: (
      <>
        svg도 함께 봅니다. 장식 아이콘은 이름이 되어야 할 글자가 아니므로 숨기고, 이름은 보이는
        글자로 줍니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Clicking the code below with a mouse opens and closes the panel. Looking only at the screen,
        nothing seems wrong. But going through meaning, name, state, and relation one by one, four
        places disagree.
      </>
    ),
    label: 'Before — a Show details control that works on screen',
    caption: 'Mismatches in the before code',
    head: ['Item', 'Before', 'What disagrees', 'Covered on'],
    rows: [
      [
        'Meaning and keyboard',
        'div + role="button", no tabindex or key handling',
        'Exposed as a button, but Tab does not reach it and Enter or Space does not activate it',
        <PageLink key="p" locale="en" id="native-first" />,
      ],
      [
        'Name',
        'Only an svg inside',
        'The button role needs a name, but there is no visible text',
        <PageLink key="p" locale="en" id="role-name-state" />,
      ],
      [
        'State',
        'aria-expanded="true", fixed',
        'The panel starts hidden but is announced as expanded, and the value never changes',
        <PageLink key="p" locale="en" id="roles-and-relations" />,
      ],
      [
        'Relation',
        'aria-controls="order-detail"',
        'The panel’s id is order-details, so the reference points to nothing',
        <PageLink key="p" locale="en" id="roles-and-relations" />,
      ],
    ],
    after: (
      <>
        Look at the svg too. A decorative icon is not text that should become the name, so hide it
        and give the name as visible text.
      </>
    ),
  },
};

export const MismatchesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.mismatches.id}>
      <DocH2 {...toc.mismatches} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={beforeCode} label={c.label} tone="bad" />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
