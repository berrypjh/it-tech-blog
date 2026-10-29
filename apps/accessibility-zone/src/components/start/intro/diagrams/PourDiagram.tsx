import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

/** 원칙 글자와, 그 원칙의 예가 나온 이 페이지 섹션. */
const principles = [
  { letter: 'P', anchor: 'who-for' },
  { letter: 'O', anchor: 'why-frontend' },
  { letter: 'U', anchor: 'why-frontend' },
  { letter: 'R', anchor: 'semantic-html' },
];

const content = {
  ko: {
    lead: '모든 성공 기준은 아래 네 질문 중 하나에 속합니다.',
    items: [
      {
        name: '인식의 용이성',
        en: 'Perceivable',
        question: '정보를 인식할 수 있는 형태로 제공하나요?',
        example: '소리 대신 자막',
      },
      {
        name: '운용의 용이성',
        en: 'Operable',
        question: '기능을 조작하고 탐색할 수 있나요?',
        example: '예제 A, 키보드로 닿지 않는 버튼',
      },
      {
        name: '이해의 용이성',
        en: 'Understandable',
        question: '내용과 동작을 읽고 예측할 수 있나요?',
        example: '예제 B, 입력 칸의 라벨',
      },
      {
        name: '견고성',
        en: 'Robust',
        question: '보조기술이 안정적으로 해석하나요?',
        example: 'HTML 요소가 주는 역할과 이름',
      },
    ],
    seenEarlier: '앞에서 본 예',
  },
  en: {
    lead: 'Every success criterion belongs to one of these four questions.',
    items: [
      {
        name: 'Perceivable',
        en: '',
        question: 'Is information presented in ways users can perceive?',
        example: 'Captions instead of sound',
      },
      {
        name: 'Operable',
        en: '',
        question: 'Can users operate and navigate the functionality?',
        example: 'Example A, a button the keyboard cannot reach',
      },
      {
        name: 'Understandable',
        en: '',
        question: 'Can users read and predict the content and behavior?',
        example: 'Example B, the label of a field',
      },
      {
        name: 'Robust',
        en: '',
        question: 'Do assistive technologies interpret it reliably?',
        example: 'Role and name from HTML elements',
      },
    ],
    seenEarlier: 'Seen earlier',
  },
};

/** WCAG의 네 원칙(POUR)을 질문과 이 페이지에서 본 예와 함께 보여 준다. */
export const PourDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-xl flex flex-col gap-md">
      <p className="font-semiBold">{c.lead}</p>
      <List className="grid gap-sm sm:grid-cols-2">
        {principles.map((p, i) => {
          const item = c.items[i];
          return (
            <ListItem
              key={p.letter}
              className="flex flex-col gap-sm rounded-md border border-stroke-light bg-background-default p-lg"
            >
              <p className="flex items-baseline gap-sm">
                <span className="text-3xl font-bold text-text-primary" aria-hidden="true">
                  {p.letter}
                </span>
                <span className="font-bold">{item.name}</span>
                {item.en && <span className="text-xxsm text-text-light">{item.en}</span>}
              </p>
              <p className="text-xsm">{item.question}</p>
              <p className="text-xxsm text-text-light">
                {c.seenEarlier} → <a href={`#${p.anchor}`}>{item.example}</a>
              </p>
            </ListItem>
          );
        })}
      </List>
    </figure>
  );
};
