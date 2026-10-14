import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

const content = {
  ko: {
    questionLabel: '질문',
    effectLabel: '설계 영향',
    criteria: [
      {
        name: '실시간성',
        question: '사용자가 즉시 응답을 기다리는가',
        effect: '지연이 큰 호출은 비동기로 돌리거나 가벼운 방식을 앞세운다',
      },
      {
        name: '비용 예산',
        question: '요청 수와 호출당 비용을 감당할 수 있는가',
        effect: '대량 입력은 호출 비용이 누적되므로 ML이나 규칙을 먼저 비교한다',
      },
      {
        name: '오류 허용도',
        question: '틀린 출력이 나와도 괜찮은 범위는 어디까지인가',
        effect: '허용도가 낮을수록 검증과 사람 검토를 더하거나 모델 책임을 줄인다',
      },
      {
        name: '잘못된 상태 변경의 피해',
        question: '금전, 개인정보, 권한이 걸려 있고 되돌릴 수 있는가',
        effect: '피해가 크면 모델 응답만으로 실행하지 않고 권한 확인과 명시적 승인을 둔다',
      },
      {
        name: '사람 검토 가능성',
        question: '실행 전에 확인할 사람과 시간이 있는가',
        effect: '검토가 불가능하면 자동 처리 범위를 규칙으로 한정한다',
      },
      {
        name: '데이터 제약',
        question: '라벨 데이터가 있는가, 개인정보를 외부로 보낼 수 있는가',
        effect: '라벨이 있으면 ML을 비교하고, 데이터 반출이 제한되면 처리 위치를 다시 고려한다',
      },
    ],
  },
  en: {
    questionLabel: 'Question',
    effectLabel: 'Design effect',
    criteria: [
      {
        name: 'Real-time need',
        question: 'Is the user waiting for an instant response',
        effect: 'Run slow calls asynchronously or put a lighter approach first',
      },
      {
        name: 'Cost budget',
        question: 'Can you afford the request count and per-call cost',
        effect: 'Call costs accumulate at volume, so compare ML or rules first',
      },
      {
        name: 'Error tolerance',
        question: 'How far is a wrong output acceptable',
        effect:
          'The lower the tolerance, the more validation and review you add, or reduce the model’s responsibility',
      },
      {
        name: 'Damage of a wrong state change',
        question: 'Is money, personal data, or permission involved, and can it be undone',
        effect:
          'When damage is large, do not execute on the model response alone; add an authorization check and explicit approval',
      },
      {
        name: 'Human review possible',
        question: 'Is there a person and time to check before execution',
        effect: 'When review is impossible, limit the automatic range by rules',
      },
      {
        name: 'Data constraints',
        question: 'Is labeled data available, and may personal data leave for an external service',
        effect:
          'With labels, compare ML; with limits on moving data, reconsider where processing runs',
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
