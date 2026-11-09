import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '일반 함수는 입력, 상태, 환경이 같으면 같은 결과를 내도록 작성하고 테스트합니다. 모델은 입력에 대한 다음 토큰의 확률 분포를 계산하고, 선택 규칙에 따라 토큰을 고릅니다.',
    caption: '결정적 함수와 확률 분포를 학습한 모델',
    head: ['관점', '일반 함수', '확률 분포를 학습한 모델'],
    rows: [
      [
        '같은 입력',
        '상태와 환경이 같으면 결과가 정해진다',
        '입력 뒤에 이어질 토큰의 분포가 계산되고, 선택 규칙이 결과를 정한다',
      ],
      ['정확성 기준', '명세에 대한 단언과 테스트', '허용 가능한 출력의 범위와 그 범위 안의 품질'],
      ['주된 실패 형태', '예외, 명세와 다른 반환값(버그)', '오류 신호 없이 반환된 그럴듯한 오답'],
      [
        '재현 조건',
        '코드 · 입력 · 상태 · 환경을 고정하면 재현된다',
        '모델 버전, 디코딩 설정, 실행 환경까지 같아야 기대할 수 있고, 제공자가 보장하지 않을 수도 있다',
      ],
    ],
    both: (
      <>
        <strong>일반 소프트웨어도 완전히 결정적이지는 않습니다.</strong> 현재 시간, 난수, 동시성에
        따른 실행 순서, 외부 서비스의 응답, 네트워크 상태가 결과를 바꿉니다. 이 요인을 입력으로
        고정할 때 함수는 결정적이 됩니다.
      </>
    ),
    model:
      '반대로 확률적 모델도 디코딩 조건을 고정하면 같은 출력을 낼 수 있습니다. 예를 들어 매번 가장 가능성이 높은 토큰을 고르는 선택 규칙이 그렇습니다. 다만 이 재현은 모델 버전, 디코딩 설정, 실행 환경(하드웨어와 소프트웨어 구성)이 모두 같을 때 기대할 수 있는 것이고, 아래에서 보듯 제공자가 보장하지 않을 수 있습니다.',
    design:
      '그래서 이 페이지의 설계는 두 부분으로 나뉩니다. 모델이 만든 텍스트는 같은 입력에서도 같을 수도 다를 수도 있다고 봅니다. 그 텍스트를 판정하는 검사 함수는 결정적으로 만듭니다. 검사 함수는 모델 출력과 신뢰된 입력만 받고, 같은 입력에는 언제나 같은 판정을 냅니다.',
  },
  en: {
    intro:
      'A regular function is written and tested to give the same result for the same input, state, and environment. A model computes a probability distribution over the next token for its input and picks tokens by a selection rule.',
    caption: 'Deterministic functions and models trained on probability distributions',
    head: ['Aspect', 'Regular function', 'Model trained on a probability distribution'],
    rows: [
      [
        'Same input',
        'The result is fixed when state and environment are the same',
        'A distribution over the tokens that can follow is computed, and a selection rule decides the result',
      ],
      [
        'Correctness standard',
        'Assertions and tests against a specification',
        'A range of acceptable outputs and quality within that range',
      ],
      [
        'Main failure shape',
        'An exception, or a return value that differs from the spec (a bug)',
        'A plausible wrong answer returned with no error signal',
      ],
      [
        'Reproduction',
        'Reproduced once code, input, state, and environment are fixed',
        'Expected only when model version, decoding settings, and runtime environment also match, and the provider may not guarantee it',
      ],
    ],
    both: (
      <>
        <strong>Regular software is not perfectly deterministic either.</strong> The current time,
        random numbers, execution order under concurrency, responses from external services, and the
        network state all change results. A function becomes deterministic when these factors are
        fixed as inputs.
      </>
    ),
    model:
      'Conversely, a probabilistic model can produce the same output once decoding conditions are fixed. A selection rule that always picks the most likely token is one example. That reproduction, though, can be expected only when the model version, decoding settings, and runtime environment (hardware and software setup) all match, and as shown below, the provider may not guarantee it.',
    design:
      'So the design in this page has two parts. Text the model makes may be the same or different for the same input. The check function that judges that text is made deterministic: it takes only the model output and trusted inputs, and always gives the same verdict for the same input.',
  },
};

export const DeterministicSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([first, ...rest]) => [
    <span key={first} className="font-semiBold text-text-default">
      {first}
    </span>,
    ...rest,
  ]);

  return (
    <section aria-labelledby={toc.deterministic.id}>
      <DocH2 {...toc.deterministic} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={rows} />
      <p>
        {c.both} {c.model}
      </p>
      <p>{c.design}</p>
    </section>
  );
};
