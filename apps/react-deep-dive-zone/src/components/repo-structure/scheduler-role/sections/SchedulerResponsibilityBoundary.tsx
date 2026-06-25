import { ComparePanel } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ResponsibilityItem, SchedulerContent } from '../content';
import { CheckIcon, InfoIcon, XIcon } from '../icons';

type Props = { content: SchedulerContent['responsibility'] };

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

export const SchedulerResponsibilityBoundary = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-responsibility" className="space-y-md">
      <SectionHeader
        id="responsibility"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
        <BoundaryPanel title={content.leftTitle} items={content.leftItems} variant="does" />
        <BoundaryPanel title={content.rightTitle} items={content.rightItems} variant="not" />
      </div>

      <SectionNote icon={<InfoIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};

type PanelProps = {
  title: string;
  items: ResponsibilityItem[];
  variant: Variant;
};

const BoundaryPanel = ({ title, items, variant }: PanelProps) => {
  const t = variantClasses[variant];
  const Icon = variant === 'does' ? CheckIcon : XIcon;

  return (
    <ComparePanel
      tone={t}
      icon={<Icon className="h-3.5 w-3.5" />}
      title={title}
      headerId={`responsibility-${variant}-header`}
    >
      <ul className="flex flex-col gap-md">
        {items.map((item) => (
          <li key={item.text} className="text-xsm text-[var(--term-fg)] leading-relaxed break-keep">
            {item.text}
          </li>
        ))}
      </ul>
    </ComparePanel>
  );
};
