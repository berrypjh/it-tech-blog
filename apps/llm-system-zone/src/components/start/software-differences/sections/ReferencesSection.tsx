import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const references: DocReference[] = [
  {
    href: 'https://json-schema.org/understanding-json-schema/about',
    source: { ko: 'JSON Schema', en: 'JSON Schema' },
    title: { ko: 'Understanding JSON Schema: About', en: 'Understanding JSON Schema: About' },
    note: {
      ko: '스키마는 데이터의 구조를 기술하고 검증한다. 일부 제약은 표현할 수 없어 의미 검사는 별도 코드가 필요하다',
      en: 'A schema describes and validates data structure. Some constraints cannot be expressed, so semantic checks need separate code',
    },
  },
  {
    href: 'https://www.typescriptlang.org/docs/handbook/2/basic-types.html',
    source: { ko: 'TypeScript', en: 'TypeScript' },
    title: { ko: 'The Basics (Handbook)', en: 'The Basics (Handbook)' },
    note: {
      ko: '타입 주석은 컴파일 때 지워지며 런타임 동작을 바꾸지 않는다',
      en: 'Type annotations are erased at compile time and never change runtime behavior',
    },
  },
  {
    href: 'https://genai.owasp.org/llmrisk/llm052025-improper-output-handling/',
    source: { ko: 'OWASP GenAI', en: 'OWASP GenAI' },
    title: { ko: 'LLM05:2025 Improper Output Handling', en: 'LLM05:2025 Improper Output Handling' },
    note: {
      ko: '모델 출력을 신뢰하지 않고 검증 · 인코딩 · 매개변수화된 쿼리로 다루는 권고',
      en: 'Guidance on not trusting model output and handling it with validation, encoding, and parameterized queries',
    },
  },
  {
    href: 'https://developers.openai.com/cookbook/examples/reproducible_outputs_with_the_seed_parameter',
    source: { ko: 'OpenAI Cookbook', en: 'OpenAI Cookbook' },
    title: {
      ko: 'Reproducible outputs with the seed parameter',
      en: 'Reproducible outputs with the seed parameter',
    },
    note: {
      ko: '한 제공자의 seed 재현성은 best effort이며 같은 조건에서도 달라질 수 있다 (해당 API 한정)',
      en: 'One provider seed reproducibility is best effort and can still differ under the same conditions (that API only)',
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
