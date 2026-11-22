import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<label for="people">참가 인원 (필수)</label>
<input id="people" type="number" min="1" max="8" step="1" required
       inputmode="numeric" aria-describedby="people-hint">
<p id="people-hint">1부터 8 사이의 정수입니다. 예: 2</p>

<button type="button">참가 인원 1 줄이기</button>
<button type="button">참가 인원 1 늘리기</button>`,
  en: `<label for="people">Number of people (required)</label>
<input id="people" type="number" min="1" max="8" step="1" required
       inputmode="numeric" aria-describedby="people-hint">
<p id="people-hint">A whole number from 1 to 8. Example: 2</p>

<button type="button">Decrease number of people by 1</button>
<button type="button">Increase number of people by 1</button>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <code>input type=&quot;number&quot;</code>는 spinbutton 역할을 갖고, 직접 입력과 위아래
        화살표의 증감을 함께 줍니다. 브라우저가 그리는 작은 화살표는 누르기 어렵고 이름도 없으므로,
        이름을 가진 증감 버튼을 따로 둡니다(
        <PageLink locale={locale} id="slider-values" />의 단일 포인터 대안과 같은 이유). 버튼은 칸의{' '}
        <code>stepUp()</code>과 <code>stepDown()</code>을 불러, 범위와 단계의 규칙을 한 곳에서만
        정합니다.
      </>
    ),
    label: '참가 인원 칸과 증감 버튼의 완성 코드',
    caption: 'Spinbutton 예제의 의미 · 상태 · 키 · 한계 · 복구',
    head: ['항목', '계약'],
    rows: [
      ['의미', 'label로 이름을 준 input type="number"와, 무엇을 얼마나 바꾸는지 말하는 버튼 둘'],
      ['상태', '칸의 값. 틀린 값은 칸을 떠난 뒤 aria-invalid와 연결된 오류 글로'],
      ['위아래 화살표', '한 단계 늘리거나 줄임 (브라우저의 기본 동작)'],
      ['Home · End · 좌우 화살표', '칸 안의 글자 사이를 옮기는 편집 키로 남겨 둠'],
      ['한계', '최솟값에서 줄이거나 최댓값에서 늘려도 값이 그대로. 그때 버튼은 aria-disabled'],
      [
        '복구',
        '빈 값에서 버튼을 누르면 최솟값으로, 범위 밖 값에서는 가까운 한계 값으로, 소수에서는 누른 방향의 정수로',
      ],
    ],
    tag: 'APG의 spinbutton 패턴은 직접 만든 위젯에서 Home · End가 최솟값 · 최댓값으로 가게 합니다. 네이티브 number 칸에서는 이 키들이 글자 편집 키로 동작하고, 이 예제는 그것을 가로채지 않습니다.',
    stepTitle: '소수 단계는 정수로 계산합니다',
    step: (
      <>
        단계가 0.1이면 스크립트의 덧셈이 0.1 + 0.2를 0.30000000000000004로 냅니다. 이 값은 단계에
        맞지 않는 것으로 검사에 걸릴 수 있습니다. 값을 10배 한 정수로 더한 뒤 다시 나누거나,
        브라우저의 <code>stepUp()</code>에 맡깁니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        <code>input type=&quot;number&quot;</code> has the spinbutton role and offers both direct
        entry and stepping with the up and down arrows. The small arrows the browser draws are hard
        to press and have no name, so named stepping buttons are added (for the same reason as the
        single-pointer alternative on <PageLink locale={locale} id="slider-values" />
        ). The buttons call the field’s <code>stepUp()</code> and <code>stepDown()</code>, so the
        rules of range and step are defined in one place only.
      </>
    ),
    label: 'Complete code of the people field and stepping buttons',
    caption: 'Semantics, state, keys, limits, and recovery in the spinbutton example',
    head: ['Item', 'Contract'],
    rows: [
      [
        'Semantics',
        'input type="number" named by a label, and two buttons that say what they change and by how much',
      ],
      [
        'State',
        'The field’s value; a wrong value gets aria-invalid and connected error text after leaving the field',
      ],
      ['Up and down arrows', 'Increase or decrease by one step (the browser’s default)'],
      [
        'Home, End, left and right arrows',
        'Left as editing keys that move among characters in the field',
      ],
      [
        'Limits',
        'Decreasing at the minimum or increasing at the maximum leaves the value; the button is then aria-disabled',
      ],
      [
        'Recovery',
        'Pressing a button goes to the minimum from an empty value, to the nearer limit from an out-of-range value, and to the whole number in the pressed direction from a decimal',
      ],
    ],
    tag: 'APG’s spinbutton pattern has Home and End go to the minimum and maximum in a hand-built widget. In a native number field these keys work as text-editing keys, and this example does not intercept them.',
    stepTitle: 'Compute decimal steps with integers',
    step: (
      <>
        With a step of 0.1, script addition gives 0.30000000000000004 for 0.1 + 0.2, a value that
        can fail the step check. Add as integers scaled by ten and divide back, or leave it to the
        browser’s <code>stepUp()</code>.
      </>
    ),
  },
};

export const PartsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.parts.id}>
      <DocH2 {...toc.parts} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="informative" /> {c.tag}
      </p>
      <p>
        <strong className="text-text-default">{c.stepTitle}.</strong> {c.step}
      </p>
    </section>
  );
};
