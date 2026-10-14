import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

const content = {
  ko: {
    columns: [
      {
        title: '기존 ML이 맞는 조건',
        items: [
          '충분한 라벨 데이터가 있다',
          '분류 목적이 고정되어 있다',
          '고정된 카테고리의 대량 입력이다',
        ],
        llm: false,
      },
      {
        title: 'LLM이 유리한 조건',
        items: [
          '라벨 데이터가 없거나 적어 학습 모델을 바로 만들 수 없다',
          '분류 기준이 자주 바뀌어 재학습 부담이 크다',
          '입력이 길고 문맥 해석이 필요한 자연어다',
          '먼저 빠르게 시제품을 만들어 평가 데이터를 모으려 한다',
        ],
        llm: true,
      },
    ],
  },
  en: {
    columns: [
      {
        title: 'Conditions that suit existing ML',
        items: [
          'There is enough labeled data',
          'The classification purpose is fixed',
          'Large volume over fixed categories',
        ],
        llm: false,
      },
      {
        title: 'Conditions that favor an LLM',
        items: [
          'Labeled data is absent or scarce, so a trained model cannot be built right away',
          'The classification criteria change often, making retraining heavy',
          'The input is long natural language needing contextual interpretation',
          'You want to build a prototype quickly first and gather evaluation data',
        ],
        llm: true,
      },
    ],
  },
};

/** 기존 ML이 맞는 조건과 LLM이 유리한 조건을 두 칸으로 나란히 보여 준다. 서버 컴포넌트다. */
export const MlVsLlmConditions = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <List className="my-lg grid grid-cols-1 gap-sm leading-normal sm:grid-cols-2">
      {c.columns.map((column) => (
        <ListItem
          key={column.title}
          className={`flex flex-col gap-sm rounded-md border bg-background-surface p-md ${
            column.llm ? 'border-stroke-primary' : 'border-stroke-light'
          }`}
        >
          <p className="text-xsm font-semiBold text-text-default">{column.title}</p>
          <ul className="flex list-disc flex-col gap-xs pl-lg text-xxsm text-text-default">
            {column.items.map((item) => (
              <li key={item} className="break-keep">
                {item}
              </li>
            ))}
          </ul>
        </ListItem>
      ))}
    </List>
  );
};
