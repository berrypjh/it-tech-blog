import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `<label for="email">이메일 (필수)</label>
<input id="email" name="email" type="email" autocomplete="email"
       required aria-describedby="email-hint">
<p id="email-hint">확인 메일을 받을 주소입니다. 예: name@example.com</p>

<label for="seats">참가 인원 (필수)</label>
<input id="seats" name="seats" inputmode="numeric" pattern="[1-4]"
       required aria-describedby="seats-hint">
<p id="seats-hint">1부터 4 사이의 숫자입니다. 예: 2</p>`,
  en: `<label for="email">Email (required)</label>
<input id="email" name="email" type="email" autocomplete="email"
       required aria-describedby="email-hint">
<p id="email-hint">Where the confirmation is sent. Example: name@example.com</p>

<label for="seats">Number of people (required)</label>
<input id="seats" name="seats" inputmode="numeric" pattern="[1-4]"
       required aria-describedby="seats-hint">
<p id="seats-hint">A number from 1 to 4. Example: 2</p>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        라벨과 그룹은 <PageLink locale={locale} id="basic-forms" />
        에서 만들었습니다. 여기서는 그 위에 입력 칸의 속성 세 가지를 얹습니다. 셋은 이름이 비슷해
        보여도 맡은 일이 다르고, 하나가 다른 하나를 대신하지 않습니다.
      </>
    ),
    caption: '입력 칸 속성이 하는 일과 하지 않는 일',
    head: ['속성', '하는 일', '하지 않는 일'],
    rows: [
      [
        'type',
        '값의 종류를 정하고 브라우저의 기본 검사와 전용 입력 화면을 고릅니다.',
        '누구의 어떤 정보인지는 알리지 않습니다.',
      ],
      [
        'inputmode',
        '가상 키보드의 종류를 힌트로 줍니다.',
        '값을 검사하지 않고, 물리 키보드에는 영향이 없습니다.',
      ],
      [
        'autocomplete',
        '사용자 정보의 입력 목적을 알리고 자동 채움을 돕습니다.',
        '형식을 검사하지 않습니다.',
      ],
      [
        'required · pattern',
        '제출할 때 브라우저가 확인할 제약을 정합니다.',
        '보이는 안내 글을 대신하지 않습니다.',
      ],
    ],
    label: '세 속성과 도움말을 연결한 입력 칸',
    after: (locale: Locale) => (
      <>
        참가 인원에는 <code>type=&quot;number&quot;</code> 대신 <code>inputmode</code>와{' '}
        <code>pattern</code>을 썼습니다. 올리고 내리는 수량이 아니라 짧은 숫자 글자이기 때문입니다.
        도움말을 설명으로 연결하는 방법은 <PageLink locale={locale} id="name-and-label" />과{' '}
        <PageLink locale={locale} id="descriptions-and-errors" />를 따릅니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        Labels and groups were built on <PageLink locale={locale} id="basic-forms" />. This page
        adds three attributes of the field on top of them. They look alike by name but do different
        jobs, and none replaces another.
      </>
    ),
    caption: 'What field attributes do and do not do',
    head: ['Attribute', 'What it does', 'What it does not do'],
    rows: [
      [
        'type',
        'Sets the kind of value and selects the browser’s built-in check and dedicated input UI.',
        'Does not say whose information it is.',
      ],
      [
        'inputmode',
        'Hints which virtual keyboard to show.',
        'Does not check the value and has no effect on a physical keyboard.',
      ],
      [
        'autocomplete',
        'States the input purpose of user information and helps autofill.',
        'Does not check the format.',
      ],
      [
        'required, pattern',
        'Set the constraints the browser checks on submission.',
        'Do not replace visible instructions.',
      ],
    ],
    label: 'Fields connecting the three attributes and a hint',
    after: (locale: Locale) => (
      <>
        The number of people uses <code>inputmode</code> and <code>pattern</code> instead of{' '}
        <code>type=&quot;number&quot;</code>, because it is a short string of digits rather than a
        quantity to step up and down. Connecting the hint as a description follows{' '}
        <PageLink locale={locale} id="name-and-label" /> and{' '}
        <PageLink locale={locale} id="descriptions-and-errors" />.
      </>
    ),
  },
};

export const RolesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.roles.id}>
      <DocH2 {...toc.roles} />
      <p>{c.intro(locale)}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <p>{c.after(locale)}</p>
    </section>
  );
};
