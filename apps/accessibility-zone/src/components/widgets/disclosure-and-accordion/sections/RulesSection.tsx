import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        제목 버튼이 여럿이면 두 가지를 정해야 합니다. 한 번에 몇 개까지 열리는가, 그리고 열고 닫은
        뒤 초점이 어디에 있는가입니다. 아래는 이 예제의 계약입니다.
      </>
    ),
    caption: 'Accordion 예제의 의미 · 상태 · 키 · 초점 · 닫기',
    head: ['항목', '계약'],
    rows: [
      ['의미', '제목 요소 안의 button. 패널에는 역할을 더하지 않음'],
      ['상태', '버튼의 aria-expanded와 패널의 hidden이 언제나 반대로 맞음'],
      ['키', '버튼의 기본 동작인 Enter · Space. Tab은 제목 버튼과 열린 패널의 내용만 지남'],
      ['하나만 열림', '다른 제목을 열면 열려 있던 패널이 닫힘. 열린 제목을 다시 눌러 닫을 수 있음'],
      ['여러 개 열림', '각 패널이 따로 열리고 닫힘'],
      [
        '초점',
        '제목 버튼을 누르면 초점은 그 버튼에 그대로. 패널 안에서 닫으면 그 제목 버튼으로 복귀',
      ],
    ],
    tag: 'APG의 Accordion 패턴이 적는 키는 Enter · Space와 Tab입니다. 이 예제도 제목 사이를 옮기는 방향키를 넣지 않았고 Tab만으로 모든 제목에 닿습니다. 열림 규칙과 닫기 버튼의 초점 복귀는 예제의 정책입니다.',
    pitfallTitle: '모든 패널을 region으로 만들지 않습니다',
    pitfall: (locale: Locale) => (
      <>
        패널에 <code>role=&quot;region&quot;</code>을 주면 landmark가 됩니다. APG는 이것을 선택
        사항으로 두고, 함께 열릴 수 있는 패널이 대략 여섯 개를 넘으면 피하라고 권합니다. landmark가
        많아지면 영역으로 건너뛰는 이점이 사라집니다. 열린 패널에서 닫힌 패널로 초점이 남으면 안
        된다는 원칙은 <PageLink locale={locale} id="focus-after-changes" />와 같습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        With several heading buttons, two things need deciding: how many can be open at once, and
        where focus is after opening and closing. Below is this example’s contract.
      </>
    ),
    caption: 'Semantics, state, keys, focus, and closing of the accordion example',
    head: ['Item', 'Contract'],
    rows: [
      ['Semantics', 'A button inside a heading element; no role is added to the panel'],
      ['State', 'The button’s aria-expanded and the panel’s hidden always mirror each other'],
      [
        'Keys',
        'Enter and Space, the button’s default; Tab passes only heading buttons and the content of open panels',
      ],
      [
        'Single-open',
        'Opening another heading closes the open panel; an open heading can be pressed again to close',
      ],
      ['Multi-open', 'Each panel opens and closes on its own'],
      [
        'Focus',
        'Pressing a heading button leaves focus on it; closing from inside the panel returns focus to its heading button',
      ],
    ],
    tag: 'The keys APG’s Accordion pattern lists are Enter, Space, and Tab. This example likewise has no arrow keys between headings, and Tab alone reaches every heading. The open rule and the focus return of the close button are this example’s policies.',
    pitfallTitle: 'Do not make every panel a region',
    pitfall: (locale: Locale) => (
      <>
        Giving a panel <code>role=&quot;region&quot;</code> makes it a landmark. APG leaves this
        optional and advises against it when more than roughly six panels can be open together: with
        many landmarks, jumping by region loses its benefit. That focus must not be left inside a
        panel that closes is the same principle as on{' '}
        <PageLink locale={locale} id="focus-after-changes" />.
      </>
    ),
  },
};

export const RulesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.rules.id}>
      <DocH2 {...toc.rules} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="example" /> {c.tag}
      </p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        {c.pitfall(locale)}
      </Callout>
    </section>
  );
};
