import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { MisconceptionTable } from '@/components/shared/MisconceptionTable';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: '성공 기준을 정할 때 자주 나오는 오해를 교정합니다.',
    caption: '흔한 오해와 더 정확한 관점',
    head: ['흔한 오해', '더 정확한 관점'] as [string, string],
    pairs: [
      [
        '정답 문자열과 같아야 통과다',
        '표현만 다른 올바른 답이 실패합니다. 허용 출력은 문자열이 아니라 조건으로 씁니다.',
      ],
      [
        '항목별 평균 점수가 높으면 충분하다',
        '중요한 필드의 오류가 평균에 가려집니다. 필수 조건은 평균과 따로 두고 하나라도 틀리면 실패로 계산합니다.',
      ],
      [
        '올바른 JSON이면 Task Success다',
        '구조 유효성, Correctness, Completeness, Task Success는 서로 다른 지표입니다. 구조를 통과한 오답이 있습니다.',
      ],
      [
        '작은 예제의 통과율이 곧 서비스 성능이다',
        '조정에 쓴 사례와 최종 확인용 사례를 나누고, 작은 예제는 일반화 성능을 보여 주지 않는다고 기록합니다.',
      ],
      [
        '품질 지표가 좋아지면 제품 목표도 좋아진다',
        '그 연결은 가설이며 제품 쪽 지표를 따로 정해 관측으로 확인합니다.',
      ],
    ] as [string, string][],
  },
  en: {
    intro: 'Corrections of misconceptions that come up often when defining success criteria.',
    caption: 'Common misconceptions and more accurate views',
    head: ['Common misconception', 'More accurate view'] as [string, string],
    pairs: [
      [
        'It passes only if it equals the answer string',
        'A right answer that only words things differently would fail. Write an allowed output as conditions, not a string.',
      ],
      [
        'A high per-item average score is enough',
        'An error in an important field is hidden by the average. Keep mandatory conditions separate from the average and count a single miss as a failure.',
      ],
      [
        'Valid JSON means Task Success',
        'Structure validity, Correctness, Completeness, and Task Success are different metrics. There are wrong answers that pass the structure.',
      ],
      [
        'A small example’s pass rate is the service’s performance',
        'Separate cases used for tuning from final-check cases, and record that a small example does not show generalization performance.',
      ],
      [
        'If a quality metric improves, the product goal improves too',
        'That link is a hypothesis; set product-side metrics separately and confirm by observation.',
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
