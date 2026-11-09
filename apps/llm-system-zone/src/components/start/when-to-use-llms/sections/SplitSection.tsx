import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { ResponsibilitySplit } from '../diagrams/ResponsibilitySplit';
import { getToc } from '../toc';

const content = {
  ko: {
    overview:
      '01.3의 계약은 모델이 무엇을 제안하든 앱이 형식 · 근거 · 업무 규칙 · 권한을 확인하게 했습니다. 이제 한 걸음 물러나, 그 제안을 꼭 모델이 만들어야 하는지 묻습니다. 담당 큐 정하기처럼 하나로 보이는 기능도 요청 해석, 정책 조회, 큐 결정, 티켓 기록처럼 성격이 다른 작업이 섞여 있습니다. 01.2에서 용도와 모델 종류를 나눠 봤듯이, 여기서는 기능을 작업 단위로 나누고 작업마다 맡길 곳을 정합니다.',
    after:
      '검증 수단은 작업마다 정하고, 01.3에서 본 "코드로 단언할 수 있는 것"과 "데이터와 기준이 필요한 것"의 구분이 그대로 적용됩니다.',
    noteTitle: '"LLM은 계산을 못한다"가 아니라 보장과 비용을 비교합니다',
    note: '모델이 계산에 쓰일 수 있는지, 얼마나 잘하는지는 모델과 방식에 따라 다르므로 능력을 단정하지 않습니다. 코드는 규칙만 맞으면 결과가 보장되고 테스트할 수 있지만, 모델에 맡기면 같은 보장을 얻으려고 검산 코드와 평가를 따로 두어야 하고 호출 비용과 지연이 더해집니다.',
  },
  en: {
    overview:
      'The contract in 01.3 made the app check format, evidence, business rules, and permission whatever the model suggested. Now step back and ask whether that suggestion has to come from a model at all. Even a single-looking feature like picking a queue mixes tasks of different natures: interpreting the request, looking up policy, deciding the queue, and recording the ticket. As in 01.2 where we separated use from model kind, here we split a feature into task units and decide who takes each.',
    after:
      'The verification means are chosen per task, and the split from 01.3 between what code can assert and what needs data and criteria applies as is.',
    noteTitle: 'Not "LLMs cannot calculate" but compare guarantees and costs',
    note: 'Whether a model can be used for calculation, and how well, depends on the model and the approach, so we do not assert a capability. Calculated in code, the result is guaranteed as long as the rules are right and can be tested, but handed to a model you need separate re-checking code and evaluation for the same guarantee, and call cost and latency are added.',
  },
};

export const SplitSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.split.id}>
      <DocH2 {...toc.split} />
      <p>{c.overview}</p>
      <ResponsibilitySplit locale={locale} />
      <p>{c.after}</p>
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
