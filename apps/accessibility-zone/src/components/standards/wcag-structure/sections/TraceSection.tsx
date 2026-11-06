import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { PageLink } from '@/components/shared/PageLink';
import { wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const layers = {
  ko: [
    {
      layer: '원칙',
      item: '2 운용 가능(Operable)',
      role: '네 가지 큰 방향. 직접 검사하지 않습니다',
    },
    {
      layer: '지침',
      item: '2.5 입력 방식(Input Modalities)',
      role: '원칙 아래의 목표. 직접 검사하지 않습니다',
    },
    {
      layer: '성공 기준',
      item: '2.5.8 목표 크기(최소) — AA',
      role: '검사할 수 있는 문장. 적합성은 여기서 정해집니다',
    },
  ],
  en: [
    {
      layer: 'Principle',
      item: '2 Operable',
      role: 'One of four broad directions; not tested directly',
    },
    {
      layer: 'Guideline',
      item: '2.5 Input Modalities',
      role: 'A goal under the principle; not tested directly',
    },
    {
      layer: 'Success criterion',
      item: '2.5.8 Target Size (Minimum) — AA',
      role: 'A testable statement; conformance is decided here',
    },
  ],
};

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="intro" hash="standards" />
        에서 본 네 원칙(POUR) 가운데 하나를 골라 아래로 내려갑니다. 예로 쓸 성공 기준은 WCAG 2.2에서
        새로 생긴 2.5.8입니다.
      </>
    ),
    caption: '원칙 · 지침 · 성공 기준의 세 층',
    after: (
      <>
        원칙과 지침은 성공 기준을 묶는 틀입니다. 검사하고 판정하는 단위는 성공 기준이고, 아래처럼 그
        문장이 규범 원문입니다.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.5.8',
  },
  en: {
    intro: (
      <>
        Pick one of the four principles (POUR) from{' '}
        <PageLink locale="en" id="intro" hash="standards" /> and go down. The example criterion is
        2.5.8, new in WCAG 2.2.
      </>
    ),
    caption: 'The three layers: principle, guideline, success criterion',
    after: (
      <>
        Principles and guidelines are frames that group success criteria. The unit you test and
        judge is the success criterion, and its sentence, as below, is the normative text.
      </>
    ),
    cite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 2.5.8',
  },
};

/** 세 층을 들여쓴 목록으로 보인다. 층의 포함 관계가 뜻이라 순서 목록을 겹쳐 쓴다. */
export const TraceSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.trace.id}>
      <DocH2 {...toc.trace} />
      <p>{c.intro}</p>
      <figure className="my-xl">
        <ol className="flex flex-col gap-xs">
          {layers[locale].map((row, i) => (
            <li
              key={row.layer}
              className="flex flex-col gap-2xs rounded-sm border border-stroke-light bg-background-default px-lg py-sm sm:flex-row sm:items-baseline sm:gap-md"
              style={{ marginLeft: `calc(${i} * var(--ds-spacing-lg))` }}
            >
              <span className="text-xxsm font-semiBold text-text-primary">{row.layer}</span>
              <span className="text-xsm font-semiBold">{row.item}</span>
              <span className="text-xxsm text-text-light">{row.role}</span>
            </li>
          ))}
        </ol>
        <figcaption className="mt-sm text-xxsm text-text-light">{c.caption}</figcaption>
      </figure>
      <p>{c.after}</p>
      <NormativeQuote locale={locale} href={wcag22('target-size-minimum')} cite={c.cite}>
        <p>
          <strong>Success Criterion 2.5.8 Target Size (Minimum)</strong> (Level AA)
        </p>
        <p>
          The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except when: …
        </p>
      </NormativeQuote>
    </section>
  );
};
