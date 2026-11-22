import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { WIDGETS_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        키보드로 조작할 수 있다는 것과 끌지 않고 조작할 수 있다는 것은 다른 요구입니다. 터치
        화면에서 한 손가락으로 누르기만 하는 사용자에게는 키보드가 없습니다. WCAG 2.2는 끌어서 하는
        기능을 끌지 않는 단일 포인터 조작으로도 할 수 있게 하라고 요구합니다.
      </>
    ),
    cite: 'WCAG 2.2 — 2.5.7 Dragging Movements (Level AA)',
    caption: '같은 값에 닿는 세 가지 길',
    head: ['길', '입력 방식', '이 예제'],
    rows: [
      ['손잡이', '끌기', 'input type="range"의 손잡이'],
      ['키보드', '화살표 · Home · End', '같은 input이 초점을 받았을 때'],
      ['단일 포인터', '누르기만', '“5 줄이기” · “5 늘리기” 버튼과 값을 바로 고르는 버튼'],
    ],
    after: (
      <>
        이 기준에는 예외가 있습니다. 끌기가 꼭 필요한 경우, 그리고 기능이 사용자 에이전트가 정한
        것이고 만든 사람이 바꾸지 않은 경우입니다. 네이티브 range를 그대로 쓰면 뒤의 예외에 들 수
        있지만, 이 예제는 버튼을 함께 두어 어느 쪽으로 판단하든 끌지 않는 길이 남게 했습니다.
      </>
    ),
    pitfallTitle: '터치 보조기술에서의 동작은 직접 확인합니다',
    pitfall: (
      <>
        APG는 slider 패턴에 경고를 붙여 두었습니다. 터치 기반 보조기술이 값을 올리고 내리는 동작을
        아직 충분히 지원하지 않을 수 있으니, 터치가 주된 기기에서 보조기술로 직접 시험하라는
        내용입니다. 이 페이지의 실습과 자동 검사는 그 확인을 대신하지 못합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Being operable by keyboard and being operable without dragging are different requirements. A
        user who only taps a touch screen with one finger has no keyboard. WCAG 2.2 requires that
        functionality operated by dragging also be achievable with a single pointer without
        dragging.
      </>
    ),
    cite: 'WCAG 2.2 — 2.5.7 Dragging Movements (Level AA)',
    caption: 'Three ways to the same value',
    head: ['Way', 'Input', 'This example'],
    rows: [
      ['Handle', 'Dragging', 'The handle of input type="range"'],
      ['Keyboard', 'Arrows, Home, End', 'The same input when it has focus'],
      [
        'Single pointer',
        'Tapping only',
        'The “Decrease by 5” and “Increase by 5” buttons and buttons that pick a value directly',
      ],
    ],
    after: (
      <>
        The criterion has exceptions: when dragging is essential, and when the functionality is
        determined by the user agent and not modified by the author. A native range used as is may
        fall under the latter, but this example adds buttons so that a way without dragging remains
        whichever way that is judged.
      </>
    ),
    pitfallTitle: 'Check behavior with touch assistive technology yourself',
    pitfall: (
      <>
        APG attaches a warning to the slider pattern: touch-based assistive technologies may not yet
        fully support the gestures for increasing and decreasing the value, so test with assistive
        technology on devices where touch is the primary input. The exercise and the automated
        checks on this page do not replace that.
      </>
    ),
  },
};

export const AlternativesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.alternatives.id}>
      <DocH2 {...toc.alternatives} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('dragging-movements')}
        cite={c.cite}
        checkedOn={WIDGETS_CHECKED_ON}
      >
        All functionality that uses a dragging movement for operation can be achieved by a single
        pointer without dragging, unless dragging is essential or the functionality is determined by
        the user agent and not modified by the author.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        {c.pitfall}
      </Callout>
    </section>
  );
};
