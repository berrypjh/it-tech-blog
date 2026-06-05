import { SectionHeader } from '../../../shared/SectionHeader';
import type { WhyOpenSourceContent } from '../content';
import {
  ArrowRightIcon,
  CursorIcon,
  ExternalLinkIcon,
  GithubIcon,
  resourceIconByName,
} from '../icons';

type Props = { content: WhyOpenSourceContent['quickStart'] };

export const QuickStartResourceCards = ({ content }: Props) => {
  return (
    <section id="section-quick-start" aria-labelledby="heading-quick-start" className="space-y-lg">
      <SectionHeader
        id="quick-start"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CursorIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = resourceIconByName[card.icon];
          return (
            <li key={card.id} className="flex min-w-0">
              <article className="group flex flex-col w-full h-full gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)] hover:border-sky-400 dark:hover:border-sky-500">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 shadow-[0_1px_0_var(--term-border)]"
                  >
                    <Icon className="h-[1.125rem] w-[1.125rem]" />
                  </span>
                  <GithubIcon
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--term-dim)] group-hover:text-[var(--term-fg)] transition-colors"
                  />
                </div>

                <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep [overflow-wrap:anywhere] leading-snug">
                  {card.title}
                </h3>

                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep [overflow-wrap:anywhere] flex-1">
                  {card.description}
                </p>

                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-md py-2.5 rounded-md bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900 text-xsm font-bold transition-all hover:bg-sky-600 dark:hover:bg-sky-300 shadow-[0_2px_0_var(--term-border)] hover:shadow-[0_3px_0_var(--term-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
                >
                  {card.cta}
                  <ArrowRightIcon className="h-4 w-4" />
                  <ExternalLinkIcon className="h-3 w-3 opacity-80" />
                </a>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
