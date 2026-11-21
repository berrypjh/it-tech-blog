import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { KEYBOARD_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { ShortcutDemo } from '../demos/ShortcutDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        수정 키 없이 글자 하나로 동작하는 단축키는 빠르지만, 잘못 누른 키나 음성 입력의 낱말이
        명령이 될 수 있습니다. 2.1.4는 이런 단축키가 있을 때 아래 셋 중 하나를 요구합니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.1.4 Character Key Shortcuts (A)',
    caption: '문자 단축키의 세 조건',
    head: ['조건', '구현 방법', '이 조건이 줄이는 문제'],
    rows: [
      ['끄기', '설정에서 단축키를 끔', '원하지 않는 사용자의 오작동'],
      ['재지정', 'Ctrl · Alt 같은 키를 포함하도록 바꿈', '글자 입력과의 충돌'],
      ['포커스 범위', '그 컴포넌트에 포커스가 있을 때만 동작', '페이지 전체에서의 오작동'],
    ],
    focusNote: (
      <>
        <PageLink locale="ko" id="composite-focus" hash="listbox-behavior" />의 Listbox 글자 찾기는
        목록에 포커스가 있을 때만 동작하는 포커스 범위의 예입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A shortcut triggered by one character with no modifier is fast, but a mistyped key or a word
        from speech input can become a command. 2.1.4 requires one of the three options below for
        such shortcuts.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.1.4 Character Key Shortcuts (A)',
    caption: 'Three conditions for character key shortcuts',
    head: ['Condition', 'How to implement it', 'The problem it reduces'],
    rows: [
      [
        'Turn off',
        'A setting disables the shortcut',
        'Accidental use by people who do not want it',
      ],
      ['Remap', 'Change it to include a key such as Ctrl or Alt', 'Conflicts with typing'],
      [
        'Active only on focus',
        'It works only while that component has focus',
        'Accidental use across the page',
      ],
    ],
    focusNote: (
      <>
        The type-ahead of the listbox in{' '}
        <PageLink locale="en" id="composite-focus" hash="listbox-behavior" /> works only while the
        list has focus, which is an example of focus scope.
      </>
    ),
  },
};

export const ShortcutsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.shortcuts.id}>
      <DocH2 {...toc.shortcuts} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('character-key-shortcuts')}
        cite={c.cite}
        checkedOn={KEYBOARD_CHECKED_ON}
      >
        If a keyboard shortcut is implemented in content using only letter (including upper- and
        lower-case letters), punctuation, number, or symbol characters, then at least one of the
        following is true: <strong>Turn off</strong> A mechanism is available to turn the shortcut
        off; <strong>Remap</strong> A mechanism is available to remap the shortcut to include one or
        more non-printable keyboard keys (e.g., Ctrl, Alt); <strong>Active only on focus</strong>{' '}
        The keyboard shortcut for a user interface component is only active when that component has
        focus.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <ShortcutDemo />
      <p>{c.focusNote}</p>
    </section>
  );
};
