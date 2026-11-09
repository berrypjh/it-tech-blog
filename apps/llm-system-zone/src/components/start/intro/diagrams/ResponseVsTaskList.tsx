import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ArrowRight, CircleCheck, CircleX } from 'lucide-react';

const content = {
  ko: {
    response: '응답 생성됨',
    taskLabel: '업무',
    cases: [
      {
        title: '계정 잠금 문의인데 모델이 네트워크 큐를 제안했다',
        outcome: '다른 팀에 접수되어 처리가 늦어짐',
      },
      {
        title: '큐 제안은 맞지만 티켓 시스템이 기록 요청을 거절했다',
        outcome: '접수 ID가 없어 담당자가 문의를 볼 수 없음',
      },
      {
        title: '앱과 약속한 큐 이름 하나 대신 긴 문장이 돌아왔다',
        outcome: '다음 단계가 담당 큐를 읽지 못해 흐름이 멈춤',
      },
    ],
  },
  en: {
    response: 'Response generated',
    taskLabel: 'Task',
    cases: [
      {
        title: 'The request was about a locked account, but the model suggested the network queue',
        outcome: 'Filed with another team, so handling is delayed',
      },
      {
        title: 'The queue suggestion is right, but the ticket system rejected the write',
        outcome: 'No ticket ID, so no agent can see the request',
      },
      {
        title: 'A long sentence came back instead of the single queue name agreed with the app',
        outcome: 'The next step cannot read the queue and the flow stops',
      },
    ],
  },
};

/** 모델 응답은 성공이지만 업무는 끝나지 않은 경우를 응답 ✓ 와 업무 ✗ 의 대비로 보여 준다. */
export const ResponseVsTaskList = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <List className="my-lg flex flex-col gap-sm">
      {c.cases.map((item) => (
        <ListItem
          key={item.title}
          className="rounded-md border border-stroke-light bg-background-surface p-md leading-normal"
        >
          <p className="text-xsm font-semiBold text-text-default">{item.title}</p>
          <div className="mt-sm flex flex-col gap-xs sm:flex-row sm:flex-wrap sm:gap-sm">
            <span className="flex items-start gap-xs text-xxsm text-text-default">
              <CircleCheck
                className="mt-2xs h-3.5 w-3.5 shrink-0 text-text-success"
                aria-hidden="true"
              />
              <span>{c.response}</span>
            </span>
            <ArrowRight
              className="mt-2xs hidden h-3.5 w-3.5 shrink-0 text-text-light sm:block"
              aria-hidden="true"
            />
            <span className="flex items-start gap-xs text-xxsm text-text-default">
              <CircleX className="mt-2xs h-3.5 w-3.5 shrink-0 text-text-error" aria-hidden="true" />
              <span>
                <span className="text-text-light">{c.taskLabel}: </span>
                {item.outcome}
              </span>
            </span>
          </div>
        </ListItem>
      ))}
    </List>
  );
};
