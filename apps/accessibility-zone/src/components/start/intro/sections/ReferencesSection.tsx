import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const same = (text: string) => ({ ko: text, en: text });

const references: DocReference[] = [
  {
    href: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
    source: same('W3C WAI'),
    title: same('Introduction to Web Accessibility'),
    note: {
      ko: '웹접근성의 정의, 대상 장애 범위, 일시적·상황적 제약과의 관계',
      en: 'Definition, disabilities covered, and relation to temporary and situational limitations',
    },
  },
  {
    href: 'https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/',
    source: same('W3C WAI'),
    title: same('Accessibility, Usability, and Inclusion'),
    note: {
      ko: '접근성과 사용성의 차이와 겹치는 영역',
      en: 'How accessibility and usability differ and overlap',
    },
  },
  {
    href: 'https://www.w3.org/WAI/people-use-web/abilities-barriers/',
    source: same('W3C WAI'),
    title: same('How People with Disabilities Use the Web: Abilities and Barriers'),
    note: {
      ko: '능력과 장벽을 기능적 관점으로 서술',
      en: 'Abilities and barriers described from a functional perspective',
    },
  },
  {
    href: 'https://www.w3.org/WAI/perspective-videos/',
    source: same('W3C WAI'),
    title: {
      ko: 'Web Accessibility Perspectives (영상)',
      en: 'Web Accessibility Perspectives (videos)',
    },
    note: {
      ko: '보조기술 사용 장면을 1~2분 영상으로 확인',
      en: 'See assistive technology in use in 1–2 minute videos',
    },
  },
  {
    href: 'https://www.w3.org/TR/WCAG22/',
    source: same('W3C'),
    title: same('Web Content Accessibility Guidelines (WCAG) 2.2'),
    note: { ko: 'W3C Recommendation 명세 원문', en: 'The W3C Recommendation itself' },
  },
  {
    href: 'https://www.w3.org/WAI/standards-guidelines/wcag/glance/',
    source: same('W3C WAI'),
    title: same('WCAG 2 at a Glance'),
    note: { ko: 'POUR 네 원칙 요약', en: 'Summary of the four POUR principles' },
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML',
    source: same('MDN'),
    title: same('HTML: A good basis for accessibility'),
    note: {
      ko: '시맨틱 HTML이 주는 기본 키보드 동작과 label 연결',
      en: 'Built-in keyboard behavior and label association from semantic HTML',
    },
  },
  {
    href: 'https://developer.chrome.com/docs/devtools/accessibility/reference',
    source: same('Chrome'),
    title: same('Accessibility features reference (DevTools)'),
    note: {
      ko: 'Accessibility 탭에서 역할·이름·접근성 트리 확인',
      en: 'Inspect role, name, and the accessibility tree in the Accessibility pane',
    },
  },
  {
    href: 'https://www.rra.go.kr/ko/reference/kcsList_view.do?nb_seq=5247&nb_type=6',
    source: { ko: '국립전파연구원', en: 'RRA (Korea)' },
    title: {
      ko: '한국형 웹 콘텐츠 접근성 지침 2.2 (KS X OT0003)',
      en: 'Korean Web Content Accessibility Guidelines 2.2 (KS X OT0003)',
    },
    note: {
      ko: '2022년 12월 28일 개정 고시된 국가표준 원문 안내',
      en: 'Official page for the national standard revised on Dec 28, 2022 (in Korean)',
    },
  },
  {
    href: 'https://www.nia.or.kr/site/nia_kor/ex/bbs/View.do?cbIdx=90549&bcIdx=25083&parentSeq=25083',
    source: same('NIA'),
    title: {
      ko: '웹 접근성 국가표준 개정 보도자료',
      en: 'Press release on the revised national accessibility standard',
    },
    note: {
      ko: 'KS X OT0003 개정 배경과 추가 검사 항목',
      en: 'Background of the KS X OT0003 revision and added test items (in Korean)',
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
