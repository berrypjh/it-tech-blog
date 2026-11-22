import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        APG의 Window Splitter 패턴은 스스로 한계를 밝히고 있습니다. 패턴을 ARIA 1.1에 맞춰 고쳤지만
        그에 맞는 기능 예제가 아직 없고, 예제가 완성되기 전에는 검토를 마치지 않는다는 내용입니다.
        그래서 이 페이지의 실습은 APG의 예제를 옮긴 것이 아니라 패턴의 글을 읽고 직접 구현한
        것입니다.
      </>
    ),
    caption: '이 예제에서 따른 것 · 정한 것 · 확인하지 않은 것',
    head: ['구분', '내용'],
    rows: [
      [
        'APG 패턴을 따른 것',
        '좌우 화살표, Enter의 접기와 복원, 주 영역의 이름과 맞춘 경계 이름, aria-controls',
      ],
      ['APG의 선택 사항 가운데 구현한 것', 'Home · End'],
      ['APG의 선택 사항 가운데 넣지 않은 것', '영역 사이를 순환하는 F6'],
      [
        '이 예제가 정한 것',
        '20~80 범위와 5 단위, 접힌 값 0, 접힌 상태에서 늘리면 복원, 증감 · 접기 버튼',
      ],
      [
        '자동 검사로 확인하는 것',
        '방향키와 버튼이 같은 값을 내는지, 값과 측정한 너비가 맞는지, 접기와 복원',
      ],
      [
        '확인하지 않은 것',
        '화면 낭독기가 separator의 값과 조작을 어떻게 전하는지, 터치 보조기술에서의 조작',
      ],
    ],
    tag: '표의 위 세 줄은 APG 원문(권고, 규범 아님)에 근거하고, 넷째 줄은 예제의 정책입니다.',
    noteTitle: '끌기 말고도 길이 있어야 합니다',
    note: (locale: Locale) => (
      <>
        경계는 포인터로 끌 수도 있습니다. 하지만 끌기만 있으면{' '}
        <PageLink locale={locale} id="slider-values" />
        에서 본 2.5.7을 충족하지 못합니다. 이 예제는 누르기만 하면 되는 증감 버튼과 접기 버튼을
        두어, 키보드 없이 한 손가락으로도 같은 결과를 만들 수 있게 했습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        APG’s Window Splitter pattern states its own limits: the pattern was revised to match ARIA
        1.1, but there is no functional example matching it yet, and the review will not be
        completed until that example exists. So the exercise on this page is not a port of an APG
        example; it is implemented from the text of the pattern.
      </>
    ),
    caption: 'What this example follows, decides, and does not verify',
    head: ['Kind', 'Content'],
    rows: [
      [
        'Followed from the APG pattern',
        'Left and right arrows, collapse and restore with Enter, a boundary name matching the primary pane’s name, aria-controls',
      ],
      ['APG options implemented', 'Home and End'],
      ['APG options left out', 'F6 to cycle through panes'],
      [
        'Decided by this example',
        'The 20–80 range in steps of 5, the collapsed value 0, restoring when increased while collapsed, the stepping and collapse buttons',
      ],
      [
        'Verified by automated checks',
        'That arrow keys and buttons give the same value, that the value matches the measured width, collapse and restore',
      ],
      [
        'Not verified',
        'How screen readers convey the separator’s value and operation; operation with touch assistive technology',
      ],
    ],
    tag: 'The first three rows are based on the APG text (a recommendation, not normative); the fourth is this example’s policy.',
    noteTitle: 'There must be a way other than dragging',
    note: (locale: Locale) => (
      <>
        The boundary can also be dragged with a pointer. But dragging alone does not satisfy 2.5.7,
        seen on <PageLink locale={locale} id="slider-values" />. This example adds tap-only stepping
        and collapse buttons so the same result can be made with one finger and no keyboard.
      </>
    ),
  },
};

export const ScopeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.scope.id}>
      <DocH2 {...toc.scope} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="informative" /> {c.tag}
      </p>
      <Callout variant="note" title={c.noteTitle}>
        {c.note(locale)}
      </Callout>
    </section>
  );
};
