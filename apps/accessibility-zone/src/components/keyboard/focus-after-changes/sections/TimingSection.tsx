import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { KEYBOARD_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const code = {
  ko: `const [focusTarget, setFocusTarget] = useState(null);

const remove = (id) => {
  // 지우기 전에 도착지를 정한다
  setFocusTarget(neighborAfterRemoval(ids, id) ?? 'add');
  setRows((rows) => rows.filter((row) => row.id !== id));
};

// 화면에 반영된 뒤, 요청이 있을 때만 옮긴다
useEffect(() => {
  if (!focusTarget) return;
  findControl(focusTarget)?.focus();
  setFocusTarget(null);
}, [focusTarget]);`,
  en: `const [focusTarget, setFocusTarget] = useState(null);

const remove = (id) => {
  // Decide the destination before removing
  setFocusTarget(neighborAfterRemoval(ids, id) ?? 'add');
  setRows((rows) => rows.filter((row) => row.id !== id));
};

// Move only on request, after the screen has updated
useEffect(() => {
  if (!focusTarget) return;
  findControl(focusTarget)?.focus();
  setFocusTarget(null);
}, [focusTarget]);`,
};

const content = {
  ko: {
    intro: (
      <>
        도착지가 아직 DOM에 없으면 <code>focus()</code>는 아무 일도 하지 못합니다. 그래서 도착지는
        상태 변경 때 정하고, 실제 이동은 화면이 반영된 뒤에 합니다. 렌더링마다 실행되는 코드에서
        포커스를 옮기면 관계없는 갱신이 사용자의 위치를 빼앗습니다.
      </>
    ),
    label: '도착지를 상태로 두고 반영 뒤에 옮기기',
    calloutTitle: '포커스 이동과 변경 안내는 다른 일입니다',
    callout: (
      <>
        포커스 이동은 키보드 위치를 잇는 일이고, 상태 메시지는 결과를 알리는 일입니다. 포커스가
        그대로인 추가 · 보관도 결과는 알려야 합니다. 실습은 <code>role=&quot;status&quot;</code>로
        결과를 적습니다. 실제 낭독은 보조기술에서 확인합니다.
      </>
    ),
    trap: (
      <>
        <PageLink locale="ko" id="focus-and-tabindex" />의 <code>focus()</code>는 위치를 이어 주는
        수단일 뿐, 사용자를 붙잡는 수단이 아닙니다. 복구 뒤에도 Tab과 Shift+Tab은 그대로 동작해야
        합니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.1.2 No Keyboard Trap (A)',
  },
  en: {
    intro: (
      <>
        If the destination is not in the DOM yet, <code>focus()</code> can do nothing. So decide the
        destination when the state changes, and move after the screen updates. Moving focus in code
        that runs on every render lets unrelated updates take the user&apos;s place.
      </>
    ),
    label: 'Keeping the destination in state and moving after the update',
    calloutTitle: 'Moving focus and announcing a change are different jobs',
    callout: (
      <>
        Moving focus carries the keyboard position; a status message reports the result. Add and
        archive leave focus in place, but their results still need reporting. The exercise writes
        results with <code>role=&quot;status&quot;</code>. Check real speech with assistive
        technology.
      </>
    ),
    trap: (
      <>
        <code>focus()</code> from <PageLink locale="en" id="focus-and-tabindex" /> carries a
        position; it does not hold the user in place. After recovery, Tab and Shift+Tab must still
        work as usual.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.1.2 No Keyboard Trap (A)',
  },
};

export const TimingSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.timing.id}>
      <DocH2 {...toc.timing} />
      <p>{c.intro}</p>
      <CodeBlock code={code[locale]} label={c.label} />
      <Callout variant="note" title={c.calloutTitle}>
        {c.callout}
      </Callout>
      <p>{c.trap}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('no-keyboard-trap')}
        cite={c.cite}
        checkedOn={KEYBOARD_CHECKED_ON}
      >
        If keyboard focus can be moved to a component of the page using a keyboard interface, then
        focus can be moved away from that component using only a keyboard interface, and, if it
        requires more than unmodified arrow or tab keys or other standard exit methods, the user is
        advised of the method for moving focus away.
      </NormativeQuote>
    </section>
  );
};
