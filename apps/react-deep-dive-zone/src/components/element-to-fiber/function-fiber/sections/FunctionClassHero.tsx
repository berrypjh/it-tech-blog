import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import { BranchDecisionMap } from '../components/BranchDecisionMap';
import type { FunctionClassComponentFiberContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: FunctionClassComponentFiberContent['hero'] };

export const FunctionClassHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="packages/react-reconciler/src/ReactFiber.js"
      suffix={<span className="text-[var(--term-muted)]"> # shouldConstruct</span>}
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
          className="text-3xl sm:text-[2.5rem] lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">
            <code className="font-mono text-sky-700 dark:text-sky-300">type</code>이 함수라고 해서
          </span>
          <span className="block">
            항상{' '}
            <code className="font-mono text-emerald-700 dark:text-emerald-300">
              Function Component
            </code>
            는 아닙니다.
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          React는 해당 함수가{' '}
          <code className="font-mono font-bold text-violet-700 dark:text-violet-300">
            클래스 컴포넌트
          </code>
          인지 아닌지를 먼저 판단하고,{' '}
          <code className="font-mono font-bold text-sky-700 dark:text-sky-300">Fiber tag</code>를
          다르게 선택합니다.
        </p>

        <ul className="grid grid-cols-2 gap-2 pt-1">
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-emerald-300/80 bg-emerald-50/50 dark:border-emerald-800/60 dark:bg-emerald-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold">
              아니오 → function
            </span>
            <code className="text-xsm font-mono font-bold text-emerald-800 dark:text-emerald-200">
              Work Tag 0
            </code>
          </li>
          <li
            className={cn(
              'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
              'border-violet-300/80 bg-violet-50/50 dark:border-violet-800/60 dark:bg-violet-950/30',
            )}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
              예 → class
            </span>
            <code className="text-xsm font-mono font-bold text-violet-800 dark:text-violet-200">
              Work Tag 1
            </code>
          </li>
        </ul>
      </div>

      {/* Right: branch decision map */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-emerald-50/50 via-white to-violet-50/60',
            'dark:from-emerald-950/15 dark:via-[var(--term-bg)] dark:to-violet-950/30',
            'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <BranchDecisionMap
            startTitle={content.startTitle}
            startSubtitle={content.startSubtitle}
            questionTitle={content.questionTitle}
            noLabel={content.noLabel}
            yesLabel={content.yesLabel}
            functionTitle={content.functionTitle}
            functionLine1={content.functionLine1}
            functionLine2={content.functionLine2}
            classTitle={content.classTitle}
            classLine1={content.classLine1}
            classLine2={content.classLine2}
          />
        </div>
      </div>
    </div>
  </section>
);
