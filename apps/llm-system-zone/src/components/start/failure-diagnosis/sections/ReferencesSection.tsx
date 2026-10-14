import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const references: DocReference[] = [
  {
    href: 'https://papers.nips.cc/paper/2015/file/86df7dcfd896fcaf2674f757a2463eba-Paper.pdf',
    source: { ko: 'Sculley et al. · NeurIPS 2015', en: 'Sculley et al. · NeurIPS 2015' },
    title: {
      ko: 'Hidden Technical Debt in Machine Learning Systems',
      en: 'Hidden Technical Debt in Machine Learning Systems',
    },
    note: {
      ko: '본문을 확인함: 얽힘(entanglement)과 CACE 원칙(Changing Anything Changes Everything), ML 코드가 시스템의 작은 일부라는 서술. LLM 이전 ML 시스템 대상',
      en: 'Body text checked: entanglement and the CACE principle (Changing Anything Changes Everything), and ML code as a small part of a system. About pre-LLM ML systems',
    },
  },
  {
    href: 'https://opentelemetry.io/docs/concepts/signals/traces/',
    source: { ko: 'OpenTelemetry', en: 'OpenTelemetry' },
    title: { ko: 'Traces (Concepts)', en: 'Traces (Concepts)' },
    note: {
      ko: 'trace와 span의 정의, span의 이름 · 시작과 끝 시각 · 속성 · 상태',
      en: 'Definitions of trace and span; a span’s name, start and end times, attributes, and status',
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
