import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { NormativeQuote } from '@/components/shared/NormativeQuote';
import { VISUAL_CHECKED_ON, wcag22 } from '@/components/shared/wcag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        두 기준은 겹쳐 보이지만 보는 곳이 다릅니다. 1.4.1은 <strong>시각 표현에서 색의 역할</strong>
        을 보고, 1.3.3은 <strong>안내 문장이 감각 특성에만 기대는지</strong>를 봅니다.
      </>
    ),
    colorCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.1 Use of Color (A)',
    sensoryCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.3.3 Sensory Characteristics (A)',
    caption: '흔한 표현과 수정 방향',
    head: ['표현', '살펴볼 기준', '문제', '수정 방향'],
    rows: [
      [
        '상태를 색 점으로만 표시',
        '1.4.1',
        '색 말고는 구별할 시각 단서가 없음',
        '"결제 실패" 글자와 아이콘을 함께 표시',
      ],
      [
        '"빨간 항목을 고르세요"',
        '1.3.3 · 1.4.1',
        '안내가 색에만 기댐',
        '"결제 실패 항목을 고르세요"',
      ],
      [
        '"오른쪽 버튼을 누르세요"',
        '1.3.3',
        '위치에만 기대며 배치가 바뀔 수 있음',
        '"다시 결제 버튼을 누르세요"',
      ],
      ['"소리가 나면 시작하세요"', '1.3.3', '소리에만 기댐', '화면 글자로도 시작을 알림'],
      [
        '"위의 표를 보세요"',
        '1.3.3',
        '표의 이름이 함께 있으면 위치에만 기대지 않음',
        '"주문 내역 표(위)"처럼 이름을 함께 씀',
      ],
    ],
    relation: (
      <>
        보완한 정보가 화면에만 있고 코드와 끊기면 보조기술 사용자는 놓칠 수 있습니다. 상태는 항목의
        글자에 넣고, 안내와 입력 칸을 잇는 설명은 <code>aria-describedby</code> 같은 관계로
        연결합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The two criteria look alike but examine different things. 1.4.1 looks at{' '}
        <strong>the role of color in visual presentation</strong>, and 1.3.3 at{' '}
        <strong>whether instructions rely only on sensory characteristics</strong>.
      </>
    ),
    colorCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.4.1 Use of Color (A)',
    sensoryCite: 'WCAG 2.2 (W3C Recommendation, 2024-12-12) — 1.3.3 Sensory Characteristics (A)',
    caption: 'Common expressions and how to fix them',
    head: ['Expression', 'Criterion to examine', 'Problem', 'Fix'],
    rows: [
      [
        'Status shown only by a colored dot',
        '1.4.1',
        'No visual cue other than color',
        'Show the text "Payment failed" with an icon',
      ],
      [
        '"Choose the red item"',
        '1.3.3, 1.4.1',
        'The instruction relies on color',
        '"Choose the item with failed payment"',
      ],
      [
        '"Press the button on the right"',
        '1.3.3',
        'It relies on position, and layouts change',
        '"Press the Retry payment button"',
      ],
      [
        '"Start when you hear the sound"',
        '1.3.3',
        'It relies on sound',
        'Also signal the start in on-screen text',
      ],
      [
        '"See the table above"',
        '1.3.3',
        'With the table’s name included, it does not rely on position alone',
        'Include the name: "the Orders table (above)"',
      ],
    ],
    relation: (
      <>
        If the added information exists only visually and is cut off from the code, assistive
        technology users can miss it. Put status in the item&apos;s text, and connect descriptions
        to fields with relationships such as <code>aria-describedby</code>.
      </>
    ),
  },
};

export const CriteriaSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const quote = { locale, checkedOn: VISUAL_CHECKED_ON };

  return (
    <section aria-labelledby={toc.criteria.id}>
      <DocH2 {...toc.criteria} />
      <p>{c.intro}</p>
      <NormativeQuote {...quote} href={wcag22('use-of-color')} cite={c.colorCite}>
        Color is not used as the only visual means of conveying information, indicating an action,
        prompting a response, or distinguishing a visual element.
      </NormativeQuote>
      <NormativeQuote {...quote} href={wcag22('sensory-characteristics')} cite={c.sensoryCite}>
        Instructions provided for understanding and operating content do not rely solely on sensory
        characteristics of components such as shape, color, size, visual location, orientation, or
        sound.
      </NormativeQuote>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.relation}</p>
    </section>
  );
};
