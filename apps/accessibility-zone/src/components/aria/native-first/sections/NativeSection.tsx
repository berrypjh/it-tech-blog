import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { Kbd } from '@/components/shared/Kbd';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        HTML 요소 하나는 의미와 동작을 묶어서 줍니다. 링크는 &quot;이동한다&quot;는 의미와 이동
        동작을, 버튼은 &quot;실행한다&quot;는 의미와 실행 동작을, 체크박스는 &quot;켜고 끈다&quot;는
        의미와 체크 상태를 함께 갖습니다. 아래 표는 세 요소가 작성자가 아무것도 더하지 않아도 갖는
        것입니다.
      </>
    ),
    caption: '세 요소가 기본으로 주는 의미와 동작',
    head: ['항목', '<a href>', '<button>', '<input type="checkbox">'],
    rows: [
      ['노출되는 역할', '링크', '버튼', '체크박스'],
      ['Tab으로 포커스', '받습니다', '받습니다', '받습니다'],
      [<Kbd key="enter">Enter</Kbd>, '이동', '실행', '체크를 바꾸지 않습니다'],
      [<Kbd key="space">Space</Kbd>, '실행되지 않습니다 — 스크롤', '실행', '체크 상태를 바꿉니다'],
      ['상태', '없음', '없음', '체크됨 · 해제를 브라우저가 갱신'],
      ['쓸 수 없게 하기', 'href를 뺍니다', 'disabled', 'disabled'],
    ],
    after: (
      <>
        역할과 상태는 HTML-AAM이 정한 매핑에서 나오고, 어떤 키가 실행을 일으키는지는 브라우저와
        플랫폼의 관례입니다. 키 동작은{' '}
        <PageLink locale="ko" id="text-and-controls" hash="link-or-button" />의 실습에서 지금 쓰는
        브라우저로 직접 확인합니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        One HTML element bundles meaning with behavior. A link has the meaning &quot;go
        somewhere&quot; and the navigation behavior; a button has the meaning &quot;do
        something&quot; and the activation behavior; a checkbox has the meaning &quot;turn on or
        off&quot; and a checked state. The table below is what the three elements have without the
        author adding anything.
      </>
    ),
    caption: 'The meaning and behavior the three elements give by default',
    head: ['Item', '<a href>', '<button>', '<input type="checkbox">'],
    rows: [
      ['Exposed role', 'link', 'button', 'checkbox'],
      ['Focus with Tab', 'Yes', 'Yes', 'Yes'],
      [<Kbd key="enter">Enter</Kbd>, 'Navigates', 'Activates', 'Does not change the check'],
      [
        <Kbd key="space">Space</Kbd>,
        'Does not activate — scrolls',
        'Activates',
        'Toggles the check',
      ],
      ['State', 'None', 'None', 'Checked or unchecked, kept up to date by the browser'],
      ['Making it unusable', 'Remove href', 'disabled', 'disabled'],
    ],
    after: (
      <>
        Roles and states come from the HTML-AAM mappings, while which key triggers activation is a
        browser and platform convention. Check the key behavior in your own browser in the exercise
        on <PageLink locale="en" id="text-and-controls" hash="link-or-button" />.
      </>
    ),
  },
};

export const NativeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.native.id}>
      <DocH2 {...toc.native} />
      <p>{c.intro}</p>
      <p>
        <SourceTag locale={locale} id="model" />
      </p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
