import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const same = (text: string) => ({ ko: text, en: text });

const references: DocReference[] = [
  {
    href: 'https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/',
    source: same('W3C WAI'),
    title: same('Accessibility, Usability, and Inclusion'),
    note: {
      ko: '세 개념의 정의와 관계 (2016년 5월 6일 갱신)',
      en: 'Definitions and relationships of the three concepts (updated 6 May 2016)',
    },
  },
  {
    href: 'https://www.w3.org/TR/WCAG22/#conformance',
    source: same('W3C'),
    title: same('WCAG 2.2 — Conformance'),
    note: {
      ko: '적합성 요구사항 다섯 가지 (W3C Recommendation, 2024년 12월 12일 갱신본)',
      en: 'The five conformance requirements (W3C Recommendation, updated 12 December 2024)',
    },
  },
  {
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/',
    source: same('W3C WAI'),
    title: same('Understanding WCAG 2.2'),
    note: {
      ko: '성공 기준의 의도와 예 — 참고용 문서',
      en: 'Intent and examples of success criteria — informative',
    },
  },
  {
    href: 'https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques',
    source: same('W3C WAI'),
    title: same('Understanding Techniques for WCAG 2.2 Success Criteria'),
    note: {
      ko: '기법은 참고용이고, 실패 사례는 성공 기준 미충족을 뜻한다는 설명',
      en: 'Techniques are informative; failures mean a success criterion is not met',
    },
  },
  {
    href: 'https://www.w3.org/WAI/ARIA/apg/about/introduction/',
    source: same('W3C WAI'),
    title: same('ARIA Authoring Practices Guide — Introduction'),
    note: {
      ko: 'APG가 규범적 표준이 아니라는 설명',
      en: 'Why APG is not a normative standard',
    },
  },
  {
    href: 'https://www.w3.org/WAI/test-evaluate/',
    source: same('W3C WAI'),
    title: same('Evaluating Web Accessibility Overview'),
    note: {
      ko: '도구만으로 적합성을 판단할 수 없다는 설명',
      en: 'Why tools alone cannot determine conformance',
    },
  },
  {
    href: 'https://www.w3.org/WAI/test-evaluate/involving-users/',
    source: same('W3C WAI'),
    title: same('Involving Users in Evaluating Web Accessibility'),
    note: {
      ko: '장애가 있는 사용자와 함께하는 평가',
      en: 'Evaluating with disabled people',
    },
  },
];

export const ReferencesSection = ({ locale }: { locale: Locale }) => {
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.references.id}>
      <DocH2 {...toc.references} />
      <ReferenceList references={references} locale={locale} />
    </section>
  );
};
