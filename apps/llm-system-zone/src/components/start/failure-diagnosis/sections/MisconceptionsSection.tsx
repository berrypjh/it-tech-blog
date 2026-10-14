import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { MisconceptionTable } from '@/components/shared/MisconceptionTable';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: '진단에서 자주 나오는 오해를 교정합니다.',
    caption: '흔한 오해와 더 정확한 관점',
    head: ['흔한 오해', '더 정확한 관점'] as [string, string],
    pairs: [
      [
        '틀린 답이 나오면 모델이나 프롬프트 문제다',
        '입력, 검색, context 구성, 도구, 검증, UI, 지연, 장애도 같은 증상을 만듭니다. 증거를 보기 전에는 가설입니다.',
      ],
      [
        '프롬프트를 고치면 해결된다',
        '프롬프트 수정은 가능한 조치 중 하나이며 증거가 Prompt · Context 문제를 지지할 때 고릅니다. 낡은 색인이나 검증 공백은 프롬프트로 고쳐지지 않습니다.',
      ],
      [
        '오류 로그가 없으니 정상이다',
        'HTTP 성공, 스키마 통과, 그럴듯한 문장은 성공의 증거가 아닙니다. 신호 없이 틀린 응답은 검증, 평가, 사람 검토, 관측으로 찾습니다.',
      ],
      [
        '원인은 하나다',
        '모델 실패와 시스템 실패가 함께 있거나 여러 가설이 동시에 지지될 수 있습니다. 복합 원인이면 하나씩 고치고 다시 확인합니다.',
      ],
      [
        '여러 곳을 한꺼번에 고치면 빠르다',
        '한 번에 여럿을 바꾸면 무엇이 효과가 있었는지 알 수 없습니다. 가설 하나를 고치고 같은 실패 사례와 정상 사례를 다시 확인합니다.',
      ],
    ] as [string, string][],
  },
  en: {
    intro: 'Corrections of misconceptions that come up often in diagnosis.',
    caption: 'Common misconceptions and more accurate views',
    head: ['Common misconception', 'More accurate view'] as [string, string],
    pairs: [
      [
        'A wrong answer means a model or prompt problem',
        'Input, retrieval, context construction, tools, validation, the UI, latency, and outages produce the same symptom too. Before seeing evidence it is a hypothesis.',
      ],
      [
        'Editing the prompt fixes it',
        'A prompt edit is one possible action, chosen when evidence supports a prompt or context problem. A stale index or a validation gap is not fixed by the prompt.',
      ],
      [
        'There is no error in the log, so it is fine',
        'HTTP success, passing the schema, and a plausible sentence are not evidence of success. A response wrong without a signal is found by validation, evaluation, human review, and observation.',
      ],
      [
        'There is one cause',
        'A model failure and a system failure can coexist, or several hypotheses can be supported at once. For a compound cause, fix one at a time and recheck.',
      ],
      [
        'Fixing several places at once is faster',
        'Changing several things at once leaves you unable to tell what worked. Fix one hypothesis and recheck the same failing case and a normal case.',
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
