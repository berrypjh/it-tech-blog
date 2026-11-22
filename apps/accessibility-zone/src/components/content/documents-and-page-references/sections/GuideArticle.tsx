import type { Locale } from '@it-tech-blog/preferences';

import { guidePages, pageLabel } from '../guide';

const nav = { ko: '쪽 이동', en: 'Go to page' };

/** 행사 안내의 HTML 판. 인쇄본의 쪽이 시작하는 자리에 쪽 구분 표시를 두고, 쪽 이동 링크를 둔다. */
export const GuideArticle = ({ locale }: { locale: Locale }) => {
  const pages = guidePages(locale);

  return (
    <article className="flex flex-col gap-sm rounded-sm border border-stroke-light p-md">
      <nav aria-label={nav[locale]} className="flex flex-wrap gap-md text-xsm">
        {pages.map((_, i) => (
          <a key={i} href={`#guide-page-${i + 1}`}>
            {pageLabel(locale, i + 1)}
          </a>
        ))}
      </nav>
      {pages.map((lines, i) => (
        <div key={i} className="flex flex-col gap-xs">
          <span
            id={`guide-page-${i + 1}`}
            role="doc-pagebreak"
            aria-label={pageLabel(locale, i + 1)}
            className="scroll-mt-[var(--shell-header-h)] border-t border-dashed border-stroke-default pt-xs text-xxsm text-text-light"
          >
            {pageLabel(locale, i + 1)}
          </span>
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ))}
    </article>
  );
};
