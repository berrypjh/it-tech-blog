import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { Kbd } from '@/components/shared/Kbd';

import { getToc } from '../toc';

import { tasks } from './tasks';

const rotor = {
  ko: (list: string) => (
    <>
      <Kbd>VO</Kbd>-<Kbd>U</Kbd>로 로터를 열고 <Kbd>←</Kbd> · <Kbd>→</Kbd>로 {list} 목록을 고른 뒤{' '}
      <Kbd>↑</Kbd> · <Kbd>↓</Kbd>로 항목을 찾아 <Kbd>Return</Kbd>
    </>
  ),
  en: (list: string) => (
    <>
      <Kbd>VO</Kbd>-<Kbd>U</Kbd> to open the rotor, <Kbd>←</Kbd> or <Kbd>→</Kbd> to choose the{' '}
      {list} list, <Kbd>↑</Kbd> or <Kbd>↓</Kbd> to find the item, then <Kbd>Return</Kbd>
    </>
  ),
};

const keys = {
  ko: [
    <>
      <Kbd>Command</Kbd>-<Kbd>F5</Kbd>. Touch ID가 있으면 <Kbd>Command</Kbd>를 누른 채 Touch ID를
      빠르게 세 번
    </>,
    rotor.ko('제목'),
    <>로터에 랜드마크 목록이 있으면 같은 방법으로 고릅니다. 목록은 설정에 따라 없을 수 있습니다</>,
    rotor.ko('링크'),
    <>
      <Kbd>Tab</Kbd>으로 입력란에 포커스를 둔 뒤 입력합니다
    </>,
    <>
      <Kbd>VO</Kbd>-<Kbd>→</Kbd>나 <Kbd>Tab</Kbd>으로 체크박스에 간 뒤 <Kbd>VO</Kbd>-
      <Kbd>Space</Kbd>로 바꾸고, 바뀐 상태를 다시 듣습니다
    </>,
    <>
      <Kbd>Command</Kbd>-<Kbd>F5</Kbd>
    </>,
  ],
  en: [
    <>
      <Kbd>Command</Kbd>-<Kbd>F5</Kbd>. With Touch ID, hold <Kbd>Command</Kbd> and quickly press
      Touch ID three times
    </>,
    rotor.en('headings'),
    <>
      If the rotor has a landmarks list, choose it the same way. The list may be absent depending on
      settings
    </>,
    rotor.en('links'),
    <>
      Put focus in the field with <Kbd>Tab</Kbd>, then type
    </>,
    <>
      Reach the checkbox with <Kbd>VO</Kbd>-<Kbd>→</Kbd> or <Kbd>Tab</Kbd>, change it with{' '}
      <Kbd>VO</Kbd>-<Kbd>Space</Kbd>, then listen to the new state
    </>,
    <>
      <Kbd>Command</Kbd>-<Kbd>F5</Kbd>
    </>,
  ],
};

const content = {
  ko: {
    intro: (
      <>
        VoiceOver는 macOS에 들어 있습니다. VO는 <Kbd>Caps Lock</Kbd> 또는 <Kbd>Control</Kbd>-
        <Kbd>Option</Kbd>입니다. 로터에 보이는 목록은 웹 페이지와 VoiceOver 유틸리티 설정에 따라
        다릅니다.
      </>
    ),
    caption: 'VoiceOver로 하는 일곱 과업',
    head: ['과업', '키'],
  },
  en: {
    intro: (
      <>
        VoiceOver is built into macOS. VO is <Kbd>Caps Lock</Kbd> or <Kbd>Control</Kbd>-
        <Kbd>Option</Kbd>. The lists in the rotor depend on the web page and VoiceOver Utility
        settings.
      </>
    ),
    caption: 'The seven tasks with VoiceOver',
    head: ['Task', 'Keys'],
  },
};

export const VoiceOverPathSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.voiceover.id}>
      <DocH2 {...toc.voiceover} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={tasks[locale].map((task, i) => [task, keys[locale][i]])}
      />
    </section>
  );
};
