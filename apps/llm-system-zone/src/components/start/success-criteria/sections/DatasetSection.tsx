import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, ExternalLink } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const SKLEARN = 'https://scikit-learn.org/stable/modules/cross_validation.html';
const NIST = 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf';
const CHECKLIST = 'https://arxiv.org/abs/2005.04118';
const DATASHEETS = 'https://arxiv.org/abs/1803.09010';

const content = {
  ko: {
    intro: (
      <>
        사례는 두 가지 용도로 나눕니다. <strong>개발 · 조정용</strong>은 지시문, 검색, 기준을
        고치면서 반복해서 보는 집합이고, <strong>최종 확인용</strong>은 조정이 끝난 뒤에만 보는
        집합입니다. 조정에 쓴 사례로 최종 품질을 말하면 그 사례에 맞춰 고친 효과가 섞입니다.{' '}
        <ExternalLink href={SKLEARN}>scikit-learn 문서</ExternalLink>는 같은 데이터로 학습하고
        평가하는 것을 방법론적 실수로 설명하고, 조정용 validation set과 최종 평가용 test set을
        나누도록 안내합니다.
      </>
    ),
    small: (
      <>
        작은 사례 집합의 결과는 일반화 성능을 보여 주지 않습니다.{' '}
        <ExternalLink href={NIST}>NIST AI RMF</ExternalLink>는 정확도 측정을 기대하는 사용 조건을
        대표하는 현실적인 테스트 집합과 테스트 방법의 서술과 함께 두고, 데이터 구간별로 결과를 나눠
        볼 수 있다고 적습니다. 또 held-out 정확도가 모델 성능을 과대평가하는 경우가 많아 동작 단위의
        테스트를 더하자는 <ExternalLink href={CHECKLIST}>CheckList 제안</ExternalLink>도 있습니다.
      </>
    ),
    version: (
      <>
        사례와 기준에는 버전을 기록합니다. 기준을 바꾸면서 같은 사례의 이전 결과와 섞으면 변화가
        어디서 왔는지 알 수 없습니다. 데이터셋마다 동기, 구성, 수집 방법, 권장 용도를 적는 문서를
        두자는 <ExternalLink href={DATASHEETS}>Datasheets for Datasets 제안</ExternalLink>이 있고,
        같은 발상으로 사례와 기준의 버전, 분할, 측정 정의를 함께 적어 둘 수 있습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Cases are split by two uses. <strong>Development and tuning</strong> is the set you look at
        repeatedly while fixing instructions, retrieval, and criteria, and{' '}
        <strong>final check</strong> is the set you look at only after tuning is done. If you state
        final quality with cases used for tuning, the effect of fitting to those cases is mixed in.{' '}
        <ExternalLink href={SKLEARN}>The scikit-learn documentation</ExternalLink> describes
        learning and evaluating on the same data as a methodological mistake and advises separating
        a validation set for tuning from a test set for final evaluation.
      </>
    ),
    small: (
      <>
        The result on a small case set does not show generalization performance.{' '}
        <ExternalLink href={NIST}>NIST AI RMF</ExternalLink> pairs accuracy measurement with
        realistic test sets representative of expected use and a description of the test method, and
        notes that results can be disaggregated by data segment. There is also{' '}
        <ExternalLink href={CHECKLIST}>the CheckList proposal</ExternalLink> to add behavioral tests
        because held-out accuracy often overestimates model performance.
      </>
    ),
    version: (
      <>
        Record versions for cases and criteria. If you change the criteria and mix results with
        earlier results on the same cases, you cannot tell where the change came from. There is{' '}
        <ExternalLink href={DATASHEETS}>the Datasheets for Datasets proposal</ExternalLink> to give
        each dataset a document recording its motivation, composition, collection method, and
        recommended uses, and in the same spirit you can record the versions, splits, and
        measurement definitions of cases and criteria together.
      </>
    ),
  },
};

export const DatasetSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.dataset.id}>
      <DocH2 {...toc.dataset} />
      <p>{c.intro}</p>
      <p>{c.small}</p>
      <p>{c.version}</p>
    </section>
  );
};
