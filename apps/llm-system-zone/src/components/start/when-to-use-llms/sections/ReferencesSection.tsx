import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, type DocReference, ReferenceList } from '@it-tech-blog/ui';

import { getToc } from '../toc';

const references: DocReference[] = [
  {
    href: 'https://www.anthropic.com/engineering/building-effective-agents',
    source: { ko: 'Anthropic', en: 'Anthropic' },
    title: { ko: 'Building effective agents', en: 'Building effective agents' },
    note: {
      ko: '단순한 해법으로 시작하고 필요할 때만 복잡성을 더하라는 권고. 한 벤더의 에세이이며 모든 LLM 시스템의 일반 법칙은 아니다',
      en: 'Advice to start with the simplest solution and add complexity only when needed. One vendor’s essay, not a general law for every LLM system',
    },
  },
  {
    href: 'https://arxiv.org/abs/2005.11401',
    source: { ko: 'Lewis et al. · arXiv (2020)', en: 'Lewis et al. · arXiv (2020)' },
    title: {
      ko: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
      en: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
    },
    note: {
      ko: '사전학습 생성 모델과 외부 검색 기억을 결합하는 RAG. 근거 제시와 지식 갱신이 열린 문제라고 서술',
      en: 'RAG combines a pretrained generator with an external retrieval memory; provenance and knowledge updating are described as open problems',
    },
  },
  {
    href: 'https://nlp.stanford.edu/IR-book/html/htmledition/an-example-information-retrieval-problem-1.html',
    source: { ko: 'Manning et al.', en: 'Manning et al.' },
    title: {
      ko: 'Introduction to Information Retrieval: An example information retrieval problem',
      en: 'Introduction to Information Retrieval: An example information retrieval problem',
    },
    note: {
      ko: '정보 검색을 문서 모음에서 관련 문서를 찾는 작업으로 정의하고 불리언 질의와 색인을 설명',
      en: 'Frames information retrieval as finding relevant documents in a collection and explains Boolean queries and indexes',
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
