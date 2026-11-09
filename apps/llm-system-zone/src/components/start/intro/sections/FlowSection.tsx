import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocH3 } from '@it-tech-blog/ui';

import { SystemFlowDiagram } from '../diagrams/SystemFlowDiagram';
import { getToc } from '../toc';

const evidenceLog = (shown: string) =>
  [
    'request   step            result',
    'req-0427  model.suggest   queue="network"          # text suggestion only',
    'req-0427  validate        queue in allowed_queues  pass',
    'req-0427  ticket.create   201 ticket_id=INC-0042 queue=network',
    `req-0427  ui.show         "${shown}"`,
  ].join('\n');

const content = {
  ko: {
    intro:
      '문의 하나가 담당 큐에 접수되기까지를 단계별로 보겠습니다. 단계마다 무엇이 나오는지, 누가 책임지는지가 핵심입니다. 모델이 하는 일은 2단계의 라우팅 제안, 곧 큐 이름을 텍스트로 생성하는 것뿐입니다.',
    evidenceHeading: '완료의 증거는 같은 요청의 기록이다',
    evidence:
      '아래는 같은 요청 req-0427이 남긴 가상 로그입니다. 업무 완료의 증거는 모델 줄이 아니라 티켓 시스템 줄입니다. 티켓 시스템이 이 요청에 대해 접수 ID INC-0042와 담당 큐 network를 기록해 돌려주었고, 앱은 그 값을 사용자에게 보여 줍니다.',
    logLabel: '가상 로그 · 요청 req-0427',
    shown: 'INC-0042 · 네트워크 큐에 접수되었습니다',
    evidenceAfter:
      '요청 ID로 단계를 묶어 두어야 "이 응답이 어느 기록으로 이어졌는가"를 확인할 수 있습니다. 접수 ID가 없거나 다른 요청의 것이라면 완료라고 말할 수 없습니다.',
    branchTitle: '기록 권한은 모델이 판단하지 않습니다',
    branch: (
      <p>
        티켓을 만들 수 있는지는 모델이 아니라 앱과 티켓 시스템이 판단합니다. 영향이 큰 동작은 사람
        확인을 거치게 하는 것이 일반적인 완화책입니다.
      </p>
    ),
  },
  en: {
    intro:
      'Let us walk one request until it is filed in a queue, step by step. What comes out of each step, and who is responsible, is the point. The model’s only job is the routing suggestion in step 2: generating a queue name as text.',
    evidenceHeading: 'The evidence of completion is the record of the same request',
    evidence:
      'Below is a fictional log left by one request, req-0427. The evidence of a finished task is the ticket system line, not the model line. The ticket system recorded ticket ID INC-0042 and queue network for this request and returned them, and the app shows those values to the user.',
    logLabel: 'Fictional log · request req-0427',
    shown: 'INC-0042 · Filed in the network queue',
    evidenceAfter:
      'Tying the steps together with a request ID is what lets you check "which record did this response lead to?". If there is no ticket ID, or it belongs to another request, you cannot call the task finished.',
    branchTitle: 'The model does not decide write permission',
    branch: (
      <p>
        Whether a ticket may be created is decided by the app and the ticket system, not the model.
        Requiring human confirmation for high-impact actions is a common mitigation.
      </p>
    ),
  },
};

export const FlowSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.flow.id}>
      <DocH2 {...toc.flow} />
      <p>{c.intro}</p>
      <SystemFlowDiagram locale={locale} />
      <DocH3>{c.evidenceHeading}</DocH3>
      <p>{c.evidence}</p>
      <CodeBlock label={c.logLabel} code={evidenceLog(c.shown)} />
      <p>{c.evidenceAfter}</p>
      <Callout variant="note" title={c.branchTitle}>
        {c.branch}
      </Callout>
    </section>
  );
};
