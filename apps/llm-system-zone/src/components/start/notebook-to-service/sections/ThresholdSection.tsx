import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, ExternalLink } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const CALIBRATION = 'https://scikit-learn.org/stable/modules/calibration.html';
const THRESHOLD = 'https://scikit-learn.org/stable/modules/classification_threshold.html';

const content = {
  ko: {
    which:
      'threshold는 "어떤 값에 어떤 연산을 적용하는가"부터 정의합니다. 계약에서는 출력의 score 필드와 그 범위를 정하고 비교 연산(예: 이상)을 적습니다. 값의 의미가 정해지지 않은 채 숫자 하나만 정하면 서비스 코드가 다른 값에 적용할 수도 있습니다.',
    confidence: (
      <>
        모델이 출력에 적은 confidence나 임의의 점수를 보정된 확률로 취급하지 않습니다.{' '}
        <ExternalLink href={CALIBRATION}>scikit-learn의 확률 보정 문서</ExternalLink>는 보정된
        분류기에서는 0.8에 가까운 값을 준 표본의 약 80%가 실제로 양성이어야 하는데, 그런 성질이 없는
        점수가 많다고 설명합니다.
      </>
    ),
    select: (
      <>
        임계값은 검증 데이터로 고릅니다.{' '}
        <ExternalLink href={THRESHOLD}>scikit-learn의 결정 임계값 문서</ExternalLink>는 분류기의
        기본 컷오프가 대부분의 용도에 이상적이지 않고, 분류기를 학습한 데이터와 같은 데이터로
        임계값을 조정하지 말라고 안내합니다.
      </>
    ),
    tradeoff:
      '입문 수준의 핵심은 교환 관계입니다. 임계값을 올리면 자동 처리 후보 중 오류가 줄지만 보류가 늘어 사람의 검토 부담이 커집니다. 내리면 반대입니다. 어느 지점이 맞는지는 오류의 비용과 검토 가능성(01-04, 01-06)이 정합니다.',
  },
  en: {
    which:
      'Define a threshold starting from "which operation applies to which value". In the contract, fix the output’s score field and its range and write the comparison operator (for example, at or above). If only a number is set while the meaning of the value is not, the service code may apply it to a different value.',
    confidence: (
      <>
        Do not treat a confidence the model wrote in its output, or any arbitrary score, as a
        calibrated probability.{' '}
        <ExternalLink href={CALIBRATION}>
          The scikit-learn probability calibration page
        </ExternalLink>{' '}
        explains that for a calibrated classifier about 80% of samples given a value near 0.8 should
        actually be positive, and that many scores lack that property.
      </>
    ),
    select: (
      <>
        Choose the threshold with validation data.{' '}
        <ExternalLink href={THRESHOLD}>The scikit-learn decision threshold page</ExternalLink> says
        a classifier’s default cutoff is not ideal for most uses and advises against tuning the
        threshold on the same data the classifier was trained on.
      </>
    ),
    tradeoff:
      'At an introductory level the core is the trade-off. Raising the threshold cuts errors among auto-processing candidates but increases holds and the human review burden. Lowering it does the opposite. Which point is right is set by the cost of errors and the possibility of review (01-04, 01-06).',
  },
};

export const ThresholdSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.threshold.id}>
      <DocH2 {...toc.threshold} />
      <p>{c.which}</p>
      <p>{c.confidence}</p>
      <p>{c.select}</p>
      <p>{c.tradeoff}</p>
    </section>
  );
};
