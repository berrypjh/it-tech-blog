import { cn } from '@it-tech-blog/utils';

import { WandIcon } from '../icons';

type Props = {
  label: string;
  subtitle?: string;
  /** 카드 본문 (chip 그리드 등) */
  children?: React.ReactNode;
  /** sm 사이즈는 IO 섹션처럼 좁은 가운데 카드용 */
  size?: 'md' | 'sm';
};

/**
 * createFiberFromElement(element) 함수 카드.
 * Hero/IO 양쪽에서 사용. primary blue border + light blue background.
 */
export const FunctionCard = ({ label, subtitle, children, size = 'md' }: Props) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-2xl border-2 min-w-0 h-full',
      'border-sky-400 bg-sky-50/80',
      'dark:border-sky-500/70 dark:bg-sky-950/30',
      'shadow-[0_6px_18px_-12px_rgba(2,132,199,0.55)]',
      size === 'sm' ? 'p-sm sm:p-md' : 'p-md',
    )}
  >
    <header className="flex items-start gap-sm">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0',
          'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
          'shadow-[0_4px_10px_-4px_rgba(2,132,199,0.6)]',
        )}
      >
        <WandIcon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className="font-mono text-xsm sm:text-sm font-bold tracking-tight text-sky-800 dark:text-sky-200 break-all">
          {label}
        </code>
        {subtitle && (
          <span className="text-[11px] leading-relaxed text-sky-700/80 dark:text-sky-300/80 break-keep">
            {subtitle}
          </span>
        )}
      </div>
    </header>
    {children}
  </article>
);
