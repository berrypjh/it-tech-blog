import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        화면 낭독기를 쓸 수 없으면 위의 키 표와 기대하는 뜻을 읽어 흐름을 익힙니다. 실제로 해 보지
        않은 과업은 결과 칸을 비우지 않고 <strong>미실행</strong>이라고 적습니다.
      </>
    ),
    caption: '보조기술 없이 남기는 기록의 예',
    head: ['항목', '적은 내용'],
    rows: [
      ['과업', '6. 체크박스 상태 확인하고 바꾸기'],
      ['환경 · 버전', '화면 낭독기 없음 · 브라우저와 운영체제는 사용한 것을 적음'],
      [
        '기대하는 뜻',
        '체크박스이고, 이름이 "부재 시 문 앞에 두기"이며, 바꾼 뒤 상태가 반대로 들림',
      ],
      ['실제 결과', '미실행 — 화면 낭독기를 쓸 수 없음'],
      ['미확인 사항', '실제로 어떤 말과 순서로 읽히는지, 상태가 바뀐 뒤 바로 읽히는지'],
    ],
  },
  en: {
    intro: (
      <>
        If you cannot use a screen reader, learn the flow from the key tables and expected meanings
        above. For tasks you did not actually do, do not leave the result empty; write{' '}
        <strong>not run</strong>.
      </>
    ),
    caption: 'An example record kept without assistive technology',
    head: ['Field', 'What was written'],
    rows: [
      ['Task', '6. Check the checkbox’s state and change it'],
      ['Environment · versions', 'No screen reader · note the browser and OS used'],
      [
        'Expected meaning',
        'It is a checkbox named "Leave at the door if no one is home", and after changing it the opposite state is heard',
      ],
      ['Actual result', 'Not run — no screen reader available'],
      [
        'Unconfirmed',
        'Which words and order are actually spoken, and whether the new state is read right after the change',
      ],
    ],
  },
};

export const NoAtSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.noAt.id}>
      <DocH2 {...toc.noAt} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
    </section>
  );
};
