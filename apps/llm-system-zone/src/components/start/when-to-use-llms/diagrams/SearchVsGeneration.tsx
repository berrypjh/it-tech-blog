import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ArrowRight } from 'lucide-react';

const content = {
  ko: {
    questionLabel: '품질 질문',
    steps: [
      { name: '검색', role: '관련 문서를 찾는다', question: '맞는 문서를 가져왔는가' },
      {
        name: '답변 생성',
        role: '찾은 문서를 context로 넣어 문장을 생성한다',
        question: '그 문서에 맞게 답했는가',
      },
    ],
  },
  en: {
    questionLabel: 'Quality question',
    steps: [
      {
        name: 'Search',
        role: 'Finds relevant documents',
        question: 'Did it fetch the right documents',
      },
      {
        name: 'Answer generation',
        role: 'Puts the found documents in the context and generates sentences',
        question: 'Did it answer to match those documents',
      },
    ],
  },
};

/** 검색과 검색 결과를 이용한 답변 생성을 두 단계로 나누고 각 단계의 품질 질문을 보여 준다. 서버 컴포넌트다. */
export const SearchVsGeneration = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <List className="my-lg flex flex-col items-stretch gap-sm leading-normal sm:flex-row">
      {c.steps.map((step, i) => (
        <ListItem key={step.name} className="flex flex-1 items-stretch gap-sm">
          <div className="flex flex-1 flex-col gap-xs rounded-md border border-stroke-light bg-background-surface p-md">
            <p className="text-xsm font-semiBold text-text-default">{step.name}</p>
            <p className="break-keep text-xxsm text-text-light">{step.role}</p>
            <p className="mt-auto break-keep border-t border-stroke-light pt-sm text-xxsm text-text-default">
              <span className="text-text-light">{c.questionLabel}: </span>
              {step.question}
            </p>
          </div>
          {i < c.steps.length - 1 && (
            <ArrowRight
              className="hidden h-4 w-4 shrink-0 self-center text-text-light sm:block"
              aria-hidden="true"
            />
          )}
        </ListItem>
      ))}
    </List>
  );
};
