import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '새 구성이 좋아졌는지는 baseline과 같은 조건에서 비교해야 알 수 있습니다. 01-04의 순서를 이어, 가장 단순한 방식을 baseline으로 두고 후보와 나란히 같은 사례를 통과시킵니다.',
    labels: ['무엇인가', '맞출 조건'],
    baselines: [
      [
        '일반 코드 · 규칙',
        '키워드와 조건식으로 분류하고 템플릿으로 답함',
        '같은 사례 집합, 같은 판정 기준, 같은 예산 정의',
      ],
      [
        '기존 검색',
        '관련 문서를 찾아 보여 줌 (생성 없음)',
        '같은 사례 집합, 필수 항목은 문서 인용으로 판정',
      ],
      ['사람의 직접 처리', '사람이 직접 분류하고 작성', '같은 사례와 같은 시간 측정 시작과 끝'],
      [
        '기존 프롬프트',
        '이전 버전의 지시문과 구성',
        '같은 모델과 설정, 같은 사례, 같은 재시도 정책',
      ],
    ],
    after:
      'baseline과 후보는 사례 집합과 그 버전, 판정 기준과 그 버전, 지연과 비용의 측정 정의가 모두 같아야 하고, 결과는 필수 조건 충족 여부와 지표별 분모를 함께 비교합니다. 조건이 하나라도 다르면 차이가 구성에서 왔는지 조건에서 왔는지 알 수 없습니다.',
  },
  en: {
    intro:
      'Whether a new setup improved can only be known by comparing under the same conditions as the baseline. Continuing the order of 01-04, put the simplest approach as the baseline and run the same cases through it and the candidate side by side.',
    labels: ['What it is', 'Conditions to match'],
    baselines: [
      [
        'Plain code or rules',
        'Classify with keywords and conditions and answer with a template',
        'The same case set, the same criteria, and the same budget definitions',
      ],
      [
        'Existing search',
        'Finds and shows relevant documents (no generation)',
        'The same case set; mandatory items judged by document citation',
      ],
      [
        'Handled by a person',
        'A person classifies and writes directly',
        'The same cases and the same start and end of time measurement',
      ],
      [
        'Previous prompt',
        'The earlier version of the instructions and setup',
        'The same model and settings, the same cases, and the same retry policy',
      ],
    ],
    after:
      'The baseline and the candidate must share the case set and its version, the criteria and their version, and the measurement definitions of latency and cost, and results are compared with mandatory-condition outcomes and each metric’s denominator. If any condition differs, you cannot tell whether the difference came from the setup or the conditions.',
  },
};

export const BaselineSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.baselines.map(([name, ...values]) => ({
    name,
    fields: values.map((value, i) => ({ label: c.labels[i], value })),
  }));

  return (
    <section aria-labelledby={toc.baseline.id}>
      <DocH2 {...toc.baseline} />
      <p>{c.intro}</p>
      <FieldCards items={items} />
      <p>{c.after}</p>
    </section>
  );
};
