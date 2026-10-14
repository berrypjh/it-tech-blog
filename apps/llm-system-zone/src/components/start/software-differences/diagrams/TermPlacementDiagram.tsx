import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

const content = {
  ko: {
    terms: [
      {
        name: 'Validation',
        place: '요청 경로 안, 사용 직전',
        usage: '명시된 제약을 확인한다',
        question: '약속한 형식과 규칙을 지켰는가',
        onPath: true,
      },
      {
        name: 'Evaluation',
        place: '요청 경로 밖, 변경 전후와 배포 전',
        usage: '정의한 기준과 데이터로 품질을 평가한다',
        question: '정해 둔 사례 집합에서 기준을 얼마나 만족하는가',
        onPath: false,
      },
      {
        name: 'Monitoring',
        place: '요청 경로 곁, 운영 중 계속',
        usage: '운영 중인 시스템을 관찰한다',
        question: '실제 요청과 결과에서 무슨 일이 일어나는가',
        onPath: false,
      },
    ],
  },
  en: {
    terms: [
      {
        name: 'Validation',
        place: 'Inside the request path, right before use',
        usage: 'Checks explicitly stated constraints',
        question: 'Did it keep the promised format and rules',
        onPath: true,
      },
      {
        name: 'Evaluation',
        place: 'Outside the request path, around changes and before release',
        usage: 'Assesses quality against defined criteria and data',
        question: 'How well does it meet the criteria on a chosen set of cases',
        onPath: false,
      },
      {
        name: 'Monitoring',
        place: 'Alongside the request path, continuously in operation',
        usage: 'Observes the system in operation',
        question: 'What happens in real requests and results',
        onPath: false,
      },
    ],
  },
};

/** 세 용어의 용례 · 질문 · 위치를 카드로 보여 준다. 서버 컴포넌트다. */
export const TermPlacementDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-lg leading-normal">
      <List className="grid grid-cols-1 gap-sm sm:grid-cols-3">
        {c.terms.map((term) => (
          <ListItem
            key={term.name}
            className={`flex flex-col gap-xs rounded-md border bg-background-surface p-md ${
              term.onPath ? 'border-stroke-primary' : 'border-dashed border-stroke-default'
            }`}
          >
            <span className="text-xsm font-semiBold text-text-default">{term.name}</span>
            <span className="break-keep text-xxsm text-text-default">{term.usage}</span>
            <span className="break-keep text-xxsm text-text-light">{term.question}</span>
            <span className="mt-auto break-keep border-t border-stroke-light pt-sm text-xxsm font-semiBold text-text-primary">
              {term.place}
            </span>
          </ListItem>
        ))}
      </List>
    </figure>
  );
};
