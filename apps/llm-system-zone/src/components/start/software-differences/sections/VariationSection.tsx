import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const SEED =
  'https://developers.openai.com/cookbook/examples/reproducible_outputs_with_the_seed_parameter';

const content = {
  ko: {
    intro:
      '같은 입력에 다른 출력이 나왔을 때 "모델이 확률적이라서"로 끝내면 원인을 놓칩니다. 변동은 크게 두 갈래입니다. 같은 모델과 같은 입력에서 선택 과정이 만드는 변동과, 입력이나 모델 쪽이 실제로 바뀐 변동입니다.',
    caption: '출력 변동의 원인',
    head: ['갈래', '예', '앱이 할 수 있는 것'],
    rows: [
      [
        '샘플링 (디코딩 조건)',
        'temperature, top-p 같은 선택 설정',
        '설정을 고정하고 요청마다 기록한다. 낮춘다고 변동이 사라진다고 가정하지 않는다',
      ],
      [
        '모델 변경',
        '제공자가 모델 버전을 갱신하거나 별칭이 새 버전을 가리킨다',
        '버전을 고정하고 변경 때 평가를 다시 실행한다',
      ],
      [
        '컨텍스트 변경',
        '지시문 수정, 검색된 근거의 내용과 순서, 이전 대화',
        '모델에 보낸 입력을 기록해 비교한다',
      ],
      [
        '환경 변경',
        '제공자 쪽 백엔드 구성의 변화',
        '직접 통제하기 어렵다. 출력을 검증하고 운영 중 관찰한다',
      ],
    ],
    seed: (
      <>
        seed 같은 재현성 옵션이 있는 API도 있지만 보장의 범위는 제공자마다 다릅니다. 한 제공자의{' '}
        <ExternalLink href={SEED}>seed 재현성 문서</ExternalLink>는 이를 &quot;best effort&quot;라고
        설명하고, 같은 seed와 파라미터에서도 결과가 다를 수 있다고 적습니다.
      </>
    ),
    conclusion:
      '그래서 설계 원칙은 "같은 출력을 기대하지 않는다"가 아니라 "같은 출력이든 다른 출력이든 약속한 조건을 만족하는지 확인한다"입니다.',
  },
  en: {
    intro:
      'When the same input gets a different output, stopping at "the model is probabilistic" misses the cause. Variation comes from two branches: variation created by the selection process on the same model and input, and variation from the input or model side actually changing.',
    caption: 'Causes of output variation',
    head: ['Branch', 'Examples', 'What the app can do'],
    rows: [
      [
        'Sampling (decoding conditions)',
        'Selection settings such as temperature and top-p',
        'Fix the settings and record them per request. Do not assume lowering them removes variation',
      ],
      [
        'Model change',
        'The provider updates a model version, or an alias points to a new version',
        'Pin the version and rerun evaluation when it changes',
      ],
      [
        'Context change',
        'Instruction edits, the content and order of retrieved evidence, prior turns',
        'Record the input sent to the model and compare',
      ],
      [
        'Environment change',
        'Changes in the provider-side backend configuration',
        'Hard to control directly. Validate output and observe in operation',
      ],
    ],
    seed: (
      <>
        Some APIs offer reproducibility options such as a seed, but the scope of the guarantee
        differs by provider. One provider&apos;s{' '}
        <ExternalLink href={SEED}>guide to reproducible outputs</ExternalLink> describes seed
        reproducibility as &quot;best effort&quot; and says results can differ even with the same
        seed and parameters.
      </>
    ),
    conclusion:
      'So the design principle is not "expect the same output", but "whether the output is the same or different, check that it satisfies the promised conditions".',
  },
};

export const VariationSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([first, ...rest]) => [
    <span key={first} className="font-semiBold text-text-default">
      {first}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.variation.id}>
      <DocH2 {...toc.variation} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <p>{c.seed}</p>
      <p>{c.conclusion}</p>
    </section>
  );
};
