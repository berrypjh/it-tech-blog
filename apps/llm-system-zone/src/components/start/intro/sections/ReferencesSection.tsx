import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const references: DocReference[] = [
  {
    href: 'https://arxiv.org/abs/2108.07258',
    source: { ko: 'arXiv', en: 'arXiv' },
    title: {
      ko: 'On the Opportunities and Risks of Foundation Models',
      en: 'On the Opportunities and Risks of Foundation Models',
    },
    note: {
      ko: '파운데이션 모델의 정의(넓은 데이터로 대규모 학습, 다양한 작업에 적응)와 규모에서 오는 위험',
      en: 'Definition of foundation models (broad data at scale, adaptable to many tasks) and risks that come with scale',
    },
  },
  {
    href: 'https://www.anthropic.com/engineering/building-effective-agents',
    source: { ko: 'Anthropic', en: 'Anthropic' },
    title: { ko: 'Building effective agents', en: 'Building effective agents' },
    note: {
      ko: '단순한 해법으로 시작할 것, 정해진 코드 경로의 workflow와 모델이 경로를 정하는 agent의 구분',
      en: 'Start with the simplest solution; workflows with predefined code paths vs. agents that direct their own process',
    },
  },
  {
    href: 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/',
    source: { ko: 'OWASP GenAI', en: 'OWASP GenAI' },
    title: { ko: 'LLM06:2025 Excessive Agency', en: 'LLM06:2025 Excessive Agency' },
    note: {
      ko: '최소 권한, 하위 시스템에서의 권한 검사, 영향이 큰 동작의 사람 승인',
      en: 'Minimal permissions, authorization in downstream systems, human approval for high-impact actions',
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
