import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { BranchMap } from '../components/BranchMap';
import type { CreateFiberFromTypeAndPropsContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: CreateFiberFromTypeAndPropsContent['hero'] };

export const TypeDecisionHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="packages/react-reconciler/src/ReactFiber.js"
      suffix={<span className="text-[var(--term-muted)]"> # createFiberFromTypeAndProps</span>}
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
          className="text-3xl sm:text-[2.5rem] lg:text-[3rem] font-extrabold leading-[1.12] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">
            React는{' '}
            <code className="font-mono bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent dark:from-sky-300 dark:to-blue-300">
              type
            </code>
            을 보고
          </span>
          <span className="block">어떤 Fiber를 만들지 결정합니다.</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          <code className="font-mono font-bold text-emerald-700 dark:text-emerald-300">type</code>이
          문자열인지, 함수인지, React 내부의 특별한 타입인지에 따라{' '}
          <code className="font-mono font-bold text-sky-700 dark:text-sky-300">Fiber</code>의 종류가
          달라집니다.
        </p>

        <ul className="grid grid-cols-3 gap-2 pt-1">
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-emerald-300/80 bg-emerald-50/50 dark:border-emerald-800/60 dark:bg-emerald-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold">
              string
            </span>
            <code className="text-xsm font-mono font-bold text-emerald-800 dark:text-emerald-200">
              Host
            </code>
          </li>
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-sky-300/80 bg-sky-50/50 dark:border-sky-800/60 dark:bg-sky-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300 font-bold">
              function
            </span>
            <code className="text-xsm font-mono font-bold text-sky-800 dark:text-sky-200">
              Fn / Class
            </code>
          </li>
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-violet-300/80 bg-violet-50/50 dark:border-violet-800/60 dark:bg-violet-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
              symbol
            </span>
            <code className="text-xsm font-mono font-bold text-violet-800 dark:text-violet-200">
              Fragment / Mode
            </code>
          </li>
        </ul>
      </div>

      {/* Right: branch map */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-sky-50/80 via-white to-emerald-50/80',
            'dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
            'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <BranchMap centerLabel={content.centerLabel} branches={content.branches} size="lg" />
        </div>
      </div>
    </div>
  </section>
);
