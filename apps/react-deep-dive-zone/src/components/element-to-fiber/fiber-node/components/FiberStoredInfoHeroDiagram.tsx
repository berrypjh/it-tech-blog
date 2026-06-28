import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberStoredInformationContent } from '../content';
import { BoxIcon, HexagonIcon } from '../icons';

type Props = { content: FiberStoredInformationContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * Element 객체(type/key/props)가 Fiber 객체로 확장되며 훨씬 많은 작업 정보를
 * 추가로 들고 다니는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const FiberStoredInfoHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.elementTitle}는 ${content.elementFields.join(
    ', ',
  )} 필드만 가지지만, ${content.fiberTitle}는 ${content.fiberFields.join(
    ', ',
  )} 등 훨씬 많은 필드를 추가로 가집니다.`;

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
        <ObjectCard
          tone="emerald"
          eyebrow="source"
          title={content.elementTitle}
          fields={content.elementFields}
          icon={<BoxIcon className="h-[18px] w-[18px]" />}
        />

        <DownArrow />

        <ObjectCard
          tone="violet"
          eyebrow="expanded"
          title={content.fiberTitle}
          fields={content.fiberFields}
          icon={<HexagonIcon className="h-[18px] w-[18px]" />}
          columns
        />
      </div>
    </div>
  );
};

const ObjectCard = ({
  tone,
  eyebrow,
  title,
  fields,
  icon,
  columns = false,
}: {
  tone: ToneKey;
  eyebrow: string;
  title: string;
  fields: string[];
  icon: React.ReactNode;
  columns?: boolean;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <div className="flex min-w-0 flex-col">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {eyebrow}
          </span>
          <code className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{title}</code>
        </div>
        <span
          className={cn(
            'ml-auto inline-flex shrink-0 items-center rounded-full border px-2 py-0.5',
            'text-[10px] font-bold font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {fields.length} fields
        </span>
      </header>

      <FieldList fields={fields} tone={tone} columns={columns} />
    </article>
  );
};

const FieldList = ({
  fields,
  tone,
  columns,
}: {
  fields: string[];
  tone: ToneKey;
  columns: boolean;
}) => {
  const t = toneTokens[tone];
  return (
    <ul className={cn('grid gap-1.5', columns ? 'grid-cols-2 @sm:grid-cols-3' : 'grid-cols-3')}>
      {fields.map((field) => (
        <li
          key={field}
          className={cn(
            'flex items-center gap-1.5 rounded-md border px-2 py-1 min-w-0',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span aria-hidden="true" className={cn('h-1.5 w-1.5 shrink-0 rounded-full', t.dot)} />
          <code className="min-w-0 truncate font-mono text-[11px] font-bold text-[var(--term-fg)]">
            {field}
          </code>
        </li>
      ))}
    </ul>
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
