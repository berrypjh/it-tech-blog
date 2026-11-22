import type { Locale } from '@it-tech-blog/preferences';
import { DocH2, DocTable, ExternalLink } from '@it-tech-blog/ui';

import { KWCAG_REGISTRY } from '@/components/shared/kwcag';
import { PageLink } from '@/components/shared/PageLink';
import { SourceTag } from '@/components/shared/SourceTag';
import { CONTENT_CHECKED_ON } from '@/components/shared/wcag';

import { getToc } from '../toc';

const NIA_244 = 'https://nia-a11y.github.io/kwcag22tech/2/4/4/';

const content = {
  ko: {
    intro: (locale: Locale) => (
      <>
        종이책과 전자책을 함께 쓰는 수업에서 “26쪽 첫 문단”을 찾으려면, 화면 크기와 글자 크기가
        달라도 같은 원본 위치를 가리키는 표시가 필요합니다. 위 실습의 쪽 구분 표시가 그 역할을
        합니다. KWCAG 2.2는 이를 2.4.4로 다루는데, WCAG 2.2의 2.4.4와 번호만 같고 내용이 다릅니다.
        두 표준의 대응은 <PageLink locale={locale} id="kwcag-and-wcag" />
        에서 확인한 방식으로 봅니다.
      </>
    ),
    cite: 'NIA 디지털 접근성 아카이브 — 웹 접근성을 고려한 콘텐츠 제작기법 2.2 개정판, 2.4.4 고정된 참조 위치 정보 (마지막 업데이트 2025-03-31)',
    quoteNote:
      '해설 사이트에서 옮긴 검사 항목 문장입니다. 표준 원문(KS X OT0003:2022 첨부 문서)과의 문구 대조는 하지 않아 미확인입니다.',
    registry: '표준 등록 페이지 (국립전파연구원)',
    caption: '같은 번호, 다른 내용',
    head: ['번호', '문서', '내용'],
    rows: [
      [
        '2.4.4',
        'KWCAG 2.2 (KS X OT0003:2022)',
        '고정된 참조 위치 정보 — 전자출판문서 형식 웹 페이지에만 적용',
      ],
      [
        '2.4.4',
        'WCAG 2.2 (W3C Recommendation, 2024-12-12)',
        'Link Purpose (In Context) — 링크의 목적',
      ],
      ['—', 'WCAG 2.2', '쪽 이동 · 고정 참조 위치를 다루는 성공 기준 없음'],
    ],
    after: (
      <>
        그래서 기록에는 번호만 쓰지 않고 “KWCAG 2.2 2.4.4 고정된 참조 위치 정보”처럼 표준 이름과
        항목 이름을 함께 적습니다. 같은 해설 페이지는 PDF 파일을 제공하는 뷰어를 이 항목의 검사
        대상이 아닌 사례로 듭니다. 그렇다고 PDF가 접근 가능하다는 뜻은 아니며, PDF 자체는 따로
        판정합니다.
      </>
    ),
  },
  en: {
    intro: (locale: Locale) => (
      <>
        In a class using both a printed book and an e-book, finding “the first paragraph of page 26”
        needs markers that point to the same original location whatever the screen and text size.
        The page markers in the exercise above do that. KWCAG 2.2 covers this as 2.4.4, which shares
        only its number with WCAG 2.2’s 2.4.4. Read the mapping between the two standards as on{' '}
        <PageLink locale={locale} id="kwcag-and-wcag" />.
      </>
    ),
    cite: 'NIA Digital Accessibility Archive — Content production techniques for web accessibility 2.2 (revised), 2.4.4 Fixed reference location information (last updated 2025-03-31)',
    quoteNote:
      'The test item sentence as given on the guidance site, quoted in Korean. It has not been compared with the standard’s original (the document attached to KS X OT0003:2022), so that is unconfirmed.',
    registry: 'Standard registry page (National Radio Research Agency)',
    caption: 'Same number, different content',
    head: ['Number', 'Document', 'Content'],
    rows: [
      [
        '2.4.4',
        'KWCAG 2.2 (KS X OT0003:2022)',
        'Fixed reference location information; applies only to web pages in e-publication format',
      ],
      ['2.4.4', 'WCAG 2.2 (W3C Recommendation, 2024-12-12)', 'Link Purpose (In Context)'],
      ['—', 'WCAG 2.2', 'No success criterion on page navigation or fixed reference points'],
    ],
    after: (
      <>
        So records do not use the number alone; write the standard and item name together, as in
        “KWCAG 2.2 2.4.4 Fixed reference location information.” The same guidance page lists a
        viewer that provides a PDF file as a case outside this item. That does not make the PDF
        accessible; the PDF itself is judged separately.
      </>
    ),
  },
};

export const PagesSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.pages.id}>
      <DocH2 {...toc.pages} />
      <p>{c.intro(locale)}</p>
      <figure className="my-xl rounded-md border border-stroke-light bg-background-default p-lg">
        <p className="mb-sm">
          <SourceTag locale={locale} id="informative" />
        </p>
        <blockquote
          cite={NIA_244}
          lang="ko"
          className="border-l-2 border-stroke-primary pl-md text-xsm"
        >
          전자출판문서 형식의 웹 페이지는 각 페이지로 이동할 수 있는 기능이 있어야 하고, 서식이나
          플랫폼에 상관없이 참조 위치 정보를 일관되게 제공ㆍ유지해야 한다.
        </blockquote>
        <figcaption className="mt-sm flex flex-col gap-2xs text-xxsm text-text-light">
          <span>
            <ExternalLink href={NIA_244}>{c.cite}</ExternalLink> · {CONTENT_CHECKED_ON[locale]}
          </span>
          <span>{c.quoteNote}</span>
          <ExternalLink href={KWCAG_REGISTRY}>{c.registry}</ExternalLink>
        </figcaption>
      </figure>
      <DocTable caption={c.caption} head={c.head} rows={c.rows} />
      <p>{c.after}</p>
    </section>
  );
};
