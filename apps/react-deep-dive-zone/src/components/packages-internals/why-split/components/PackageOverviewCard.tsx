import { cn } from '@it-tech-blog/utils';

import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ArchitectureNode, SideNode } from '../content';
import { architectureIcon } from '../icons';

type Props = {
  mainFlow: ArchitectureNode[];
  side: SideNode[];
  flowLabel: string;
  sideLabel: string;
  a11yFlow: string;
  className?: string;
};

export const PackageOverviewCard = ({
  mainFlow,
  side,
  flowLabel,
  sideLabel,
  a11yFlow,
  className,
}: Props) => (
  <HeroDiagramShell
    a11yLabel={a11yFlow}
    className={className}
    gradient="radial-gradient(circle at 18% 12%, rgba(56,189,248,0.10), transparent 55%), radial-gradient(circle at 82% 88%, rgba(251,191,36,0.10), transparent 55%)"
  >
    <span className="relative block text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
      {flowLabel}
    </span>

    <ul className="relative mt-sm flex flex-col gap-2">
      {mainFlow.map((node) => (
        <PackageRow key={node.label} node={node} />
      ))}
    </ul>

    <span className="relative mt-md block text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
      {sideLabel}
    </span>

    <ul className="relative mt-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
      {side.map((node) => (
        <PackageRow key={node.label} node={node} dashed />
      ))}
    </ul>
  </HeroDiagramShell>
);

type PackageRowProps = { node: ArchitectureNode | SideNode; dashed?: boolean };

const PackageRow = ({ node, dashed }: PackageRowProps) => {
  const Icon = architectureIcon[node.iconName];

  return (
    <li
      className={cn(
        'group flex min-w-0 items-center gap-2 rounded-lg border bg-[var(--term-bg)] px-3 py-2',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        dashed
          ? 'border-2 border-dashed border-[var(--term-border)]'
          : 'border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone={node.tone} size="sm">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <span className="flex min-w-0 flex-col">
        <span
          className={cn(
            'truncate text-sm font-bold font-mono tracking-tight',
            toneTokens[node.tone].text,
          )}
        >
          {node.label}
        </span>
        <span className="truncate text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          {node.caption}
        </span>
      </span>
    </li>
  );
};
