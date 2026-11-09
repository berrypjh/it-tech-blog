import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { formatRatio } from '@/components/shared/ratio';

import { adoptAt, scoredCases, thresholds } from '../threshold/threshold';
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
      '입문 수준의 핵심은 교환 관계입니다. 임계값을 올리면 보류가 늘어 사람의 검토 부담이 커집니다. 채택 건의 오류율은 줄어드는 경우가 많지만, 아래 예처럼 그렇지 않을 수도 있습니다. 어느 지점이 맞는지는 오류의 비용과 검토 가능성(01.4, 01.5)이 정합니다.',
    tableIntro:
      '가상 검증 사례 10건에 출력의 score 필드 값이 고정되어 있습니다. 이 점수가 보정된 확률인지는 확인하지 않았으므로 순서를 매기는 값으로만 씁니다. 임계값 이상인 사례를 채택(자동 처리 후보)하고, 나머지는 보류합니다. 채택 집합과 "채택 건 가운데 틀린 비율"(조건부 오류율)은 다른 값입니다.',
    casesCaption: '가상 검증 사례 10건의 점수와 정오',
    casesHead: ['사례', '점수', '정답 여부'],
    correct: '맞음',
    wrong: '틀림',
    caption: '임계값별 채택 집합과 조건부 오류율',
    head: ['임계값 (이상)', '채택 집합', '보류', '채택 중 오류', '조건부 오류율'],
    notApplicable: '해당 없음',
    tableAfter:
      '임계값을 0.85에서 0.90으로 올리면 채택은 5건에서 3건으로 줄지만, 조건부 오류율은 1/5(20%)에서 1/3(33.3%)으로 오릅니다. 점수가 가장 높은 A가 틀렸기 때문입니다. 임계값 상승은 오류율 감소를 보장하지 않으므로, 후보 임계값마다 검증 사례로 직접 셉니다.',
    calibTitle: '모델이 스스로 적은 confidence는 확률이 아닙니다',
    calib:
      '"confidence: 0.9"를 출력하게 해도, 그 값을 받은 사례의 90%가 맞는다는 보장은 없습니다. 보정 여부를 검증 사례로 확인하기 전에는 순서를 매기는 점수로만 쓰고, 계약에도 확률이 아니라고 적습니다.',
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
      'At an introductory level the core is the trade-off. Raising the threshold increases holds and the human review burden. The error rate among adopted cases often falls, but as the example below shows, it may not. Which point is right is set by the cost of errors and the possibility of review (01.4, 01.5).',
    tableIntro:
      'Ten fictional validation cases have fixed values in the output’s score field. Whether this score is a calibrated probability has not been checked, so it is used only for ordering. Cases at or above the threshold are adopted (candidates for automatic handling), and the rest are held. The adopted set and "the share of adopted cases that are wrong" (the conditional error rate) are different values.',
    casesCaption: 'Scores and correctness of 10 fictional validation cases',
    casesHead: ['Case', 'Score', 'Correct?'],
    correct: 'Correct',
    wrong: 'Wrong',
    caption: 'Adopted set and conditional error rate per threshold',
    head: [
      'Threshold (at or above)',
      'Adopted set',
      'Held',
      'Errors among adopted',
      'Conditional error rate',
    ],
    notApplicable: 'Not applicable',
    tableAfter:
      'Raising the threshold from 0.85 to 0.90 cuts adoptions from 5 to 3, yet the conditional error rate rises from 1/5 (20%) to 1/3 (33.3%), because A, the highest-scoring case, is wrong. A higher threshold does not guarantee a lower error rate, so count each candidate threshold directly on validation cases.',
    calibTitle: 'A confidence the model writes about itself is not a probability',
    calib:
      'Even if you have the model output "confidence: 0.9", there is no guarantee that 90% of cases given that value are right. Until calibration is checked on validation cases, use it only as a score for ordering, and state in the contract that it is not a probability.',
  },
};

export const ThresholdSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const caseRows = scoredCases.map((item) => [
    item.id,
    <span key="score" className="font-mono">
      {item.score.toFixed(2)}
    </span>,
    item.correct ? c.correct : c.wrong,
  ]);
  const rows = thresholds.map((threshold) => {
    const a = adoptAt(scoredCases, threshold);
    return [
      <span key="t" className="font-mono">
        {threshold.toFixed(2)}
      </span>,
      a.adopted.join(', '),
      a.held,
      a.errors,
      <span key="rate" className="whitespace-nowrap font-mono">
        {formatRatio(a.errorRate, c.notApplicable)}
      </span>,
    ];
  });

  return (
    <section aria-labelledby={toc.threshold.id}>
      <DocH2 {...toc.threshold} />
      <p>{c.which}</p>
      <p>{c.confidence}</p>
      <p>{c.select}</p>
      <p>{c.tradeoff}</p>
      <p>{c.tableIntro}</p>
      <DocTable caption={c.casesCaption} head={c.casesHead} rows={caseRows} />
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <p>{c.tableAfter}</p>
      <Callout variant="pitfall" title={c.calibTitle}>
        <p>{c.calib}</p>
      </Callout>
    </section>
  );
};
