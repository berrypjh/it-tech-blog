import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HookLinkedListContent } from '../content';
import { BoxesIcon } from '../icons';

type Props = { content: HookLinkedListContent['multipleHooks'] };

export const MultipleHooksRepresentation = ({ content }: Props) => (
  <section
    aria-labelledby="heading-multiple"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="multiple"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BoxesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const t = toneTokens[card.tone as ToneKey];
        return (
          <li key={card.index}>
            <article
              className={cn(
                'h-full flex flex-col gap-md rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
                'shadow-[0_2px_0_var(--term-border)] transition-all',
                'motion-safe:hover:-translate-y-0.5',
                t.border,
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 px-2.5 items-center justify-center rounded-full border text-[11px] font-mono font-bold tabular-nums',
                      t.fill.bg,
                      t.fill.border,
                      t.fill.text,
                    )}
                  >
                    Hook #{card.index}
                  </span>
                  <code className={cn('font-mono text-xsm sm:text-sm font-bold break-all', t.text)}>
                    {card.hookName}
                  </code>
                </div>
                <span
                  className={cn(
                    'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider break-keep',
                    t.chip,
                  )}
                >
                  {card.badge}
                </span>
              </header>

              <ul className="flex flex-col gap-2">
                {card.fields.map((field) => (
                  <li
                    key={field.label}
                    className="rounded-lg border border-[var(--term-border)] bg-[var(--term-border)]/15 p-2"
                  >
                    <p
                      className={cn(
                        'text-[10px] font-mono font-bold uppercase tracking-wider mb-0.5',
                        t.text,
                      )}
                    >
                      {field.label}
                    </p>
                    {field.mono ? (
                      <code className="font-mono text-[11px] sm:text-xsm text-[var(--term-fg)] break-all">
                        {field.value}
                      </code>
                    ) : (
                      <p className="text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep">
                        {field.value}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
