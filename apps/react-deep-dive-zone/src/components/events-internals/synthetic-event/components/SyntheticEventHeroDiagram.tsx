import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { PropertyRow, SyntheticEventContent } from '../content';
import { AtomIcon, LinkIcon } from '../icons';

type Props = { content: SyntheticEventContent['hero']['diagram']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 브라우저의 native event를 React가 감싸 handler에 넘기는 SyntheticEvent를,
 * 객체 헤더 → 정규화된 필드/메서드 목록 → helper 설명으로 컴팩트하게 보여준다.
 */
export const SyntheticEventHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.title}: ${content.properties
    .map((p) => `${p.name}(${p.meaning})`)
    .join(', ')}. ${content.helper.title} — ${content.helper.body}`;

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
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="amber" size="sm">
            <LinkIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
            nativeEvent
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            browser
          </span>
        </header>

        <DownArrow />

        <article
          className={cn(
            'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-sm">
            <ToneIconBox tone="violet" size="sm">
              <AtomIcon className="h-[18px] w-[18px]" />
            </ToneIconBox>
            <h2
              className={cn('text-xsm font-bold tracking-tight break-keep', toneTokens.violet.text)}
            >
              {content.title}
            </h2>
          </header>

          <ul className="flex flex-col gap-1">
            {content.properties.map((row) => (
              <PropertyItem key={row.name} row={row} />
            ))}
          </ul>
        </article>

        <DownArrow />

        <article
          className={cn(
            'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            toneTokens.teal.borderHover,
          )}
        >
          <ToneIconBox tone="teal" size="sm">
            <LinkIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <div className="flex min-w-0 flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
              {content.helper.title}
            </h3>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.helper.body}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

const PropertyItem = ({ row }: { row: PropertyRow }) => (
  <li className="grid grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] items-start gap-2">
    <code
      className={cn(
        'min-w-0 truncate rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-1.5 py-0.5',
        'font-mono text-[11px] font-bold leading-none',
        toneTokens.violet.text,
      )}
    >
      {row.name}
    </code>
    <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">{row.meaning}</p>
  </li>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
