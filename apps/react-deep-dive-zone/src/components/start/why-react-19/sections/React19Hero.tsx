import { VersionStackVisual } from '../components/VersionStackVisual';
import type { WhyReact19Content } from '../content';
import { CheckIcon, InfoIcon } from '../icons';

type Props = { content: WhyReact19Content['hero'] };

export const React19Hero = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      {/* 프롬프트 라인 */}
      <p className="mb-md text-xxsm text-[var(--term-muted)] tabular-nums">
        <span className="text-[var(--term-accent)] font-bold">$</span> cat{' '}
        <span className="text-[var(--term-fg)]">react-versions.history</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.04fr)_minmax(0,_0.96fr)] gap-xl lg:gap-2xl items-start">
        {/* 좌측: 텍스트 영역 */}
        <div className="flex flex-col gap-md min-w-0">
          {/* Step badge */}
          <span className="inline-flex w-fit items-center gap-1.5 px-2 py-1 rounded-md bg-sky-500 text-white text-xxsm font-bold tracking-wide dark:bg-sky-400 dark:text-slate-900 shadow-[0_1px_0_var(--term-border)]">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-white/80"
              aria-hidden="true"
            />
            {content.stepBadge}
          </span>

          {/* h1 */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-[2.625rem] font-bold leading-[1.18] tracking-tight text-[var(--term-fg)] break-keep"
          >
            {content.title.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* description */}
          <div className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[56ch] break-keep">
            {content.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* supporting points */}
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-md gap-y-sm mt-1">
            {content.points.map((p, i) => (
              <li key={i} className="inline-flex items-center gap-2 text-xsm text-[var(--term-fg)]">
                <span
                  aria-hidden="true"
                  className="inline-flex shrink-0 items-center justify-center w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-300 border border-teal-300/70 dark:border-teal-700/70"
                >
                  <CheckIcon className="h-3 w-3" />
                </span>
                <span className="break-keep">{p}</span>
              </li>
            ))}
          </ul>

          {/* baseline info card */}
          <aside
            className="mt-sm relative flex items-start gap-sm rounded-md border border-sky-200 bg-sky-50 dark:border-sky-800/70 dark:bg-sky-950/40 p-md shadow-[0_2px_0_var(--term-border)]"
            aria-label={content.infoCard.title}
          >
            <span
              aria-hidden="true"
              className="inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-full bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900"
            >
              <InfoIcon className="h-[1.125rem] w-[1.125rem]" />
            </span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <p className="text-xsm sm:text-sm font-bold text-sky-900 dark:text-sky-100 break-keep">
                {content.infoCard.title}
              </p>
              <p className="text-xsm text-sky-700 dark:text-sky-300 leading-relaxed break-keep">
                {content.infoCard.description}
              </p>
            </div>
          </aside>
        </div>

        {/* 우측: 버전 스택 비주얼 */}
        <div className="order-first lg:order-none">
          <VersionStackVisual
            versions={content.visual.versions}
            axisTop={content.visual.axisTop}
            axisBottom={content.visual.axisBottom}
          />
        </div>
      </div>
    </section>
  );
};
