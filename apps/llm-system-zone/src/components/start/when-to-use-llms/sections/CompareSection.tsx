import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '네 가지 방식을 같은 관점으로 비교합니다. 서술은 일반적인 경향이며 구현과 제품에 따라 다르고, 성능 수치는 넣지 않았습니다.',
    caption: '규칙 · 검색 · ML · LLM 비교 (일반적 경향)',
    head: ['방식', '유지보수', '품질의 성격', '비용과 지연', '데이터 요구'],
    rows: [
      [
        '규칙 · 코드',
        '규칙이 늘면 복잡해지고 변경은 코드 수정',
        '결정적이고 테스트로 보장',
        '대체로 작음',
        '규칙을 쓸 도메인 지식',
      ],
      [
        '기존 검색',
        '색인과 질의 구성을 관리',
        '관련 문서를 찾는 정확도와 재현율로 평가',
        '색인 규모에 따라 다르며 대체로 낮음',
        '색인할 문서 모음',
      ],
      [
        '기존 ML',
        '라벨 변경과 데이터 변화에 재학습',
        '라벨 기준의 통계적 품질',
        '학습 비용은 있으나 추론은 예측하기 쉬움',
        '충분한 라벨 데이터',
      ],
      [
        'LLM',
        '지시문, 모델 버전, 검증 규칙의 관리',
        '유연하지만 오답 가능성이 있고 출력이 변할 수 있음',
        '호출당 비용과 지연이 더해짐',
        '라벨 없이 시작할 수 있으나 평가 데이터는 필요',
      ],
    ],
  },
  en: {
    intro:
      'Four approaches compared from the same viewpoints. The entries are general tendencies that vary by implementation and product, and the table contains no performance figures.',
    caption: 'Rules, search, ML, and LLM compared (general tendencies)',
    head: ['Approach', 'Maintenance', 'Nature of quality', 'Cost and latency', 'Data needs'],
    rows: [
      [
        'Rules and code',
        'More rules means more complexity; changes are code edits',
        'Deterministic and guaranteed by tests',
        'Generally small',
        'Domain knowledge to write the rules',
      ],
      [
        'Existing search',
        'Manage the index and query configuration',
        'Judged by precision and recall of finding relevant documents',
        'Varies with index size; generally low',
        'A document collection to index',
      ],
      [
        'Existing ML',
        'Retraining on label changes and data drift',
        'Statistical quality against the labels',
        'Training cost exists, but inference is easy to predict',
        'Enough labeled data',
      ],
      [
        'LLM',
        'Managing instructions, model versions, and validation rules',
        'Flexible, but can be wrong and output can vary',
        'Per-call cost and latency are added',
        'Can start without labels, but needs evaluation data',
      ],
    ],
  },
};

export const CompareSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([approach, ...rest]) => [
    <span key={approach} className="whitespace-nowrap font-semiBold text-text-default">
      {approach}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.compare.id}>
      <DocH2 {...toc.compare} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
    </section>
  );
};
