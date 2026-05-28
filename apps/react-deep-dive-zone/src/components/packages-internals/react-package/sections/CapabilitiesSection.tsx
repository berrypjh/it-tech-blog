import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { CapabilityItem, ReactPackageContent } from '../content';
import { CheckCircleIcon, StarIcon, XCircleIcon } from '../icons';

type Props = { content: ReactPackageContent['capabilities'] };

export const CapabilitiesSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-capabilities" className="space-y-md">
      <SectionHeader
        id="capabilities"
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
          'border-teal-300/80 bg-teal-50 text-teal-900',
          'dark:border-teal-800/70 dark:bg-teal-950/40 dark:text-teal-100',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-teal-600 dark:text-teal-300">
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

  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-2xl border p-md sm:p-lg h-full',
        'shadow-[0_2px_0_var(--term-border)]',
        isPositive
          ? 'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-800/70 dark:bg-emerald-950/30'
          : 'border-red-300/80 bg-red-50/60 dark:border-red-800/70 dark:bg-red-950/30',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border',
            isPositive
              ? 'border-emerald-300/80 bg-emerald-100 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-900/60 dark:text-emerald-200'
              : 'border-red-300/80 bg-red-100 text-red-700 dark:border-red-700/70 dark:bg-red-900/60 dark:text-red-200',
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3
          className={cn(
            'text-md font-bold tracking-tight',
            isPositive
              ? 'text-emerald-800 dark:text-emerald-200'
              : 'text-red-800 dark:text-red-200',
          )}
        >
          {title}
        </h3>
      </header>

      <ul className="flex flex-col gap-sm">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'mt-1 inline-block w-1.5 h-1.5 rounded-full shrink-0',
                isPositive ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-red-500 dark:bg-red-400',
              )}
            />
            <div className="flex flex-col gap-1">
              <span
                className={cn(
                  'text-sm font-bold tracking-tight break-keep',
                  isPositive
                    ? 'text-emerald-800 dark:text-emerald-200'
                    : 'text-red-800 dark:text-red-200',
                )}
              >
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
