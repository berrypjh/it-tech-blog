import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { aria12, DYNAMIC_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        live 영역은 내용이 바뀌면 보조기술이 포커스 없이 그 변화를 사용자에게 전할 수 있는
        영역입니다.
        <code>aria-live</code>로 직접 정할 수도 있고, status · alert · log 같은 역할이 암시적 값을
        가져오기도 합니다. 아래 정의와 값은 WAI-ARIA 1.2 원문의 역할 설명과 Characteristics 표에서
        옮겼습니다.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — 5.4 Definition of Roles: status, alert, log',
    caption: '세 역할의 암시적 값 (WAI-ARIA 1.2)',
    head: ['역할', '뜻', '암시적 aria-live', '암시적 aria-atomic', '이 장의 쓰임'],
    rows: [
      [
        'status',
        '알릴 만하지만 alert만큼 중요하지 않은 정보',
        'polite',
        'true',
        '검색 결과 수, 저장 완료',
      ],
      [
        'alert',
        '중요하고 대개 시간에 민감한 정보',
        'assertive',
        'true',
        '사용자 조작 뒤의 저장 실패',
      ],
      [
        'log',
        '새 정보가 의미 있는 순서로 끝에 붙는 기록',
        'polite',
        '지정 없음 (기본값 false)',
        '작업 기록',
      ],
    ],
    live: (
      <>
        <code>aria-live</code>의 값은 off · polite · assertive입니다. polite는 사용자가 하던 일을
        마친 뒤에, assertive는 바로 알리라는 뜻입니다. 실제로 언제 어떻게 읽히는지는 보조기술과
        설정이 정하므로, 이 페이지는 발화 순서나 횟수를 확인 대상으로 삼지 않습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A live region is an area whose changes assistive technology can present to users without
        focus. You can set it directly with <code>aria-live</code>, or roles such as status, alert,
        and log bring implicit values. The definitions and values below are taken from the role text
        and Characteristics tables of WAI-ARIA 1.2.
      </>
    ),
    cite: 'WAI-ARIA 1.2 (W3C Recommendation, 2023-06-06) — 5.4 Definition of Roles: status, alert, log',
    caption: 'Implicit values of the three roles (WAI-ARIA 1.2)',
    head: ['Role', 'Meaning', 'Implicit aria-live', 'Implicit aria-atomic', 'Use in this chapter'],
    rows: [
      [
        'status',
        'Advisory information not important enough for an alert',
        'polite',
        'true',
        'Result counts, saved',
      ],
      [
        'alert',
        'Important, usually time-sensitive information',
        'assertive',
        'true',
        'A save failure after a user action',
      ],
      [
        'log',
        'A record where new information is added at the end in meaningful order',
        'polite',
        'Not specified (default false)',
        'Activity log',
      ],
    ],
    live: (
      <>
        <code>aria-live</code> takes off, polite, or assertive. polite means after users finish what
        they are doing; assertive means immediately. When and how it is actually spoken is up to
        assistive technology and its settings, so this page does not treat speech order or count as
        something to verify.
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
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={aria12('status')}
        cite={c.cite}
        checkedOn={DYNAMIC_CHECKED_ON}
      >
        <strong>status</strong> A type of live region whose content is advisory information for the
        user but is not important enough to justify an alert, often but not necessarily presented as
        a status bar. <strong>alert</strong> A type of live region with important, and usually
        time-sensitive, information. <strong>log</strong> A type of live region where new
        information is added in meaningful order and old information may disappear.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.live}</p>
    </section>
  );
};
