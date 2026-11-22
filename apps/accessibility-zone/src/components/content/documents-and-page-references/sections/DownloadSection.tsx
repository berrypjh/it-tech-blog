import type { Locale } from '@it-tech-blog/preferences';
import { Callout, DocH2 } from '@it-tech-blog/ui';

import { PageLink } from '@/components/shared/PageLink';

import { guideBytes, guideHref } from '../guide';
import { getToc } from '../toc';

const content = {
  ko: {
    intro: (
      <>
        내려받기 링크는 누르기 전에 무엇이 오는지 알려야 합니다. 형식, 언어, 크기입니다. 이 값을
        손으로 적으면 파일이 바뀔 때 어긋나므로, 아래 링크의 크기는 실제로 내려보내는 내용에서
        계산합니다.
      </>
    ),
    link: (bytes: number) =>
      `행사 안내 내려받기 (TXT · 한국어 · ${bytes.toLocaleString('ko')}바이트)`,
    pdfTitle: '파일이 있다고 접근성을 판정하지 않습니다',
    pdf: (locale: Locale) => (
      <>
        PDF나 문서 뷰어는 파일이 있다는 사실만으로 접근 가능하다고 볼 수 없습니다. 태그 구조, 읽기
        순서, 그림의 대체 텍스트, 문서 언어, 표 헤더를 검사 도구와 보조기술로 따로 확인해야 하고,
        하지 않았다면 미확인입니다. 이 페이지는 PDF를 내지 않으므로 PDF 판정은 해당 없음이고, 판정을
        적는 형식은{' '}
        <PageLink locale={locale} id="requirements-and-obligations" hash="final-judgment-record" />
        과 같습니다.
      </>
    ),
  },
  en: {
    intro: (
      <>
        A download link should say what will arrive before it is pressed: format, language, and
        size. Written by hand, these drift when the file changes, so the size in the link below is
        computed from the content actually sent.
      </>
    ),
    link: (bytes: number) =>
      `Download the event notice (TXT, English, ${bytes.toLocaleString('en')} bytes)`,
    pdfTitle: 'A file existing is not an accessibility verdict',
    pdf: (locale: Locale) => (
      <>
        A PDF or document viewer is not accessible just because the file exists. Tag structure,
        reading order, image text alternatives, document language, and table headers must each be
        checked with tools and assistive technology; anything not checked is unconfirmed. This page
        offers no PDF, so a PDF verdict is not applicable here, and the record format is the one on{' '}
        <PageLink locale={locale} id="requirements-and-obligations" hash="final-judgment-record" />.
      </>
    ),
  },
};

export const DownloadSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.download.id}>
      <DocH2 {...toc.download} />
      <p>{c.intro}</p>
      <p>
        <a href={guideHref(locale)} download>
          {c.link(guideBytes(locale))}
        </a>
      </p>
      <Callout variant="pitfall" title={c.pdfTitle}>
        <p>{c.pdf(locale)}</p>
      </Callout>
    </section>
  );
};
