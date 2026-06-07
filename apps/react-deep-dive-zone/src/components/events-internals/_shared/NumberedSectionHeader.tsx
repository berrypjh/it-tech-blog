type Props = {
  id: string;
  step: number;
  eyebrow: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

/**
 * events 챕터 sub-section 전용 헤더.
 * 작업한 페이지(repo-structure)와 동일한 `// 0N · eyebrow` 주석 형태.
 */
export const NumberedSectionHeader = ({ id, step, eyebrow, title, description, icon }: Props) => (
  <header className="flex flex-col gap-sm mb-lg">
    <div className="flex items-center gap-sm w-full">
      <span className="text-[var(--term-accent)] font-bold text-xsm">{'//'}</span>
      <span className="text-xxsm tabular-nums uppercase tracking-wider text-[var(--term-muted)]">
        {`${String(step).padStart(2, '0')} · ${eyebrow}`}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)] translate-y-[-0.15em]"
      />
    </div>

    <div className="flex items-center gap-sm">
      {icon && (
        <span className="text-[var(--term-accent)] shrink-0" aria-hidden="true">
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
