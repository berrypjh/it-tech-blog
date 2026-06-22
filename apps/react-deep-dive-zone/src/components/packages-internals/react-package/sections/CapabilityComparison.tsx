import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { CapabilityItem, ReactPackageContent } from '../content';
import { CheckCircleIcon, StarIcon, XCircleIcon } from '../icons';

type Props = { content: ReactPackageContent['capabilities'] };

export const CapabilityComparison = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-capabilities" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="capabilities"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<StarIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        <CapabilityCard variant="does" title={content.doesTitle} items={content.doesItems} />
        <CapabilityCard
          variant="doesNot"
          title={content.doesNotTitle}
          items={content.doesNotItems}
        />
      </div>

      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-[var(--term-accent)]">
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};

type CapabilityCardProps = {
  variant: 'does' | 'doesNot';
  title: string;
  items: CapabilityItem[];
};

const CapabilityCard = ({ variant, title, items }: CapabilityCardProps) => {
  const isPositive = variant === 'does';
  const Icon = isPositive ? CheckCircleIcon : XCircleIcon;
  const accentText = isPositive ? 'text-[var(--term-accent)]' : 'text-rose-600 dark:text-rose-300';
  const dot = isPositive ? 'bg-[var(--term-accent)]' : 'bg-rose-400 dark:bg-rose-500';

  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-2xl border p-md sm:p-lg h-full',
        'shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border',
            'border-[var(--term-border)] bg-[var(--term-bg)]',
            accentText,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className={cn('text-md font-bold tracking-tight', accentText)}>{title}</h3>
      </header>

      <ul className="flex flex-col gap-sm">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-sm">
            <span
              aria-hidden="true"
              className={cn('mt-1 inline-block w-1.5 h-1.5 rounded-full shrink-0', dot)}
            />
            <div className="flex flex-col gap-1">
              <span className={cn('text-sm font-bold tracking-tight break-keep', accentText)}>
                {item.title}
              </span>
              <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {item.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
