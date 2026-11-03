import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ChevronRight } from 'lucide-react';

import { failureStages } from '@/components/shared/failureStages';
import { StageLabel } from '@/components/shared/StageLabel';

const captions = {
  ko: '앞 단계가 막히면 뒤 단계도 함께 막힙니다. 장벽을 기록할 때는 이 중 어느 단계에서 처음 막혔는지를 적습니다.',
  en: 'When an early step is blocked, every later step is blocked too. When you record a barrier, note the first step where it failed.',
};

/** 사용자가 과업을 끝내기까지 거치는 단계. 한 단계라도 막히면 완료되지 않는다. */
export const TaskFlowDiagram = ({ locale }: { locale: Locale }) => (
  <figure className="my-xl">
    <List ordered className="grid grid-cols-2 gap-sm sm:grid-cols-3">
      {failureStages[locale].map((step, i) => (
        <ListItem
          key={step.id}
          className="relative flex flex-col gap-2xs rounded-md border border-stroke-light bg-background-surface p-md"
        >
          <span className="text-xxsm font-semiBold tracking-xsm text-text-primary">
            STEP {i + 1}
          </span>
          <StageLabel
            locale={locale}
            id={step.id}
            className="text-xsm font-semiBold text-text-default"
          />
          <span className="text-xxsm text-text-light">{step.detail}</span>
          {(i + 1) % 3 !== 0 && (
            <span
              className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-[calc(50%+var(--ds-spacing-sm)/2)] rounded-rounded border border-stroke-light bg-background-surface p-2xs sm:block"
              aria-hidden="true"
            >
              <ChevronRight className="h-3 w-3 text-text-light" />
            </span>
          )}
        </ListItem>
      ))}
    </List>
    <figcaption className="mt-sm text-center text-xxsm text-text-light">
      {captions[locale]}
    </figcaption>
  </figure>
);
