import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { aria12, DYNAMIC_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        여러 줄을 차례로 바꾸는 동안의 중간 값은 틀린 정보입니다. <code>aria-busy</code>를 true로
        두면 보조기술이 그 사이의 변화를 미뤘다가 false가 될 때 한 번에 처리할 수 있습니다. 그래서
        busy는 성공했을 때만이 아니라 실패하거나 취소했을 때도 반드시 풀어야 합니다. 풀지 않으면 그
        영역의 변화가 계속 미뤄질 수 있습니다.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-busy',
    outside: (
      <>
        busy가 막는 것은 그 영역 안의 변화입니다. “갱신 중”이라는 대기 알림이 필요하면 busy 영역
        안이 아니라 바깥의 status에 둡니다. 실습의 관찰 패널도 live 영역이 아니라서, 설명을 같은
        내용으로 다시 방송하지 않습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Half-finished values while several rows change one after another are wrong information. With{' '}
        <code>aria-busy</code> set to true, assistive technology can hold the changes in between and
        process them at once when it becomes false. So busy must be released not only on success but
        also on failure or cancel; otherwise changes in that region may keep being held.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — aria-busy',
    outside: (
      <>
        busy holds changes inside its region. If a waiting notice such as “updating” is needed, put
        it in a status outside the busy region, not inside it. The exercise’s observation panels are
        not live regions either, so explanations are not broadcast again.
      </>
    ),
  },
};

export const BusySection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.busy.id}>
      <DocH2 {...toc.busy} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('aria-busy')}
        cite={c.cite}
        checkedOn={DYNAMIC_CHECKED_ON}
      >
        Indicates an element is being modified and that assistive technologies MAY want to wait
        until the modifications are complete before exposing them to the user. […] When aria-busy is
        true for an element, assistive technologies MAY ignore changes to content owned by that
        element and then process all changes made during the busy period as a single, atomic update
        when aria-busy becomes false.
      </NormativeQuote>
      <p>{c.outside}</p>
    </section>
  );
};
