import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        검색 한 번에도 세 가지 변화가 일어날 수 있습니다. 결과 목록이 바뀌는 것, “3건 찾음” 같은
        짧은 결과가 생기는 것, 그리고 새 작업 화면으로 넘어가는 것입니다. 세 변화는 사용자에게 닿는
        방법이 다릅니다.
      </>
    ),
    caption: '세 수단의 차이 (교육 예시: 검색 화면)',
    head: ['변화', '수단', '포커스', '사용자가 아는 방법'],
    rows: [
      ['검색 결과 목록이 바뀜', '화면 갱신', '그대로', '결과 영역으로 가서 읽음'],
      ['“3건 찾음”', '상태 메시지', '그대로', '포커스 없이 보조기술이 알림'],
      ['새 작업 화면 진입', '맥락 전환', '새 화면의 제목으로', '포커스가 옮겨 가며 새 위치를 앎'],
    ],
    after: (
      <>
        상태 메시지는 목록 전체를 다시 읽어 주는 수단이 아닙니다. 결과가 있다는 사실과 수만 짧게
        알리고, 내용은 사용자가 결과 영역에서 읽습니다. 맥락 전환은 사용자가 요청했을 때 포커스를
        옮겨 새 위치를 알립니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A single search can cause three changes: the result list changes, a short result such as “3
        found” appears, and a move to a new task screen. Each reaches users differently.
      </>
    ),
    caption: 'How the three means differ (teaching example: a search screen)',
    head: ['Change', 'Means', 'Focus', 'How users learn of it'],
    rows: [
      ['The result list changes', 'Screen update', 'Stays', 'They go to the results and read'],
      ['“3 found”', 'Status message', 'Stays', 'Assistive technology tells them without focus'],
      [
        'Entering a new task screen',
        'Change of context',
        'To the new screen’s heading',
        'The focus move tells them where they are',
      ],
    ],
    after: (
      <>
        A status message is not a way to read the whole list again. It briefly says that there are
        results and how many; users read the content in the results area. A change of context moves
        focus, when users ask for it, to show the new location.
      </>
    ),
  },
};

export const MeansSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.means.id}>
      <DocH2 {...toc.means} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
