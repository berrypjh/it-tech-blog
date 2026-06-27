import { ComparePanel } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CapabilityItem, ReactPackageContent } from '../content';
import { CheckCircleIcon, StarIcon, XCircleIcon } from '../icons';

type Props = { content: ReactPackageContent['capabilities'] };

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
        <CapabilityPanel variant="does" title={content.doesTitle} items={content.doesItems} />
        <CapabilityPanel variant="not" title={content.doesNotTitle} items={content.doesNotItems} />
      </div>

      <SectionNote icon={<StarIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};

type CapabilityPanelProps = {
  variant: Variant;
  title: string;
  items: CapabilityItem[];
};

const CapabilityPanel = ({ variant, title, items }: CapabilityPanelProps) => {
  const t = variantClasses[variant];
  const Icon = variant === 'does' ? CheckCircleIcon : XCircleIcon;

  return (
    <ComparePanel
      tone={t}
      icon={<Icon className="h-3.5 w-3.5" />}
      title={title}
      headerId={`capabilities-${variant}-header`}
    >
      <ul className="flex flex-col gap-md">
        {items.map((item) => (
          <li key={item.title} className="flex flex-col gap-1">
            <span className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
              {item.title}
            </span>
            <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </ComparePanel>
  );
};
