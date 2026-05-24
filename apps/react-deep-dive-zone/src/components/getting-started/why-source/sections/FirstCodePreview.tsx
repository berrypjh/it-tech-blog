import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../_shared/CodePreviewPanel';
import { SectionHeader } from '../../_shared/SectionHeader';
import { FileCard } from '../components/FileCard';
import { RepoCard } from '../components/RepoCard';
import type { WhySourceContent } from '../content';
import { ArrowRightIcon, CodeIcon, GithubIcon } from '../icons';

type Props = { content: WhySourceContent['firstCode'] };

export const FirstCodePreview = ({ content }: Props) => {
  return (
    <section
      id="section-first-code"
      aria-labelledby="heading-first-code"
      className={cn(
        'relative space-y-lg',
        'rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)]',
        'p-md sm:p-lg lg:p-xl',
      )}
    >
      <SectionHeader
        id="first-code"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CodeIcon className="h-5 w-5" />}
      />

      {/* 코드 중심 hero: 코드 패널 풀폭 → File·Repo 2열 */}
      <div className="flex flex-col gap-md sm:gap-lg lg:gap-xl">
        <div className="min-w-0">
          <CodePreviewPanel code={content.code.code} language={content.code.language} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md sm:gap-lg lg:gap-xl">
          <FileCard file={content.file} />
          <RepoCard repo={content.repo} />
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-sm pt-sm">
        <a
          href="https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md border border-transparent bg-slate-900 dark:border-slate-600 dark:bg-slate-800 text-slate-50 text-xsm font-bold transition-colors hover:bg-slate-800 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
        >
          <GithubIcon className="h-4 w-4" />
          {content.primaryCta}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href="#section-benefits"
          className="group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
        >
          {content.secondaryCta}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
};
