import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { SystemFlowDiagram } from '../diagrams/SystemFlowDiagram';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '요청 하나가 업무 완료까지 가는 길을 단계별로 보겠습니다. 단계마다 무엇이 나오는지, 누가 책임지는지가 핵심입니다.',
    branchTitle: '권한이 필요한 동작은 모델이 판단하지 않습니다',
    branch: (
      <p>
        권한이 필요한 동작은 모델이 아니라 앱과 하위 시스템이 판단합니다. 영향이 큰 동작은 사람
        확인을 거치게 하는 것이 일반적인 완화책입니다.
      </p>
    ),
  },
  en: {
    intro:
      'Let us walk one request to a finished task, step by step. What comes out of each step, and who is responsible, is the point.',
    branchTitle: 'The model does not decide permissioned actions',
    branch: (
      <p>
        Deciding on a permissioned action belongs to the app and downstream systems, not the model.
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
      <Callout variant="note" title={c.branchTitle}>
        {c.branch}
      </Callout>
    </section>
  );
};
