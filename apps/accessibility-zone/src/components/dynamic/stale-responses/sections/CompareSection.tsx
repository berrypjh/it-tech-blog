import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { compare, type Outcome, scenarios } from '../scenarios';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        수정 전 판은 응답 id를 확인하지 않아 마지막에 도착한 응답이 이깁니다. 결함을 화면에 실제
        live 영역으로 두지 않고, 같은 입력 순서를 두 상태 전이 함수에 넣어 계산한 마지막 상태만
        비교합니다.
      </>
    ),
    caption: '같은 입력에 대한 수정 전 · 후의 마지막 상태',
    head: ['상황', '입력 순서', '수정 전', '수정 후'],
    outcome: (o: Outcome) =>
      `결과: ${o.results || '없음'} · 알림 원문: ${o.message} · aria-busy: ${o.busy} · 알림 결정 ${o.decisions}번`,
    note: '알림 결정 횟수는 페이지가 status 글자를 바꾼 횟수입니다. 보조기술이 실제로 몇 번 읽었는지가 아닙니다.',
  },
  en: {
    intro: (
      <>
        The version before does not check response ids, so the last response to arrive wins. The
        defect is not placed on the page as a real live region; the same input order is fed to the
        two transition functions and only their final states are compared.
      </>
    ),
    caption: 'Final states before and after for the same input',
    head: ['Situation', 'Input order', 'Before', 'After'],
    outcome: (o: Outcome) =>
      `Results: ${o.results || 'none'} · announcement text: ${o.message} · aria-busy: ${o.busy} · ${o.decisions} announcement decisions`,
    note: 'The number of announcement decisions is how many times the page changed the status text, not how many times assistive technology actually spoke.',
  },
};

export const CompareSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = scenarios.map((s) => {
    const { before, after } = compare(locale, s.steps);
    return [
      s.title[locale],
      s.steps.map((step) => step.label[locale]).join(' → '),
      c.outcome(before),
      c.outcome(after),
    ];
  });

  return (
    <section aria-labelledby={toc.compare.id}>
      <DocH2 {...toc.compare} />
      <p>{c.intro}</p>
      <p className="flex flex-wrap items-center gap-sm">
        <SourceTag locale={locale} id="computed" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <p className="text-xsm text-text-light">{c.note}</p>
    </section>
  );
};
