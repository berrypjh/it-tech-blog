import { cn } from '@it-tech-blog/utils';

import type { HeroFlowStep } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BoxIcon,
  BracesIcon,
  HexagonIcon,
  PlayCircleIcon,
} from '../icons';

const iconMap = {
  braces: BracesIcon,
  box: BoxIcon,
  hexagon: HexagonIcon,
  play: PlayCircleIcon,
} as const;

const accentTokens = {
  emerald: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    surface: 'bg-emerald-50/70 dark:bg-emerald-950/30',
    icon: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
    text: 'text-emerald-800 dark:text-emerald-100',
    sub: 'text-emerald-700/80 dark:text-emerald-300/80',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    surface: 'bg-violet-50/70 dark:bg-violet-950/30',
    icon: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
    text: 'text-violet-800 dark:text-violet-100',
    sub: 'text-violet-700/80 dark:text-violet-300/80',
  },
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    surface: 'bg-sky-50/70 dark:bg-sky-950/30',
    icon: 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
    text: 'text-sky-800 dark:text-sky-100',
    sub: 'text-sky-700/80 dark:text-sky-300/80',
  },
} as const;

type Props = { steps: HeroFlowStep[] };

export const HeroFlow = ({ steps }: Props) => (
  <>
    {/* Desktop: 4 horizontal cards with → */}
    <ol
      className={cn(
        'hidden lg:grid items-stretch min-w-0',
        'grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]',
        'gap-sm',
      )}
    >
      {steps.map((step, idx) => (
        <li key={step.id} className="contents">
          <FlowCard step={step} />
          {idx < steps.length - 1 && <HorizontalArrow />}
        </li>
      ))}
    </ol>

    {/* Tablet: 2x2 */}
    <ol className="hidden sm:grid lg:hidden grid-cols-2 gap-sm">
      {steps.map((step) => (
        <li key={step.id} className="flex">
          <FlowCard step={step} />
        </li>
      ))}
    </ol>

    {/* Mobile: vertical with ↓ */}
    <ol className="sm:hidden flex flex-col gap-2">
      {steps.map((step, idx) => (
        <li key={step.id} className="flex flex-col">
          <FlowCard step={step} />
          {idx < steps.length - 1 && (
            <span className="flex justify-center py-1" aria-hidden="true">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            </span>
          )}
        </li>
      ))}
    </ol>

    <p className="sr-only">
      JSX는 개발자가 작성한 코드, Element는 UI의 고정된 설명 객체, Fiber는 작업과 상태를 가진 실행
      단위, Render Phase는 실제 렌더링을 위한 작업 처리 단계입니다.
    </p>
  </>
);

const FlowCard = ({ step }: { step: HeroFlowStep }) => {
  const a = accentTokens[step.accent];
  const Icon = iconMap[step.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col items-center gap-sm rounded-2xl border-2 p-md text-center min-h-[180px]',
        a.border,
        a.surface,
        'shadow-[0_8px_22px_-12px_rgba(0,0,0,0.25)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
          a.icon,
        )}
      >
        <Icon className="h-6 w-6" />
      </span>
      <code className={cn('font-mono text-sm sm:text-md font-extrabold tracking-tight', a.text)}>
        {step.title}
      </code>
      <p className={cn('text-[11px] leading-relaxed break-keep', a.sub)}>{step.description}</p>
    </article>
  );
};

const HorizontalArrow = () => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <span
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-full',
        'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
        'shadow-[0_6px_18px_-6px_rgba(2,132,199,0.55)]',
      )}
    >
      <ArrowRightIcon className="h-4 w-4" />
    </span>
  </div>
);
