import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

const content = {
  ko: {
    heading: '"담당 큐 정하기"라는 같은 기능의 가능한 구현',
    cards: [
      {
        name: '규칙 기반',
        detail: '"VPN"이 들어 있으면 네트워크 큐로 보내는 규칙을 사람이 쓴다. 학습하지 않는다',
      },
      {
        name: '고전적 기계학습',
        detail: '상담원이 큐를 붙인 과거 문의로 비신경망 분류기를 학습한다 (예: 로지스틱 회귀)',
      },
      { name: '신경망 분류기', detail: '같은 라벨로 다층 신경망 분류기를 학습한다' },
      {
        name: 'LLM',
        detail: '대량의 원문으로 사전학습한 언어 모델이 큐 이름을 텍스트로 생성한다 (01.1)',
      },
    ],
  },
  en: {
    heading: 'Possible implementations of the same feature, "pick the queue"',
    cards: [
      {
        name: 'Rule-based',
        detail:
          'People write a rule: if it mentions "VPN", send it to the network queue. No learning',
      },
      {
        name: 'Classical machine learning',
        detail:
          'A non-neural classifier learned from past requests that agents labeled with a queue (e.g. logistic regression)',
      },
      {
        name: 'Neural network classifier',
        detail: 'A multi-layer neural network classifier learned from the same labels',
      },
      {
        name: 'LLM',
        detail:
          'A language model pretrained on a large amount of raw text generates the queue name as text (01.1)',
      },
    ],
  },
};

/** 같은 "담당 큐 정하기" 기능 아래 가능한 서로 다른 구현을 카드로 보여 준다. 서버 컴포넌트다. */
export const ImplementationCards = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-lg leading-normal">
      <p className="mb-sm text-xxsm font-semiBold text-text-light">{c.heading}</p>
      <List className="grid grid-cols-1 gap-sm sm:grid-cols-2">
        {c.cards.map((card) => (
          <ListItem
            key={card.name}
            className="flex flex-col gap-xs rounded-md border border-stroke-light bg-background-surface p-md"
          >
            <span className="text-xsm font-semiBold text-text-default">{card.name}</span>
            <span className="break-keep text-xxsm text-text-light">{card.detail}</span>
          </ListItem>
        ))}
      </List>
    </figure>
  );
};
