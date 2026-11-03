import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { FileCode, Palette, Zap } from 'lucide-react';

import { IconLabel } from '@/components/shared/IconLabel';
import { PageLink } from '@/components/shared/PageLink';

import { getToc } from '../toc';

/** 표의 행 순서와 같은 순서로 놓인 첫 열 아이콘: 결함이 있는 층 — HTML · CSS · CSS · JavaScript. */
const rowIcons = [FileCode, Palette, Palette, Zap];

const content = {
  ko: {
    intro: (
      <>
        과업은 하나로 고정합니다. &quot;상품 페이지에서 <strong>배송 정보를 펼쳐 읽는다</strong>
        &quot;. 같은 과업이라도 결함이 어느 층에 있느냐에 따라 막히는 사람과 고칠 곳이 달라집니다.
      </>
    ),
    caption: '배송 정보 펼치기 과업의 층별 결함과 고칠 곳',
    head: ['층', '결함', '누가 어떻게 막히나', '고칠 곳'],
    rows: [
      [
        'HTML',
        <>
          펼침 버튼을 <code>&lt;div onclick&gt;</code>으로 만들었습니다
        </>,
        '키보드 사용자는 Tab으로 닿지 않아 열 수 없습니다',
        <>
          <code>button</code> 요소로 바꿉니다
        </>,
      ],
      [
        'CSS',
        <>
          포커스 표시를 <code>outline: none</code>으로 지웠습니다
        </>,
        '키보드 사용자는 지금 어디에 있는지 보이지 않습니다',
        <>
          <code>:focus-visible</code> 스타일을 되살립니다
        </>,
      ],
      [
        'CSS',
        <>
          닫힌 패널을 <code>opacity: 0</code>으로만 숨겼습니다
        </>,
        '보이지 않는 패널 안 링크에 Tab이 들어가고 화면 낭독기도 그 내용을 읽습니다',
        <>
          <code>hidden</code> 속성이나 <code>display: none</code>으로 숨깁니다
        </>,
      ],
      [
        'JavaScript',
        <>
          패널은 열지만 <code>aria-expanded</code>를 바꾸지 않습니다
        </>,
        '화면은 펼쳐졌는데 화면 낭독기 사용자는 계속 "접힘"을 듣습니다',
        '상태를 바꿀 때 속성도 함께 바꿉니다',
      ],
    ],
    choose: (
      <>
        고칠 곳은 <strong>책임이 있는 층</strong>에서 정합니다. 키보드로 닿지 않는 문제를 JavaScript
        키 이벤트로 덮으면 HTML이 기본으로 주던 동작을 하나씩 다시 만들어야 하고, 하나만 빠져도
        장벽이 남습니다. 이 비교는 <PageLink locale="ko" id="intro" hash="semantic-html" />의
        &quot;접근성과 시맨틱 HTML&quot;에서 표로 정리했습니다.
      </>
    ),
    pitfallTitle: '한 층만 확인하면 다른 층의 결함을 놓칩니다',
    pitfall: (
      <>
        한 층만 보고 &quot;고쳤다&quot;고 판단하지 않습니다. 화면에서 패널이 열리는 것만 확인하면
        JavaScript 층의 결함(상태 속성)은 보이지 않습니다. 화면, 키보드, 개발자 도구의 DOM을 함께
        확인합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        Fix one task: &quot;on a product page, <strong>expand and read the shipping info</strong>
        &quot;. For the same task, who gets blocked and where to fix it depend on which layer the
        defect is in.
      </>
    ),
    caption: 'Expanding shipping info — defects by layer and where to fix them',
    head: ['Layer', 'Defect', 'Who is blocked and how', 'Where to fix'],
    rows: [
      [
        'HTML',
        <>
          The toggle is built as <code>&lt;div onclick&gt;</code>
        </>,
        'Keyboard users cannot reach it with Tab, so they cannot open it',
        <>
          Use a <code>button</code> element
        </>,
      ],
      [
        'CSS',
        <>
          The focus indicator is removed with <code>outline: none</code>
        </>,
        'Keyboard users cannot see where they are',
        <>
          Restore a <code>:focus-visible</code> style
        </>,
      ],
      [
        'CSS',
        <>
          The closed panel is hidden only with <code>opacity: 0</code>
        </>,
        'Tab goes into links in the invisible panel, and screen readers read its content',
        <>
          Hide it with the <code>hidden</code> attribute or <code>display: none</code>
        </>,
      ],
      [
        'JavaScript',
        <>
          The panel opens but <code>aria-expanded</code> is not updated
        </>,
        'The screen shows it expanded, but screen reader users keep hearing "collapsed"',
        'Change the attribute together with the state',
      ],
    ],
    choose: (
      <>
        Decide the fix in <strong>the layer that owns the problem</strong>. If you cover an
        unreachable control with JavaScript key events, you have to rebuild, one by one, the
        behavior HTML gave for free, and missing any one leaves a barrier. &quot;Accessibility and
        semantic HTML&quot; on <PageLink locale="en" id="intro" hash="semantic-html" /> compares
        this in a table.
      </>
    ),
    pitfallTitle: 'Checking one layer misses defects in the others',
    pitfall: (
      <>
        Do not call it fixed after looking at one layer. If you only check that the panel opens on
        screen, the JavaScript-layer defect (the state attribute) stays invisible. Check the screen,
        the keyboard, and the DOM in developer tools together.
      </>
    ),
  },
};

export const OneTaskSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.oneTask.id}>
      <DocH2 {...toc.oneTask} />
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
      <p>{c.choose}</p>
      <Callout variant="pitfall" title={c.pitfallTitle}>
        <p>{c.pitfall}</p>
      </Callout>
    </section>
  );
};
