import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ChevronRight } from 'lucide-react';

const content = {
  ko: {
    steps: [
      { title: '인식', detail: '보이거나, 들리거나, 읽힙니다' },
      { title: '이해', detail: '버튼인지 제목인지 압니다' },
      { title: '탐색', detail: '원하는 위치로 이동합니다' },
      { title: '조작', detail: '누르고, 입력하고, 선택합니다' },
      { title: '상태·오류 이해', detail: '무엇을 고쳐야 하는지 압니다' },
      { title: '작업 완료', detail: '가입·주문·예약이 끝납니다' },
    ],
    caption:
      '앞 단계가 막히면 뒤 단계도 함께 막힙니다. 접근성 문제는 대개 마지막이 아니라 구조에서 시작됩니다.',
  },
  en: {
    steps: [
      { title: 'Perceive', detail: 'It is seen, heard, or read' },
      { title: 'Understand', detail: 'They know a button from a heading' },
      { title: 'Navigate', detail: 'They move to where they want' },
      { title: 'Operate', detail: 'They press, type, and select' },
      { title: 'Grasp state & errors', detail: 'They know what to fix' },
      { title: 'Complete the task', detail: 'Sign-up, order, or booking is done' },
    ],
    caption:
      'When an early step is blocked, every later step is blocked too. Accessibility problems usually start in structure, not at the end.',
  },
};

/** 사용자가 작업을 끝내기까지 거치는 단계. 한 단계라도 막히면 완료되지 않는다. */
export const TaskFlowDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-xl">
      <List ordered className="grid grid-cols-2 gap-sm sm:grid-cols-3">
        {c.steps.map((step, i) => (
          <ListItem
            key={step.title}
            className="relative flex flex-col gap-2xs rounded-md border border-stroke-light bg-background-surface p-md"
          >
            <span className="text-xxsm font-semiBold tracking-xsm text-text-primary">
              STEP {i + 1}
            </span>
            <span className="text-xsm font-semiBold text-text-default">{step.title}</span>
            <span className="text-xxsm text-text-light">{step.detail}</span>
            {(i + 1) % 3 !== 0 && (
              <span
                className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-[calc(50%+var(--ds-spacing-sm)/2)]rounded-rounded border border-stroke-light bg-background-surface p-2xs sm:block"
                aria-hidden="true"
              >
                <ChevronRight className="h-3 w-3 text-text-light" />
              </span>
            )}
          </ListItem>
        ))}
      </List>
      <figcaption className="mt-sm text-center text-xxsm text-text-light">{c.caption}</figcaption>
    </figure>
  );
};
