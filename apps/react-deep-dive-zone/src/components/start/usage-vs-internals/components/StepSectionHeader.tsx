import { cn } from '@it-tech-blog/utils';

type Props = {
  id: string;
  num: string;
  title: string;
  description?: string;
  trailing?: React.ReactNode;
};

/**
 * 디자인 스펙 §3 "섹션 제목" — 좌측 파란 step pill + 우측 본문 제목.
 * 터미널 // 데시 라인은 페이지 톤 통일을 위해 보조적으로 유지한다.
 */
export const StepSectionHeader = ({ id, num, title, description, trailing }: Props) => {
  return (
    <header className="flex flex-col gap-sm mb-lg">
      <div className="flex items-center gap-sm w-full">
        <span className="text-[var(--term-accent)] font-bold text-xsm" aria-hidden="true">
          {'//'}
        </span>
        <span className="text-xxsm tabular-nums uppercase tracking-wider text-[var(--term-muted)]">
          section.{num}
        </span>
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)] translate-y-[-0.15em]"
        />
        {trailing}
      </div>

      <div className="flex items-center gap-sm flex-wrap">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex shrink-0 items-center justify-center',
            'w-10 h-10 rounded-md',
            'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
            'text-xsm font-bold tabular-nums tracking-tight',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          {num}
        </span>
        <h2
          id={`heading-${id}`}
          className="text-xl sm:text-xxl font-bold tracking-tight text-[var(--term-fg)] break-keep"
        >
          {title}
        </h2>
      </div>

      {description && (
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] max-w-[64ch]">
          {description}
        </p>
      )}
    </header>
  );
};
