import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `<h3 id="summary" tabindex="-1">입력을 확인해 주세요. 오류 2개</h3>
<ul>
  <li><a href="#name">이름: 이름 칸이 비어 있습니다.</a></li>
  <li><a href="#email">이메일: 이메일 “kim@”은 주소 형식이 아닙니다.</a></li>
</ul>

<label for="email">이메일 (필수)</label>
<input id="email" type="email" required
       aria-invalid="true" aria-describedby="email-hint email-error">
<p id="email-hint">확인 메일을 받을 주소입니다. 예: name@example.com</p>
<p id="email-error">오류: 이메일 “kim@”은 주소 형식이 아닙니다.
   @ 뒤에 도메인까지 입력하세요. 예: name@example.com</p>`,
  en: `<h3 id="summary" tabindex="-1">Please check your input. 2 errors</h3>
<ul>
  <li><a href="#name">Name: Name is empty.</a></li>
  <li><a href="#email">Email: The email “kim@” is not in address format.</a></li>
</ul>

<label for="email">Email (required)</label>
<input id="email" type="email" required
       aria-invalid="true" aria-describedby="email-hint email-error">
<p id="email-hint">Where the confirmation is sent. Example: name@example.com</p>
<p id="email-error">Error: The email “kim@” is not in address format.
   Include the domain after the @. Example: name@example.com</p>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="descriptions-and-errors" />
        에서 상태와 관계를 나눴습니다. 여기서는 그것을 켜는 시점을 정합니다. 사용자가 아직 아무것도
        넣지 않은 칸은 틀린 것이 아니므로 <code>aria-invalid</code>는 검증한 뒤에만 붙입니다. 오류
        글은 색만이 아니라 “오류:”라는 글자로 시작하고, 도움말 뒤에 설명으로 이어 붙입니다.
      </>
    ),
    label: '검증 뒤의 오류 요약과 한 칸 (요약)',
    after: (
      <>
        요약의 각 링크는 그 칸의 라벨과 오류를 함께 담아, 링크 글만 읽어도 어느 칸의 무슨 문제인지
        알 수 있습니다. 이 예제에서 링크를 누르면 그 입력 칸이 초점을 받습니다.
      </>
    ),
    noteTitle: '오류는 다시 보낼 때 새로 씁니다',
    note: (
      <>
        이 예제는 값을 고쳐도 오류 요약과 칸의 오류 글을 그 자리에서 바꾸지 않고, 다시 보낼 때 모두
        새로 검사해 바꿉니다. 입력하는 글자마다, 또는 칸을 떠날 때마다 요약이 줄어들면 누르려던
        링크와 버튼의 위치가 밀립니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        <PageLink locale={locale} id="descriptions-and-errors" /> separated the state from the
        relations. This page decides when to turn them on. A field the user has not filled in yet is
        not wrong, so <code>aria-invalid</code> is added only after validating. The error text
        starts with the word “Error:”, not color alone, and is appended to the description after the
        hint.
      </>
    ),
    label: 'The error summary and one field after validation (summary)',
    after: (
      <>
        Each summary link holds the field’s label and its error, so the link text alone says which
        field has what problem. In this example, activating a link moves focus to that field.
      </>
    ),
    noteTitle: 'Errors are rewritten when you send again',
    note: (
      <>
        In this example, fixing a value does not change the error summary or the field’s error text
        on the spot; everything is checked anew and replaced when you send again. If the summary
        shrank on every keystroke or on leaving a field, the links and buttons you were about to
        press would shift.
      </>
    ),
  },
};

export const WiringSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.wiring.id}>
      <DocH2 {...toc.wiring} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <p>{c.after}</p>
      <Callout variant="note" title={c.noteTitle}>
        {c.note}
      </Callout>
    </section>
  );
};
