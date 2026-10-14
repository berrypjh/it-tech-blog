import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';
import { ArrowRight, CircleCheck, CircleX } from 'lucide-react';

const content = {
  ko: {
    response: '응답 생성됨',
    taskLabel: '업무',
    cases: [
      {
        title: '응답의 내용이 요구사항이나 근거와 다르다',
        outcome: '틀린 내용이 사용자에게 전달될 수 있음',
      },
      {
        title: '내용은 맞지만 결과를 저장하는 요청이 실패한다',
        outcome: '저장되지 않아 다음 사람이 볼 수 없음',
      },
      {
        title: '응답의 형식이 앱과 약속한 값이 아니다',
        outcome: '다음 단계가 응답을 처리하지 못해 흐름이 멈춤',
      },
    ],
  },
  en: {
    response: 'Response generated',
    taskLabel: 'Task',
    cases: [
      {
        title: 'The content of the response differs from the requirement or the evidence',
        outcome: 'Wrong content may reach the user',
      },
      {
        title: 'The content is right, but the request to store the result fails',
        outcome: 'It is not stored, so the next person cannot see it',
      },
      {
        title: 'The response is not in the format agreed with the app',
        outcome: 'The next step cannot process it and the flow stops',
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
