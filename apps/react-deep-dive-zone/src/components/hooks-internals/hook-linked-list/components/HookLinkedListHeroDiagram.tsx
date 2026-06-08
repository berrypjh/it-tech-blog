import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HookLinkedListContent, HookNode, Tone } from '../content';
import { DatabaseIcon, Link2Icon } from '../icons';

type Props = { content: HookLinkedListContent['hero']; className?: string };

/** content의 Tone을 공유 ToneKey로 매핑한다. rose는 가장 가까운 amber로 좁힌다. */
const toToneKey: Record<Tone, ToneKey> = {
  sky: 'sky',
  cyan: 'cyan',
  teal: 'teal',
  emerald: 'emerald',
  violet: 'violet',
  amber: 'amber',
  rose: 'amber',
};

/**
 * Hero 핵심 비주얼.
 * Fiber.memoizedState에서 시작해 next 포인터로 이어지는 Hook 노드 단방향
 * 연결 리스트를, 위에서 아래로 잇는 컴팩트 stepper로 보여준다.
 */
export const HookLinkedListHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.diagramTitle}: ${content.fiberHighlight} → ${content.hookNodes
    .map((n) => `Hook #${n.index} ${n.hookName}`)
    .join(' → ')}. ${content.bottomLabel}`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <FiberCard
          title={content.diagramTitle}
          fields={content.fiberFields}
          highlight={content.fiberHighlight}
        />

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {content.hookNodes.map((node, i) => (
            <li key={node.index} className="flex flex-col gap-sm">
              <HookCard node={node} />
              {i < content.hookNodes.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <p className="text-center text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {content.bottomLabel}
        </p>
      </div>
    </div>
  );
};

const FiberCard = ({
  title,
  fields,
  highlight,
}: {
  title: string;
  fields: string[];
  highlight: string;
}) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-sm">
      <ToneIconBox tone="teal" size="sm">
        <DatabaseIcon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <span className="min-w-0 truncate font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
        {title}
      </span>
    </header>
    <ul className="flex flex-wrap gap-1">
      {fields.map((f) => (
        <li
          key={f}
          className="rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)]"
        >
          {f}
        </li>
      ))}
      <li
        className={cn(
          'rounded-md border px-1.5 py-0.5 font-mono text-[11px] font-bold leading-none',
          toneTokens.cyan.chip,
        )}
      >
        {highlight}
      </li>
    </ul>
  </article>
);

const HookCard = ({ node }: { node: HookNode }) => {
  const t = toneTokens[toToneKey[node.tone]];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={toToneKey[node.tone]} size="sm">
          <Link2Icon className="h-[18px] w-[18px]" />
        </ToneIconBox>
        <span className={cn('text-sm font-bold tracking-tight', t.text)}>Hook #{node.index}</span>
        <code className="ml-auto shrink-0 font-mono text-[11px] font-bold text-[var(--term-muted)]">
          {node.hookName}
        </code>
      </header>
      <ul className="flex flex-wrap gap-1">
        {node.fields.map((field) => (
          <li
            key={field.name}
            className="rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5 font-mono text-[11px] leading-none text-[var(--term-muted)]"
          >
            {field.name}
            {field.value && (
              <span className="ml-1 font-bold text-[var(--term-accent)]">{field.value}</span>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
