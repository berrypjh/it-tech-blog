import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { RiskItem, RootCurrentRefContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  XCircleIcon,
} from '../icons';

type Props = { content: RootCurrentRefContent['risk'] };

export const RenderRefRiskSection = ({ content }: Props) => (
  <section
    id="render-ref-risk"
    aria-labelledby="heading-render-ref-risk"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="render-ref-risk"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ShieldAlertIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
      <RiskCard
        title={content.riskCard.title}
        subtitle={content.riskCard.subtitle}
        items={content.riskCard.items}
        warning={content.riskCard.warning}
      />
      <Arrow />
      <SafeCard
        title={content.safeCard.title}
        subtitle={content.safeCard.subtitle}
        items={content.safeCard.items}
        safeMessage={content.safeCard.safeMessage}
      />
    </div>
  </section>
);

const Arrow = () => {
  const t = toneTokens.blue;
  return (
    <div aria-hidden="true" className={cn('flex items-center justify-center py-1 lg:py-0', t.text)}>
      <span
        className={cn(
          'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <ArrowRightIcon className="hidden lg:inline-block h-6 w-6" />
        <ArrowDownIcon className="lg:hidden h-6 w-6" />
      </span>
    </div>
  );
};

const ZoneCard = ({
  tone,
  icon,
  title,
  subtitle,
  items,
  itemIcon,
  noteTone,
  noteIcon,
  note,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: RiskItem[];
  itemIcon: React.ReactNode;
  noteTone: ToneKey;
  noteIcon: React.ReactNode;
  note: string;
}) => {
  const t = toneTokens[tone];
  const n = toneTokens[noteTone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone={tone}>{icon}</ToneIconBox>
        <div className="flex flex-col">
          <h3 className={cn('text-sm sm:text-md font-bold', t.fill.text)}>{title}</h3>
          <span className={cn('text-[10px] font-mono uppercase tracking-wider', t.text)}>
            {subtitle}
          </span>
        </div>
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.text}
            className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
          >
            <span aria-hidden="true" className={cn('mt-0.5 shrink-0', t.text)}>
              {itemIcon}
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>

      <aside
        className={cn(
          'mt-auto flex items-start gap-sm rounded-md border-2 p-sm',
          n.fill.border,
          n.fill.bg,
        )}
      >
        <span aria-hidden="true" className={cn('mt-0.5 shrink-0', n.fill.text)}>
          {noteIcon}
        </span>
        <p className={cn('text-[11px] sm:text-xsm leading-snug font-bold break-keep', n.fill.text)}>
          {note}
        </p>
      </aside>
    </article>
  );
};

const RiskCard = ({
  title,
  subtitle,
  items,
  warning,
}: {
  title: string;
  subtitle: string;
  items: RiskItem[];
  warning: string;
}) => (
  <ZoneCard
    tone="violet"
    icon={<ShieldAlertIcon className="h-5 w-5" />}
    title={title}
    subtitle={subtitle}
    items={items}
    itemIcon={<XCircleIcon className="h-4 w-4" />}
    noteTone="amber"
    noteIcon={<ShieldAlertIcon className="h-4 w-4" />}
    note={warning}
  />
);

const SafeCard = ({
  title,
  subtitle,
  items,
  safeMessage,
}: {
  title: string;
  subtitle: string;
  items: RiskItem[];
  safeMessage: string;
}) => (
  <ZoneCard
    tone="teal"
    icon={<ShieldCheckIcon className="h-5 w-5" />}
    title={title}
    subtitle={subtitle}
    items={items}
    itemIcon={<CheckCircleIcon className="h-4 w-4" />}
    noteTone="emerald"
    noteIcon={<ShieldCheckIcon className="h-4 w-4" />}
    note={safeMessage}
  />
);
