import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { Exercise } from '@/components/shared/Exercise';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <strong>비LLM Baseline</strong>은 LLM 없이 만들 수 있는 가장 단순한 기준 구성입니다. 이
        예시에서는 서비스 코드 규칙과 분류기를 쓰고, 둘 다 맡지 못한 문의는 사람이 분류합니다. LLM
        후보는 이 Baseline과 같은 평가 사례, 같은 조건에서 비교해 무엇이 나아졌고 무엇을 대가로
        치렀는지 보여야 합니다.
      </>
    ),
    holdHeading: '도입을 보류할 조건',
    hold: [
      'Baseline이 같은 평가 사례에서 이미 성공 조건을 충족한다.',
      '실패 비용이 큰데 출력을 확인할 수단(계약 검사, 평가 사례)이 없다.',
      '평가 사례가 없어 개선을 잴 수 없다.',
      '지연이나 비용이 예산을 넘는다.',
      '문의를 모델로 보낼 수 없는 데이터 제약이 있다.',
    ],
    approverTitle: '승인자가 있다고 자동화가 타당해지지는 않습니다',
    approver:
      '"마지막에 사람이 승인하니 괜찮다"는 근거가 되지 않습니다. 승인자가 근거를 볼 수 없거나, 하루에 수백 건을 확인해야 하거나, 승인 결과가 기록되지 않는다면 승인은 형식이 됩니다. 승인 단계는 그것이 실제로 오류를 잡는지까지 평가합니다.',
    revisitHeading: '다시 평가할 조건',
    revisit: [
      '다국어 문의나 서비스 코드 없는 자유 문장의 비중이 늘었다.',
      '운영 중 분류기의 정확도가 떨어진 것이 관측되었다.',
      '큐나 라벨 체계가 바뀌었다.',
      'Baseline과 LLM 후보를 같이 돌릴 평가 사례가 준비되었다.',
    ],
    exerciseTitle: '서비스 코드만 있는 접수 화면',
    question: (
      <p>
        새 접수 화면은 서비스 코드를 반드시 고르게 하고, 자유 문장 칸이 없습니다. 서비스 코드와 담당
        큐는 1:1로 대응합니다. 그래도 팀에서 &quot;LLM으로 라우팅하자&quot;는 제안이 나왔습니다.
        어떤 대안을 두고, 언제 다시 평가할지 적어 보세요.
      </p>
    ),
    answerLabel: '풀이 보기',
    answer: [
      '대안은 서비스 코드 → 큐 표를 코드로 구현하고 단위 테스트로 닫는 것입니다. 표에 없는 코드는 사람이 분류하는 대기열로 보냅니다. 해석할 언어적 모호성이 없으므로 LLM이 더할 몫이 없고, 비용 · 지연 · 검증 부담만 늘어납니다.',
      '다시 평가할 조건의 예: 자유 문장 칸이 추가될 때, "기타" 코드의 비율이 커질 때, 한 코드가 여러 큐로 갈라지게 될 때, 첨부된 다국어 설명을 읽어야 할 때. 다시 평가할 때도 규칙 Baseline과 같은 평가 사례로 비교합니다.',
      '정답이 하나는 아닙니다. 예를 들어 "기타" 문의만 분류기나 LLM에 보내는 조합도 타당할 수 있습니다. 중요한 것은 각 경로가 맡는 범위와, 그 범위를 잴 평가 사례를 함께 적는 것입니다.',
    ],
  },
  en: {
    intro: (
      <>
        A <strong>non-LLM baseline</strong> is the simplest reference setup you can build without an
        LLM. In this example it uses service-code rules and a classifier, and a person triages any
        request neither can take. An LLM candidate has to be compared with this baseline on the same
        evaluation cases under the same conditions, showing what improved and what it cost.
      </>
    ),
    holdHeading: 'Conditions for holding off',
    hold: [
      'The baseline already meets the success criteria on the same evaluation cases.',
      'The failure cost is high and there is no means to check the output (contract checks, evaluation cases).',
      'There are no evaluation cases, so improvement cannot be measured.',
      'Latency or cost exceeds the budget.',
      'A data constraint prevents sending requests to the model.',
    ],
    approverTitle: 'An approver does not make automation justified',
    approver:
      '"A person approves at the end, so it is fine" is not a justification. If the approver cannot see the evidence, has hundreds of items a day to check, or approvals are not recorded, approval becomes a formality. Evaluate an approval step, too, on whether it actually catches errors.',
    revisitHeading: 'Conditions for re-evaluating',
    revisit: [
      'The share of multilingual requests or free text without a service code has grown.',
      'A drop in classifier accuracy has been observed in operation.',
      'The queues or the label scheme changed.',
      'Evaluation cases are ready to run the baseline and the LLM candidate side by side.',
    ],
    exerciseTitle: 'A form with service codes only',
    question: (
      <p>
        A new request form makes the service code mandatory and has no free-text field. Service
        codes map 1:1 to queues. Still, the team suggests &quot;let’s route with an LLM&quot;. Write
        down what alternative to keep and when to re-evaluate.
      </p>
    ),
    answerLabel: 'Show solution',
    answer: [
      'The alternative is to implement the service code → queue table in code and close it with unit tests. A code missing from the table goes to the queue a person triages. There is no linguistic ambiguity to interpret, so an LLM adds nothing, only cost, latency, and verification work.',
      'Examples of re-evaluation conditions: a free-text field is added, the share of "Other" grows, one code starts splitting across several queues, or attached multilingual descriptions must be read. Even then, compare against the rules baseline on the same evaluation cases.',
      'There is no single right answer. A combination that sends only "Other" requests to a classifier or an LLM can also be sound. What matters is writing down the range each path takes, together with the evaluation cases that measure it.',
    ],
  },
};

/** 비LLM Baseline의 정의, 도입 보류 · 재평가 조건과 서비스 코드만 있는 반례 과제. */
export const BaselineSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.baseline.id}>
      <DocH2 {...toc.baseline} />
      <p>{c.intro}</p>

      <DocH3>{c.holdHeading}</DocH3>
      <List marker className="flex flex-col gap-xs">
        {c.hold.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
      <Callout variant="pitfall" title={c.approverTitle}>
        <p>{c.approver}</p>
      </Callout>

      <DocH3>{c.revisitHeading}</DocH3>
      <List marker className="flex flex-col gap-xs">
        {c.revisit.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>

      <Exercise
        title={c.exerciseTitle}
        question={c.question}
        answerLabel={c.answerLabel}
        answer={c.answer.map((item) => (
          <p key={item}>{item}</p>
        ))}
      />
    </section>
  );
};
