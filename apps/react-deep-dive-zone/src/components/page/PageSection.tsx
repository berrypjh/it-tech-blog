/**
 * 터미널 주석 스타일 섹션 헤딩.
 *   // section-id ─────────────── title
 */
export const PageSection = ({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section aria-labelledby={`heading-${id}`} className={className}>
      <h2
        id={`heading-${id}`}
        className="flex items-baseline gap-sm text-xsm mb-lg text-[var(--term-muted)]"
      >
        <span className="text-[var(--term-dim)]">{'//'}</span>
        <span className="text-[var(--term-dim)] tabular-nums">{id}</span>
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)] translate-y-[-0.25em]"
        />
        <span className="text-[var(--term-fg)] font-medium">{title}</span>
      </h2>

      {children}
    </section>
  );
};
