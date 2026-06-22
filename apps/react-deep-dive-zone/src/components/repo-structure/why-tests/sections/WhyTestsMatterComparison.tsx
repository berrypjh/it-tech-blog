import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { ComparePoint, TestCodeContent } from '../content';
import { CheckCircleIcon, CodeIcon, FlaskIcon, QuoteIcon } from '../icons';

type Props = { content: TestCodeContent['comparison']; sectionId?: string };

export const WhyTestsMatterComparison = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-comparison"
      className="space-y-md scroll-mt-24"
    >
      <SectionHeader
        id="comparison"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md items-stretch">
        <CompareCard title={content.leftTitle} items={content.leftItems} variant="impl" />
        <VsBadge />
        <CompareCard title={content.rightTitle} items={content.rightItems} variant="test" />
      </div>

      <div
        className={cn(
          'relative flex items-center justify-center gap-sm rounded-2xl border px-md py-lg',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <QuoteIcon className="h-6 w-6 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
        <p className="text-md sm:text-lg font-bold leading-snug tracking-tight break-keep text-center">
          {content.quote}
        </p>
      </div>
    </section>
  );
};

type CardProps = { title: string; items: ComparePoint[]; variant: 'impl' | 'test' };

const CompareCard = ({ title, items, variant }: CardProps) => {
  const isImpl = variant === 'impl';
  const Icon = isImpl ? CodeIcon : FlaskIcon;
  const accentText = isImpl ? 'text-sky-600 dark:text-sky-300' : 'text-[var(--term-accent)]';
  const tintClass =
    'bg-[var(--term-surface)] border-[var(--term-border)] hover:border-[var(--term-accent)]';
  const titleClass = accentText;
  const iconClass = cn('bg-[var(--term-surface)] border-[var(--term-border)]', accentText);
  const labelText = isImpl ? '구현 코드' : '테스트 코드';

  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tintClass,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-md border',
            iconClass,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className={cn('text-[10px] uppercase tracking-wider font-bold', titleClass)}>
            {labelText}
          </span>
          <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', titleClass)}>{title}</h3>
        </div>
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.text}
            className="flex items-start gap-2 text-sm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <CheckCircleIcon
              className={cn('mt-0.5 h-4 w-4 shrink-0', accentText)}
              aria-hidden="true"
            />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const VsBadge = () => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <span
      className={cn(
        'inline-flex items-center justify-center w-14 h-14 rounded-full',
        'border-2 border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_3px_0_var(--term-border)] text-[var(--term-fg)] text-sm font-bold tracking-wider',
      )}
    >
      VS
    </span>
  </div>
);
