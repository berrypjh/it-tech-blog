import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { FinalRecordDemo } from '../demos/FinalRecordDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        이 장을 두 경쟁 상황의 재현 기록으로 마칩니다. A/B 역전과 B 취소 후 늦은 성공입니다.
        기대값은 먼저 쓰고, 관찰값은 실습 화면에서 읽은 것만 씁니다. 실제 보조기술로 확인하지 않은
        것은 미확인 칸에 남깁니다.
      </>
    ),
    steps: [
      '실습에서 상황의 입력 순서를 그대로 재현합니다.',
      '요청마다 ID와, 사건 뒤의 활성 요청을 적습니다.',
      '예상 표시와 알림 원문을 먼저 적고, 관찰된 DOM · 초점과 비교합니다.',
      '수정 전후 비교표에서 같은 상황의 수정 전 결과와 견줍니다.',
      '같은 문구라도 사용자가 새로 시작한 검색의 결과는 억제되지 않았는지 확인합니다.',
    ],
  },
  en: {
    intro: (
      <>
        The chapter ends with reproduction records of two races: A/B reversal and a late success
        after canceling B. Write expectations first, and record as observations only what you read
        on the exercise screen. Leave anything not checked with real assistive technology in the
        unconfirmed field.
      </>
    ),
    steps: [
      'Reproduce the input order of the situation in the exercise.',
      'Write the ID of each request and the active request after each event.',
      'Write the expected display and announcement text first, then compare with the observed DOM and focus.',
      'Compare with the result before the fix for the same situation in the before-and-after table.',
      'Check that a result of a search the user newly started was not suppressed, even with the same text.',
    ],
  },
};

export const TaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.task.id}>
      <DocH2 {...toc.task} />
      <p>{c.intro}</p>
      <Steps items={c.steps} />
      <FinalRecordDemo />
    </section>
  );
};
