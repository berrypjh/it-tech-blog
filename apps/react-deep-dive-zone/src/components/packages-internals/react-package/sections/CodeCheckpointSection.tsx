import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import type { CheckpointItem, ReactPackageContent } from '../content';
import { reactPackageIcon } from '../icons';

type Props = { content: ReactPackageContent['checkpoint'] };

export const CodeCheckpointSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-checkpoint" className="space-y-md">
      <SectionHeader
        id="checkpoint"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckpointHeaderIcon />}
      />

      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border p-md sm:p-lg',
          'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          'border-[var(--term-border)]',
        )}
      >
        <ul className="flex flex-col divide-y divide-dashed divide-[var(--term-border)]">
          {content.items.map((item) => (
            <li key={item.id} className="py-3 first:pt-0 last:pb-0">
              <CheckpointRow item={item} />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

const CheckpointHeaderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const CheckpointRow = ({ item }: { item: CheckpointItem }) => {
  const Icon = reactPackageIcon[item.iconName];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,8rem)_minmax(0,1fr)] items-start gap-sm">
      <ToneIconBox tone={item.tone} size="sm">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold font-mono pt-2">
        {item.label}
      </span>
      <span className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] font-mono break-words pt-1.5">
        {item.value}
      </span>
    </div>
  );
};
