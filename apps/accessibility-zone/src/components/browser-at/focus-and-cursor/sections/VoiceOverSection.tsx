import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { Kbd } from '@/components/shared/Kbd';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        VoiceOver는 읽는 위치를 <strong>VoiceOver 커서</strong>로 나타내고, 명령은 VO 키와 함께
        누릅니다. Apple의 macOS 27용 VoiceOver 사용 설명서는 VO 키가 기본으로 <Kbd>Caps Lock</Kbd>{' '}
        또는 <Kbd>Control</Kbd>-<Kbd>Option</Kbd>이라고 안내합니다.
      </>
    ),
    caption: 'VoiceOver 사용 설명서(macOS 27)가 설명하는 이동과 상호작용',
    head: ['동작', '키'],
    rows: [
      [
        'VoiceOver 커서를 다음 항목으로',
        <>
          <Kbd>VO</Kbd>-<Kbd>→</Kbd>
        </>,
      ],
      [
        '항목과 상호작용 시작',
        <>
          <Kbd>VO</Kbd>-<Kbd>Shift</Kbd>-<Kbd>↓</Kbd>
        </>,
      ],
      [
        '항목과 상호작용 중단',
        <>
          <Kbd>VO</Kbd>-<Kbd>Shift</Kbd>-<Kbd>↑</Kbd>
        </>,
      ],
      [
        'VoiceOver 커서 위치 항목의 기본 동작',
        <>
          <Kbd>VO</Kbd>-<Kbd>Space</Kbd>
        </>,
      ],
      [
        '빠른 탐색(Quick Nav) 켜기 · 끄기',
        <>
          화살표 키: <Kbd>VO</Kbd>-<Kbd>Shift</Kbd>-<Kbd>Q</Kbd>, 한 글자 키: <Kbd>VO</Kbd>-
          <Kbd>Q</Kbd>
        </>,
      ],
    ],
    calloutTitle: '두 화면 낭독기의 모드를 같은 것으로 묶지 않습니다',
    callout: (
      <>
        VoiceOver의 &quot;상호작용&quot;은 NVDA의 포커스 모드와 같은 모드가 아닙니다. 무엇이
        상호작용 대상이 되는지, 그동안 키가 어떻게 동작하는지가 다릅니다. VoiceOver에서 한 글자 키로
        이동하려면 한 글자 빠른 탐색을 켜야 하고, 어떤 키가 무엇으로 가는지는 VoiceOver 유틸리티에서
        확인하고 바꿀 수 있습니다. 각 화면 낭독기의 키와 모드는 그 공식 안내서로 따로 익힙니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        VoiceOver shows where it is reading with the <strong>VoiceOver cursor</strong>, and you
        press commands together with the VO keys. Apple&apos;s VoiceOver User Guide for macOS 27
        says the VO modifier is <Kbd>Caps Lock</Kbd> or <Kbd>Control</Kbd>-<Kbd>Option</Kbd> by
        default.
      </>
    ),
    caption: 'Movement and interaction as the VoiceOver User Guide (macOS 27) describes them',
    head: ['Action', 'Keys'],
    rows: [
      [
        'Move the VoiceOver cursor to the next item',
        <>
          <Kbd>VO</Kbd>-<Kbd>→</Kbd>
        </>,
      ],
      [
        'Start interacting with an item',
        <>
          <Kbd>VO</Kbd>-<Kbd>Shift</Kbd>-<Kbd>↓</Kbd>
        </>,
      ],
      [
        'Stop interacting with an item',
        <>
          <Kbd>VO</Kbd>-<Kbd>Shift</Kbd>-<Kbd>↑</Kbd>
        </>,
      ],
      [
        'Default action for the item in the VoiceOver cursor',
        <>
          <Kbd>VO</Kbd>-<Kbd>Space</Kbd>
        </>,
      ],
      [
        'Turn Quick Nav on or off',
        <>
          Arrow keys: <Kbd>VO</Kbd>-<Kbd>Shift</Kbd>-<Kbd>Q</Kbd>, single keys: <Kbd>VO</Kbd>-
          <Kbd>Q</Kbd>
        </>,
      ],
    ],
    calloutTitle: 'Do not treat the two screen readers’ modes as the same',
    callout: (
      <>
        VoiceOver&apos;s &quot;interacting&quot; is not the same mode as NVDA&apos;s focus mode.
        What becomes the target of interaction and how keys behave meanwhile differ. To move with
        single keys, VoiceOver needs single-key Quick Nav turned on, and which key goes where can be
        checked and changed in VoiceOver Utility. Learn each screen reader&apos;s keys and modes
        from its own official guide.
      </>
    ),
  },
};

export const VoiceOverSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.voiceover.id}>
      <DocH2 {...toc.voiceover} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
