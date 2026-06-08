import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { HostComponentFiberContent } from '../content';
import { CheckCircleIcon, HexagonIcon, TagIcon } from '../icons';

type Props = { content: HostComponentFiberContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 문자열 type을 가진 호스트 태그(div, button, input)가 하나의
 * HostComponent Fiber로 모이는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const HostComponentHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.domTags
    .map((t) => `${t.code} (${t.type})`)
    .join(', ')} → ${content.resultTitle}: ${content.resultItems.join(', ')}`;

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
        <ul className="flex flex-col gap-2">
          {content.domTags.map((tag) => (
            <li key={tag.id}>
              <DomTagCard code={tag.code} type={tag.type} />
            </li>
          ))}
        </ul>

        <DownArrow />

        <ResultCard title={content.resultTitle} items={content.resultItems} />
      </div>
    </div>
  );
};

const DomTagCard = ({ code, type }: { code: string; type: string }) => {
  const t = toneTokens.emerald;
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] p-sm pl-md min-w-0',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone="emerald" size="sm">
        <TagIcon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <code className={cn('font-mono text-sm font-bold tracking-tight break-all', t.text)}>
          {code}
        </code>
        <code className="font-mono text-[11px] text-[var(--term-muted)] break-all">{type}</code>
      </div>
    </article>
  );
};

const ResultCard = ({ title, items }: { title: string; items: string[] }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md min-w-0',
        'shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone="sky" size="md">
          <HexagonIcon className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex min-w-0 flex-col">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            result fiber
          </span>
          <code className={cn('font-mono text-md font-extrabold tracking-tight', t.text)}>
            {title}
          </code>
        </div>
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-2 rounded-lg border bg-[var(--term-bg)] px-sm py-2',
              'border-[var(--term-border)]',
            )}
          >
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950"
            >
              <CheckCircleIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-xsm font-bold leading-snug text-[var(--term-fg)] break-keep">
              {item}
            </span>
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
