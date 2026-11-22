import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { CONTENT_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        점멸은 멈출 수 있느냐가 아니라 처음부터 일어나면 안 되느냐의 문제입니다. 2.3.1은 1초 동안 세
        번 넘게 번쩍이는 것을 막고, 넘는다면 일반 점멸 · 적색 점멸 임계값 아래여야 합니다. 이
        페이지는 점멸을 재생하지 않고 정지한 그림으로만 보입니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.3.1 Three Flashes or Below Threshold (A)',
    figure: '1초를 0.1초 칸 10개로 나눈 정지 그림. 칠한 칸이 한 번의 번쩍임입니다.',
    rows: [
      {
        label: '1초에 4번 — 기준을 넘음. 임계값을 측정하지 않았다면 통과로 볼 수 없음',
        on: [0, 2, 4, 6],
      },
      { label: '1초에 2번 — 세 번 이하', on: [0, 5] },
    ],
    caption: '움직임 관련 기준과 사용자 설정',
    head: ['무엇', '성격', '요구'],
    table: [
      ['2.2.2 Pause, Stop, Hide (A)', '규범', '저절로 시작하는 움직임 · 갱신을 멈출 수단'],
      ['2.3.1 Three Flashes or Below Threshold (A)', '규범', '1초에 세 번 이하이거나 임계값 아래'],
      [
        '2.3.3 Animation from Interactions (AAA)',
        '규범',
        '상호작용으로 생기는 움직임을 끌 수 있음',
      ],
      [
        'prefers-reduced-motion',
        '사용자 설정 (CSS 미디어 쿼리)',
        '위 기준을 구현하는 수단의 하나. 점멸 기준을 대신하지 못함',
      ],
    ],
    calloutTitle: '모션 줄이기를 켰다고 점멸이 허용되지 않습니다',
    callout: (
      <>
        모션 선호는 사용자가 켜야 작동하고, 켜지 않은 사람에게는 아무 보호도 없습니다. 위험한 점멸은
        설정과 관계없이 만들지 않습니다. 이 사이트의 모션 설정과 운영체제 설정은 서로 다른 값이라,
        실습은 둘 다 읽어 보여 줍니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Flashing is not about whether it can be stopped but whether it may happen at all. 2.3.1
        forbids flashing more than three times in any one second, unless the flash is below the
        general and red flash thresholds. This page does not play flashing; it shows only a still
        picture.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.3.1 Three Flashes or Below Threshold (A)',
    figure:
      'A still picture dividing one second into ten 0.1-second cells. A filled cell is one flash.',
    rows: [
      {
        label: '4 per second — over the limit. Without measuring the thresholds, it cannot pass',
        on: [0, 2, 4, 6],
      },
      { label: '2 per second — three or fewer', on: [0, 5] },
    ],
    caption: 'Motion-related criteria and the user setting',
    head: ['What', 'Kind', 'Requirement'],
    table: [
      [
        '2.2.2 Pause, Stop, Hide (A)',
        'Normative',
        'A way to stop movement and updates that start by themselves',
      ],
      [
        '2.3.1 Three Flashes or Below Threshold (A)',
        'Normative',
        'Three or fewer per second, or below the thresholds',
      ],
      [
        '2.3.3 Animation from Interactions (AAA)',
        'Normative',
        'Motion triggered by interaction can be turned off',
      ],
      [
        'prefers-reduced-motion',
        'User setting (CSS media query)',
        'One way to implement the criteria above; it does not replace the flash criterion',
      ],
    ],
    calloutTitle: 'Reduced motion does not make flashing acceptable',
    callout: (
      <>
        A motion preference works only when the user turns it on, and protects no one who has not.
        Dangerous flashing is never built, whatever the setting. This site’s motion setting and the
        OS setting are different values, so the exercise reads and shows both.
      </>
    ),
  },
};

export const FlashSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.flash.id}>
      <DocH2 {...toc.flash} />
      <p>{c.intro}</p>
      <NormativeQuote
        locale={locale}
        href={wcag22('three-flashes-or-below-threshold')}
        cite={c.cite}
        checkedOn={CONTENT_CHECKED_ON}
      >
        Web pages do not contain anything that flashes more than three times in any one second
        period, or the flash is below the general flash and red flash thresholds.
      </NormativeQuote>
      <figure className="my-xl flex flex-col gap-md rounded-md border border-stroke-light p-lg">
        {c.rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-xs">
            <p className="text-xsm">{row.label}</p>
            <div aria-hidden="true" className="grid grid-cols-10 gap-2xs">
              {Array.from({ length: 10 }, (_, i) => (
                <span
                  key={i}
                  className={`h-6 rounded-xs border border-stroke-default ${row.on.includes(i) ? 'bg-primaryBtn-default' : ''}`}
                />
              ))}
            </div>
          </div>
        ))}
        <figcaption className="text-xxsm text-text-light">{c.figure}</figcaption>
      </figure>
      <DocTable caption={c.caption} head={c.head} rows={c.table} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
