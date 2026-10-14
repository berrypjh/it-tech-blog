import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { ExperimentFlowDiagram } from '../diagrams/ExperimentFlowDiagram';
import { getToc } from '../toc';

const intro = {
  ko: '실험과 서비스는 한 방향의 줄이 아니라 돌아오는 고리입니다. 서비스가 모니터링에서 모은 실패 사례가 다음 데이터와 실험이 됩니다.',
  en: 'Experiment and service are not a one-way line but a loop that returns. Failure cases the service gathers through monitoring become the next data and experiments.',
};

export const FlowSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.flow.id}>
      <DocH2 {...toc.flow} />
      <p>{intro[locale]}</p>
      <ExperimentFlowDiagram locale={locale} />
    </section>
  );
};
