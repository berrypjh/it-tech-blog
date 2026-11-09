import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { List, ListItem } from '@berrypjh/react-ui';

import { Exercise } from '@/components/shared/Exercise';

import { getToc } from '../toc';

const counterLog = (message: string) =>
  [
    'request   step            result',
    `req-0431  model.suggest   queue="network" message="${message}"`,
    'req-0431  validate        queue in allowed_queues  pass',
    'req-0431  ticket.create   403 forbidden            # no ticket_id',
  ].join('\n');

const content = {
  ko: {
    intro:
      '같은 기능에서 다른 요청 req-0431을 봅니다. 모델은 큐 이름과 함께 사용자에게 보여 줄 문장까지 생성했고, 그 문장에는 "접수 완료"라는 말이 들어 있습니다. 검증도 통과했습니다. 그런데 티켓 시스템은 기록 요청을 거절했습니다.',
    logLabel: '가상 로그 · 요청 req-0431',
    message: '네트워크 큐에 접수 완료했습니다.',
    title: '완료라고 보여 줘도 될까요?',
    question: (
      <p>
        모델 응답에는 &quot;접수 완료&quot;가 있고 검증도 통과했습니다. 사용자에게 완료라고 보여
        줘도 될까요? 보여 주기 전에 무엇을 더 확인해야 하는지 적어 보세요.
      </p>
    ),
    answerLabel: '풀이 보기',
    conclusion:
      '보여 주면 안 됩니다. 모델은 티켓 시스템의 응답을 보기 전에 문장을 만들었으므로, "접수 완료"는 기록에 대한 보고가 아니라 생성된 텍스트입니다.',
    answer: [
      '첫째, 티켓 시스템의 응답을 확인합니다. 403은 거절이고 접수 ID가 없습니다.',
      '둘째, 같은 요청 req-0431의 접수 ID와 담당 큐 기록이 티켓 시스템에 실제로 있는지 확인합니다. 둘 다 있어야 완료입니다.',
      '셋째, 거절 이유(예: 앱이 쓰는 계정의 쓰기 권한)를 기록하고, 사용자에게는 "아직 접수되지 않았습니다"와 다음 행동을 보여 줍니다. 모델이 만든 문장은 그대로 내보내지 않습니다.',
    ],
  },
  en: {
    intro:
      'Now look at another request in the same feature, req-0431. Along with the queue name, the model also generated a sentence to show the user, and that sentence says "filed". Validation passed too. But the ticket system rejected the write.',
    logLabel: 'Fictional log · request req-0431',
    message: 'Your request has been filed in the network queue.',
    title: 'May the app say it is done?',
    question: (
      <p>
        The model response says &quot;filed&quot; and validation passed. May the app tell the user
        it is done? Write down what else to check before showing anything.
      </p>
    ),
    answerLabel: 'Show solution',
    conclusion:
      'No. The model wrote that sentence before the ticket system responded, so "filed" is generated text, not a report about a record.',
    answer: [
      'First, check the ticket system response. A 403 is a rejection, and there is no ticket ID.',
      'Second, check that a ticket ID and queue record for the same request, req-0431, actually exist in the ticket system. Only both together mean done.',
      'Third, record why it was rejected (for example, the write permission of the account the app uses) and show the user "not filed yet" with a next step. The sentence the model generated is not passed through as is.',
    ],
  },
};

/** 모델이 완료 문장을 생성했지만 기록이 거절된 반례와 과제 · 해설. */
export const CounterSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.counter.id}>
      <DocH2 {...toc.counter} />
      <p>{c.intro}</p>
      <CodeBlock label={c.logLabel} tone="bad" code={counterLog(c.message)} />
      <Exercise
        title={c.title}
        question={c.question}
        answerLabel={c.answerLabel}
        answer={
          <>
            <p>{c.conclusion}</p>
            <List className="flex flex-col gap-xs">
              {c.answer.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </List>
          </>
        }
      />
    </section>
  );
};
