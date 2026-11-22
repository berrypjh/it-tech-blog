import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="text-and-controls" />
        에서 “이동이면 링크, 동작이면 버튼”을 정했습니다. 값을 고르는 컨트롤도 같은 식으로 과업에서
        출발합니다. 먼저 “여러 개를 따로 고르는가, 하나만 고르는가, 누르는 즉시 적용되는가, 명령이
        눌린 채로 남는가”를 묻습니다.
      </>
    ),
    caption: '네 컨트롤의 과업 · 상태 · 키 · 선택 취소 · 혼합 상태',
    head: ['컨트롤', '과업', '상태', '키', '선택 취소', '혼합 상태'],
    rows: [
      ['Checkbox', '여러 항목을 따로 고름', 'checked', 'Space', '같은 칸을 다시 누름', '가능'],
      [
        'Radio',
        '여럿 가운데 하나만 고름',
        'checked',
        '방향키로 옮기며 고름. Tab은 그룹 밖으로',
        '다른 항목을 골라야만 바뀜',
        '불가',
      ],
      [
        'Switch',
        '누르는 즉시 켜고 끔',
        'aria-checked',
        'Space (버튼이면 Enter도)',
        '다시 누름',
        '불가',
      ],
      [
        'Toggle button',
        '명령이 눌린 채로 남음',
        'aria-pressed',
        'Space · Enter',
        '다시 누름',
        '가능',
      ],
    ],
    tag: '혼합 상태 열은 WAI-ARIA 1.2의 규범 내용입니다. radio와 switch에 mixed를 주면 사용자 에이전트는 false로 다룹니다. 키 열은 HTML 요소의 기본 동작과 APG의 권고를 함께 적었습니다.',
    noteTitle: '이름은 상태에 따라 바꾸지 않습니다',
    note: (
      <>
        Switch와 toggle button은 이름을 그대로 두고 상태만 바꿉니다. “음소거”가 눌리면 “음소거
        해제”로 바뀌는 버튼은 이름과 눌림 상태가 같은 사실을 두 번, 그것도 반대로 말하게 됩니다.
        APG는 이 점을 반드시 지킬 것으로 적고 있습니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="text-and-controls" /> settled “a link to go, a button to act”.
        Controls that choose a value start from the task in the same way. First ask whether several
        items are chosen independently, only one is chosen, the change applies the moment it is
        pressed, or a command stays pressed.
      </>
    ),
    caption: 'Task, state, keys, deselection, and mixed state of the four controls',
    head: ['Control', 'Task', 'State', 'Keys', 'Deselection', 'Mixed state'],
    rows: [
      [
        'Checkbox',
        'Choose several items independently',
        'checked',
        'Space',
        'Press the same box again',
        'Possible',
      ],
      [
        'Radio',
        'Choose only one of several',
        'checked',
        'Arrow keys move and choose; Tab leaves the group',
        'Only by choosing another item',
        'Not possible',
      ],
      [
        'Switch',
        'Turn on or off immediately',
        'aria-checked',
        'Space (Enter too on a button)',
        'Press again',
        'Not possible',
      ],
      [
        'Toggle button',
        'A command stays pressed',
        'aria-pressed',
        'Space, Enter',
        'Press again',
        'Possible',
      ],
    ],
    tag: 'The mixed state column is normative content of WAI-ARIA 1.2: user agents treat mixed on radio and switch as false. The keys column combines default behavior of HTML elements with APG recommendations.',
    noteTitle: 'Do not change the name with the state',
    note: (
      <>
        A switch and a toggle button keep their name and change only the state. A button that turns
        from “Mute” into “Unmute” when pressed states the same fact twice, and in opposite ways,
        through its name and its pressed state. APG marks this as critical.
      </>
    ),
  },
};

export const ContractsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.contracts.id}>
      <DocH2 {...toc.contracts} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="normative" /> {c.tag}
      </p>
      <Callout variant="note" title={c.noteTitle}>
        {c.note}
      </Callout>
    </section>
  );
};
