import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { MisconceptionTable } from '@/components/shared/MisconceptionTable';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: '이 장의 내용을 오해와 교정의 짝으로 줄입니다.',
    caption: '흔한 오해와 더 정확한 관점',
    head: ['흔한 오해', '더 정확한 관점'] as [string, string],
    pairs: [
      [
        'LLM은 매번 다른 답을 낸다',
        '같은 입력, 같은 모델, 고정된 디코딩 조건이면 같은 출력이 나올 수 있습니다. 변동은 샘플링, 모델 · 컨텍스트 · 환경 변경에서 옵니다.',
      ],
      [
        'temperature를 0으로 두면 완전히 재현된다',
        '보편적인 보장이 아닙니다. 한 제공자의 문서는 seed 재현성을 best effort라고 설명합니다. 출력이 같든 다르든 약속한 조건을 만족하는지 확인합니다.',
      ],
      [
        '스키마를 통과하면 맞는 답이다',
        '스키마는 구조를 확인합니다. 내용이 틀린 응답도 구조는 통과할 수 있고, 의미는 평가 데이터와 기준으로 따로 확인합니다.',
      ],
      [
        'HTTP 200이면 성공이다',
        'HTTP 200은 요청이 처리되었다는 뜻이지 내용이 맞다는 뜻이 아닙니다. 신호 없이 틀리는 실패가 있습니다.',
      ],
      [
        'Evaluation은 요청마다 도는 검증 단계다',
        'Evaluation은 정의한 기준과 데이터로 품질을 재는 일이며 요청 경로 밖에서 반복합니다. 요청 안의 명시 제약 확인은 Validation입니다.',
      ],
    ] as [string, string][],
  },
  en: {
    intro: 'The chapter is condensed here into pairs of a misconception and its correction.',
    caption: 'Common misconceptions and more accurate views',
    head: ['Common misconception', 'More accurate view'] as [string, string],
    pairs: [
      [
        'An LLM gives a different answer every time',
        'With the same input, the same model, and fixed decoding conditions the same output can come out. Variation comes from sampling and from changes in the model, context, or environment.',
      ],
      [
        'Setting temperature to 0 reproduces output exactly',
        'It is not a universal guarantee. One provider’s documentation describes seed reproducibility as best effort. Whether output is the same or different, check that it satisfies the promised conditions.',
      ],
      [
        'Passing the schema means the answer is right',
        'A schema checks structure. A response with wrong content can still pass it, and meaning is checked separately with evaluation data and criteria.',
      ],
      [
        'HTTP 200 means success',
        'HTTP 200 means the request was processed, not that the content is right. There are failures that are wrong without any signal.',
      ],
      [
        'Evaluation is a validation step that runs on every request',
        'Evaluation measures quality against defined criteria and data, repeated outside the request path. Checking stated constraints inside a request is Validation.',
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
