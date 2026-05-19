import { CodePreviewPanel } from '../../why-source/components/CodePreviewPanel';
import { InternalStackVisual } from '../components/InternalStackVisual';
import type { UsageVsInternalsContent } from '../content';
import { ExpandIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['hero'] };

export const UsageVsInternalsHero = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      {/* 프롬프트 라인 */}
      <p className="mb-md text-xxsm text-[var(--term-muted)] tabular-nums">
        <span className="text-[var(--term-accent)] font-bold">$</span> open{' '}
        <span className="text-[var(--term-fg)]">usage-vs-internals/Counter.js</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.96fr)_minmax(0,_1.04fr)] gap-xl lg:gap-2xl items-start">
        {/* 좌측: 텍스트 + 코드 패널 */}
        <div className="flex flex-col gap-md min-w-0">
          {/* Step badge */}
          <span className="inline-flex w-fit items-center gap-1.5 px-2 py-1 rounded-md bg-sky-500 text-white text-xxsm font-bold tracking-wide dark:bg-sky-400 dark:text-slate-900 shadow-[0_1px_0_var(--term-border)]">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-white/80"
              aria-hidden="true"
            />
            {content.stepBadge}
          </span>

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

          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[56ch] break-keep">
            {content.description}
          </p>

          {/* Counter.js 코드 패널 */}
          <div className="mt-sm">
            <div className="flex items-center justify-between mb-1.5">
              <div className="inline-flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-t-md border border-b-0 border-slate-800 bg-slate-900 text-slate-200 text-[10px] font-mono">
                  <span
                    aria-hidden="true"
                    className="block h-1.5 w-1.5 rounded-full bg-amber-300/80"
                  />
                  {content.fileTab}
                </span>
              </div>
              <button
                type="button"
                aria-label="expand code preview"
                className="text-[var(--term-dim)] hover:text-[var(--term-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] rounded p-1"
              >
                <ExpandIcon className="h-3.5 w-3.5" />
              </button>
            </div>
            <CodePreviewPanel code={content.code} language="jsx" />
          </div>
        </div>

        {/* 우측: 3D 스택 */}
        <div className="order-first lg:order-none">
          <InternalStackVisual layers={content.stackLayers} />
        </div>
      </div>
    </section>
  );
};
