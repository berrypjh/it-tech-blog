import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocTable } from '@it-tech-blog/ui';

import { Accessibility, Code, Crosshair, Pause, Zap } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

const consoleCode = {
  ko: `document.activeElement      // 지금 포커스가 있는 요소
$0                          // Elements 패널에서 고른 요소
$0.type                     // button의 type 프로퍼티 — 속성이 없어도 값이 나옴
$0.getAttribute('type')     // 속성 — 적지 않았으면 null
getEventListeners($0)       // 붙은 리스너 목록 (Firefox 콘솔에는 없음)`,
  en: `document.activeElement      // the element that has focus now
$0                          // the element selected in the Elements panel
$0.type                     // a button's type property — has a value even without the attribute
$0.getAttribute('type')     // the attribute — null if not written
getEventListeners($0)       // listeners attached (not in the Firefox console)`,
};

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: DOM · 접근성 정보 · 리스너 · 속성 변경 중단 · 포커스. */
const rowIcons = [Code, Accessibility, Zap, Pause, Crosshair];

const content = {
  ko: {
    intro: (
      <>
        개발자 도구는 브라우저에 지금 있는 DOM과 그 계산 결과를 보여 줍니다. 앞 페이지들에서 본 것을
        개발자 도구에서 어디서 찾는지 정리합니다. Chrome에서 역할과 이름을 단계별로 확인하는 그림
        안내는 <PageLink locale="ko" id="intro" hash="why-frontend" />의 &quot;프론트엔드에게 중요한
        이유&quot;에 있습니다.
      </>
    ),
    caption: '보고 싶은 것과 찾는 곳',
    head: ['보고 싶은 것', 'Chrome · Edge', 'Firefox', 'Safari'],
    rows: [
      ['DOM과 속성', 'Elements 패널', 'Inspector 패널', 'Elements 탭'],
      [
        '역할 · 이름 · 상태',
        'Elements → Accessibility 탭',
        'Accessibility 패널',
        'Elements → Node 사이드바의 Accessibility',
      ],
      [
        '붙은 이벤트 리스너',
        'Elements → Event Listeners 탭',
        '노드 옆 event 표시',
        'Node 사이드바의 Event Listeners',
      ],
      [
        '속성이 바뀌는 순간 멈추기',
        '노드 메뉴 → Break on → attribute modifications',
        '노드 메뉴 → Break on… → Attribute modification',
        '노드 메뉴 → Break on → Attribute Modified',
      ],
      [
        '지금 포커스',
        <>
          콘솔의 <code key="c">document.activeElement</code> (Live expression으로 계속 보기)
        </>,
        <>
          콘솔의 <code key="c">document.activeElement</code>
        </>,
        <>
          콘솔의 <code key="c">document.activeElement</code>
        </>,
      ],
    ],
    cautionTitle: '패널 이름과 메뉴 위치는 버전마다 바뀝니다',
    caution: (
      <>
        위 표는 찾을 곳의 힌트이고, 화면이 다르면 각 브라우저의 개발자 도구 문서를 확인합니다.
        Safari는 Safari 설정의 고급에서 &apos;웹 개발자용 기능 보기&apos;를 켜야 개발자 도구가
        나타납니다.
      </>
    ),
    consoleLabel: '콘솔에서 자주 쓰는 확인',
  },
  en: {
    intro: (
      <>
        Developer tools show the DOM the browser has right now and what it computed from it. Here is
        where to find, in developer tools, what you saw on the previous pages. A step-by-step
        illustrated guide to checking role and name in Chrome is in &quot;Why it matters to
        frontend&quot; on <PageLink locale="en" id="intro" hash="why-frontend" />.
      </>
    ),
    caption: 'What you want to see and where to find it',
    head: ['What to see', 'Chrome · Edge', 'Firefox', 'Safari'],
    rows: [
      ['DOM and attributes', 'Elements panel', 'Inspector panel', 'Elements tab'],
      [
        'Role, name, and state',
        'Elements → Accessibility tab',
        'Accessibility panel',
        'Elements → Accessibility in the Node sidebar',
      ],
      [
        'Attached event listeners',
        'Elements → Event Listeners tab',
        'The event badge next to a node',
        'Event Listeners in the Node sidebar',
      ],
      [
        'Pause when an attribute changes',
        'Node menu → Break on → attribute modifications',
        'Node menu → Break on… → Attribute modification',
        'Node menu → Break on → Attribute Modified',
      ],
      [
        'Current focus',
        <>
          <code key="c">document.activeElement</code> in the console (keep it visible with Live
          expression)
        </>,
        <>
          <code key="c">document.activeElement</code> in the console
        </>,
        <>
          <code key="c">document.activeElement</code> in the console
        </>,
      ],
    ],
    cautionTitle: 'Panel names and menu locations change between versions',
    caution: (
      <>
        The table is a hint about where to look; if your screen differs, check that browser&apos;s
        developer tools documentation. In Safari, turn on &quot;Show features for web
        developers&quot; in Settings → Advanced to see developer tools.
      </>
    ),
    consoleLabel: 'Common checks in the console',
  },
};

export const ToolsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.tools.id}>
      <DocH2 {...toc.tools} />
      <p>{c.intro}</p>
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={c.rows.map((row, i) => [
          <IconLabel key="label" icon={rowIcons[i]}>
            {row[0]}
          </IconLabel>,
          ...row.slice(1),
        ])}
      />
      <CodeBlock label={c.consoleLabel} code={consoleCode[locale]} />
      <Callout variant="pitfall" title={c.cautionTitle}>
        <p>{c.caution}</p>
      </Callout>
    </section>
  );
};
