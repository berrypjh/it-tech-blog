import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocH3 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { Steps } from '@/components/shared/Steps';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        <PageLink locale="ko" id="web-layers" />
        에서 브라우저가 DOM과 계산된 스타일로 접근성 트리를 만든다고 했습니다. 이 페이지는 그 트리를
        직접 열어 봅니다. 같은 요소를 두 화면에서 찾고, 한 번에 하나씩 바꾸며 무엇이 달라지는지
        봅니다.
      </>
    ),
    flowHeading: '예상 → 조작 → 관찰 → 해석',
    flow: [
      '예상 — 바꾸기 전에 화면과 접근성 트리에서 무엇이 달라질지 한 줄로 적습니다.',
      '조작 — 한 번에 하나만 바꿉니다. 속성 하나, 스타일 하나.',
      '관찰 — Elements 패널의 DOM과 접근성 트리의 노드를 따로 봅니다.',
      '해석 — 예상과 다르면 어느 층(HTML 의미 · 스타일 · 스크립트)에서 생긴 차이인지 적습니다.',
    ],
    chromeHeading: 'Chrome에서 여는 법',
    chrome: [
      'Elements 패널에서 확인할 요소를 고릅니다.',
      'Accessibility 탭을 엽니다. 탭이 안 보이면 더 보기(») 안에 있습니다.',
      'Show accessibility tree를 켜면 DOM 트리 자리에 페이지 전체의 접근성 트리가 나옵니다. 다시 끄면 같은 노드가 DOM 트리에서 선택된 채로 남습니다.',
    ],
    firefoxHeading: 'Firefox에서 여는 법',
    firefox: [
      '요소에서 오른쪽 클릭 → 접근성 속성 검사(Inspect Accessibility Properties)를 고르거나, 개발자 도구의 접근성(Accessibility) 탭을 엽니다.',
      '왼쪽 트리에서 노드를 고르면 오른쪽에 역할 · 이름 · 상태 · 관계가 나옵니다.',
    ],
    versionTitle: '메뉴 이름과 위치는 버전마다 바뀝니다',
    version: (
      <>
        위 절차는 각 브라우저의 공식 문서를 기준으로 적었습니다. 메뉴가 다르면 공식 문서의 최신
        안내를 따릅니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        <PageLink locale="en" id="web-layers" /> said the browser builds an accessibility tree from
        the DOM and computed styles. This page opens that tree. Find the same element in two views,
        change one thing at a time, and see what differs.
      </>
    ),
    flowHeading: 'Predict → change → observe → interpret',
    flow: [
      'Predict — before changing anything, write one line on what will differ on screen and in the accessibility tree.',
      'Change — change only one thing at a time: one attribute or one style.',
      'Observe — look at the DOM in the Elements panel and the node in the accessibility tree separately.',
      'Interpret — if it differs from your prediction, note which layer (HTML meaning, style, or script) the difference came from.',
    ],
    chromeHeading: 'Opening it in Chrome',
    chrome: [
      'In the Elements panel, select the element to check.',
      'Open the Accessibility tab. If you cannot see it, it is under More tabs (»).',
      'Turn on Show accessibility tree to replace the DOM tree with a full-page accessibility tree. Turn it off and the same node stays selected in the DOM tree.',
    ],
    firefoxHeading: 'Opening it in Firefox',
    firefox: [
      'Right-click the element and choose Inspect Accessibility Properties, or open the Accessibility tab in developer tools.',
      'Pick a node in the tree on the left to see its role, name, states, and relations on the right.',
    ],
    versionTitle: 'Menu names and locations change between versions',
    version: (
      <>
        The steps above follow each browser&apos;s official documentation. If your menus differ,
        follow the latest official guide.
      </>
    ),
  },
};

export const CompareSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.compare.id}>
      <DocH2 {...toc.compare} />
      <p>{c.intro}</p>
      <DocH3>{c.flowHeading}</DocH3>
      <Steps items={c.flow} />
      <DocH3>{c.chromeHeading}</DocH3>
      <Steps items={c.chrome} />
      <DocH3>{c.firefoxHeading}</DocH3>
      <Steps items={c.firefox} />
      <Callout variant="note" title={c.versionTitle}>
        <p>{c.version}</p>
      </Callout>
    </section>
  );
};
