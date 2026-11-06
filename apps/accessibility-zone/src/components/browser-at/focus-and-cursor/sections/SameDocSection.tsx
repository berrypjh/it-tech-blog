import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3 } from '@it-tech-blog/ui';

import { Kbd } from '@/components/shared/Kbd';
import { Steps } from '@/components/shared/Steps';

import { FocusWatchDemo } from '../demos/FocusWatchDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        Tab은 조작할 수 있는 요소 사이를 오가는 이동입니다. 제목 탐색은 문서의 짜임을 훑는
        이동입니다. 아래 예제 하나로 둘을 비교합니다.
      </>
    ),
    predict: (
      <>
        예상: Tab은 &quot;쿠폰 적용&quot; 버튼, 우편번호 칸, 체크박스에서 멈추고 두 제목에서는
        멈추지 않을 것입니다.
      </>
    ),
    withAtHeading: '화면 낭독기가 있으면',
    withAt: [
      <>
        NVDA라면 탐색 모드에서 <Kbd>H</Kbd>로 다음 제목으로 갑니다. VoiceOver라면 로터(
        <Kbd>VO</Kbd>-<Kbd>U</Kbd>)에서 제목 목록을 골라 이동합니다.
      </>,
      '"예제: 배송지" 제목에 닿았을 때 아래 "지금 DOM 포커스" 칸이 바뀌는지 봅니다.',
      <>
        같은 위치에서 <Kbd>Tab</Kbd>을 눌러 어디로 가는지 봅니다.
      </>,
    ],
    interpretTitle: '해석',
    interpret: (
      <>
        제목은 포커스를 받는 요소가 아니므로, 제목으로 읽기 위치를 옮겨도 DOM 포커스는 보통 그대로
        있습니다. 그다음 <Kbd>Tab</Kbd>은 읽기 위치 근처의 다음 컨트롤로 가기도 하고, 앞서 포커스가
        있던 곳에서 이어지기도 합니다. 어느 쪽인지는 화면 낭독기 · 브라우저 · 설정에 따라 다르므로,
        관찰한 환경과 함께 기록합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Tab moves between elements you can operate. Heading navigation skims the structure of the
        document. Compare the two with the one example below.
      </>
    ),
    predict: (
      <>
        Prediction: Tab stops on the &quot;Apply coupon&quot; button, the postal code field, and the
        checkbox, and not on the two headings.
      </>
    ),
    withAtHeading: 'If you have a screen reader',
    withAt: [
      <>
        With NVDA, press <Kbd>H</Kbd> in browse mode to go to the next heading. With VoiceOver,
        choose the headings list in the rotor (<Kbd>VO</Kbd>-<Kbd>U</Kbd>) and move there.
      </>,
      'When you reach the "Example: Shipping address" heading, see whether "Current DOM focus" below changes.',
      <>
        From the same place, press <Kbd>Tab</Kbd> and see where it goes.
      </>,
    ],
    interpretTitle: 'Interpretation',
    interpret: (
      <>
        A heading does not take focus, so moving the reading position to it usually leaves DOM focus
        where it was. The next <Kbd>Tab</Kbd> may go to the next control near the reading position,
        or continue from where focus was before. Which one depends on the screen reader, browser,
        and settings, so record it with the environment you observed.
      </>
    ),
  },
};

export const SameDocSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.sameDoc.id}>
      <DocH2 {...toc.sameDoc} />
      <p>{c.intro}</p>
      <p>{c.predict}</p>
      <FocusWatchDemo />
      <DocH3>{c.withAtHeading}</DocH3>
      <Steps items={c.withAt} />
      <Callout variant="note" title={c.interpretTitle}>
        <p>{c.interpret}</p>
      </Callout>
    </section>
  );
};
