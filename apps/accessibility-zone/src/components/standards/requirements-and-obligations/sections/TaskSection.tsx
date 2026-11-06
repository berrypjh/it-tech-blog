import { Fragment } from 'react';

import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocH3 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';
import { type VerdictId, VerdictLabel } from '@/components/shared/VerdictLabel';

import { getToc } from '../toc';

type Key =
  | 'standard'
  | 'clause'
  | 'scope'
  | 'conditions'
  | 'evidence'
  | 'verdict'
  | 'unconfirmed'
  | 'followUp';

const keys: Key[] = [
  'standard',
  'clause',
  'scope',
  'conditions',
  'evidence',
  'verdict',
  'unconfirmed',
  'followUp',
];

const labels: Record<Locale, Record<Key, string>> = {
  ko: {
    standard: '기준 · 버전',
    clause: '조항',
    scope: '대상 범위',
    conditions: '적용 조건 · 예외',
    evidence: '관찰 증거',
    verdict: '판정',
    unconfirmed: '미확인',
    followUp: '후속 확인',
  },
  en: {
    standard: 'Standard · version',
    clause: 'Clause',
    scope: 'Scope',
    conditions: 'Conditions · exceptions',
    evidence: 'Observed evidence',
    verdict: 'Verdict',
    unconfirmed: 'Unconfirmed',
    followUp: 'Follow-up',
  },
};

/** 예시 기록의 순서와 같은 순서로 놓인 판정. */
const recordVerdicts: VerdictId[] = ['fail', 'na', 'fail', 'unconfirmed'];

const records: Record<Locale, Record<Key, string>[]> = {
  ko: [
    {
      standard: 'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
      clause: '2.5.8 목표 크기(최소), AA',
      scope: '예약 입력 페이지의 별점 버튼 다섯 개',
      conditions:
        '24 × 24 CSS 픽셀 미만. 간격 · 동등 · 인라인 · 사용자 에이전트 제어 · 필수 예외를 검토함',
      evidence:
        '각 16 × 16 CSS 픽셀, 중심 거리 16. 창 너비 1280px · 배율 100%에서 개발자 도구로 잼',
      verdict: '실패 — 해당하는 예외 없음',
      unconfirmed: '좁은 화면 변형에서의 크기',
      followUp: '좁은 화면 폭에서 다시 재고, 고친 뒤 같은 환경에서 재검사',
    },
    {
      standard: 'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
      clause: '1.3.5 입력 목적 식별, AA',
      scope: '예약 입력 페이지의 "동행자 이메일" 칸',
      conditions: '적용 대상: 사용자 본인에 관한 정보를 받는 칸',
      evidence: '칸의 라벨과 안내 문구가 동행자의 이메일을 받는다고 밝힘',
      verdict: '해당 없음 — 사용자 본인 정보가 아님',
      unconfirmed: '없음',
      followUp: '같은 페이지의 "예약자 이메일" 칸은 따로 판정',
    },
    {
      standard: 'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
      clause: '5.2.5 비간섭과 2.1.2 키보드 함정 없음, A',
      scope: '강의실 목록 페이지에 끼워 넣은 외부 상담 위젯',
      conditions: '2.1.2는 기준 충족에 기대지 않은 콘텐츠를 포함한 모든 콘텐츠에 적용',
      evidence: 'Chrome에서 키보드만으로 Tab 진입 후 Tab · Shift+Tab · Esc로 빠져나오지 못함',
      verdict: '실패 — 페이지 전체가 부적합',
      unconfirmed: '다른 브라우저에서의 동작',
      followUp: '위젯 공급자에게 문의하거나 교체하고, 예약 과정 전체를 다시 판정',
    },
    {
      standard: 'KWCAG 2.2 (KS X OT0003:2022, 2022-12-28 개정)',
      clause: '5.4.3 텍스트 콘텐츠의 명도 대비',
      scope: '예약 확인 페이지의 안내 문구',
      conditions: '4.5 대 1. 큰 글자 · 화면 확대 가능 콘텐츠는 3 대 1까지, 로고 · 장식 등은 예외',
      evidence: '아직 대비값을 재지 않음',
      verdict: '미확인',
      unconfirmed: '라이트 · 다크 테마의 대비값, 화면 확대 조건 해당 여부',
      followUp: '대비 측정 도구로 두 테마에서 글자색 · 배경색을 재고 글자 크기를 기록',
    },
  ],
  en: [
    {
      standard: 'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
      clause: '2.5.8 Target Size (Minimum), AA',
      scope: 'The five rating star buttons on the booking form page',
      conditions:
        'Under 24 × 24 CSS pixels. Spacing, Equivalent, Inline, User agent control, and Essential reviewed',
      evidence:
        'Each 16 × 16 CSS pixels, centers 16 apart. Measured in developer tools at a 1280px window and 100% zoom',
      verdict: 'Fail — no exception applies',
      unconfirmed: 'Size in the narrow-screen variation',
      followUp:
        'Measure again at a narrow width, and re-test in the same environment after the fix',
    },
    {
      standard: 'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
      clause: '1.3.5 Identify Input Purpose, AA',
      scope: 'The "Companion email" field on the booking form page',
      conditions: 'Scope: input fields collecting information about the user',
      evidence: 'The field’s label and hint say it collects a companion’s email',
      verdict: 'Not applicable — not information about the user',
      unconfirmed: 'None',
      followUp: 'Judge the "Booker email" field on the same page separately',
    },
    {
      standard: 'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
      clause: '5.2.5 Non-Interference and 2.1.2 No Keyboard Trap, A',
      scope: 'The third-party chat widget embedded in the room list page',
      conditions: '2.1.2 applies to all content, including content not relied upon',
      evidence:
        'In Chrome with a keyboard only, after Tabbing in, Tab, Shift+Tab, and Esc do not get out',
      verdict: 'Fail — the whole page does not conform',
      unconfirmed: 'Behavior in other browsers',
      followUp:
        'Contact the widget vendor or replace it, then judge the whole booking process again',
    },
    {
      standard: 'KWCAG 2.2 (KS X OT0003:2022, revised 2022-12-28)',
      clause: '5.4.3 Contrast of text content',
      scope: 'The notice text on the booking confirmation page',
      conditions:
        '4.5 to 1. Large text and zoomable content may go to 3 to 1; logos, decoration, etc. are exceptions',
      evidence: 'Contrast not measured yet',
      verdict: 'Unconfirmed',
      unconfirmed: 'Contrast in light and dark themes; whether the zoom condition applies',
      followUp:
        'Measure text and background colors in both themes with a contrast tool and record text size',
    },
  ],
};

const template = {
  ko: `기준 · 버전:
조항:
대상 범위: (페이지 · 상태 · 컴포넌트)
적용 조건 · 예외: (원문 문장, 검토한 예외)
관찰 증거: (무엇을 · 어떤 환경에서 · 어떤 관찰 출처로)
판정: (통과 / 실패 / 해당 없음 / 미확인 — 근거 한 줄)
미확인:
후속 확인:`,
  en: `Standard · version:
Clause:
Scope: (page, state, component)
Conditions · exceptions: (original sentence, exceptions reviewed)
Observed evidence: (what, in which environment, from which source)
Verdict: (pass / fail / not applicable / unconfirmed — one-line basis)
Unconfirmed:
Follow-up:`,
};

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="conformance" hash="booking-process" />의 강의실 예약 서비스를 다시
        씁니다. 아래 순서로 판정 기록을 쓰고, 마지막에 자신이 아는 서비스 하나로 같은 기록을 써
        봅니다.
      </>
    ),
    steps: [
      '판정 문서를 정합니다. 계약 · 인증이 지정한 문서가 있으면 그것을, 없으면 목표로 삼은 문서와 판본을 적습니다.',
      '조항마다 원문 → 정의 → 적용 대상 → 조건 · 예외를 읽습니다.',
      <>
        관찰 증거를 남깁니다. 관찰 출처는 <PageLink locale="ko" id="observation-sources" />의 네
        가지로 적습니다.
      </>,
      '통과 · 실패 · 해당 없음 · 미확인 가운데 하나로 판정하고, 판정마다 정해진 근거를 남깁니다.',
      '미확인과 후속 확인을 적습니다. 법적 의무는 판정하지 않고, 확인할 절차만 남깁니다.',
    ],
    exampleHeading: '작성 예시',
    exampleNote:
      '네 기록은 이 페이지가 만든 교육 예시입니다. 실제 서비스를 검사한 결과가 아닙니다.',
    record: (n: number) => `기록 ${n}`,
    templateHeading: '직접 쓰기',
    templateLabel: '복사해 쓰는 판정 기록 틀',
  },
  en: {
    intro: (
      <>
        This reuses the room booking service from{' '}
        <PageLink locale="en" id="conformance" hash="booking-process" />. Write the judgment record
        in the order below, and finally write the same record for a service you know.
      </>
    ),
    steps: [
      'Decide the document to judge against. If a contract or certification names one, use it; otherwise record the document and edition you target.',
      'For each clause, read original text → definitions → scope → conditions and exceptions.',
      <>
        Leave observed evidence. Record its source using the four from{' '}
        <PageLink locale="en" id="observation-sources" />.
      </>,
      'Give one verdict of pass, fail, not applicable, or unconfirmed, and leave the basis each verdict requires.',
      'Write the unconfirmed items and follow-up. Do not judge legal obligations; leave only the procedure to check them.',
    ],
    exampleHeading: 'Example',
    exampleNote:
      'The four records are teaching examples made by this page, not results of testing a real service.',
    record: (n: number) => `Record ${n}`,
    templateHeading: 'Write your own',
    templateLabel: 'A judgment record template to copy',
  },
};

export const TaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.task.id}>
      <DocH2 {...toc.task} />
      <p>{c.intro}</p>
      <Steps items={c.steps} />
      <DocH3>{c.exampleHeading}</DocH3>
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="example" />
        <span className="text-xxsm text-text-light">{c.exampleNote}</span>
      </p>
      {records[locale].map((record, i) => (
        <div
          key={record.clause}
          className="my-lg rounded-md border border-stroke-light bg-background-default p-lg"
        >
          <p className="mb-md text-xsm font-bold text-text-default">{c.record(i + 1)}</p>
          <dl className="grid gap-x-lg gap-y-sm text-xsm sm:grid-cols-[9rem_1fr]">
            {keys.map((key) => (
              <Fragment key={key}>
                <dt className="font-semiBold text-text-default">{labels[locale][key]}</dt>
                <dd
                  className={
                    key === 'verdict' ? 'font-semiBold text-text-default' : 'text-text-light'
                  }
                >
                  {key === 'verdict' ? (
                    <VerdictLabel id={recordVerdicts[i]}>{record[key]}</VerdictLabel>
                  ) : (
                    record[key]
                  )}
                </dd>
              </Fragment>
            ))}
          </dl>
        </div>
      ))}
      <DocH3>{c.templateHeading}</DocH3>
      <CodeBlock label={c.templateLabel} code={template[locale]} />
    </section>
  );
};
