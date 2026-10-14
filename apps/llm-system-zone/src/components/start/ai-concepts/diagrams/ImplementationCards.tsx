import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

const content = {
  ko: {
    heading: '"AI 기능"이라는 같은 이름 아래 가능한 구현',
    cards: [
      { name: '규칙 기반 추론', detail: '사람이 쓴 규칙과 추론 엔진. 데이터로 학습하지 않는다' },
      { name: '고전적 기계학습', detail: '데이터로 학습한 비신경망 모델 (예: 로지스틱 회귀)' },
      { name: '신경망', detail: '다층 신경망을 데이터로 학습한다' },
      { name: '대규모 사전학습 모델', detail: '넓은 데이터로 사전학습한 뒤 작업에 적응시킨다' },
    ],
  },
  en: {
    heading: 'Implementations possible under the same name, "AI feature"',
    cards: [
      {
        name: 'Rule-based reasoning',
        detail: 'Rules written by people and an inference engine. It does not learn from data',
      },
      {
        name: 'Classical machine learning',
        detail: 'A non-neural model learned from data (e.g. logistic regression)',
      },
      { name: 'Neural networks', detail: 'A multi-layer neural network learned from data' },
      {
        name: 'Large pretrained models',
        detail: 'Pretrained on broad data, then adapted to a task',
      },
    ],
  },
};

/** 같은 "AI 기능"이라는 이름 아래 가능한 서로 다른 구현을 카드로 보여 준다. 서버 컴포넌트다. */
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
