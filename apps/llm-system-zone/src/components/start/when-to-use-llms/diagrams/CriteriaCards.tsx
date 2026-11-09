import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

const content = {
  ko: {
    questionLabel: '질문',
    effectLabel: 'Baseline · 보류에 미치는 영향',
    criteria: [
      {
        name: '실패 비용',
        question: '잘못된 큐에 접수되면 누가 얼마나 늦어지고, 되돌릴 수 있는가',
        effect: '비용이 클수록 확신 없는 문의는 보류하고, 검증 수단이 없으면 LLM 도입을 미룬다',
      },
      {
        name: '데이터',
        question: '안정된 라벨이 쌓여 있는가, 문의를 외부 모델로 보낼 수 있는가',
        effect: '라벨이 있으면 분류기를 Baseline에 넣고, 반출이 막히면 처리 위치부터 정한다',
      },
      {
        name: '변경 빈도',
        question: '큐 · 정책 · 라벨 체계가 얼마나 자주 바뀌는가',
        effect: '자주 바뀌면 규칙 표와 재학습 비용을 함께 보고, 정책 검색으로 근거를 최신으로 둔다',
      },
      {
        name: '품질',
        question: '같은 평가 사례에서 각 방식이 얼마나 맞히는가',
        effect: 'Baseline이 이미 성공 조건을 넘으면 LLM이 더할 몫이 무엇인지부터 묻는다',
      },
      {
        name: '지연',
        question: '사용자가 접수 확인을 기다리는가',
        effect: '기다린다면 즉시 처리할 수 있는 규칙 · 분류기를 앞에 둔다',
      },
      {
        name: '비용',
        question: '문의 수와 호출당 비용을 감당할 수 있는가',
        effect: '호출 비용은 문의 수에 비례해 쌓이므로 LLM은 다른 경로가 못 맡은 문의에만 쓴다',
      },
      {
        name: '검증 가능성',
        question: '출력이 맞았는지 코드나 평가 사례로 확인할 수 있는가',
        effect: '확인할 방법이 없으면 품질을 주장할 수 없으므로 도입을 보류한다',
      },
    ],
  },
  en: {
    questionLabel: 'Question',
    effectLabel: 'Effect on the baseline · holding off',
    criteria: [
      {
        name: 'Failure cost',
        question: 'Filed in the wrong queue, who is delayed and by how much, and can it be undone',
        effect:
          'The higher the cost, the more uncertain requests are held; with no means of verification, an LLM is put off',
      },
      {
        name: 'Data',
        question: 'Are stable labels available, and may requests be sent to an external model',
        effect:
          'With labels, put a classifier in the baseline; if data may not leave, decide where processing runs first',
      },
      {
        name: 'Change frequency',
        question: 'How often do queues, policies, and the label scheme change',
        effect:
          'If often, weigh rule-table and retraining costs together, and keep evidence current with policy search',
      },
      {
        name: 'Quality',
        question: 'How often does each approach get the same evaluation cases right',
        effect:
          'If the baseline already meets the success criteria, first ask what an LLM would add',
      },
      {
        name: 'Latency',
        question: 'Is the user waiting for a filing confirmation',
        effect: 'If so, put rules and the classifier, which answer instantly, first',
      },
      {
        name: 'Cost',
        question: 'Can you afford the request volume and the per-call cost',
        effect:
          'Call costs grow with volume, so use the LLM only for requests other paths could not take',
      },
      {
        name: 'Verifiability',
        question: 'Can you confirm the output was right, with code or evaluation cases',
        effect: 'With no way to confirm, no quality claim can be made, so hold off',
      },
    ],
  },
};

/** 판단 기준마다 묻는 질문과 설계에 미치는 영향을 카드로 보여 준다. 서버 컴포넌트다. */
export const CriteriaCards = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <List className="my-lg grid grid-cols-1 gap-sm leading-normal sm:grid-cols-2">
      {c.criteria.map((item) => (
        <ListItem
          key={item.name}
          className="flex flex-col gap-sm rounded-md border border-stroke-light bg-background-surface p-md"
        >
          <p className="text-xsm font-semiBold text-text-default">{item.name}</p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-md gap-y-xs border-t border-stroke-light pt-sm text-xxsm">
            <dt className="text-text-light">{c.questionLabel}</dt>
            <dd className="break-keep text-text-default">{item.question}</dd>
            <dt className="text-text-light">{c.effectLabel}</dt>
            <dd className="break-keep font-semiBold text-text-default">{item.effect}</dd>
          </dl>
        </ListItem>
      ))}
    </List>
  );
};
