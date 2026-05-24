import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { CurvedArrow } from '../components/CurvedArrow';
import { DomTagCard } from '../components/DomTagCard';
import { HostComponentCard } from '../components/HostComponentCard';
import type { HostComponentFiberContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: HostComponentFiberContent['hero'] };

export const HostComponentHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="packages/react-reconciler/src/ReactFiber.js"
      suffix={
        <span className="text-[var(--term-muted)]">
          {' '}
          # branch: typeof type === &apos;string&apos;
        </span>
      }
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
          className="text-3xl sm:text-[2.5rem] lg:text-[2.85rem] font-extrabold leading-[1.12] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">
            <code className="font-mono text-emerald-700 dark:text-emerald-300">&lt;div /&gt;</code>
            는
          </span>
          <span className="block bg-gradient-to-r from-sky-600 to-sky-500 bg-clip-text text-transparent dark:from-sky-300 dark:to-sky-200">
            어떤 Fiber가 될까?
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
          문자열{' '}
          <code className="font-mono font-bold text-emerald-700 dark:text-emerald-300">type</code>을
          가진 Element는{' '}
          <code className="font-mono font-bold text-sky-700 dark:text-sky-300">
            Host 계열 Fiber
          </code>
          로 분류됩니다.
        </p>
        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[60ch]">
          <code className="font-mono font-bold text-[var(--term-fg)]">DOM renderer</code>
          에서는 이 Fiber가 이후 실제 DOM 요소 반영과 연결됩니다.
        </p>
      </div>

      {/* Right: 3 DOM tags → HostComponent Fiber */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-emerald-50/70 via-white to-sky-50/80',
            'dark:from-emerald-950/20 dark:via-[var(--term-bg)] dark:to-sky-950/30',
            'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div
            className={cn(
              'grid items-stretch min-w-0',
              'grid-cols-1 lg:grid-cols-[minmax(0,_0.95fr)_auto_minmax(0,_1.15fr)]',
              'gap-sm lg:gap-md',
            )}
          >
            {/* DOM tag stack */}
            <ul className="flex flex-col gap-2 min-w-0">
              {content.domTags.map((tag) => (
                <li key={tag.id}>
                  <DomTagCard code={tag.code} type={tag.type} />
                </li>
              ))}
            </ul>

            {/* Arrow conduit */}
            <CurvedArrow />

            {/* Host result */}
            <HostComponentCard title={content.resultTitle} items={content.resultItems} />
          </div>

          <p className="sr-only">
            문자열 type을 가진 div, button, input 같은 요소는 모두 HostComponent Fiber 흐름으로
            모입니다. HostComponent Fiber는 실제 DOM 반영과 연결되는 Host 계열 작업 단위입니다.
          </p>
        </div>
      </div>
    </div>
  </section>
);
