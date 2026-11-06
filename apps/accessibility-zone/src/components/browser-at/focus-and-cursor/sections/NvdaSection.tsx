import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { Kbd } from '@/components/shared/Kbd';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        NVDA는 웹 페이지 같은 문서를 <strong>탐색 모드</strong>(browse mode)로 읽습니다. 이때 누른
        글자 키는 NVDA의 명령이 됩니다. <strong>포커스 모드</strong>(focus mode)에서는 거의 모든
        키가 컨트롤로 넘어가 글자를 입력하거나 컨트롤을 조작할 수 있습니다.
      </>
    ),
    caption: 'NVDA 사용자 안내서(2026.3)가 설명하는 두 모드',
    head: ['동작', '키 · 조건'],
    rows: [
      [
        '두 모드 사이 전환',
        <>
          <Kbd>NVDA</Kbd>+<Kbd>Space</Kbd>
        </>,
      ],
      [
        '포커스 모드로 자동 전환',
        '포커스 모드가 필요한 컨트롤로 Tab 이동하거나 클릭하면 기본 설정에서 자동으로 바뀝니다',
      ],
      [
        '탐색 모드에서 컨트롤로 들어가기',
        <>
          포커스 모드가 필요한 컨트롤에서 <Kbd>Enter</Kbd> 또는 <Kbd>Space</Kbd>
        </>,
      ],
      ['자동으로 들어간 포커스 모드에서 탐색 모드로 돌아가기', <Kbd key="k">Esc</Kbd>],
    ],
    after: (
      <>
        <Kbd>NVDA</Kbd> 키는 설정에서 고릅니다. 기본값과 자동 전환 설정은 버전과 사용자 설정에 따라
        다를 수 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        NVDA reads documents such as web pages in <strong>browse mode</strong>. Letter keys you
        press there become NVDA commands. In <strong>focus mode</strong>, almost all keys are passed
        to the control, so you can type and operate it.
      </>
    ),
    caption: 'The two modes as the NVDA User Guide (2026.3) describes them',
    head: ['Action', 'Key or condition'],
    rows: [
      [
        'Switch between the two modes',
        <>
          <Kbd>NVDA</Kbd>+<Kbd>Space</Kbd>
        </>,
      ],
      [
        'Automatic switch to focus mode',
        'By default, it switches when you Tab to or click a control that requires focus mode',
      ],
      [
        'Enter a control from browse mode',
        <>
          <Kbd>Enter</Kbd> or <Kbd>Space</Kbd> on a control that requires focus mode
        </>,
      ],
      [
        'Return to browse mode after focus mode was switched on automatically',
        <Kbd key="k">Esc</Kbd>,
      ],
    ],
    after: (
      <>
        The <Kbd>NVDA</Kbd> key is chosen in settings. Defaults and automatic switching can differ
        by version and user settings.
      </>
    ),
  },
};

export const NvdaSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.nvda.id}>
      <DocH2 {...toc.nvda} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
