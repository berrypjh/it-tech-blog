import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const code = {
  ko: `const id = ++lastId;
activeId = id;
controller?.abort();          // 지난 요청에 중단 신호
controller = new AbortController();

const response = await fetch(url, { signal: controller.signal });
const data = await response.json();
if (id !== activeId) return;  // 그 사이 새 검색 · 취소가 있었다면 반영하지 않음
apply(data);`,
  en: `const id = ++lastId;
activeId = id;
controller?.abort();          // abort signal to the previous request
controller = new AbortController();

const response = await fetch(url, { signal: controller.signal });
const data = await response.json();
if (id !== activeId) return;  // a new search or cancel happened meanwhile: do not apply
apply(data);`,
};

const content = {
  ko: {
    intro: (
      <>
        AbortController는 기다리던 요청을 멈추라는 신호입니다. 그 신호를 보냈다는 사실만으로 경쟁
        상태가 해결되지는 않습니다. 실습의 가상 서버에서도 중단 신호를 받은 요청에 응답을 보낼 수
        있고, 그 응답을 막는 것은 id 확인입니다.
      </>
    ),
    caption: '중단 신호가 닿지 않는 틈',
    head: ['틈', '예'],
    rows: [
      [
        '응답이 이미 도착해 처리 중',
        'fetch는 끝났고 json() 처리나 다음 await를 기다리는 사이에 새 검색이 시작됨',
      ],
      [
        '신호를 보내지 않은 경로',
        '새 검색 때만 abort하고 취소 · 재설정 · 화면 이탈 때는 하지 않음',
      ],
      ['요청 밖의 예약 작업', '응답 뒤에 건 타이머나 애니메이션이 지난 결과를 다시 그림'],
      ['신호를 모르는 쪽', '중단을 지원하지 않는 라이브러리나 서버가 결과를 늦게 돌려줌'],
    ],
    label: '중단 신호와 id 확인을 함께 쓰기',
    after: (
      <>
        그래서 중단 신호는 자원을 아끼는 수단으로 쓰고, 결과를 반영할지는 언제나 id로 정합니다.
        화면을 떠날 때는 남은 요청에 중단 신호를 보내고, Toast 타이머 같은 예약 작업도 정리합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        AbortController is a signal to stop a pending request. Sending that signal does not by
        itself settle a race. Even in the exercise’s simulated server, a request that received the
        abort signal can still be answered, and what blocks that response is the id check.
      </>
    ),
    caption: 'Gaps the abort signal does not reach',
    head: ['Gap', 'Example'],
    rows: [
      [
        'The response already arrived and is being processed',
        'fetch finished, and a new search starts while json() or the next await is pending',
      ],
      [
        'A path that never sends the signal',
        'Aborting only on new searches, not on cancel, reset, or leaving the screen',
      ],
      [
        'Scheduled work outside the request',
        'A timer or animation set after the response redraws an old result',
      ],
      [
        'A side that ignores the signal',
        'A library or server without abort support returns a result late',
      ],
    ],
    label: 'Using the abort signal together with an id check',
    after: (
      <>
        So use the abort signal to save resources, and always decide by id whether to apply a
        result. When leaving the screen, send the abort signal to remaining requests and clean up
        scheduled work such as toast timers.
      </>
    ),
  },
};

export const AbortSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.abort.id}>
      <DocH2 {...toc.abort} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <CodeBlock label={c.label} code={code[locale]} tone="good" />
      <p>{c.after}</p>
    </section>
  );
};
