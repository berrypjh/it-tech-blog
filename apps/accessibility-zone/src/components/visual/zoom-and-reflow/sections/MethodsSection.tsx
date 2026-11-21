import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { ViewportReadout } from '../demos/ViewportReadout';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: '검사 방법마다 증명하는 범위가 다릅니다. 기록에는 어떤 방법을 썼는지 그대로 적습니다.',
    caption: '폭과 확대를 확인하는 세 방법',
    head: ['방법', '실제로 바뀌는 것', '말할 수 있는 것', '말할 수 없는 것'],
    rows: [
      [
        '데모 패널 폭 축소',
        '한 영역의 폭',
        '그 영역이 좁은 폭에서 어떻게 배치되는가',
        '페이지 전체와 실제 확대 결과',
      ],
      [
        '테스트 viewport 변경',
        '창이나 자동화의 viewport',
        '그 폭에서 페이지 레이아웃이 어떤가',
        '실제 확대의 글자 크기 · 사용감',
      ],
      [
        '실제 브라우저 확대',
        '브라우저의 확대 비율',
        '그 환경에서 사용자가 겪는 결과',
        '다른 브라우저 · 기기의 결과',
      ],
    ],
    calloutTitle: 'CSS scale은 확대 검사가 아닙니다',
    callout: (
      <>
        <code>transform: scale()</code>은 그려진 모습만 키우고 레이아웃 폭은 바꾸지 않습니다. 요소가
        다시 줄바꿈되지 않으므로 Reflow의 증거로 쓰지 않습니다.
      </>
    ),
    readoutIntro: (
      <>
        아래 값은 지금 이 브라우저에서 읽은 값입니다. 1280px 창에서 400%로 확대한 뒤 다시 보면 CSS
        폭이 어떻게 달라지는지 확인할 수 있습니다.
      </>
    ),
  },
  en: {
    intro: 'Each method proves something different. Record exactly which one you used.',
    caption: 'Three ways to check width and zoom',
    head: ['Method', 'What really changes', 'What you can say', 'What you cannot say'],
    rows: [
      [
        'Narrowing a demo panel',
        'The width of one area',
        'How that area lays out when narrow',
        'The whole page, or real zoom results',
      ],
      [
        'Changing a test viewport',
        'The window or automation viewport',
        'How the page lays out at that width',
        'Text size and feel under real zoom',
      ],
      [
        'Real browser zoom',
        'The browser’s zoom level',
        'What a user meets in that environment',
        'Results in other browsers and devices',
      ],
    ],
    calloutTitle: 'CSS scale is not a zoom check',
    callout: (
      <>
        <code>transform: scale()</code> enlarges only what is painted and does not change layout
        width. Elements do not rewrap, so it is not evidence of reflow.
      </>
    ),
    readoutIntro: (
      <>
        The values below are read from this browser now. Zoom a 1280px window to 400% and look again
        to see how the CSS width changes.
      </>
    ),
  },
};

export const MethodsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.methods.id}>
      <DocH2 {...toc.methods} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <Callout variant="pitfall" title={c.calloutTitle}>
        {c.callout}
      </Callout>
      <p>{c.readoutIntro}</p>
      <ViewportReadout />
    </section>
  );
};
