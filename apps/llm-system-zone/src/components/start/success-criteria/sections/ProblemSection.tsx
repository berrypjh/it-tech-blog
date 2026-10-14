import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { FieldCards } from '@/components/shared/FieldCards';

import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '01-05의 마지막에서 성공 기준이 비어 있으면 실패가 무엇인지도 정할 수 없다고 했습니다. 요구사항이 "잘 만들어 줘" 한 문장일 때 먼저 할 일은 그 문장을 네 가지로 분해하는 것입니다.',
    labels: ['질문', '적을 내용'],
    elements: [
      [
        '대상 사용자',
        '누가 결과를 쓰는가',
        '결과를 받아 쓰는 사람이나 시스템. 최종 사용자에게 바로 가는지, 사람이 먼저 검토하는지',
      ],
      [
        '입력 범위',
        '어떤 입력을 다루는가',
        '다루는 입력의 종류, 언어, 길이와 형식. 범위 밖의 입력',
      ],
      [
        '완료할 작업',
        '무엇이 끝나야 성공인가',
        '입력에서 출력까지 끝내야 하는 일. 통과했을 때 사용자가 얻는 것',
      ],
      ['제외 범위', '이번에 하지 않는 것은 무엇인가', '실행하지 않는 동작, 사람에게 넘기는 경우'],
    ],
    after:
      '이 분해가 있어야 "좋은 결과"가 누구에게, 어떤 입력에서, 무엇을 끝냈을 때인지가 정해집니다.',
  },
  en: {
    intro:
      'At the end of 01-05 we said that without success criteria you cannot even say what a failure is. When a requirement is the single sentence "make it good", the first thing to do is break it into four parts.',
    labels: ['Question', 'What to write'],
    elements: [
      [
        'Target user',
        'Who uses the result',
        'The person or system that receives and uses the result, and whether it goes straight to end users or a person reviews it first',
      ],
      [
        'Input scope',
        'What input does it handle',
        'The kinds of input, languages, length and format it handles, and the input that is out of scope',
      ],
      [
        'Task to complete',
        'What must be done to count as success',
        'The work to finish from input to output, and what the user gains when it passes',
      ],
      [
        'Out of scope',
        'What is not done this time',
        'Actions that are not executed, and cases handed to a person',
      ],
    ],
    after:
      'Only with this breakdown is it settled for whom, on what input, and on finishing what a "good result" is.',
  },
};

export const ProblemSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const items = c.elements.map(([name, ...values]) => ({
    name,
    fields: values.map((value, i) => ({ label: c.labels[i], value })),
  }));

  return (
    <section aria-labelledby={toc.problem.id}>
      <DocH2 {...toc.problem} />
      <p>{c.intro}</p>
      <FieldCards items={items} />
      <p>{c.after}</p>
    </section>
  );
};
