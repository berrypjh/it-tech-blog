import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { ARIA_CHECKED_ON, whatwg } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        세 속성은 모두 HTML의 불리언 속성이지만 적용되는 요소가 다르고, 바꾸는 동작도 다릅니다. 아래
        표는 텍스트 입력 칸 하나를 기준으로 본 것입니다.
      </>
    ),
    caption: '텍스트 입력 칸에서 세 속성이 바꾸는 것',
    head: ['속성', '편집', '포커스', '제출 데이터', '기본 유효성 검사'],
    rows: [
      [
        <code key="a">disabled</code>,
        '안 됩니다',
        '받지 않습니다',
        '빠집니다',
        '검사에서 빠집니다',
      ],
      [<code key="a">readonly</code>, '안 됩니다', '받습니다', '들어갑니다', '검사에서 빠집니다'],
      [
        <code key="a">required</code>,
        '됩니다',
        '받습니다',
        '들어갑니다',
        '빈 값이면 제출이 막힙니다',
      ],
    ],
    activation: (
      <>
        버튼에서는 다섯째 기준인 활성화가 갈립니다. <code>disabled</code> 버튼에는 click 이벤트가
        전달되지 않아 눌러도 실행되지 않습니다.
      </>
    ),
    disabledCite:
      'HTML Living Standard (2026-11-06 갱신) — 4.10.19.5 Enabling and disabling form controls',
    readonlyCite: 'HTML Living Standard (2026-11-06 갱신) — 4.10.5.3.3 The readonly attribute',
    appliesCaption: '적용되는 요소',
    appliesHead: ['속성', '적용되는 요소', '적용되지 않는 예'],
    applies: [
      [
        <code key="a">disabled</code>,
        'button · input · select · textarea, disabled인 fieldset의 자손(첫 legend 안은 제외)',
        'a · div',
      ],
      [
        <code key="a">readonly</code>,
        '글자 · 날짜 · 숫자를 적는 input, textarea',
        'checkbox · radio · select — 지정하면 안 되고 효과도 없습니다',
      ],
      [
        <code key="a">required</code>,
        '대부분의 input, select, textarea',
        'checkbox는 "체크해야 함", 라디오 묶음은 "하나라도 선택"이라는 뜻이 됩니다',
      ],
    ],
    calloutTitle: '한 요소의 결과를 모든 입력에 넓히지 않습니다',
    callout: (
      <>
        readonly를 붙인 체크박스는 여전히 체크를 바꿀 수 있고, required의 뜻은 입력 종류마다
        다릅니다. 속성을 쓰기 전에 그 요소의 절에서 적용 여부를 확인합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        All three are HTML boolean attributes, but they apply to different elements and change
        different behavior. The table below looks at a single text input.
      </>
    ),
    caption: 'What the three attributes change on a text input',
    head: ['Attribute', 'Editing', 'Focus', 'Submitted data', 'Built-in validation'],
    rows: [
      [<code key="a">disabled</code>, 'No', 'Not received', 'Left out', 'Barred from validation'],
      [<code key="a">readonly</code>, 'No', 'Received', 'Included', 'Barred from validation'],
      [
        <code key="a">required</code>,
        'Yes',
        'Received',
        'Included',
        'Submission is blocked when empty',
      ],
    ],
    activation: (
      <>
        On buttons, the fifth criterion, activation, is where they split. Click events are not
        dispatched to a <code>disabled</code> button, so pressing it does nothing.
      </>
    ),
    disabledCite:
      'HTML Living Standard (updated 2026-11-06) — 4.10.19.5 Enabling and disabling form controls',
    readonlyCite: 'HTML Living Standard (updated 2026-11-06) — 4.10.5.3.3 The readonly attribute',
    appliesCaption: 'Elements they apply to',
    appliesHead: ['Attribute', 'Applies to', 'Examples where it does not apply'],
    applies: [
      [
        <code key="a">disabled</code>,
        'button, input, select, textarea, and descendants of a disabled fieldset (except inside its first legend)',
        'a, div',
      ],
      [
        <code key="a">readonly</code>,
        'input types for text, dates, and numbers; textarea',
        'checkbox, radio, select — it must not be specified and has no effect',
      ],
      [
        <code key="a">required</code>,
        'Most input types, select, textarea',
        'On a checkbox it means "must be checked"; on a radio group, "at least one selected"',
      ],
    ],
    calloutTitle: 'Do not widen one element’s result to every input',
    callout: (
      <>
        A checkbox with readonly can still be checked and unchecked, and what required means differs
        by input type. Before using an attribute, check in that element&apos;s section whether it
        applies.
      </>
    ),
  },
};

export const NativeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.native.id}>
      <DocH2 {...toc.native} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="normative" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.activation}</p>
      <NormativeQuote
        locale={locale}
        href={whatwg('form-control-infrastructure', 'concept-fe-disabled')}
        cite={c.disabledCite}
        checkedOn={ARIA_CHECKED_ON}
      >
        A form control that is disabled must prevent any click events that are queued on the user
        interaction task source from being dispatched on the element.
      </NormativeQuote>
      <NormativeQuote
        locale={locale}
        href={whatwg('input', 'the-readonly-attribute')}
        cite={c.readonlyCite}
        checkedOn={ARIA_CHECKED_ON}
      >
        The difference between disabled and readonly is that read-only controls can still function,
        whereas disabled controls generally do not function as controls until they are enabled.
      </NormativeQuote>
      <DocTable caption={c.appliesCaption} head={c.appliesHead} rows={c.applies} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
