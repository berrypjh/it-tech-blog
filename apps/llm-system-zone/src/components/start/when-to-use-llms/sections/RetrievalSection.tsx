import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2, ExternalLink } from '@it-tech-blog/ui';

import { SearchVsGeneration } from '../diagrams/SearchVsGeneration';
import { getToc } from '../toc';

const IR_BOOK =
  'https://nlp.stanford.edu/IR-book/html/htmledition/an-example-information-retrieval-problem-1.html';
const RAG = 'https://arxiv.org/abs/2005.11401';

const content = {
  ko: {
    search: (
      <>
        원하는 것이 정확한 문서나 상품을 찾는 일뿐이라면 기존 검색으로 충분할 수 있습니다. 정보
        검색은 문서 모음에서 사용자의 정보 요구와 관련된 문서를 돌려주는 오래된 작업이고,{' '}
        <ExternalLink href={IR_BOOK}>정보 검색 교재</ExternalLink>는 색인과 불리언 질의 같은 확립된
        방법을 설명합니다.
      </>
    ),
    split: (
      <>
        <strong>검색</strong>과 <strong>검색 결과를 이용한 답변 생성</strong>은 서로 다른 작업이고,
        품질도 따로 봅니다.
      </>
    ),
    after: (
      <>
        후자를 다룬 대표적인 연구가 검색과 생성기를 결합한{' '}
        <ExternalLink href={RAG}>RAG 논문</ExternalLink>입니다. 둘을 분리하면 오답이 났을 때 어느 쪽
        문제인지 찾을 수 있고, 이 구분은 01-05의 진단으로 이어집니다.
      </>
    ),
    noteTitle: '검색 결과 목록만으로 충분하면 생성은 필요 없습니다',
    note: '키워드나 필터로 충분한 요구에는 생성 단계를 더하지 않아도 됩니다. 검색 결과 목록을 보여 주는 것만으로 요구가 충족된다면 검색이 곧 해법입니다.',
  },
  en: {
    search: (
      <>
        If all that is wanted is finding the exact document or product, existing search can be
        enough. Information retrieval is the long-established task of returning documents relevant
        to a user&apos;s information need from a collection, and{' '}
        <ExternalLink href={IR_BOOK}>an information retrieval textbook</ExternalLink> describes
        established methods such as indexes and Boolean queries.
      </>
    ),
    split: (
      <>
        <strong>Search</strong> and <strong>answer generation using search results</strong> are
        different tasks, and their quality is seen separately.
      </>
    ),
    after: (
      <>
        A well-known line of work on the latter is{' '}
        <ExternalLink href={RAG}>the RAG paper</ExternalLink>, which combines retrieval with a
        generator. When they are separated, you can find which side is at fault when a wrong answer
        appears, and this split leads into the diagnosis in 01-05.
      </>
    ),
    noteTitle: 'A list of search results may be the whole solution',
    note: 'A need that keywords or filters satisfy does not require a generation step. If showing a list of search results meets the need, search is the solution.',
  },
};

export const RetrievalSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.retrieval.id}>
      <DocH2 {...toc.retrieval} />
      <p>{c.search}</p>
      <p>{c.split}</p>
      <SearchVsGeneration locale={locale} />
      <p>{c.after}</p>
      <Callout variant="note" title={c.noteTitle}>
        <p>{c.note}</p>
      </Callout>
    </section>
  );
};
