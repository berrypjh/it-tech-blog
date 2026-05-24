import { SectionHeader } from '../../_shared/SectionHeader';
import type { WhyReact19Content } from '../content';
import { CheckIcon, RefreshIcon, SwapIcon, XIcon } from '../icons';

type Props = { content: WhyReact19Content['terminology'] };

export const TerminologyShiftCompare = ({ content }: Props) => {
  return (
    <section id="section-terminology" aria-labelledby="heading-terminology" className="space-y-lg">
      <SectionHeader
        id="terminology"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SwapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(220px,_0.7fr)_1fr] gap-md lg:gap-lg items-stretch">
        {/* 왼쪽: 과거 자료 (neutral) */}
        <article
          aria-labelledby="terminology-legacy-header"
          className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:border-[var(--term-dim)] hover:shadow-[0_2px_0_var(--term-border)] hover:-translate-y-px"
        >
          <header className="flex items-center gap-2 pb-sm border-b border-dashed border-[var(--term-border)]">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-dim)]"
            >
              <XIcon className="h-3.5 w-3.5" />
            </span>
            <h3
              id="terminology-legacy-header"
              className="text-xsm sm:text-sm font-bold text-[var(--term-muted)] tracking-tight"
            >
              {content.left.header}
            </h3>
          </header>

          <ul className="flex flex-col gap-md">
            {content.left.items.map((item) => (
              <li key={item.name} className="flex items-start gap-sm">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-dim)] shrink-0"
                />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <code className="text-xsm font-mono font-bold text-[var(--term-fg)] break-all">
                    {item.name}
                  </code>
                  <span className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                    {item.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        {/* 중앙: 메시지 (브리지) */}
        <div className="flex flex-col items-center justify-center gap-md text-center lg:px-sm py-md">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-[0_2px_0_var(--term-border)]"
          >
            <RefreshIcon className="h-5 w-5" />
          </span>
          <p className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
            {content.center.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
            {content.center.sub.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {/* 오른쪽: 최신 용어 (teal/blue 강조) */}
        <article
          aria-labelledby="terminology-modern-header"
          className="flex flex-col gap-md rounded-lg border border-teal-200/80 dark:border-teal-800/60 bg-gradient-to-br from-teal-50 via-sky-50 to-white dark:from-teal-950/40 dark:via-sky-950/30 dark:to-transparent p-md sm:p-lg shadow-[0_2px_0_var(--term-border)] transition-all hover:border-teal-400 dark:hover:border-teal-500 hover:-translate-y-px"
        >
          <header className="flex items-center gap-2 pb-sm border-b border-dashed border-teal-200/70 dark:border-teal-800/50">
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900"
            >
              <CheckIcon className="h-3.5 w-3.5" />
            </span>
            <h3
              id="terminology-modern-header"
              className="text-xsm sm:text-sm font-bold text-teal-700 dark:text-teal-200 tracking-tight"
            >
              {content.right.header}
            </h3>
          </header>

          <ul className="flex flex-col gap-md">
            {content.right.items.map((item) => (
              <li key={item.name} className="flex items-start gap-sm">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 shrink-0"
                />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <code className="text-xsm font-mono font-bold text-teal-800 dark:text-teal-100 break-all">
                    {item.name}
                  </code>
                  <span className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                    {item.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
