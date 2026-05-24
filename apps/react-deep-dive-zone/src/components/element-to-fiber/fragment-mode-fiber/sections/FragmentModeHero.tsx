import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { TypeForkDiagram } from '../components/TypeForkDiagram';
import type { FragmentModeFiberContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: FragmentModeFiberContent['hero'] };

export const FragmentModeHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="packages/react-reconciler/src/ReactFiber.js"
      suffix={<span className="text-[var(--term-muted)]"> # special-type branches</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-xl lg:gap-2xl items-start">
      {/* Left: copy */}
      <div className="flex flex-col gap-md min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
            'text-xxsm font-bold uppercase tracking-wider',
            'border-sky-300/80 bg-sky-50 text-sky-700',
            'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
          )}
        >
          <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {content.badge}
        </span>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-[2.5rem] lg:text-[2.75rem] font-extrabold leading-[1.18] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span className="block">{content.title.line3}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          <code className="font-mono font-bold text-violet-700 dark:text-violet-300">Fragment</code>
          와{' '}
          <code className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
            StrictMode
          </code>
          처럼 React가 특별하게 이해하는 타입은{' '}
          <code className="font-mono font-bold text-sky-700 dark:text-sky-300">
            전용 Fiber 경로
          </code>
          를 가집니다.
        </p>

        <ul className="grid grid-cols-2 gap-2 pt-1">
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-violet-300/80 bg-violet-50/50 dark:border-violet-800/60 dark:bg-violet-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
              Fragment
            </span>
            <code className="text-xsm font-mono font-bold text-violet-800 dark:text-violet-200">
              Work Tag 7
            </code>
          </li>
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-emerald-300/80 bg-emerald-50/50 dark:border-emerald-800/60 dark:bg-emerald-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold">
              Mode
            </span>
            <code className="text-xsm font-mono font-bold text-emerald-800 dark:text-emerald-200">
              Work Tag 8
            </code>
          </li>
        </ul>
      </div>

      {/* Right: type fork diagram */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-violet-50/50 via-white to-emerald-50/60',
            'dark:from-violet-950/20 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
            'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <TypeForkDiagram
            typeLabel={content.typeLabel}
            fragmentTitle={content.fragmentTitle}
            fragmentSubtitle={content.fragmentSubtitle}
            fragmentResultTitle={content.fragmentResultTitle}
            fragmentResultItems={content.fragmentResultItems}
            strictTitle={content.strictTitle}
            strictSubtitle={content.strictSubtitle}
            modeResultTitle={content.modeResultTitle}
            modeResultItems={content.modeResultItems}
          />
        </div>
      </div>
    </div>
  </section>
);
