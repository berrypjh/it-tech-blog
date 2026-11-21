import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const content = {
  ko: {
    intro: '셋 다 "고대비"나 "어두운 화면"과 함께 불리지만, 누가 무엇을 정하는지가 다릅니다.',
    caption: '세 가지 색 환경',
    head: ['구분', '누가 정하나', '페이지의 색', '확인하는 곳'],
    rows: [
      [
        'Forced Colors',
        '사용자 · 운영체제의 색 설정',
        '브라우저가 제한된 색으로 강제',
        <code key="a">@media (forced-colors: active)</code>,
      ],
      [
        '앱의 다크 테마',
        '사이트의 테마 설정',
        '작성자의 색을 그대로 사용',
        '이 사이트는 html의 class',
      ],
      [
        '대비 선호',
        '사용자의 설정',
        '바뀌지 않음. 작성자가 응답할 수 있음',
        <code key="a">@media (prefers-contrast: more)</code>,
      ],
    ],
    after: (
      <>
        Forced Colors가 켜지면 글자 · 배경 · 테두리 · 아웃라인 등의 색이 강제되고,{' '}
        <code>box-shadow</code>는 <code>none</code>이 됩니다. <code>url()</code>이 없는{' '}
        <code>background-image</code>도 <code>none</code>이 됩니다.
      </>
    ),
  },
  en: {
    intro:
      'All three get called "high contrast" or "dark screen," but who decides what is different.',
    caption: 'Three color environments',
    head: ['Kind', 'Who decides', 'Page colors', 'Where to check'],
    rows: [
      [
        'Forced colors',
        'The user’s or OS color settings',
        'The browser enforces a limited palette',
        <code key="a">@media (forced-colors: active)</code>,
      ],
      [
        'App dark theme',
        'The site’s theme setting',
        'Author colors are used',
        'The class on html here',
      ],
      [
        'Contrast preference',
        'The user’s setting',
        'Unchanged; authors may respond',
        <code key="a">@media (prefers-contrast: more)</code>,
      ],
    ],
    after: (
      <>
        With forced colors on, colors of text, backgrounds, borders, outlines, and more are
        enforced, and <code>box-shadow</code> becomes <code>none</code>. So does a{' '}
        <code>background-image</code> without <code>url()</code>.
      </>
    ),
  },
};

export const ConceptsSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.concepts.id}>
      <DocH2 {...toc.concepts} />
      <p>{c.intro}</p>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
