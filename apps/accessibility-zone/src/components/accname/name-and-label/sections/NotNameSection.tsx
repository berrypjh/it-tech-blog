import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, DocTable } from '@it-tech-blog/ui';

import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        화면에 보이는 글자, DOM의 <code>textContent</code>, 계산된 접근성 이름은 서로 다른 값입니다.
        아래 네 요소는 그 셋이 어긋나는 흔한 경우입니다.
      </>
    ),
    caption: '보이는 글자 · textContent · 예상 이름이 어긋나는 경우',
    head: ['코드', 'textContent', '예상 이름', '어긋나는 까닭'],
    rows: [
      [
        <code key="c">&lt;button aria-label=&quot;닫기&quot;&gt;×&lt;/button&gt;</code>,
        '"×"',
        '"닫기"',
        'aria-label이 내용보다 먼저 쓰입니다',
      ],
      [
        <code key="c">&lt;img src=&quot;room.jpg&quot; alt=&quot;객실 A 전경&quot;&gt;</code>,
        '""',
        '"객실 A 전경"',
        'img는 alt에서 이름을 얻습니다',
      ],
      [
        <code key="c">&lt;button&gt;&lt;span hidden&gt;임시&lt;/span&gt;저장&lt;/button&gt;</code>,
        '"임시저장"',
        '"저장"',
        '숨긴 자손은 내용에서 이름을 만들 때 빠집니다',
      ],
      [
        <code key="c">
          &lt;label&gt;받는 분 &lt;input value=&quot;김하늘&quot;&gt;&lt;/label&gt;
        </code>,
        '"받는 분 "',
        '"받는 분"',
        '"김하늘"은 이름이 아니라 입력 칸의 값입니다',
      ],
    ],
    after: (
      <>
        textContent는 DOM이 가진 글자를 모두 이어 붙일 뿐, 숨김 · ARIA 속성 · 요소별 규칙을 따지지
        않습니다. 그래서 이 사이트의 실습이 DOM에서 읽어 보여 주는 값도 계산된 이름이 아닙니다.
      </>
    ),
    calloutTitle: '계산된 이름은 브라우저 도구에서 읽습니다',
    callout: (
      <>
        Chrome은 Elements 패널의 Accessibility 탭, Firefox는 접근성 검사기에서 계산된 이름을 볼 수
        있습니다. 이 장의 표에 적은 이름은 명세를 따라 예상한 값이고, 브라우저에서 본 값은 따로
        &quot;관찰값&quot;으로 적습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        The text shown on screen, the DOM&apos;s <code>textContent</code>, and the computed
        accessible name are different values. The four elements below are common cases where they
        disagree.
      </>
    ),
    caption: 'Cases where visible text, textContent, and the expected name disagree',
    head: ['Code', 'textContent', 'Expected name', 'Why they disagree'],
    rows: [
      [
        <code key="c">&lt;button aria-label=&quot;Close&quot;&gt;×&lt;/button&gt;</code>,
        '"×"',
        '"Close"',
        'aria-label is used before the content',
      ],
      [
        <code key="c">&lt;img src=&quot;room.jpg&quot; alt=&quot;View of room A&quot;&gt;</code>,
        '""',
        '"View of room A"',
        'img gets its name from alt',
      ],
      [
        <code key="c">
          &lt;button&gt;&lt;span hidden&gt;Draft &lt;/span&gt;Save&lt;/button&gt;
        </code>,
        '"Draft Save"',
        '"Save"',
        'Hidden descendants are left out when the name is built from content',
      ],
      [
        <code key="c">
          &lt;label&gt;Recipient &lt;input value=&quot;Kim&quot;&gt;&lt;/label&gt;
        </code>,
        '"Recipient "',
        '"Recipient"',
        '"Kim" is the input’s value, not its name',
      ],
    ],
    after: (
      <>
        textContent only joins all the text the DOM holds; it does not consider hiding, ARIA
        attributes, or per-element rules. So the values this site&apos;s exercises read from the DOM
        are not computed names either.
      </>
    ),
    calloutTitle: 'Read computed names in browser tools',
    callout: (
      <>
        You can see the computed name in the Accessibility tab of the Elements panel in Chrome, or
        in the Accessibility Inspector in Firefox. Names in this chapter&apos;s tables are values
        expected from the specs; record what you see in a browser separately as an &quot;observed
        value.&quot;
      </>
    ),
  },
};

export const NotNameSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.notName.id}>
      <DocH2 {...toc.notName} />
      <p>{c.intro}</p>
      <p className="flex flex-wrap gap-sm">
        <SourceTag locale={locale} id="example" />
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
      <Callout variant="note" title={c.calloutTitle}>
        {c.callout}
      </Callout>
    </section>
  );
};
