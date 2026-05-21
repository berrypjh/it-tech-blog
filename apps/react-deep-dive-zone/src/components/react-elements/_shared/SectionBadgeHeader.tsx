import { cn } from '@it-tech-blog/utils';

type Props = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

/**
 * 섹션 상단 파란 번호 배지 + eyebrow + 제목 + 설명.
 * 레퍼런스의 `[01] JSX 첫 번째 개념` → 큰 heading 패턴을 재현한다.
 */
export const SectionBadgeHeader = ({ id, number, eyebrow, title, description, icon }: Props) => (
  <header className="flex flex-col gap-sm">
    <div className="flex items-center gap-sm">
      <span
        className={cn(
          'inline-flex items-center justify-center min-w-[2.25rem] px-2 py-1',
          'rounded-md text-xxsm font-bold tabular-nums tracking-wider',
          'bg-sky-600 text-white shadow-[0_1px_0_rgba(0,0,0,0.08)]',
          'dark:bg-sky-500 dark:text-slate-950',
        )}
        aria-hidden="true"
      >
        {number}
      </span>
      <span className="text-xxsm uppercase tracking-wider text-[var(--term-muted)] font-mono">
        {eyebrow}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)] translate-y-[-0.15em]"
      />
    </div>

    <div className="flex items-center gap-sm">
      {icon && (
        <span aria-hidden="true" className="text-[var(--term-accent)] shrink-0">
          {icon}
        </span>
      )}
      <h2
        id={`heading-${id}`}
        className="text-xl sm:text-xxl font-bold tracking-tight text-[var(--term-fg)] break-keep"
      >
        {title}
      </h2>
    </div>

    {description && (
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] max-w-[68ch] break-keep">
        {description}
      </p>
    )}
  </header>
);
