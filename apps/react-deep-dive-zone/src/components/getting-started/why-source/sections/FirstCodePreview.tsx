import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { FileCard } from '../components/FileCard';
import { RepoCard } from '../components/RepoCard';
import type { WhySourceContent } from '../content';
import { CodeIcon } from '../icons';

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

      <div className="flex flex-col gap-md sm:gap-lg lg:gap-xl">
        <div className="min-w-0">
          <CodePreviewPanel code={content.code.code} language={content.code.language} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md sm:gap-lg lg:gap-xl">
          <FileCard file={content.file} />
          <RepoCard repo={content.repo} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-sm pt-sm">
        <GithubButton
          href="https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js"
          label={content.primaryCta}
        />
      </div>
    </section>
  );
};
