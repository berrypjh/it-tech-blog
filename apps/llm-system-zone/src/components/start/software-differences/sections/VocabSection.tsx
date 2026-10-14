import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { TermPlacementDiagram } from '../diagrams/TermPlacementDiagram';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '01-01에서 Evaluation과 Monitoring은 요청 경로 밖과 곁에 두었습니다. 여기서는 요청 안의 Validation을 더해 세 용어를 아래 용례로 씁니다. 자료마다 쓰임이 다르므로, 같은 단어가 다른 글에서 다른 범위를 가리킬 수 있습니다.',
    noteTitle: '배타적인 분류가 아닙니다',
    note: 'Validation 규칙을 평가 데이터 전체에 적용해 통과율을 재면 그것은 Evaluation의 일부입니다. 평가에서 자주 잡히는 오류를 검증 코드로 옮기기도 합니다. 이 구분은 어디서, 언제, 무엇에 대해 확인하는지를 나누기 위한 용례입니다.',
  },
  en: {
    intro:
      'In 01-01 we placed Evaluation and Monitoring outside and alongside the request path. Here we add Validation, inside the request path, and use the three terms with the meanings below. Usage differs between sources, so the same word may cover a different range in another text.',
    noteTitle: 'These are not exclusive categories',
    note: 'Applying validation rules across a whole evaluation dataset to measure a pass rate is part of Evaluation. Errors that evaluation often catches are sometimes moved into validation code. The split is a usage for separating where, when, and about what you check.',
  },
};

export const VocabSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.vocab.id}>
      <DocH2 {...toc.vocab} />
      <p>{c.intro}</p>
      <TermPlacementDiagram locale={locale} />
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
