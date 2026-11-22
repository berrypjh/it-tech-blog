import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { SeatCanvasDemo } from '../demos/SeatCanvasDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        아래 좌석 배치도는 Canvas에 그렸고, 마우스로 누르면 좌석이 골라집니다. 같은 기능을 HTML
        버튼으로도 두었습니다. 두 경로는 한 상태를 공유하므로 어느 쪽으로 골라도 결과가 같습니다.
      </>
    ),
    calloutTitle: '같은 기능을 두 번 노출하지 않습니다',
    callout: (
      <>
        HTML 버튼이 있으면 Canvas는 <code>aria-hidden=&quot;true&quot;</code>로 숨깁니다. 둘 다
        노출하면 보조기술 사용자는 같은 좌석 목록을 두 번 만나고, 하나는 조작할 수 없습니다. 판매된
        좌석은 색만이 아니라 ✕ 표시와 “판매됨” 글자로도 알립니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The seat map below is drawn on a Canvas, and clicking picks a seat. The same function is
        also offered as HTML buttons. Both paths share one state, so either way gives the same
        result.
      </>
    ),
    calloutTitle: 'Do not expose the same function twice',
    callout: (
      <>
        With the HTML buttons in place, the Canvas is hidden with{' '}
        <code>aria-hidden=&quot;true&quot;</code>. If both were exposed, assistive technology users
        would meet the same seat list twice, and one of them cannot be operated. Sold seats are
        shown not only by color but also by ✕ and the word “sold.”
      </>
    ),
  },
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{c.intro}</p>
      <SeatCanvasDemo />
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
