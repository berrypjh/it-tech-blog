import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const code = {
  ko: `<fieldset>
  <legend>받을 알림</legend>
  <label><input type="checkbox" name="all"> 모든 알림</label>  <!-- 일부만 고르면 indeterminate -->
  <label><input type="checkbox" name="comments"> 댓글</label>
  <label><input type="checkbox" name="mentions"> 멘션</label>
</fieldset>

<fieldset>
  <legend>알림 빈도</legend>
  <label><input type="radio" name="frequency" value="now" checked> 바로</label>
  <label><input type="radio" name="frequency" value="daily"> 하루 한 번</label>
  <label><input type="radio" name="frequency" value="weekly" disabled> 주 한 번 (준비 중)</label>
</fieldset>

<button type="button" role="switch" aria-checked="false">방해 금지</button>
<button type="button" aria-pressed="false">알림음 음소거</button>`,
  en: `<fieldset>
  <legend>Notifications to receive</legend>
  <label><input type="checkbox" name="all"> All notifications</label>  <!-- indeterminate when only some are chosen -->
  <label><input type="checkbox" name="comments"> Comments</label>
  <label><input type="checkbox" name="mentions"> Mentions</label>
</fieldset>

<fieldset>
  <legend>Frequency</legend>
  <label><input type="radio" name="frequency" value="now" checked> Immediately</label>
  <label><input type="radio" name="frequency" value="daily"> Once a day</label>
  <label><input type="radio" name="frequency" value="weekly" disabled> Once a week (coming soon)</label>
</fieldset>

<button type="button" role="switch" aria-checked="false">Do not disturb</button>
<button type="button" aria-pressed="false">Mute notification sound</button>`,
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        Checkbox와 radio는 HTML에 이미 있습니다. 역할 · 상태 · 키 동작이 모두 따라오므로 직접 만들지
        않고, 묶음의 이름은 <PageLink locale={locale} id="basic-forms" />
        에서처럼 <code>fieldset</code>과 <code>legend</code>로 줍니다. 같은 <code>name</code>을 가진
        radio가 한 그룹이 되고, 브라우저가 방향키 이동과 하나만 고르는 규칙을 맡습니다.
      </>
    ),
    label: '알림 설정의 완성 코드',
    after: (locale: Locale) => (
      <>
        “모든 알림”처럼 아래 칸들을 대표하는 checkbox는 일부만 골랐을 때 혼합 상태가 됩니다.
        네이티브 checkbox에서는 스크립트로 <code>indeterminate</code> 프로퍼티를 켭니다. Switch와
        toggle button은 HTML에 전용 요소가 없어 <code>button</code>에 상태 속성을 붙였습니다.
        버튼이므로 초점과 Space · Enter는 그대로 따라옵니다. 직접 만든 컨트롤의 포커스 관리는{' '}
        <PageLink locale={locale} id="composite-focus" />를 따릅니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        Checkboxes and radios already exist in HTML. Role, state, and key behavior all come with
        them, so do not rebuild them, and name the group with <code>fieldset</code> and{' '}
        <code>legend</code> as on <PageLink locale={locale} id="basic-forms" />. Radios sharing a{' '}
        <code>name</code> form one group, and the browser handles arrow-key movement and the
        one-only rule.
      </>
    ),
    label: 'Complete code of the notification settings',
    after: (locale: Locale) => (
      <>
        A checkbox that stands for the boxes below it, like “All notifications”, becomes mixed when
        only some are chosen. On a native checkbox, a script turns on the <code>indeterminate</code>{' '}
        property. HTML has no dedicated element for a switch or a toggle button, so a state
        attribute is added to a <code>button</code>. Being buttons, focus and Space and Enter come
        along. Focus management of hand-built controls follows{' '}
        <PageLink locale={locale} id="composite-focus" />.
      </>
    ),
  },
};

export const NativeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.native.id}>
      <DocH2 {...toc.native} />
      <p>{c.intro(locale)}</p>
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <p>{c.after(locale)}</p>
    </section>
  );
};
