import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { MisconceptionTable } from '@/components/shared/MisconceptionTable';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: '기술 선택에서 자주 나오는 오해를 교정합니다.',
    caption: '흔한 오해와 더 정확한 관점',
    head: ['흔한 오해', '더 정확한 관점'] as [string, string],
    pairs: [
      [
        'LLM을 쓸지 말지로 정하면 된다',
        '기능은 작업 단위로 나뉘고 작업마다 코드, 검색, ML, LLM, 그리고 그 조합 가운데 책임이 다릅니다.',
      ],
      [
        'LLM은 계산을 못하니 계산은 항상 코드다',
        '능력을 단정하지 않고 요구되는 보장과 비용을 비교합니다. 규칙으로 쓸 수 있는 계산은 코드가 결정적이고 테스트하기 쉽습니다.',
      ],
      [
        '문서를 다루면 RAG가 필요하다',
        '정확한 문서나 상품을 찾는 일이면 기존 검색으로 충분할 수 있습니다. 검색과 검색 결과를 이용한 답변 생성은 분리해서 판단합니다.',
      ],
      [
        'LLM이 가장 새로우니 기존 ML은 비교에서 뺀다',
        '라벨 데이터가 충분하고 분류 목적이 고정되어 있으면 기존 ML이 비용과 지연을 예측하기 쉽습니다. 같은 평가 데이터로 비교합니다.',
      ],
      [
        '모델이 승인했다고 답하면 실행해도 된다',
        '피해가 큰 상태 변경은 검증, 권한 확인, 사람의 명시적 승인을 거친 뒤 시스템이 실행합니다. 모델 응답은 승인이 아닙니다.',
      ],
    ] as [string, string][],
  },
  en: {
    intro: 'Corrections of misconceptions that come up often in choosing technology.',
    caption: 'Common misconceptions and more accurate views',
    head: ['Common misconception', 'More accurate view'] as [string, string],
    pairs: [
      [
        'It comes down to using an LLM or not',
        'A feature splits into task units, and each task has a different owner among code, search, ML, an LLM, or a combination of them.',
      ],
      [
        'LLMs cannot calculate, so calculation is always code',
        'Do not assert capability; compare the guarantee required and the cost. For a calculation expressible as rules, code is deterministic and easy to test.',
      ],
      [
        'Handling documents needs RAG',
        'If the need is finding the exact document or product, existing search may be enough. Judge search and answer generation using search results separately.',
      ],
      [
        'An LLM is newest, so drop existing ML from the comparison',
        'With enough labeled data and a fixed classification purpose, existing ML makes cost and latency easier to predict. Compare on the same evaluation data.',
      ],
      [
        'If the model says it is approved, it is fine to execute',
        'A state change with large damage is executed by the system only after validation, an authorization check, and explicit human approval. A model response is not approval.',
      ],
    ] as [string, string][],
  },
};

export const MisconceptionsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.misconceptions.id}>
      <DocH2 {...toc.misconceptions} />
      <p>{c.intro}</p>
      <MisconceptionTable caption={c.caption} head={c.head} pairs={c.pairs} />
    </section>
  );
};
