import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { ReactFiberCodePanel } from '../components/ReactFiberCodePanel';
import type { CheckpointItem, ReconcilerContent } from '../content';
import { reconcilerIcon } from '../icons';

type Props = { content: ReconcilerContent['checkpoint']; sectionId: string };

export const CheckpointSection = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-checkpoint"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="checkpoint"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckpointHeaderIcon />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.65fr)_minmax(0,_1.35fr)] gap-md items-stretch">
        <article
          className={cn(
            'relative flex flex-col gap-sm rounded-2xl border p-md sm:p-lg overflow-hidden',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          {/* 옅은 question mark 장식 */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -bottom-4 text-[6rem] font-bold leading-none text-teal-100/60 dark:text-teal-900/30 select-none"
          >
            ?
          </span>

          <ul className="relative flex flex-col divide-y divide-dashed divide-[var(--term-border)]">
            {content.items.map((item) => (
              <li key={item.id} className="py-3 first:pt-0 last:pb-0">
                <CheckpointRow item={item} />
              </li>
            ))}
          </ul>
        </article>

        <ReactFiberCodePanel
          caption={content.codeCaption}
          code={content.code}
          primaryLabel={content.codeButtons.primary}
          secondaryLabel={content.codeButtons.secondary}
        />
      </div>
    </section>
  );
};

const CheckpointRow = ({ item }: { item: CheckpointItem }) => {
  const Icon = reconcilerIcon[item.iconName];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,7rem)_minmax(0,1fr)] items-start gap-sm">
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
