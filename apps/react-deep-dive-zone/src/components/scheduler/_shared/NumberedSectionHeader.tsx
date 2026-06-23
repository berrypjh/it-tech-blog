type Props = {
  id: string;
  number: number | string;
  eyebrow: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

export const NumberedSectionHeader = ({ id, number, eyebrow, title, description, icon }: Props) => (
  <header className="flex flex-col gap-sm mb-lg">
    <div className="flex items-center gap-sm w-full">
      <span className="text-[var(--term-accent)] font-bold text-xsm">{'//'}</span>
      <span className="text-xxsm tabular-nums uppercase tracking-wider text-[var(--term-muted)]">
        {`${String(number).padStart(2, '0')} · ${eyebrow}`}
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
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] max-w-[60ch]">
        {description}
      </p>
    )}
  </header>
);
