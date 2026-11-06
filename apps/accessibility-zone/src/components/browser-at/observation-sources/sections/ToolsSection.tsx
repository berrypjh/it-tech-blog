import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        개발자 도구의 접근성 탭은 그 브라우저가 계산한 정보를 보여 줍니다. Firefox 문서는 접근성
        검사기가 플랫폼 접근성 계층의 정보가 아니라 Gecko의 접근성 트리를 보여 주며, 그래서 보여
        주는 정보가 모든 플랫폼에서 같다고 설명합니다. Chrome 문서도 키보드와 화면 낭독기로 쓸 수
        있는지는 개발자 도구가 답해 줄 수 없다고 적습니다.
      </>
    ),
    after: (
      <>
        자동 검사 도구의 결과도 그 도구가 계산한 값입니다. 그러니까 도구에서 &quot;체크박스,
        체크됨&quot;을 봤다는 것은 브라우저 안의 정보가 그렇다는 뜻이고, 운영체제 API로 나간 값이나
        화면 낭독기가 실제로 읽은 말까지 증명하지는 않습니다.
      </>
    ),
    calloutTitle: '페이지 스크립트가 알 수 있는 것',
    callout: (
      <>
        일반 페이지의 JavaScript는 DOM과 계산된 스타일, 포커스를 읽을 수 있습니다. 접근성 트리
        전체나 화면 낭독기의 발화는 읽을 수 없습니다. 이 장의 실습 패널이 &quot;실제 DOM
        관찰&quot;만 보여 주는 이유입니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The Accessibility tab in developer tools shows the information that browser computed. The
        Firefox documentation explains that its inspector shows Gecko&apos;s accessibility tree
        rather than information from the platform accessibility layer, which is why the information
        is the same across all platforms. The Chrome documentation also notes that developer tools
        cannot answer whether a page can be used with a keyboard and screen reader.
      </>
    ),
    after: (
      <>
        Results from automated testing tools are also values those tools computed. So seeing
        &quot;checkbox, checked&quot; in a tool means the information inside the browser says so; it
        does not prove what went out through the OS API or what a screen reader actually said.
      </>
    ),
    calloutTitle: 'What page scripts can know',
    callout: (
      <>
        A regular page&apos;s JavaScript can read the DOM, computed styles, and focus. It cannot
        read the whole accessibility tree or a screen reader&apos;s speech. That is why this
        chapter&apos;s exercise panels only show &quot;real DOM observation.&quot;
      </>
    ),
  },
};

export const ToolsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.tools.id}>
      <DocH2 {...toc.tools} />
      <p>{c.intro}</p>
      <p>{c.after}</p>
      <Callout variant="note" title={c.calloutTitle}>
        <p>{c.callout}</p>
      </Callout>
    </section>
  );
};
