import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { MisconceptionTable } from '@/components/shared/MisconceptionTable';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: '실험과 서비스를 잇는 일에서 자주 나오는 오해를 교정합니다.',
    caption: '흔한 오해와 더 정확한 관점',
    head: ['흔한 오해', '더 정확한 관점'] as [string, string],
    pairs: [
      [
        'Notebook은 나쁜 코드이고 Python은 실험 전용이다',
        'Notebook은 탐색용 도구이고 서비스는 다른 요구를 가진 환경입니다. Python도 서비스에 쓰이고 TypeScript나 Go로도 실험할 수 있습니다.',
      ],
      [
        '모델이 낸 confidence나 점수는 확률이다',
        '보정되었다고 확인하기 전에는 확률로 취급하지 않습니다. threshold는 어떤 score에 적용하는지 정의하고 검증 데이터로 고릅니다.',
      ],
      [
        'seed를 고정하면 원격 모델도 완전히 재현된다',
        'seed만으로 보장되지 않습니다. 모델 식별자, 설정, 실행 조건, 출력 원문을 함께 기록합니다.',
      ],
      [
        '실험에서 찾은 설정값만 옮기면 된다',
        '선택 근거, 입출력 계약, 실패 정책, 재현 사례를 함께 옮겨야 서비스가 변경 여부를 판단할 수 있습니다.',
      ],
      [
        '자동 처리 후보는 실행해도 된다',
        '자동 처리 후보는 외부 실행 권한이 아닙니다. 실행에는 권한 확인과 필요한 승인이 따로 필요합니다.',
      ],
    ] as [string, string][],
  },
  en: {
    intro:
      'Corrections of misconceptions that come up often in connecting experiments and services.',
    caption: 'Common misconceptions and more accurate views',
    head: ['Common misconception', 'More accurate view'] as [string, string],
    pairs: [
      [
        'A notebook is bad code and Python is only for experiments',
        'A notebook is an exploration tool and a service is an environment with other requirements. Python is also used in services, and experiments can be done in TypeScript or Go.',
      ],
      [
        'A confidence or score the model gives is a probability',
        'Do not treat it as a probability before confirming it is calibrated. Define which score a threshold applies to and choose it with validation data.',
      ],
      [
        'Fixing a seed fully reproduces a remote model',
        'A seed alone does not guarantee it. Record the model identifier, settings, run conditions, and raw outputs together.',
      ],
      [
        'Carrying over only the settings found in the experiment is enough',
        'Carry the rationale, input and output contract, failure policy, and reproduction cases together so the service can judge whether to change.',
      ],
      [
        'An auto-processing candidate may be executed',
        'An auto-processing candidate is not permission to execute externally. Execution needs a separate authorization check and any needed approval.',
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
