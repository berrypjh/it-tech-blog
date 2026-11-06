import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocH3, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        AAM은 Accessibility API Mappings, 곧 &quot;접근성 API 매핑&quot;의 줄임말입니다. 웹 콘텐츠의
        의미를 운영체제 접근성 API의 어떤 역할 · 상태 · 속성으로 내보낼지 정하는 문서입니다.
      </>
    ),
    caption: '두 문서가 다루는 대상과 주된 독자',
    head: ['문서', '다루는 대상', '주된 독자'],
    rows: [
      [
        'HTML-AAM',
        'HTML 요소와 속성을 플랫폼 접근성 API로 매핑하는 방법',
        '브라우저 구현자. 작성자는 HTML 요소가 어떤 정보가 되는지 알아볼 때 읽습니다',
      ],
      [
        'Core-AAM',
        'WAI-ARIA의 역할 · 상태 · 속성을 플랫폼 접근성 API로 내보내는 방법. 다른 AAM의 바탕입니다',
        '브라우저 구현자',
      ],
    ],
    apis: (
      <>
        Core-AAM은 MSAA와 IAccessible2, UI Automation(UIA), ATK/AT-SPI, macOS 접근성 프로토콜(AX
        API), Android 접근성 API를 다룹니다. 운영체제마다 API가 다르므로 같은 역할도 플랫폼마다 다른
        이름과 구조로 나갑니다.
      </>
    ),
    statusHeading: '채택한 판본의 발행 상태',
    statusIntro: (
      <>
        이 장은 아래 판본을 근거로 씁니다. 2026년 11월 6일에 각 문서의 공식 페이지에서 상태와 날짜를
        확인했습니다.
      </>
    ),
    statusCaption: '이 장이 근거로 쓰는 명세의 상태',
    statusHead: ['문서', '상태', '이 판본의 날짜'],
    status: [
      ['HTML-AAM 1.0', 'Working Draft', '2026-10-26'],
      ['Core-AAM 1.2', 'Candidate Recommendation Draft (살아 있는 명세로 관리)', '2026-11-05'],
      ['WAI-ARIA 1.2', 'W3C Recommendation', '2023-06-06'],
      ['AccName 1.2', 'Working Draft', '2026-11-04'],
    ],
    statusAfter: (
      <>
        Working Draft와 Candidate Recommendation Draft는 아직 바뀔 수 있는 문서입니다. 그래서 매핑을
        인용할 때는 판본과 날짜를 함께 적습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        AAM stands for Accessibility API Mappings. These documents define which roles, states, and
        properties of the OS accessibility API the meaning of web content is exposed as.
      </>
    ),
    caption: 'What the two documents cover and who they are mainly for',
    head: ['Document', 'Covers', 'Mainly for'],
    rows: [
      [
        'HTML-AAM',
        'How HTML elements and attributes map to platform accessibility APIs',
        'Browser implementers. Authors read it to learn what information an HTML element becomes',
      ],
      [
        'Core-AAM',
        'How WAI-ARIA roles, states, and properties are exposed to platform accessibility APIs. The base for the other AAMs',
        'Browser implementers',
      ],
    ],
    apis: (
      <>
        Core-AAM covers MSAA with IAccessible2, UI Automation (UIA), ATK/AT-SPI, the macOS
        Accessibility Protocol (AX API), and the Android Accessibility API. Each OS has a different
        API, so the same role goes out under different names and structures on each platform.
      </>
    ),
    statusHeading: 'Publication status of the editions used',
    statusIntro: (
      <>
        This chapter is based on the editions below. Their status and dates were checked on each
        document&apos;s official page on November 6, 2026.
      </>
    ),
    statusCaption: 'Status of the specs this chapter is based on',
    statusHead: ['Document', 'Status', 'Date of this edition'],
    status: [
      ['HTML-AAM 1.0', 'Working Draft', '2026-10-26'],
      [
        'Core-AAM 1.2',
        'Candidate Recommendation Draft (maintained as a living spec)',
        '2026-11-05',
      ],
      ['WAI-ARIA 1.2', 'W3C Recommendation', '2023-06-06'],
      ['AccName 1.2', 'Working Draft', '2026-11-04'],
    ],
    statusAfter: (
      <>
        Working Drafts and Candidate Recommendation Drafts can still change. So when you cite a
        mapping, give the edition and date with it.
      </>
    ),
  },
};

export const SpecsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.specs.id}>
      <DocH2 {...toc.specs} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.apis}</p>
      <DocH3>{c.statusHeading}</DocH3>
      <p>{c.statusIntro}</p>
      <DocTable caption={c.statusCaption} head={c.statusHead} rows={c.status} />
      <p>{c.statusAfter}</p>
    </section>
  );
};
