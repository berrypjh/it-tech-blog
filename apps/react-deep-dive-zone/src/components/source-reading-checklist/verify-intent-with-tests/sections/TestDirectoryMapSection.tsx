import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { DirectoryCard, TestAsDocContent } from '../content';
import { FileCodeIcon, FolderTreeIcon, ScanSearchIcon } from '../icons';

type Props = { content: TestAsDocContent['testDirectoryMap'] };

const dirTone = {
  reconciler: 'violet',
  react: 'blue',
  'react-dom': 'cyan',
} as const;

export const TestDirectoryMapSection = ({ content }: Props) => {
  const spotlight = content.cards.find((c) => c.spotlight);
  const others = content.cards.filter((c) => !c.spotlight);

  return (
    <section
      id="section-test-directory-map"
      aria-labelledby="heading-test-directory-map"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="test-directory-map"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<FolderTreeIcon className="h-5 w-5" />}
      />

      {spotlight && <DirCard dir={spotlight} labels={content} variant="spotlight" />}

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {others.map((dir) => (
          <li key={dir.id}>
            <DirCard dir={dir} labels={content} variant="compact" />
          </li>
        ))}
      </ul>
    </section>
  );
};

const DirCard = ({
  dir,
  labels,
  variant,
}: {
  dir: DirectoryCard;
  labels: Pick<
    TestAsDocContent['testDirectoryMap'],
    'descriptionLabel' | 'readingPointLabel' | 'keywordsLabel'
  >;
  variant: 'spotlight' | 'compact';
}) => {
  const t = toneTokens[dirTone[dir.id]];
  const isSpotlight = variant === 'spotlight';

  return (
    <article
      className={cn(
        'group relative overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
        'bg-white dark:bg-[var(--term-bg)]',
        'shadow-[0_3px_0_var(--term-border)]',
        t.border,
        'transition-all motion-safe:hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      {isSpotlight && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute top-0 right-0 px-3 py-1 rounded-bl-xl',
            t.chip,
            'border-l border-b',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
          )}
        >
          core
        </span>
      )}

      {/* Path header */}
      <header className="flex items-center gap-2 mb-md">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2',
            t.border,
            t.chip,
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <FolderTreeIcon className="h-4 w-4" />
        </span>
        <code
          className={cn(
            'flex-1 overflow-x-auto rounded-md border px-2.5 py-1.5',
            t.border,
            t.chip,
            'font-mono text-xsm sm:text-sm font-bold',
          )}
        >
          <span className="whitespace-nowrap">{dir.path}</span>
        </code>
      </header>

      <div
        className={cn(
          isSpotlight
            ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,_6fr)_minmax(0,_6fr)] gap-md lg:gap-lg'
            : 'flex flex-col gap-md',
        )}
      >
        {/* Description */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {labels.descriptionLabel}
          </span>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {dir.description}
          </p>
        </div>

        {/* Reading point + keywords */}
        <div className="flex flex-col gap-md">
          <div className="flex items-start gap-2 rounded-md border border-dashed p-3 border-[var(--term-border)] bg-[var(--term-surface)]">
            <ScanSearchIcon
              className={cn('h-3.5 w-3.5 shrink-0 mt-0.5', t.text)}
              aria-hidden="true"
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {labels.readingPointLabel}
              </span>
              <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                {dir.readingPoint}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {labels.keywordsLabel}
            </span>
            <ul className="flex flex-wrap gap-1.5">
              {dir.keywords.map((kw) => (
                <li key={kw}>
                  <code
                    className={cn(
                      'inline-flex items-center gap-1 rounded-md border px-2 py-0.5',
                      t.border,
                      'bg-white dark:bg-[var(--term-bg)]',
                      t.text,
                      'font-mono text-[10.5px] font-bold',
                    )}
                  >
                    <FileCodeIcon className="h-2.5 w-2.5" aria-hidden="true" />
                    {kw}
                  </code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};
