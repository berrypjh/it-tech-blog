import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberNodeOverviewContent, RolePill } from '../content';
import {
  DatabaseIcon,
  FingerprintIcon,
  FlagIcon,
  LayersIcon,
  ListTreeIcon,
  NetworkIcon,
  ZapIcon,
} from '../icons';

type Props = { content: FiberNodeOverviewContent['preview'] };

const iconMap = {
  fingerprint: FingerprintIcon,
  network: NetworkIcon,
  database: DatabaseIcon,
  flag: FlagIcon,
  zap: ZapIcon,
  layers: LayersIcon,
} as const;

export const FiberStructurePreview = ({ content }: Props) => (
  <section id="preview" aria-labelledby="heading-preview" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="preview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListTreeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] gap-md items-stretch">
      <div className="min-w-0">
        <CodePreviewPanel code={content.code} language="TS" caption="Fiber" size="sm" />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-sm">
        {content.roles.map((role) => (
          <li key={role.id} className="flex">
            <RoleCard role={role} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const RoleCard = ({ role }: { role: RolePill }) => {
  const Icon = iconMap[role.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 items-start gap-md rounded-2xl border p-md',
        'bg-[var(--term-surface)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={role.tone} className="rounded-xl shrink-0">
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <div className="flex flex-col gap-1 min-w-0">
        <code
          className={cn(
            'font-mono text-xsm font-bold tracking-tight break-keep',
            toneTokens[role.tone].text,
          )}
        >
          {role.fields}
        </code>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {role.description}
        </p>
      </div>
    </article>
  );
};
