import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { effectBadge, effectIconWrap, effectText } from '../components/effectStyles';
import type { EffectKind, FiberFlagsContent, SimulationRow } from '../content';
import { MoveIcon, PencilIcon, SparklesIcon, TrashIcon } from '../icons';

type Props = { content: FiberFlagsContent['simulation'] };

const iconMap: Record<EffectKind, React.ComponentType<{ className?: string }>> = {
  placement: MoveIcon,
  update: PencilIcon,
  childDeletion: TrashIcon,
};

const flagLabel: Record<EffectKind, string> = {
  placement: 'Placement',
  update: 'Update',
  childDeletion: 'ChildDeletion',
};

export const ChangeSimulationSection = ({ content }: Props) => (
  <section id="simulation" aria-labelledby="heading-simulation" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="simulation"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    {/* Desktop: table */}
    <div
      className={cn(
        'hidden lg:block rounded-3xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'overflow-x-auto',
      )}
    >
      <table className="w-full table-fixed text-left">
        <thead>
          <tr className="border-b-2 border-[var(--term-border)]">
            <Th>{content.columns.situation}</Th>
            <Th>{content.columns.before}</Th>
            <Th>{content.columns.after}</Th>
            <Th>{content.columns.change}</Th>
            <Th>{content.columns.result}</Th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row) => (
            <DesktopRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile/tablet: cards */}
    <ul className="lg:hidden flex flex-col gap-md">
      {content.rows.map((row) => (
        <li key={row.id}>
          <MobileRow row={row} columns={content.columns} />
        </li>
      ))}
    </ul>
  </section>
);

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold align-bottom">
    {children}
  </th>
);

const DesktopRow = ({ row }: { row: SimulationRow }) => {
  const Icon = iconMap[row.resultFlag];
  return (
    <tr className="border-b border-dashed border-[var(--term-border)] transition-colors motion-safe:hover:bg-slate-50/60 dark:motion-safe:hover:bg-slate-900/40">
      <td className="px-3 py-3 align-top">
        <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">{row.situation}</span>
      </td>
      <td className="px-3 py-3 align-top">
        <CodeBlock code={row.before} />
      </td>
      <td className="px-3 py-3 align-top">
        <CodeBlock code={row.after} />
      </td>
      <td className="px-3 py-3 align-top">
        <span className="text-xsm text-[var(--term-muted)] break-keep">{row.change}</span>
      </td>
      <td className="px-3 py-3 align-top">
        <div className="flex items-start gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0',
              effectIconWrap[row.resultFlag],
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <span
              className={cn(
                'inline-flex w-fit items-center rounded-full border px-2 py-0.5 font-mono text-[11px] font-bold',
                effectBadge[row.resultFlag],
              )}
            >
              {flagLabel[row.resultFlag]}
            </span>
            <span
              className={cn('text-[11.5px] leading-snug break-keep', effectText[row.resultFlag])}
            >
              {row.resultDescription}
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

const MobileRow = ({
  row,
  columns,
}: {
  row: SimulationRow;
  columns: FiberFlagsContent['simulation']['columns'];
}) => {
  const Icon = iconMap[row.resultFlag];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">{row.situation}</span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0',
            effectIconWrap[row.resultFlag],
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
      </header>
      <div className="grid grid-cols-2 gap-sm">
        <Field label={columns.before}>
          <CodeBlock code={row.before} />
        </Field>
        <Field label={columns.after}>
          <CodeBlock code={row.after} />
        </Field>
      </div>
      <Field label={columns.change}>
        <span className="text-xsm text-[var(--term-muted)] break-keep">{row.change}</span>
      </Field>
      <Field label={columns.result}>
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'inline-flex w-fit items-center rounded-full border px-2 py-0.5 font-mono text-[11px] font-bold',
              effectBadge[row.resultFlag],
            )}
          >
            {flagLabel[row.resultFlag]}
          </span>
          <span className={cn('text-[11.5px] leading-snug break-keep', effectText[row.resultFlag])}>
            {row.resultDescription}
          </span>
        </div>
      </Field>
    </article>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
      {label}
    </span>
    {children}
  </div>
);

const CodeBlock = ({ code }: { code: string }) => (
  <pre className="overflow-x-auto rounded-md border border-slate-200/80 dark:border-slate-800/60 bg-slate-50 dark:bg-slate-900/50 px-2 py-1 font-mono text-[11px] leading-snug text-[var(--term-fg)]">
    {code}
  </pre>
);
