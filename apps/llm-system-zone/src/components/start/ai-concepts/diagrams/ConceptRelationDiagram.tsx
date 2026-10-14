import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem } from '@berrypjh/react-ui';

const content = {
  ko: {
    nestedHeading: '접근의 계열 (통상 포함 관계)',
    ai: 'AI: 넓은 연구 · 기술 분야',
    rule: '규칙 기반 추론 (학습 없음, AI에는 속함)',
    ml: '기계학습(ML): 데이터에서 학습하는 접근',
    nonDl: '신경망이 아닌 ML (예: 로지스틱 회귀)',
    dl: '딥러닝(DL): 다층 신경망 중심의 ML',
    axesHeading: '포함 관계가 아닌 다른 축',
    axes: [
      { axis: '목적 · 능력', term: 'Generative AI', detail: '새 콘텐츠를 생성하는 것' },
      {
        axis: '학습 · 재사용',
        term: 'Foundation Model',
        detail: '넓은 데이터로 학습해 여러 작업에 적응',
      },
      {
        axis: '다루는 데이터',
        term: 'LM · LLM · Multimodal',
        detail: '언어 / 둘 이상의 모달리티',
      },
    ],
  },
  en: {
    nestedHeading: 'Lineage of approach (usual containment)',
    ai: 'AI: a broad research and technology field',
    rule: 'Rule-based reasoning (no learning, still AI)',
    ml: 'Machine learning (ML): approaches that learn from data',
    nonDl: 'ML that is not a neural network (e.g. logistic regression)',
    dl: 'Deep learning (DL): ML centered on multi-layer neural networks',
    axesHeading: 'Other axes that are not containment',
    axes: [
      {
        axis: 'Purpose or capability',
        term: 'Generative AI',
        detail: 'Generating new content',
      },
      {
        axis: 'Learning and reuse',
        term: 'Foundation model',
        detail: 'Trained on broad data, adapted to many tasks',
      },
      {
        axis: 'Data handled',
        term: 'LM · LLM · Multimodal',
        detail: 'Language / two or more modalities',
      },
    ],
  },
};

/** 포함 관계(AI/ML/DL)와 서로 포함하지 않는 축들을 나눠 보여 주는 정적 관계도. 서버 컴포넌트다. */
export const ConceptRelationDiagram = ({ locale }: { locale: Locale }) => {
  const c = content[locale];

  return (
    <figure className="my-lg leading-normal">
      <p className="mb-sm text-xxsm font-semiBold text-text-light">{c.nestedHeading}</p>
      <div className="rounded-md border border-stroke-default p-md">
        <p className="text-xsm font-semiBold text-text-default">{c.ai}</p>
        <div className="mt-sm flex flex-col gap-sm pl-md sm:pl-lg">
          <p className="rounded-sm border border-dashed border-stroke-default p-sm text-xxsm text-text-light">
            {c.rule}
          </p>
          <div className="rounded-md border border-stroke-primary p-md">
            <p className="text-xsm font-semiBold text-text-default">{c.ml}</p>
            <div className="mt-sm flex flex-col gap-sm pl-md sm:pl-lg">
              <p className="rounded-sm border border-dashed border-stroke-default p-sm text-xxsm text-text-light">
                {c.nonDl}
              </p>
              <p className="rounded-md border border-stroke-success p-md text-xsm font-semiBold text-text-default">
                {c.dl}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-sm mt-lg text-xxsm font-semiBold text-text-light">{c.axesHeading}</p>
      <List className="grid grid-cols-1 gap-sm sm:grid-cols-3">
        {c.axes.map((axis) => (
          <ListItem
            key={axis.axis}
            className="flex flex-col gap-xs rounded-md border border-dashed border-stroke-default p-md"
          >
            <span className="text-xxsm font-semiBold text-text-primary">{axis.axis}</span>
            <span className="text-xsm font-semiBold text-text-default">{axis.term}</span>
            <span className="break-keep text-xxsm text-text-light">{axis.detail}</span>
          </ListItem>
        ))}
      </List>
    </figure>
  );
};
