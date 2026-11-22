import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<label for="user">아이디</label>
<input id="user" name="username" autocomplete="username">

<label for="pass">비밀번호</label>
<input id="pass" name="password" type="password" autocomplete="current-password">
<button type="button" aria-pressed="false">비밀번호 보기</button>

<label for="code">인증 코드</label>
<input id="code" name="code" inputmode="numeric" autocomplete="one-time-code">
<!-- paste를 막는 처리기, readonly, 자리마다 나눈 칸을 두지 않는다 -->`,
  en: `<label for="user">Username</label>
<input id="user" name="username" autocomplete="username">

<label for="pass">Password</label>
<input id="pass" name="password" type="password" autocomplete="current-password">
<button type="button" aria-pressed="false">Show password</button>

<label for="code">Verification code</label>
<input id="code" name="code" inputmode="numeric" autocomplete="one-time-code">
<!-- no handler that blocks paste, no readonly, no one-box-per-digit fields -->`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        비밀번호와 코드를 쓰는 인증이 3.3.8을 충족하는 가장 흔한 길은 보조 메커니즘입니다.
        브라우저와 비밀번호 관리자가 칸을 채울 수 있고, 사용자가 붙여 넣을 수 있으면 됩니다. 그래서
        검토의 초점은 무엇을 더하는가보다{' '}
        <strong className="text-text-default">무엇을 막지 않는가</strong>에 있습니다. 칸의 목적
        표시는 <PageLink locale={locale} id="input-purpose" />의 autocomplete 토큰을 씁니다.
      </>
    ),
    caption: '보조 수단을 막는 구현과 검토할 점',
    head: ['구현', '사용자에게 생기는 일', '검토'],
    rows: [
      [
        'paste 이벤트를 취소함',
        '복사한 비밀번호나 코드를 직접 옮겨 적어야 함',
        '대체 방법이 없으면 3.3.8을 충족하지 못함',
      ],
      ['자동 채움을 스크립트로 지움', '비밀번호 관리자가 채운 값이 사라짐', '위와 같음'],
      [
        '코드를 자리마다 다른 칸으로 나눔',
        '붙여넣기와 자동 채움이 깨질 수 있음',
        '붙여넣기가 실제로 되는지 확인',
      ],
      ['입력한 값을 고칠 수 없게 함', '한 글자 틀리면 처음부터 다시 입력', '직접 편집을 허용'],
      ['비밀번호를 항상 가림', '입력한 값을 확인할 수 없음', '보기 전환 버튼 제공을 검토'],
    ],
    tag: '표의 “검토” 열은 W3C의 해설(보충 자료)에 근거합니다. 각 구현이 곧바로 위반이라는 뜻이 아니라, 대체 방법이나 다른 보조 수단이 있는지를 함께 봐야 한다는 뜻입니다.',
    label: '보조 수단을 막지 않는 인증 칸 (요약)',
  },
  en: {
    intro: (locale: Locale) => (
      <>
        The most common way authentication with a password and a code satisfies 3.3.8 is the
        mechanism condition: the browser and password managers can fill the fields, and the user can
        paste. So the review focuses less on what to add than on{' '}
        <strong className="text-text-default">what not to block</strong>. The fields’ purpose is
        marked with the autocomplete tokens from <PageLink locale={locale} id="input-purpose" />.
      </>
    ),
    caption: 'Implementations that block assistance, and what to review',
    head: ['Implementation', 'What happens to the user', 'Review'],
    rows: [
      [
        'Canceling the paste event',
        'A copied password or code must be transcribed by hand',
        'Does not satisfy 3.3.8 without an alternative',
      ],
      [
        'Clearing autofill with a script',
        'The value a password manager filled disappears',
        'Same as above',
      ],
      [
        'Splitting the code into one box per digit',
        'Paste and autofill can break',
        'Check that paste actually works',
      ],
      [
        'Preventing edits to the entered value',
        'One wrong character means typing everything again',
        'Allow direct editing',
      ],
      [
        'Always masking the password',
        'The entered value cannot be checked',
        'Consider a show/hide toggle',
      ],
    ],
    tag: 'The “Review” column is based on W3C’s explanation (supporting material). It does not mean each implementation is automatically a failure; check together whether an alternative or another mechanism exists.',
    label: 'Authentication fields that do not block assistance (summary)',
  },
};

export const AssistSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.assist.id}>
      <DocH2 {...toc.assist} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p className="flex flex-wrap items-center gap-sm text-xsm text-text-light">
        <SourceTag locale={locale} id="informative" /> {c.tag}
      </p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
    </section>
  );
};
