import { SectionHeader } from '../../../shared/SectionHeader';
import type { ReadOrderContent } from '../content';
import { ArrowRightIcon, ExternalLinkIcon, FileIcon, FlagIcon, GithubIcon } from '../icons';

type Props = { content: ReadOrderContent['firstThree'] };

export const FirstThreeFiles = ({ content }: Props) => {
  return (
    <section id="section-first-three" aria-labelledby="heading-first-three" className="space-y-lg">
      <SectionHeader
        id="first-three"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FlagIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => (
          <li key={card.num} className="flex">
            <article className="group flex flex-col w-full h-full gap-sm rounded-lg border border-sky-200/80 dark:border-sky-800/60 bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)] hover:border-sky-400 dark:hover:border-sky-500">
              {/* 상단: 번호 dark blue square + file icon */}
              <header className="flex items-center justify-between gap-sm">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-sky-600 text-white dark:bg-sky-500 text-sm font-bold tabular-nums shadow-[0_1px_0_var(--term-border)]"
                >
                  {card.num}
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex items-center gap-1 text-[10px] font-mono text-[var(--term-muted)]"
                >
                  <FileIcon className="h-3 w-3" />
                  start file
                </span>
              </header>

              {/* file name */}
              <h3 className="text-md sm:text-lg font-bold font-mono tracking-tight text-sky-800 dark:text-sky-100 break-all leading-snug">
                {card.file}
              </h3>

              {/* description */}
              <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                {card.description.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>

              {/* tag pills (functions) */}
              <ul className="flex flex-wrap gap-1.5 pt-1">
                {card.tags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-sky-200 dark:border-sky-800/70 bg-sky-50 dark:bg-sky-950/40 text-[10px] font-mono text-sky-700 dark:text-sky-200"
                  >
                    <span aria-hidden="true" className="text-[8px] opacity-60">
                      fn
                    </span>
                    {tag}
                  </li>
                ))}
              </ul>

              {/* GitHub link — divider처럼 분리 */}
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto -mx-md sm:-mx-lg -mb-md sm:-mb-lg mt-md px-md sm:px-lg py-3 border-t border-dashed border-[var(--term-border)] inline-flex items-center justify-between gap-2 text-xsm font-bold text-sky-700 dark:text-sky-200 hover:bg-sky-50 dark:hover:bg-sky-950/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)] rounded-b-lg"
              >
                <span className="inline-flex items-center gap-1.5">
                  <GithubIcon className="h-3.5 w-3.5" />
                  {content.cta}
                </span>
                <span className="inline-flex items-center gap-1 transition-transform group-hover:translate-x-0.5">
                  <ArrowRightIcon className="h-4 w-4" />
                  <ExternalLinkIcon className="h-3 w-3 opacity-80" />
                </span>
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
