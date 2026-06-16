import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { DiagramNode, PackagesDirectoryContent } from '../content';
import { NetworkIcon, packageIconByName } from '../icons';
import { houseTone } from '../tone-house';

type Props = { content: PackagesDirectoryContent['diagram'] };

export const PackageRelationshipDiagram = ({ content }: Props) => {
  const { react, reconciler, reactDom, scheduler, shared } = content.nodes;

  return (
    <section aria-labelledby="heading-diagram" className="space-y-md">
      <SectionHeader
        id="diagram"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<NetworkIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'p-md sm:p-lg lg:p-xl',
        )}
      >
        {/* flow label */}
        <div className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className="flex-1 border-t border-dashed border-[var(--term-border)]"
          />
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)]">
            {content.flowLabel}
          </span>
          <span
            aria-hidden="true"
            className="flex-1 border-t border-dashed border-[var(--term-border)]"
          />
        </div>

        {/* 메인 흐름: react → reconciler → react-dom (1행), reconciler ↓ scheduler (2행) */}
        <div
          className={cn(
            'grid grid-cols-1 gap-md',
            'lg:grid-cols-[1fr_auto_1.15fr_auto_1fr] lg:gap-y-lg lg:items-stretch',
          )}
        >
          <div className="lg:col-start-1 lg:row-start-1">
            <DiagramNodeCard node={react} />
          </div>
          <FlowArrow className="lg:col-start-2 lg:row-start-1" />
          <div className="lg:col-start-3 lg:row-start-1">
            <DiagramNodeCard node={reconciler} emphasized />
          </div>
          <FlowArrow className="lg:col-start-4 lg:row-start-1" />
          <div className="lg:col-start-5 lg:row-start-1">
            <DiagramNodeCard node={reactDom} />
          </div>

          {/* reconciler 컬럼 바로 아래에 scheduler 정렬 */}
          <div className="flex flex-col items-center gap-xs lg:col-start-3 lg:row-start-2">
            <span
              aria-hidden="true"
              className="block w-0 h-xl border-l border-dashed border-[var(--term-border)]"
            />
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono inline-flex items-center gap-1 px-2 py-1 rounded-full border border-dashed border-[var(--term-border)] bg-[var(--term-surface)]">
              <span aria-hidden="true" className="text-[var(--term-dim)]">
                dashed
              </span>
              uses
            </span>
            <span
              aria-hidden="true"
              className="block w-0 h-md border-l border-dashed border-[var(--term-border)]"
            />
            <div className="w-full">
              <DiagramNodeCard node={scheduler} />
            </div>
          </div>
        </div>

        {/* 최하단 shared wide card */}
        <SharedWideCard node={shared} />
      </div>
    </section>
  );
};

type DiagramNodeCardProps = {
  node: DiagramNode;
  emphasized?: boolean;
};

const DiagramNodeCard = ({ node, emphasized }: DiagramNodeCardProps) => {
  const tone = houseTone(node.tone);
  const Icon = packageIconByName[node.icon];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-sm rounded-lg border p-md transition-all',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        tone.borderHover,
        emphasized && 'lg:shadow-[0_3px_0_var(--term-border)] lg:scale-[1.02]',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <div className="flex items-center gap-sm min-w-0">
          <span
            aria-hidden="true"
            className={cn('inline-flex items-center justify-center w-9 h-9 rounded-md', tone.chip)}
          >
            <Icon className="h-4 w-4" />
          </span>
          <h3 className={cn('text-sm sm:text-md font-bold font-mono tracking-tight', tone.text)}>
            {node.title}
          </h3>
        </div>
      </header>
      <p className="text-[11px] uppercase tracking-wider text-[var(--term-muted)]">
        {node.subtitle}
      </p>
      {node.items && (
        <ul className="flex flex-col gap-1">
          {node.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-xsm leading-snug text-[var(--term-fg)] break-keep"
            >
              <span aria-hidden="true" className={cn('h-1 w-1 rounded-full', tone.dot)} />
              {item}
            </li>
          ))}
        </ul>
      )}
      {node.description && (
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {node.description}
        </p>
      )}
    </article>
  );
};

const FlowArrow = ({ className }: { className?: string }) => (
  <div className={cn('flex items-center justify-center', className)} aria-hidden="true">
    {/* 데스크톱: 가로 화살표 */}
    <span className="hidden lg:inline-flex items-center text-[var(--term-accent)] text-xl">→</span>
    {/* 모바일: 세로 화살표 */}
    <span className="inline-flex lg:hidden items-center text-[var(--term-accent)] text-xl">↓</span>
  </div>
);

type SharedWideCardProps = { node: DiagramNode };

const SharedWideCard = ({ node }: SharedWideCardProps) => {
  const tone = houseTone(node.tone);
  const Icon = packageIconByName[node.icon];

  return (
    <div
      className={cn(
        'mt-xs flex flex-col gap-2 rounded-lg border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'bg-[var(--term-surface)] border-[var(--term-border)]',
      )}
    >
      {/* 점선 connector 라벨 */}
      <div className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] inline-flex items-center gap-1">
          <span aria-hidden="true" className="text-[var(--term-dim)]">
            shared
          </span>
          foundation
        </span>
        <span
          aria-hidden="true"
          className="flex-1 border-t border-dashed border-[var(--term-border)]"
        />
      </div>

      <header className="flex items-center justify-between gap-sm">
        <div className="flex items-center gap-sm min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-md border bg-[var(--term-bg)]',
              tone.border,
            )}
          >
            <Icon className={cn('h-5 w-5', tone.text)} />
          </span>
          <div className="flex flex-col min-w-0">
            <span className={cn('text-md font-bold font-mono tracking-tight', tone.text)}>
              {node.title}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[var(--term-muted)]">
              {node.subtitle}
            </span>
          </div>
        </div>
      </header>
      {node.description && (
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {node.description}
        </p>
      )}
    </div>
  );
};
