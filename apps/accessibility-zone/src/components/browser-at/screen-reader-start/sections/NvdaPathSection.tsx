import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { Kbd } from '@/components/shared/Kbd';

import { getToc } from '../toc';

import { tasks } from './tasks';

const keys = {
  ko: [
    <>
      <Kbd>Ctrl</Kbd>+<Kbd>Alt</Kbd>+<Kbd>N</Kbd> (설치할 때 바탕 화면 바로 가기를 만든 경우)
    </>,
    <>
      탐색 모드에서 <Kbd>H</Kbd>(이전은 <Kbd>Shift</Kbd>+<Kbd>H</Kbd>). 목록으로 보려면{' '}
      <Kbd>NVDA</Kbd>+<Kbd>F7</Kbd>
    </>,
    <Kbd>D</Kbd>,
    <Kbd>K</Kbd>,
    <>
      <Kbd>E</Kbd>로 입력란에 간 뒤 <Kbd>Enter</Kbd>로 포커스 모드에 들어가 입력하고, <Kbd>Esc</Kbd>
      로 탐색 모드로 돌아옵니다. <Kbd>Tab</Kbd>으로 가면 포커스 모드로 자동으로 바뀝니다
    </>,
    <>
      <Kbd>X</Kbd>로 체크박스에 간 뒤 <Kbd>Space</Kbd>로 바꾸고, 바뀐 상태를 다시 듣습니다
    </>,
    <>
      <Kbd>NVDA</Kbd>+<Kbd>Q</Kbd> 뒤 <Kbd>Enter</Kbd>
    </>,
  ],
  en: [
    <>
      <Kbd>Ctrl</Kbd>+<Kbd>Alt</Kbd>+<Kbd>N</Kbd> (if the desktop shortcut was created during
      installation)
    </>,
    <>
      <Kbd>H</Kbd> in browse mode (<Kbd>Shift</Kbd>+<Kbd>H</Kbd> for previous). For a list,{' '}
      <Kbd>NVDA</Kbd>+<Kbd>F7</Kbd>
    </>,
    <Kbd>D</Kbd>,
    <Kbd>K</Kbd>,
    <>
      <Kbd>E</Kbd> to reach the field, <Kbd>Enter</Kbd> to enter focus mode and type, then{' '}
      <Kbd>Esc</Kbd> to return to browse mode. Reaching it with <Kbd>Tab</Kbd> switches to focus
      mode automatically
    </>,
    <>
      <Kbd>X</Kbd> to reach the checkbox, <Kbd>Space</Kbd> to change it, then listen to the new
      state
    </>,
    <>
      <Kbd>NVDA</Kbd>+<Kbd>Q</Kbd>, then <Kbd>Enter</Kbd>
    </>,
  ],
};

const content = {
  ko: {
    intro: (
      <>
        NVDA는 NV Access의 공식 사이트에서 받습니다. 말을 바로 멈추려면 <Kbd>Ctrl</Kbd>을 누릅니다.
        아래 키는 데스크톱 키보드 배치 기준입니다.
      </>
    ),
    caption: 'NVDA로 하는 일곱 과업',
    head: ['과업', '키'],
  },
  en: {
    intro: (
      <>
        Get NVDA from the official NV Access site. Press <Kbd>Ctrl</Kbd> to stop speech at once. The
        keys below are for the desktop keyboard layout.
      </>
    ),
    caption: 'The seven tasks with NVDA',
    head: ['Task', 'Keys'],
  },
};

export const NvdaPathSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.nvda.id}>
      <DocH2 {...toc.nvda} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={tasks[locale].map((task, i) => [task, keys[locale][i]])}
      />
    </section>
  );
};
