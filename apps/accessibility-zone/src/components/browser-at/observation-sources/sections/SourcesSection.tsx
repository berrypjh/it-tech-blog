import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';
import { type SourceId, SourceTag } from '@/components/shared/SourceTag';
import { ThemedFigure } from '@/components/shared/ThemedFigure';

import fourSourcesDark from '../images/four-sources-dark.webp';
import fourSourcesLight from '../images/four-sources-light.webp';
import { getToc } from '../toc';

const rows: { id: SourceId; ko: [string, string]; en: [string, string] }[] = [
  {
    id: 'model',
    ko: [
      '명세와 흔한 구현으로 세운 예상. 이 장의 "흔히 보이는 결과" 표',
      '지금 쓰는 브라우저 · 보조기술에서 실제로 그렇다는 것',
    ],
    en: [
      'An expectation built from specs and common implementations; this chapter’s "commonly seen result" tables',
      'That it is actually so in the browser and assistive technology you use',
    ],
  },
  {
    id: 'dom',
    ko: [
      '이 브라우저의 실제 속성 · 속성값(property) · 포커스. 이 장의 실습 패널',
      '브라우저가 계산한 역할 · 이름, 접근성 트리 전체',
    ],
    en: [
      'Real attributes, properties, and focus in this browser; this chapter’s exercise panels',
      'Role and name as the browser computed them; the whole accessibility tree',
    ],
  },
  {
    id: 'devtools',
    ko: [
      '그 브라우저가 계산한 접근성 트리의 역할 · 이름 · 상태 · 관계',
      '운영체제 API로 실제로 나간 값, 보조기술이 읽는 말과 순서',
    ],
    en: [
      'Role, name, state, and relations in that browser’s computed accessibility tree',
      'What actually went out through the OS API; the words and order assistive technology speaks',
    ],
  },
  {
    id: 'at',
    ko: ['그 보조기술 · 브라우저 · 운영체제 조합에서 실제로 들은 결과', '다른 조합에서의 결과'],
    en: [
      'The result actually heard with that assistive technology, browser, and OS combination',
      'Results with other combinations',
    ],
  },
];

const content = {
  ko: {
    figure: {
      alt: '가운데 강조된 체크박스 하나를 향해 네 칸이 점선 화살표를 보냅니다. 설계도가 펼쳐진 책, 코드 괄호와 노드 트리, 렌치와 노드 트리, 헤드폰입니다. 헤드폰 칸만 점선 테두리입니다.',
      caption:
        '같은 체크박스도 교육용 모델 · 실제 DOM · 브라우저 도구 · 실제 보조기술 네 곳에서 따로 관찰합니다. 실제 보조기술 관찰은 별도로 해야 하는 확인입니다. 학습용으로 단순화한 그림입니다.',
    },
    intro: (
      <>
        <PageLink locale="ko" id="devtools-tracing" hash="three-levels" />
        에서는 확인 수준을 셋으로 나눴습니다. 이 장은 여기에 교육용 모델을 더해 네 가지 출처로
        씁니다.
      </>
    ),
    caption: '관찰 출처마다 증명하는 것',
    head: ['출처', '증명하는 것', '증명하지 못하는 것'],
  },
  en: {
    figure: {
      alt: 'Four panels send dotted arrows toward one highlighted checkbox in the center: a book open to a blueprint, code brackets with a node tree, a wrench with a node tree, and headphones. Only the headphones panel has a dashed border.',
      caption:
        'The same checkbox is observed separately in four places: teaching model, real DOM, browser tools, and real assistive technology. Checking with real assistive technology is a separate step. A simplified teaching picture.',
    },
    intro: (
      <>
        <PageLink locale="en" id="devtools-tracing" hash="three-levels" /> split checking into three
        levels. This chapter adds teaching models and uses four sources.
      </>
    ),
    caption: 'What each source of observation proves',
    head: ['Source', 'Proves', 'Does not prove'],
  },
};

export const SourcesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.sources.id}>
      <DocH2 {...toc.sources} />
      <p>{c.intro}</p>
      <ThemedFigure light={fourSourcesLight} dark={fourSourcesDark} {...c.figure} />
      <DocTable
        caption={c.caption}
        head={c.head}
        rows={rows.map((row) => [
          <SourceTag key="source" locale={locale} id={row.id} />,
          row[locale][0],
          row[locale][1],
        ])}
      />
    </section>
  );
};
