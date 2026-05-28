import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { HostBullet, PlacementContent } from '../content';
import { ListTreeIcon, TargetIcon } from '../icons';

type Props = { content: PlacementContent['hostParent'] };

export const HostParentSiblingSection = ({ content }: Props) => (
  <section
    id="host-parent-sibling"
    aria-labelledby="heading-host-parent-sibling"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="host-parent-sibling"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListTreeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)] gap-3 items-stretch">
      <FiberTreeCard parentLabel={content.parentLabel} siblingLabel={content.siblingLabel} />
      <ExplanationCard explanation={content.explanation} bullets={content.bullets} />
    </div>
  </section>
);

const FiberTreeCard = ({
  parentLabel,
  siblingLabel,
}: {
  parentLabel: PlacementContent['hostParent']['parentLabel'];
  siblingLabel: PlacementContent['hostParent']['siblingLabel'];
}) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// fiber tree'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 rounded-md border border-violet-200/70 dark:border-violet-800/60 px-2 py-0.5">
        diagram
      </span>
    </header>

    <FiberTree />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <LabelCard tag={parentLabel.tag} value={parentLabel.value} tone="sky" />
      <LabelCard tag={siblingLabel.tag} value={siblingLabel.value} tone="teal" />
    </div>
  </article>
);

const FiberTree = () => (
  <div className="relative">
    <svg
      role="img"
      aria-label="fiber tree with new Item C inserted under List Fiber"
      viewBox="0 0 420 220"
      className="w-full h-auto"
    >
      {/* Links */}
      <g stroke="#94a3b8" strokeWidth={1.4} fill="none">
        <line x1={210} y1={36} x2={210} y2={84} />
        <line x1={210} y1={108} x2={90} y2={156} />
        <line x1={210} y1={108} x2={210} y2={156} />
      </g>
      <g stroke="#a78bfa" strokeWidth={1.6} strokeDasharray="4 3" fill="none">
        <line x1={210} y1={108} x2={330} y2={156} />
      </g>

      {/* Main Fiber */}
      <g>
        <rect
          x={150}
          y={16}
          rx={10}
          ry={10}
          width={120}
          height={32}
          fill="white"
          stroke="#7c3aed"
          strokeWidth={1.4}
        />
        <text x={210} y={36} textAnchor="middle" fontSize={11} fontWeight={700} fill="#5b21b6">
          Main Fiber
        </text>
      </g>

      {/* List Fiber */}
      <g>
        <rect
          x={150}
          y={84}
          rx={10}
          ry={10}
          width={120}
          height={32}
          fill="white"
          stroke="#0284c7"
          strokeWidth={1.4}
        />
        <text x={210} y={104} textAnchor="middle" fontSize={11} fontWeight={700} fill="#0c4a6e">
          List Fiber
        </text>
      </g>

      {/* Item A / B / C */}
      <g>
        <rect
          x={40}
          y={156}
          rx={8}
          ry={8}
          width={100}
          height={30}
          fill="white"
          stroke="#cbd5e1"
          strokeWidth={1.2}
        />
        <text x={90} y={175} textAnchor="middle" fontSize={11} fontWeight={600} fill="#0f172a">
          Item A
        </text>
      </g>
      <g>
        <rect
          x={160}
          y={156}
          rx={8}
          ry={8}
          width={100}
          height={30}
          fill="#ecfeff"
          stroke="#0d9488"
          strokeWidth={1.4}
        />
        <text x={210} y={175} textAnchor="middle" fontSize={11} fontWeight={700} fill="#0f766e">
          Item B
        </text>
      </g>
      <g>
        <rect
          x={280}
          y={156}
          rx={8}
          ry={8}
          width={100}
          height={30}
          fill="#f5f3ff"
          stroke="#7c3aed"
          strokeWidth={1.6}
          strokeDasharray="4 3"
        />
        <text x={330} y={172} textAnchor="middle" fontSize={11} fontWeight={700} fill="#5b21b6">
          Item C
        </text>
        <text x={330} y={184} textAnchor="middle" fontSize={9} fontWeight={600} fill="#7c3aed">
          새로 삽입
        </text>
      </g>

      {/* host parent connector */}
      <g stroke="#0d9488" strokeWidth={1.2} strokeDasharray="3 3" fill="none">
        <line x1={270} y1={100} x2={355} y2={100} />
      </g>
      <g>
        <rect
          x={355}
          y={86}
          rx={8}
          ry={8}
          width={60}
          height={28}
          fill="#ecfeff"
          stroke="#0d9488"
          strokeWidth={1.2}
        />
        <text x={385} y={104} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0f766e">
          {'<ul>'}
        </text>
      </g>
      <text x={385} y={80} textAnchor="middle" fontSize={9} fontWeight={700} fill="#0d9488">
        host parent
      </text>

      {/* host sibling connector */}
      <g stroke="#0d9488" strokeWidth={1.2} strokeDasharray="3 3" fill="none">
        <line x1={260} y1={171} x2={310} y2={210} />
      </g>
      <g>
        <rect
          x={250}
          y={196}
          rx={8}
          ry={8}
          width={120}
          height={20}
          fill="#ecfeff"
          stroke="#0d9488"
          strokeWidth={1.2}
        />
        <text x={310} y={210} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0f766e">
          host sibling: {'<li>B</li>'}
        </text>
      </g>
    </svg>

    <ul className="sr-only">
      <li>Main Fiber → List Fiber</li>
      <li>List Fiber → Item A, Item B, Item C(new)</li>
      <li>host parent: ul DOM</li>
      <li>host sibling: li B</li>
    </ul>
  </div>
);

const LabelCard = ({ tag, value, tone }: { tag: string; value: string; tone: 'sky' | 'teal' }) => {
  const t = commitToneTokens[tone];
  return (
    <div className={cn('flex flex-col gap-0.5 rounded-xl border-2 p-sm', t.borderStrong, t.bg)}>
      <span className={cn('text-[10px] font-mono uppercase tracking-wider font-bold', t.text)}>
        {tag}
      </span>
      <code className={cn('text-xsm font-mono font-bold break-all', t.textStrong)}>{value}</code>
    </div>
  );
};

const ExplanationCard = ({
  explanation,
  bullets,
}: {
  explanation: PlacementContent['hostParent']['explanation'];
  bullets: HostBullet[];
}) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      'border-violet-200/80 bg-violet-50/50',
      'dark:border-violet-800/70 dark:bg-violet-950/25',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2',
          'bg-violet-100 text-violet-700 border-violet-200/80',
          'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
        )}
      >
        <TargetIcon className="h-5 w-5" />
      </span>
      <h3 className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold">
        decision
      </h3>
    </header>

    <p className="text-sm sm:text-md font-bold leading-relaxed text-violet-900 dark:text-violet-100 break-keep">
      <span className="block">{explanation.line1}</span>
      <span className="block">{explanation.line2}</span>
      <span className="block">{explanation.line3}</span>
      <span className="block">{explanation.line4}</span>
    </p>

    <ul className="flex flex-col gap-1.5 border-t border-dashed border-violet-300/60 dark:border-violet-700/50 pt-sm">
      {bullets.map((b) => (
        <li key={b.label}>
          <BulletRow bullet={b} />
        </li>
      ))}
    </ul>
  </article>
);

const BulletRow = ({ bullet }: { bullet: HostBullet }) => {
  const t = commitToneTokens[bullet.tone];
  return (
    <div className="flex items-center gap-2 text-xsm sm:text-sm">
      <span
        className={cn(
          'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider shrink-0',
          t.chip,
        )}
      >
        {bullet.label}
      </span>
      <code className={cn('font-mono font-bold break-all', t.textStrong)}>{bullet.value}</code>
    </div>
  );
};
