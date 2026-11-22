import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `<form novalidate>  <!-- 브라우저 말풍선을 끄고 같은 규칙을 한 번만 알린다 -->

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const error = validateEmail(input.value);   // 매번 처음부터 다시 검사
  if (error) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');
  errorText.textContent = error ?? '';         // 고쳤으면 이전 오류를 지운다
  if (error) input.focus();
});`,
  en: `<form novalidate>  <!-- turn off the browser bubble and report the same rule once -->

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const error = validateEmail(input.value);   // check from scratch every time
  if (error) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');
  errorText.textContent = error ?? '';         // clear the previous error once fixed
  if (error) input.focus();
});`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        오류를 페이지의 글로 남기고 수정 제안을 붙이려면 검증을 직접 맡습니다. 이때 두 가지를
        지킵니다. 첫째, 같은 오류를 브라우저 말풍선과 페이지의 글로 두 번 알리지 않도록{' '}
        <code>novalidate</code>로 기본 검사의 알림을 끕니다. 둘째, 다시 검사할 때마다 결과를 새로
        써서 고친 오류가 남지 않게 합니다. 오류 상태와 오류 글의 관계는{' '}
        <PageLink locale={locale} id="descriptions-and-errors" />의 구분을 그대로 씁니다.
      </>
    ),
    label: '기본 알림을 끄고 페이지가 검증하는 흐름 (요약)',
    noteTitle: '기본 화면을 유지하는 방법도 있습니다',
    note: (
      <>
        브라우저의 알림 화면은 그대로 쓰고 문구만 바꾸려면 <code>setCustomValidity()</code>를
        씁니다. 빈 문자열로 되돌리지 않으면 값이 맞아도 계속 오류로 남으므로, 값이 바뀔 때마다 다시
        정합니다.
      </>
    ),
    keep: (
      <>
        <code>novalidate</code>를 써도 <code>required</code>와 <code>type</code>은 지우지 않습니다.
        필수 상태와 입력 화면은 검사와 별개로 전달되기 때문입니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        To leave the error as text on the page and attach a suggestion, take over validation
        yourself. Keep two things. First, turn off the built-in reporting with{' '}
        <code>novalidate</code> so the same error is not reported twice, by the browser bubble and
        by page text. Second, write the result anew on each check so a fixed error does not linger.
        The relation between the error state and the error text follows the distinction on{' '}
        <PageLink locale={locale} id="descriptions-and-errors" />.
      </>
    ),
    label: 'Turning off built-in reporting and validating in the page (summary)',
    noteTitle: 'You can also keep the built-in UI',
    note: (
      <>
        To keep the browser’s reporting UI and change only the wording, use{' '}
        <code>setCustomValidity()</code>. Unless you set it back to an empty string the field stays
        invalid even with a correct value, so set it again whenever the value changes.
      </>
    ),
    keep: (
      <>
        Even with <code>novalidate</code>, keep <code>required</code> and <code>type</code>. The
        required state and the input UI are conveyed separately from the check.
      </>
    ),
  },
};

export const CustomSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.custom.id}>
      <DocH2 {...toc.custom} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <p>{c.keep}</p>
      <Callout variant="note" title={c.noteTitle}>
        {c.note}
      </Callout>
    </section>
  );
};
