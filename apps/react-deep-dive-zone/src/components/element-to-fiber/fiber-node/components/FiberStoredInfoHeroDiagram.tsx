import { cx } from '@berrypjh/react-ui';
import { Box, Hexagon } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberStoredInformationContent } from '../content';

type Props = { content: FiberStoredInformationContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * Element 객체(type/key/props)가 Fiber 객체로 확장되며 훨씬 많은 작업 정보를
 * 추가로 들고 다니는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const FiberStoredInfoHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.elementTitle} (${content.elementFields.join(', ')}) → ${content.fiberTitle} (${content.fiberFields.join(', ')})`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <ObjectCard
          tone="emerald"
          eyebrow="source"
          title={content.elementTitle}
          fields={content.elementFields}
          icon={<Box className="h-[18px] w-[18px]" aria-hidden="true" />}
        />

        <DownArrow />

        <ObjectCard
          tone="violet"
          eyebrow="expanded"
          title={content.fiberTitle}
          fields={content.fiberFields}
          icon={<Hexagon className="h-[18px] w-[18px]" aria-hidden="true" />}
          columns
        />
      </div>
    </HeroDiagramShell>
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
      className={cx(
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
          <code className={cx('font-mono text-sm font-bold tracking-tight', t.text)}>{title}</code>
        </div>
        <span
          className={cx(
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
    <ul className={cx('grid gap-1.5', columns ? 'grid-cols-2 @sm:grid-cols-3' : 'grid-cols-3')}>
      {fields.map((field) => (
        <li
          key={field}
          className={cx(
            'flex items-center gap-1.5 rounded-md border px-2 py-1 min-w-0',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span aria-hidden="true" className={cx('h-1.5 w-1.5 shrink-0 rounded-full', t.dot)} />
          <code className="min-w-0 truncate font-mono text-[11px] font-bold text-[var(--term-fg)]">
            {field}
          </code>
        </li>
      ))}
    </ul>
  );
};
