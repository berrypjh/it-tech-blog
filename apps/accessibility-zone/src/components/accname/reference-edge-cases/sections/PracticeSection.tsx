import type { Locale } from '@it-tech-blog/preferences';
import { CodeBlock, DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { EdgeCasesDemo } from '../demos/EdgeCasesDemo';
import { getToc } from '../toc';

const template = {
  ko: `사례:
읽은 판본 · 단계: (예: AccName 1.2 초안 2026-11-04 · LabelledBy)
명세상 예상 이름: (판본마다 다르면 둘 다, 해석이 갈리면 "미확정")
관찰한 엔진 · 버전:
관찰값: (브라우저 도구에 나온 이름. 보지 않았으면 "미실행")
재현 조건: (코드 · 브라우저 설정 · 확대 배율 등)
차이와 해석:`,
  en: `Case:
Edition and step read: (e.g. AccName 1.2 draft 2026-11-04 · LabelledBy)
Expected name in the specs: (both if editions differ, "undecided" if readings split)
Engine and version observed:
Observed value: (the name shown in browser tools; "not run" if you did not look)
Reproduction conditions: (code, browser settings, zoom, and so on)
Difference and interpretation:`,
};

const content = {
  ko: {
    intro: (
      <>
        실습의 사례는 모두 원문 단계와 대조해 둔 것입니다. 끊긴 참조 · 빈 이름 · 순환 같은 사례는
        일반 화면이 아닌 검사용 예제로만 둡니다. 기록은{' '}
        <PageLink locale="ko" id="observation-sources" hash="observation-record" />의 관찰 기록처럼
        예상과 관찰을 다른 칸에 적습니다.
      </>
    ),
    label: '경계 사례 기록 틀',
  },
  en: {
    intro: (
      <>
        Every case in the exercise has been checked against the steps in the text. Cases such as
        broken references, empty names, and loops are kept only as inspection samples, not in the
        regular page. As in the observation record on{' '}
        <PageLink locale="en" id="observation-sources" hash="observation-record" />, write the
        expectation and the observation in separate fields.
      </>
    ),
    label: 'Record template for edge cases',
  },
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{c.intro}</p>
      <CodeBlock code={template[locale]} label={c.label} />
      <EdgeCasesDemo />
    </section>
  );
};
