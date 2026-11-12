import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { accname12, ARIA_CHECKED_ON } from '@/components/shared/aria';
import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const code = {
  ko: `<label for="checkin">체크인 날짜</label>
<input id="checkin" type="text" aria-describedby="checkin-hint">
<p id="checkin-hint">YYYY-MM-DD 형식으로 적습니다.</p>`,
  en: `<label for="checkin">Check-in date</label>
<input id="checkin" type="text" aria-describedby="checkin-hint">
<p id="checkin-hint">Use the format YYYY-MM-DD.</p>`,
};

const content = {
  ko: {
    intro: (
      <>
        같은 입력 칸이라도 이름과 설명은 서로 다른 순서표로 계산합니다. 아래 예제에서 이름은
        label에서, 설명은 aria-describedby가 가리키는 문단에서 나옵니다.
      </>
    ),
    label: '이름과 설명이 따로 연결된 입력 칸',
    caption: '같은 입력 칸의 두 계산 경로',
    head: ['', '이름', '설명'],
    rows: [
      ['출처', 'for · id로 연결된 label', 'aria-describedby가 가리키는 p'],
      ['따르는 순서', 'AccName 계산 단계와 HTML-AAM 4.1.1', 'AccName 4.2 설명 계산 표'],
      ['예상 결과', '"체크인 날짜"', '"YYYY-MM-DD 형식으로 적습니다."'],
    ],
    orderCaption: 'AccName 1.2 초안의 설명 출처 순서',
    orderHead: ['순서', '출처', '조건'],
    order: [
      ['1', 'aria-describedby', '가리키는 노드들의 계산 결과를 공백으로 이어 붙임'],
      ['2', 'aria-description', '문자열 그대로'],
      ['3', '요소별 HTML 출처', 'HTML-AAM 4.2가 정한 것 가운데 이름에 쓰이지 않은 것'],
      ['4', 'title', '이름에 쓰이지 않았을 때만'],
    ],
    rule: (
      <>
        설명은 이름과 달리 &quot;처음 적용되는 출처&quot; 하나만 씁니다. 그 결과가 비어 있어도 다음
        출처로 넘어가지 않습니다. AccName 1.1 확정 규격에는 이 표가 없고 aria-describedby만 적혀
        있습니다.
      </>
    ),
    cite: 'AccName 1.2 (Working Draft, 2026-11-04) — 4.2 Description Computation',
  },
  en: {
    intro: (
      <>
        Even on the same input, the name and the description are computed by different precedence
        tables. In the example below, the name comes from the label and the description from the
        paragraph aria-describedby points to.
      </>
    ),
    label: 'An input with a separately connected name and description',
    caption: 'Two computation paths on the same input',
    head: ['', 'Name', 'Description'],
    rows: [
      ['Source', 'The label connected by for and id', 'The p aria-describedby points to'],
      ['Order followed', 'AccName steps and HTML-AAM 4.1.1', 'The AccName 4.2 description table'],
      ['Expected result', '"Check-in date"', '"Use the format YYYY-MM-DD."'],
    ],
    orderCaption: 'Description sources in the AccName 1.2 draft',
    orderHead: ['Order', 'Source', 'Condition'],
    order: [
      ['1', 'aria-describedby', 'The computed text of the referenced nodes, joined by spaces'],
      ['2', 'aria-description', 'The string as is'],
      [
        '3',
        'Per-element HTML sources',
        'Those set by HTML-AAM 4.2 that were not used for the name',
      ],
      ['4', 'title', 'Only if not used for the name'],
    ],
    rule: (
      <>
        Unlike the name, a description uses only &quot;the first applicable source.&quot; Even if
        that result is empty, it does not move to the next source. The AccName 1.1 Recommendation
        has no such table and lists only aria-describedby.
      </>
    ),
    cite: 'AccName 1.2 (Working Draft, 2026-11-04) — 4.2 Description Computation',
  },
};

export const PathsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.paths.id}>
      <DocH2 {...toc.paths} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="example" />
      </p>
      <CodeBlock code={code[locale]} label={c.label} />
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <DocTable caption={c.orderCaption} head={c.orderHead} rows={c.order} />
      <p>{c.rule}</p>
      <NormativeQuote
        locale={locale}
        href={accname12('x4-2-description-computation')}
        cite={c.cite}
        checkedOn={ARIA_CHECKED_ON}
      >
        User agents MUST use the first applicable entry from the table where the listed conditions
        are met, as described in the last column. The user agent MUST NOT use any markup other that
        the first relevant markup found, even if that markup results in an empty description
      </NormativeQuote>
    </section>
  );
};
