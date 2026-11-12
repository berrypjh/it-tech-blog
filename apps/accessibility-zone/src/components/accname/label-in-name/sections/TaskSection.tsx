import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3 } from '@it-tech-blog/ui';

import { type JudgmentFields, JudgmentRecord } from '@/components/shared/JudgmentRecord';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { Steps } from '@/components/shared/Steps';

import { LabelInNameDemo } from '../demos/LabelInNameDemo';
import { getToc } from '../toc';

const records: Record<Locale, { title: string; fields: JudgmentFields }[]> = {
  ko: [
    {
      title: '기록 1. 수정 전 "예약 변경" 버튼',
      fields: {
        standard: 'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
        clause: '2.5.3 Label in Name, A',
        scope: '예약 상세 페이지의 "예약 변경" 버튼 (가상의 페이지)',
        conditions: '보이는 텍스트 라벨이 있는 버튼이라 적용 대상. 이 기준에는 예외 조항이 없음',
        evidence:
          '이름 출처: aria-label "예약 수정하기" (AccName 1.2 초안의 AriaLabel 단계에서 끝남). 브라우저 검사값: 아직 적지 않음',
        verdict: '미확인 — 계산상 미충족이 예상되지만 검사값으로 확인하기 전',
        unconfirmed: '브라우저 검사값, 음성 입력으로 "예약 변경"을 말했을 때의 결과',
        followUp: '두 브라우저의 접근성 탭에서 이름을 적고, 같으면 판정을 실패로 확정',
      },
    },
    {
      title: '기록 2. aria-label을 지운 수정 후 버튼',
      fields: {
        standard: 'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
        clause: '2.5.3 Label in Name, A',
        scope: '같은 버튼의 수정 후 코드',
        conditions: '같음',
        evidence:
          '이름 출처: 내용 "예약 변경" (Name From Content). 날짜 · 객실은 aria-describedby로 설명에 둠. 브라우저 검사값: 아직 적지 않음',
        verdict: '미확인 — 계산상 충족이 예상되지만 검사값으로 확인하기 전',
        unconfirmed: '브라우저 검사값, 음성 입력과 화면 낭독기에서의 실제 결과',
        followUp: '수정 전과 같은 환경에서 다시 검사하고, 관찰한 엔진 · 버전을 기록',
      },
    },
  ],
  en: [
    {
      title: 'Record 1. The "Change booking" button before the fix',
      fields: {
        standard: 'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
        clause: '2.5.3 Label in Name, A',
        scope: 'The "Change booking" button on the booking details page (a fictional page)',
        conditions:
          'A button with a visible text label, so in scope. This criterion has no exceptions',
        evidence:
          'Name source: aria-label "Edit reservation" (stops at the AriaLabel step of the AccName 1.2 draft). Browser value: not written yet',
        verdict:
          'Unconfirmed — not met is expected from the computation, but not yet checked against browser values',
        unconfirmed: 'Browser values; the result of saying "Change booking" with voice input',
        followUp:
          'Write the name from the Accessibility tab of two browsers, and confirm the verdict as fail if they agree',
      },
    },
    {
      title: 'Record 2. The button after removing aria-label',
      fields: {
        standard: 'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
        clause: '2.5.3 Label in Name, A',
        scope: 'The fixed code of the same button',
        conditions: 'Same',
        evidence:
          'Name source: content "Change booking" (Name From Content). Date and room moved to the description with aria-describedby. Browser value: not written yet',
        verdict:
          'Unconfirmed — met is expected from the computation, but not yet checked against browser values',
        unconfirmed: 'Browser values; real results with voice input and a screen reader',
        followUp:
          'Re-test in the same environment as before the fix, and record the engine and version observed',
      },
    },
  ],
};

const content = {
  ko: {
    intro: (
      <>
        이 장에서 익힌 추적을 판정 하나로 모읍니다. 기록 양식은{' '}
        <PageLink locale="ko" id="requirements-and-obligations" hash="final-judgment-record" />의
        판정 기록과 같습니다.
      </>
    ),
    steps: [
      '보이는 라벨 텍스트를 적습니다. 이 버튼은 "예약 변경"입니다.',
      '06.3의 네 칸(역할 · 출처 · 참조 · 끝난 단계)으로 이름의 출처를 찾습니다.',
      '실습에서 수정 전 · 후 버튼의 이름을 브라우저 도구로 읽어 적습니다.',
      '관찰한 이름에 보이는 라벨이 들어 있는지 보고, 예상과 다르면 엔진 · 버전과 함께 적습니다.',
      '기준 · 버전 · 조항 · 대상 · 조건 · 관찰 근거 · 판정 · 미확인 · 후속 확인을 채웁니다.',
    ],
    exampleHeading: '기록 예시',
    exampleNote:
      '교육 예시입니다. 관찰 근거의 브라우저 검사값을 아직 적지 않았으므로 판정을 미확인으로 두었습니다. 직접 검사한 값을 적은 뒤 판정을 고칩니다.',
    atTitle: '음성 입력과 화면 낭독기',
    at: (
      <>
        &quot;예약 변경 눌러&quot; 같은 음성 명령의 결과와 화면 낭독기의 발화는, 그 환경에서 실제로
        해 본 경우에만 관찰 근거로 적습니다. 해 보지 않았다면 미확인 칸에 남깁니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        This brings the tracing from this chapter into one judgment. The record format is the same
        as the judgment record on{' '}
        <PageLink locale="en" id="requirements-and-obligations" hash="final-judgment-record" />.
      </>
    ),
    steps: [
      'Write down the visible label text. For this button, it is "Change booking."',
      'Find the name source with the four columns from 06.3 (role, source, reference, step that finished).',
      'In the exercise, read the names of the before and after buttons in browser tools and write them down.',
      'Check whether the visible label is in the observed name, and if it differs from the expectation, note the engine and version.',
      'Fill in standard, version, clause, scope, conditions, observed evidence, verdict, unconfirmed items, and follow-up.',
    ],
    exampleHeading: 'Example records',
    exampleNote:
      'Teaching examples. Browser values for the observed evidence are not written yet, so the verdicts are unconfirmed. Change the verdict after writing values you checked yourself.',
    atTitle: 'Voice input and screen readers',
    at: (
      <>
        Record the result of a voice command such as &quot;click Change booking&quot; and what a
        screen reader says as observed evidence only if you actually did it in that environment. If
        not, leave it in the unconfirmed field.
      </>
    ),
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
      <LabelInNameDemo />
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
          verdict="unconfirmed"
        />
      ))}
      <DocH3>{c.atTitle}</DocH3>
      <p>
        <SourceTag locale={locale} id="at" />
      </p>
      <p>{c.at}</p>
    </section>
  );
};
