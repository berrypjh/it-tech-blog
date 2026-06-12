type Props = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** description의 가독성 제한 폭(68ch)을 풀어 컨테이너 전체 폭을 쓰게 한다. */
  descriptionFullWidth?: boolean;
  icon?: React.ReactNode;
};

/**
 * 섹션 상단 헤더.
 * 작업한 페이지(repo-structure)와 동일한 `// 0N · eyebrow` 주석 형태.
 */
export const SectionBadgeHeader = ({
  id,
  number,
  eyebrow,
  title,
  description,
  descriptionFullWidth,
  icon,
}: Props) => (
  <header className="flex flex-col gap-sm">
    <div className="flex items-center gap-sm w-full">
      <span className="text-[var(--term-accent)] font-bold text-xsm">{'//'}</span>
      <span className="text-xxsm tabular-nums uppercase tracking-wider text-[var(--term-muted)]">
        {`${number.padStart(2, '0')} · ${eyebrow}`}
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
      <p
        className={`text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep ${
          descriptionFullWidth ? 'max-w-none' : 'max-w-[68ch]'
        }`}
      >
        {description}
      </p>
    )}
  </header>
);
