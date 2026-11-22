import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const code = {
  ko: `<th id="sun" colspan="2" scope="colgroup">일요일</th>
<th id="sun-b" scope="col">B홀</th>
<th id="s3" scope="row">3회차 15:30</th>
<!-- 칸이 어느 헤더에 속하는지 id로 직접 적는다 -->
<td headers="sun sun-b s3">마무리 토론</td>`,
  en: `<th id="sun" colspan="2" scope="colgroup">Sunday</th>
<th id="sun-b" scope="col">Hall B</th>
<th id="s3" scope="row">Session 3 15:30</th>
<!-- Name the headers a cell belongs to, by id -->
<td headers="sun sun-b s3">Closing discussion</td>`,
};

const content = {
  ko: {
    intro: (
      <>
        요일 아래에 홀이 있는 일정표는 열 헤더가 두 층입니다. 먼저 단순화를 생각합니다. 위의
        단순화한 표처럼 헤더를 한 줄로 펴면 scope만으로 충분합니다. 두 층을 지켜야 한다면{' '}
        <code>scope=&quot;colgroup&quot;</code>으로 위층을 묶고, 그래도 연결이 모호하면 칸마다{' '}
        <code>headers</code>에 헤더의 id를 적습니다.
      </>
    ),
    label: 'id와 headers로 칸과 헤더 잇기',
    verify: (
      <>
        headers는 손으로 적는 연결이라 틀리기 쉽습니다. 없는 id를 가리키거나 다른 칸의 헤더를 적어도
        화면은 그대로입니다. 그래서 아래 실습처럼 모든 칸의 headers가 실제 th를 가리키는지
        검증합니다.
      </>
    ),
    calloutTitle: '읽기 전용 표를 ARIA grid로 바꾸지 않습니다',
    callout: (
      <>
        <code>role=&quot;grid&quot;</code>는 칸 사이를 화살표 키로 옮겨 다니며 편집하는 위젯입니다.
        읽기만 하는 표에 붙이면 표 탐색 대신 위젯 조작을 기대하게 되고, 키 처리까지 작성자가
        만들어야 합니다. 데이터 표는 table 요소 그대로 둡니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A schedule with halls under each day has two layers of column headers. Consider simplifying
        first: flattening the headers into one row, as in the simplified table above, makes scope
        enough. If both layers must stay, group the upper layer with{' '}
        <code>scope=&quot;colgroup&quot;</code>, and if the connection is still ambiguous, write the
        header ids in each cell’s <code>headers</code>.
      </>
    ),
    label: 'Connecting cells and headers with id and headers',
    verify: (
      <>
        headers is a hand-written connection and easy to get wrong. Pointing to a missing id, or to
        another cell’s headers, leaves the screen unchanged. So, as in the exercise below, verify
        that every cell’s headers point to real th elements.
      </>
    ),
    calloutTitle: 'Do not turn a read-only table into an ARIA grid',
    callout: (
      <>
        <code>role=&quot;grid&quot;</code> is a widget for moving between cells with arrow keys to
        edit them. On a read-only table it makes users expect widget operation instead of table
        navigation, and the author has to build the key handling too. Keep a data table a table
        element.
      </>
    ),
  },
};

export const LayeredSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.layered.id}>
      <DocH2 {...toc.layered} />
      <p>{c.intro}</p>
      <CodeBlock label={c.label} code={code[locale]} />
      <p>{c.verify}</p>
      <Callout variant="pitfall" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
