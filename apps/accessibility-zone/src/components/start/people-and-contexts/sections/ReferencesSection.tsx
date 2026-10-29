import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const same = (text: string) => ({ ko: text, en: text });

const references: DocReference[] = [
  {
    href: 'https://www.w3.org/WAI/people-use-web/abilities-barriers/',
    source: same('W3C WAI'),
    title: same('Diverse Abilities and Barriers'),
    note: {
      ko: '청각 · 인지와 학습 · 신체 · 말하기 · 시각별 장벽과 복합 장애',
      en: 'Barriers by auditory, cognitive and learning, physical, speech, and visual, and combined disabilities',
    },
  },
  {
    href: 'https://www.w3.org/WAI/people-use-web/tools-techniques/',
    source: same('W3C WAI'),
    title: same('Tools and Techniques'),
    note: {
      ko: '보조기술과 적응 전략 — 화면 낭독기, 확대, 음성 인식, 스위치 등',
      en: 'Assistive technology and adaptive strategies — screen readers, magnification, speech recognition, switches',
    },
  },
  {
    href: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
    source: same('W3C WAI'),
    title: same('Introduction to Web Accessibility'),
    note: {
      ko: '일시적 장애와 상황적 제약의 예',
      en: 'Examples of temporary disabilities and situational limitations',
    },
  },
  {
    href: 'https://www.w3.org/WAI/test-evaluate/involving-users/',
    source: same('W3C WAI'),
    title: same('Involving Users in Evaluating Web Accessibility'),
    note: {
      ko: '장애가 있는 사용자와 함께하는 평가의 고려 사항',
      en: 'Considerations for evaluation with disabled people',
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
      ko: '실제 사용 장면을 짧은 영상으로 확인',
      en: 'Short videos of real use',
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
