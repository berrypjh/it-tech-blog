import type { Locale } from '@it-tech-blog/preferences';
import { Callout, CodeBlock, DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const MDN_HTML =
  'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML';

const rebuiltDiv = (label: string) => `<div
  role="button"
  tabindex="0"
  onclick="toggleMenu()"
  onkeydown="if (event.key === 'Enter' || event.key === ' ') toggleMenu()"
>
  ${label}
</div>`;

const content = {
  ko: {
    intro: (
      <>
        예제 A의 <code>button</code>은 추가 코드 없이 여러 동작을 제공했습니다. 이것이 시맨틱 HTML이
        접근성의 출발점인 이유입니다. MDN은 이를{' '}
        <ExternalLink href={MDN_HTML}>적절한 요소를 쓰면 이 동작을 무료로 얻는다</ExternalLink>고
        설명합니다. 반대로 의미 없는 요소로 만들면 <strong>전부 직접 다시 만들어야</strong> 합니다.
      </>
    ),
    tableCaption: 'button이 무료로 주는 것과 div로 다시 만들어야 하는 것',
    tableHead: ['기능', '<button>', '<div>로 재구현'],
    rows: [
      ['역할(role) 전달', '기본 제공', 'role="button"'],
      ['Tab 포커스', '기본 제공', 'tabindex="0"'],
      ['Enter / Space 실행', '기본 제공', 'keydown 핸들러 직접 작성'],
      ['비활성 상태', 'disabled', 'aria-disabled + 이벤트 차단 로직'],
      ['폼 제출 연동', 'type="submit"', '직접 구현'],
    ],
    rebuildBody: (
      <>
        표의 오른쪽 열을 모두 적용해도 겨우 <code>button</code> 수준에 도달할 뿐이고, 하나만 빠져도
        장벽이 남습니다.
      </>
    ),
    menuLabel: '메뉴 열기',
    rebuiltLabel: 'div로 버튼을 재구현한 코드 — 이래도 disabled·submit은 아직 없습니다',
    sameLabel: '같은 결과',
    note: (
      <>
        접근성 구현은 ARIA를 추가하는 것보다 먼저, <strong>HTML이 이미 제공하는 의미와 동작</strong>
        을 올바르게 사용하는 데서 시작합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        In Example A, <code>button</code> provided several behaviors with no extra code. That is why
        semantic HTML is where accessibility starts. MDN describes it as{' '}
        <ExternalLink href={MDN_HTML}>
          getting this behavior for free by using the right element
        </ExternalLink>
        . Build with meaningless elements instead, and you{' '}
        <strong>have to rebuild all of it</strong> yourself.
      </>
    ),
    tableCaption: 'What button gives you for free vs. what a div must rebuild',
    tableHead: ['Feature', '<button>', 'Rebuilt with <div>'],
    rows: [
      ['Exposes role', 'Built in', 'role="button"'],
      ['Tab focus', 'Built in', 'tabindex="0"'],
      ['Enter / Space activation', 'Built in', 'Hand-written keydown handler'],
      ['Disabled state', 'disabled', 'aria-disabled + event blocking logic'],
      ['Form submission', 'type="submit"', 'Implement it yourself'],
    ],
    rebuildBody: (
      <>
        Even with every item in the right column applied, you only just reach <code>button</code>{' '}
        level, and missing any one of them leaves a barrier.
      </>
    ),
    menuLabel: 'Open menu',
    rebuiltLabel: 'A button rebuilt with div — still no disabled or submit',
    sameLabel: 'Same result',
    note: (
      <>
        Accessible implementation starts not with adding ARIA, but with correctly using{' '}
        <strong>the meaning and behavior HTML already provides</strong>.
      </>
    ),
  },
};

export const SemanticHtmlSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);
  const rows = c.rows.map(([feature, button, div]) => [
    feature,
    <code key="button">{button}</code>,
    <code key="div">{div}</code>,
  ]);

  return (
    <section aria-labelledby={toc.semanticHtml.id}>
      <DocH2 {...toc.semanticHtml} />
      <p>{c.intro}</p>

      <DocTable caption={c.tableCaption} head={c.tableHead} rows={rows} />

      <p>{c.rebuildBody}</p>
      <CodeBlock label={c.rebuiltLabel} tone="bad" code={rebuiltDiv(c.menuLabel)} />
      <CodeBlock
        className="mt-md"
        label={c.sameLabel}
        tone="good"
        code={`<button type="button" onclick="toggleMenu()">${c.menuLabel}</button>`}
      />

      <Callout variant="note">
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
