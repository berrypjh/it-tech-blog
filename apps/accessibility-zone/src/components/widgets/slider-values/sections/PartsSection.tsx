import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<label for="volume">알림 소리 크기</label>
<input id="volume" type="range" min="0" max="100" step="5" value="25"
       aria-valuetext="25퍼센트">
<output for="volume">25%</output>

<button type="button">5 줄이기</button>
<button type="button">5 늘리기</button>
<button type="button">50%로 맞추기</button>`,
  en: `<label for="volume">Notification volume</label>
<input id="volume" type="range" min="0" max="100" step="5" value="25"
       aria-valuetext="25 percent">
<output for="volume">25%</output>

<button type="button">Decrease by 5</button>
<button type="button">Increase by 5</button>
<button type="button">Set to 50%</button>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        Slider는 정해진 범위 안에서 값 하나를 고르는 입력입니다. HTML의{' '}
        <code>input type=&quot;range&quot;</code>가 역할 · 범위 · 키 동작을 모두 갖고 있으므로 직접
        만들지 않습니다(
        <PageLink locale={locale} id="native-first" />
        ). 여기에 더할 것은 보이는 이름, 그리고 지금 값이 얼마인지 알려 주는 글자입니다. 손잡이의
        위치만으로는 정확한 값을 알 수 없습니다.
      </>
    ),
    label: '소리 크기 slider의 완성 코드',
    caption: 'Slider 예제의 의미 · 상태 · 키 · 경계',
    head: ['항목', '계약'],
    rows: [
      ['의미', 'label로 이름을 준 input type="range"'],
      ['상태', '현재 값. 화면에는 output으로 “25%”, 보조기술에는 aria-valuetext로 단위까지'],
      ['범위', 'min 0 · max 100 · step 5. 그 밖의 값은 만들어지지 않음'],
      ['키', '화살표로 한 단계, Home · End로 최솟값 · 최댓값'],
      ['경계', '최솟값에서 줄이거나 최댓값에서 늘려도 값이 그대로'],
    ],
    tag: '키는 브라우저가 input type="range"에 주는 기본 동작입니다. APG의 slider 패턴은 화살표 · Home · End를 적고 Page Up · Page Down을 선택 사항으로 둡니다. 큰 걸음의 크기는 브라우저마다 다릅니다.',
  },
  en: {
    intro: (locale: Locale) => (
      <>
        A slider is an input that picks one value within a set range. HTML’s{' '}
        <code>input type=&quot;range&quot;</code> already has the role, the range, and the key
        behavior, so do not build one yourself (<PageLink locale={locale} id="native-first" />
        ). What to add is a visible name and text that says what the value is now. The position of
        the handle alone does not give the exact value.
      </>
    ),
    label: 'Complete code of the volume slider',
    caption: 'Semantics, state, keys, and limits of the slider example',
    head: ['Item', 'Contract'],
    rows: [
      ['Semantics', 'input type="range" named by a label'],
      [
        'State',
        'The current value: “25%” on screen through output, and with its unit for assistive technology through aria-valuetext',
      ],
      ['Range', 'min 0, max 100, step 5; no other value can be produced'],
      ['Keys', 'Arrows move one step; Home and End go to the minimum and maximum'],
      [
        'Limits',
        'Decreasing at the minimum or increasing at the maximum leaves the value unchanged',
      ],
    ],
    tag: 'The keys are the default behavior browsers give input type="range". APG’s slider pattern lists arrows, Home, and End and makes Page Up and Page Down optional. The size of the larger step differs by browser.',
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
        <SourceTag locale={locale} id="observed" /> {c.tag}
      </p>
    </section>
  );
};
