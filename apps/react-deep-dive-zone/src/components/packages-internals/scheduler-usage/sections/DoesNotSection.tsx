import { ComparePanel } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { DoesItem, SchedulerContent } from '../content';
import { CheckCircleIcon, InfoIcon, StarIcon, XCircleIcon } from '../icons';

type Props = { content: SchedulerContent['doesNot'] };

type Variant = 'does' | 'not';

const variantClasses: Record<Variant, { card: string; iconBadge: string; header: string }> = {
  does: {
    card: 'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    iconBadge: `bg-[var(--term-surface)] border border-[var(--term-border)] ${toneTokens.teal.text}`,
    header: toneTokens.teal.text,
  },
  not: {
    card: 'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    iconBadge:
      'border border-[var(--term-border)] bg-[var(--term-surface)] text-rose-600 dark:text-rose-300',
    header: 'text-rose-600 dark:text-rose-300',
  },
};

export const DoesNotSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-does-not" className="space-y-md">
      <SectionHeader
        id="does-not"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<StarIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
        <DoesPanel variant="does" title={content.doesTitle} items={content.doesItems} />
        <DoesPanel variant="not" title={content.doesNotTitle} items={content.doesNotItems} />
      </div>

      <SectionNote icon={<InfoIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};

type DoesPanelProps = {
  variant: Variant;
  title: string;
  items: DoesItem[];
};

const DoesPanel = ({ variant, title, items }: DoesPanelProps) => {
  const t = variantClasses[variant];
  const Icon = variant === 'does' ? CheckCircleIcon : XCircleIcon;

  return (
    <ComparePanel
      tone={t}
      icon={<Icon className="h-3.5 w-3.5" />}
      title={title}
      headerId={`does-not-${variant}-header`}
    >
      <ul className="flex flex-col gap-md">
        {items.map((item) => (
          <li
            key={item.text}
            className="flex flex-col gap-1 text-xsm text-[var(--term-fg)] leading-relaxed break-keep"
          >
            <span>{item.text}</span>
            {item.assignee && (
              <span className="inline-flex items-center self-start rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[10px] font-bold font-mono tracking-tight text-[var(--term-muted)]">
                → {item.assignee}
              </span>
            )}
          </li>
        ))}
      </ul>
    </ComparePanel>
  );
};
