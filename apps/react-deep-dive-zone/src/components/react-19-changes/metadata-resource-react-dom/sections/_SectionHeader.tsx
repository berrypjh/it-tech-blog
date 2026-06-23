type Props = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export const SectionHeader = ({ id, number, eyebrow, title, description }: Props) => (
  <header className="flex flex-col gap-sm mb-md">
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
    <h2
      id={id}
      className="text-xl sm:text-xxl font-bold tracking-tight text-[var(--term-fg)] leading-tight break-keep"
    >
      {title}
    </h2>
    {description && (
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[64ch]">
        {description}
      </p>
    )}
  </header>
);
