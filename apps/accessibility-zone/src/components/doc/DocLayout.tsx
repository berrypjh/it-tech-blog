import { Toc, type TocItem } from './Toc';

/** 본문 + 우측 고정 목차로 구성된 문서 페이지 레이아웃. */
export const DocLayout = ({ toc, children }: { toc: TocItem[]; children: React.ReactNode }) => (
  <div className="mx-auto flex w-full max-w-[1120px] gap-4xl px-lg py-2xl sm:px-2xl lg:py-4xl">
    <article className="doc-prose zone-enter min-w-0 max-w-[46rem] flex-1">{children}</article>
    <div className="zone-enter-aside hidden w-52 shrink-0 xl:block">
      <div className="sticky top-2xl">
        <Toc items={toc} />
      </div>
    </div>
  </div>
);
