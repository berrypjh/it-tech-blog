import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3 } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const content = {
  ko: {
    promptHeading: 'Prompt Experiment: 바꿀 요인을 정한다',
    prompt:
      '한 번에 하나의 요인만 바꿉니다. 지시문 문구, 예시, 검색 문서 수, 모델 중 무엇을 바꾸는지 정하고, 나머지는 고정해 어느 변화가 결과를 만들었는지 알 수 있게 합니다. 모델을 비교할 때는 같은 데이터, 같은 기준, 같은 설정 조건을 씁니다.',
    errorHeading: '결과 시각화와 Error Analysis',
    error:
      '지표 하나만 보지 않고 실패 사례를 직접 봅니다. 표나 그래프로 실패의 모양을 보고, 어떤 종류의 사례에서 틀리는지 묶습니다. 01.6의 가설과 증거의 흐름이 여기서도 쓰입니다.',
    labels: ['무엇을 알 수 있나'],
    views: [
      ['혼동 표 (정답 대 예측)', '어떤 카테고리끼리 자주 섞이는가'],
      ['score 분포 (맞은 것 대 틀린 것)', 'score가 맞고 틀림을 구분해 주는가'],
      ['실패 유형 목록', '스키마 위반, 판단 유보, 오답을 구분하고 각각 다른 처리가 필요한지'],
    ],
    noteTitle: '평균 지표가 사례를 가립니다',
    note: '평균이 좋아 보여도 실패 사례의 공통점을 보지 않으면 서비스에서 같은 실패가 반복됩니다. 실패 사례는 확인 사례로 계약에 옮깁니다.',
  },
  en: {
    promptHeading: 'Prompt Experiment: decide the factor to change',
    prompt:
      'Change only one factor at a time. Decide which of the instruction wording, examples, number of retrieved documents, or model you change, and fix the rest so you can tell which change produced the result. When comparing models, use the same data, the same criteria, and the same settings.',
    errorHeading: 'Visualizing results and Error Analysis',
    error:
      'Do not look at a single metric; look at the failure cases directly. See the shape of failures in tables or charts and group which kinds of cases go wrong. The hypothesis-and-evidence flow from 01.6 is used here too.',
    labels: ['What it shows'],
    views: [
      ['Confusion table (truth vs prediction)', 'Which categories are often mixed up'],
      ['Score distribution (right vs wrong)', 'Whether the score separates right from wrong'],
      [
        'List of failure kinds',
        'Telling schema violations, held cases, and wrong answers apart, and whether each needs different handling',
      ],
    ],
    noteTitle: 'An average metric hides cases',
    note: 'Even if the average looks good, without looking at what failures have in common the same failure repeats in the service. Carry failure cases to the contract as confirmation cases.',
  },
};

export const ExperimentSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.views.map(([name, ...values]) => ({
    name,
    fields: values.map((value, i) => ({ label: c.labels[i], value })),
  }));

  return (
    <section aria-labelledby={toc.experiment.id}>
      <DocH2 {...toc.experiment} />
      <DocH3>{c.promptHeading}</DocH3>
      <p>{c.prompt}</p>
      <DocH3>{c.errorHeading}</DocH3>
      <p>{c.error}</p>
      <FieldCards items={items} />
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
