type Props = {
  number?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  id?: string;
};

export const SectionHeader = ({ number, eyebrow, title, subtitle, id }: Props) => (
  <header className="flex flex-col gap-sm mb-lg">
    <div className="flex items-center gap-sm w-full">
      <span className="text-[var(--term-accent)] font-bold text-xsm">{'//'}</span>
      <span className="text-xxsm tabular-nums uppercase tracking-wider text-[var(--term-muted)]">
        {`${String(number ?? '').padStart(2, '0')} · ${eyebrow}`}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)] translate-y-[-0.15em]"
      />
    </div>
    <h2
      id={id}
      className="text-xl sm:text-xxl font-bold text-[var(--term-fg)] break-keep leading-tight"
    >
      {title}
    </h2>
    {subtitle && <p className="text-xsm text-[var(--term-muted)] break-keep">{subtitle}</p>}
  </header>
);
