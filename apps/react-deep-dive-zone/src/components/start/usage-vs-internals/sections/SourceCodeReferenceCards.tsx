import { CodePreviewPanel } from '../../why-source/components/CodePreviewPanel';
import { ArrowRightIcon, GithubIcon } from '../../why-source/icons';
import { StepSectionHeader } from '../components/StepSectionHeader';
import type { UsageVsInternalsContent } from '../content';

type Props = { content: UsageVsInternalsContent['sourceCode'] };

export const SourceCodeReferenceCards = ({ content }: Props) => {
  return (
    <section
      id="section-source"
      aria-labelledby="heading-source"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-sky-50/30 dark:bg-sky-950/15 p-md sm:p-lg lg:p-xl"
    >
      <StepSectionHeader id="source" num={content.sectionNum} title={content.title} />

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md">
        {content.cards.map((card) => (
          <li key={card.num}>
            <article className="flex flex-col gap-md h-full rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
              <header className="flex items-start gap-sm">
                <span
                  className="inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-md bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900 text-xsm font-bold tabular-nums shadow-[0_1px_0_var(--term-border)]"
                  aria-hidden="true"
                >
                  {card.num}
                </span>
                <div className="min-w-0 flex flex-col gap-0.5">
                  <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] font-mono break-all">
                    {card.title}
                  </h3>
                  <p className="text-xsm text-[var(--term-muted)] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </header>

              <CodePreviewPanel code={card.code} language="js" />

              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center justify-between gap-sm px-md py-2.5 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-xsm font-bold text-[var(--term-fg)] transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
              >
                <span className="inline-flex items-center gap-2">
                  <GithubIcon className="h-4 w-4" />
                  {card.linkLabel}
                </span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
