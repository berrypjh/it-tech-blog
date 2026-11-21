import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3 } from '@it-tech-blog/ui';

import { type JudgmentFields, JudgmentRecord } from '@/components/shared/JudgmentRecord';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';
import type { VerdictId } from '@/components/shared/VerdictLabel';

import { AuditScreenDemo } from '../demos/AuditScreenDemo';
import { getToc } from '../toc';

type ExampleRecord = { title: string; verdict: VerdictId; fields: JudgmentFields };

const standard = 'WCAG 2.2 (W3C Recommendation, 2024-12-12)';

const records: Record<Locale, ExampleRecord[]> = {
  ko: [
    {
      title: '기록 1. 수정 전 안내 문구의 대비',
      verdict: 'fail',
      fields: {
        standard,
        clause: '1.4.3 Contrast (Minimum), AA',
        scope: '쿠폰 화면의 안내 문구 (가상의 화면)',
        conditions: '일반 크기의 불투명 글자. 예외에 해당하지 않음',
        evidence: '계산 결과: #9AA5B1 / #FFFFFF, 2.50:1 (기준 4.5:1)',
        verdict: '실패',
        unconfirmed: '없음',
        followUp: '글자색을 고친 뒤 같은 방법으로 재계산',
      },
    },
    {
      title: '기록 2. 수정 후 안내 문구의 대비',
      verdict: 'pass',
      fields: {
        standard,
        clause: '1.4.3 Contrast (Minimum), AA',
        scope: '같은 문구의 수정 후 색',
        conditions: '같음',
        evidence: '계산 결과: #475467 / #FFFFFF, 7.68:1 (기준 4.5:1)',
        verdict: '통과',
        unconfirmed: '없음',
        followUp: '테마를 추가하면 다시 계산',
      },
    },
    {
      title: '기록 3. 수정 후 화면의 Reflow',
      verdict: 'unconfirmed',
      fields: {
        standard,
        clause: '1.4.10 Reflow, AA',
        scope: '쿠폰 화면',
        conditions: '세로 스크롤 콘텐츠. 2차원 예외 부분 없음',
        evidence: '320px 패널 모형에서 가로 넘침 없음',
        verdict: '미확인 — 패널 모형만 확인함',
        unconfirmed: '실제 1280px 창의 400% 확대 결과',
        followUp: '실제 브라우저에서 확대해 환경과 함께 기록',
      },
    },
  ],
  en: [
    {
      title: 'Record 1. Contrast of the hint before the fix',
      verdict: 'fail',
      fields: {
        standard,
        clause: '1.4.3 Contrast (Minimum), AA',
        scope: 'The hint on the coupon screen (a fictional screen)',
        conditions: 'Opaque text of normal size; no exception applies',
        evidence: 'Computed: #9AA5B1 / #FFFFFF, 2.50:1 (requirement 4.5:1)',
        verdict: 'Fail',
        unconfirmed: 'None',
        followUp: 'Recompute the same way after fixing the color',
      },
    },
    {
      title: 'Record 2. Contrast of the hint after the fix',
      verdict: 'pass',
      fields: {
        standard,
        clause: '1.4.3 Contrast (Minimum), AA',
        scope: 'The fixed color of the same hint',
        conditions: 'Same',
        evidence: 'Computed: #475467 / #FFFFFF, 7.68:1 (requirement 4.5:1)',
        verdict: 'Pass',
        unconfirmed: 'None',
        followUp: 'Recompute if a theme is added',
      },
    },
    {
      title: 'Record 3. Reflow of the fixed screen',
      verdict: 'unconfirmed',
      fields: {
        standard,
        clause: '1.4.10 Reflow, AA',
        scope: 'The coupon screen',
        conditions: 'Vertically scrolling content with no two-dimensional exception',
        evidence: 'No horizontal overflow in the 320px panel model',
        verdict: 'Unconfirmed — only the panel model was checked',
        unconfirmed: 'The result of a real 1280px window at 400% zoom',
        followUp: 'Zoom in a real browser and record it with the environment',
      },
    },
  ],
};

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        이 장의 조건을 한 화면에 적용합니다. 기록 양식은{' '}
        <PageLink locale={locale} id="requirements-and-obligations" hash="final-judgment-record" />
        의 판정 기록과 같습니다. 패널 값은 판단 재료이고, 실제 환경에서 하지 않은 일은 미확인으로
        남깁니다.
      </>
    ),
    steps: [
      '화면에서 대비 · 확대 · 가림 · 추가 내용 중 적용되는 조건을 고릅니다.',
      '의도한 결함을 켜고 값과 조작 결과를 관찰합니다.',
      '조건마다 환경 · 증거 · 판정 · 미확인을 적습니다.',
      '결함을 끈 수정 후 화면에서 같은 방법으로 재검증합니다.',
      '실제 확대 · 모바일 · 고대비처럼 하지 않은 환경을 미확인에 남깁니다.',
    ],
    exampleHeading: '기록 예시',
    exampleNote:
      '교육 예시입니다. 계산값은 예제에 쓴 두 색에서 낸 것이고, 직접 확인한 값으로 바꿔 적습니다.',
  },
  en: {
    intro: (locale: Locale) => (
      <>
        This applies the chapter to one screen. The record format matches the judgment record on{' '}
        <PageLink locale={locale} id="requirements-and-obligations" hash="final-judgment-record" />.
        Panel values are inputs to a judgment, and anything not done in a real environment stays
        unconfirmed.
      </>
    ),
    steps: [
      'Choose which of contrast, zoom, covering, and additional content apply to the screen.',
      'Turn on the intentional defect and observe the values and behavior.',
      'For each condition, write the environment, evidence, verdict, and unconfirmed items.',
      'Retest the fixed screen the same way with the defect off.',
      'Leave environments you did not try, such as real zoom, mobile, and high contrast, as unconfirmed.',
    ],
    exampleHeading: 'Example records',
    exampleNote:
      'Teaching examples. Computed values come from the two colors in the example; replace them with what you verified.',
  },
};

export const TaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.task.id}>
      <DocH2 {...toc.task} />
      <p>{c.intro(locale)}</p>
      <Steps items={c.steps} />
      <AuditScreenDemo />
      <DocH3>{c.exampleHeading}</DocH3>
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="example" />
        <span className="text-xxsm text-text-light">{c.exampleNote}</span>
      </p>
      {records[locale].map((record) => (
        <JudgmentRecord
          key={record.title}
          locale={locale}
          title={record.title}
          fields={record.fields}
          verdict={record.verdict}
        />
      ))}
    </section>
  );
};
