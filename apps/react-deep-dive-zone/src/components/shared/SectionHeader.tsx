import { cn } from '@it-tech-blog/utils';

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  align?: 'left' | 'center';
};

/**
 * start/ 그룹 공용 섹션 헤더.
 * 상단: `// <eyebrow>` 점선, 하단: 아이콘 + 제목, 선택적 설명.
 */
export const SectionHeader = ({ id, eyebrow, title, description, icon, align = 'left' }: Props) => {
  return (
    <header
      className={cn('flex flex-col gap-sm mb-lg', align === 'center' && 'items-center text-center')}
    >
      <div className="flex items-center gap-sm w-full">
        <span className="text-[var(--term-accent)] font-bold text-xsm">{'//'}</span>
        <span className="text-xxsm tabular-nums uppercase tracking-wider text-[var(--term-muted)]">
          {eyebrow}
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
          className="text-xl sm:text-xxl font-bold tracking-tight text-[var(--term-fg)]"
        >
          {title}
        </h2>
      </div>

      {description && (
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)]">
          {description}
        </p>
      )}
    </header>
  );
};
