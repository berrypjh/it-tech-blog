import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FunctionComponentContent } from '../content';
import { FunctionSquareIcon, LightbulbIcon, SettingsIcon } from '../icons';

type Props = { content: FunctionComponentContent['renderWithHooks'] };

export const RenderWithHooksRole = ({ content }: Props) => {
  const t = toneTokens.teal;
  return (
    <section
      id="render-with-hooks"
      aria-labelledby="heading-render-with-hooks"
      className="space-y-md"
    >
      <SectionHeader
        id="render-with-hooks"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SettingsIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
        {/* Left: explanation + note */}
        <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
            {content.description}
          </p>
          <SectionNote icon={<LightbulbIcon className="h-4 w-4" />} className="mt-auto">
            {content.noteCard}
          </SectionNote>
        </article>

        {/* Right: FunctionComponent Fiber card */}
        <article
          aria-labelledby="fiber-card-title"
          className={cn(
            'flex flex-col gap-md rounded-lg border p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
            t.border,
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <ToneIconBox tone="teal" size="md">
              <FunctionSquareIcon className="h-5 w-5" />
            </ToneIconBox>
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider font-bold',
                t.chip,
              )}
            >
              {content.fiberCard.badge}
            </span>
          </header>

          <h3
            id="fiber-card-title"
            className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.text)}
          >
            {content.fiberCard.title}
          </h3>

          <div className="flex items-baseline gap-2">
            <span className={cn('text-xxsm font-mono uppercase tracking-wider', t.text)}>
              {content.fiberCard.tagLabel}
            </span>
            <code className="inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-xsm font-bold text-[var(--term-fg)]">
              {content.fiberCard.tagValue}
            </code>
          </div>

          <div
            className={cn(
              'flex items-center justify-center rounded-lg border border-dashed p-lg',
              t.fill.bg,
              t.fill.border,
            )}
          >
            <code className={cn('font-mono text-3xl sm:text-4xl font-bold', t.fill.text)}>
              {'f()'}
            </code>
          </div>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.fiberCard.footer}
          </p>
        </article>
      </div>
    </section>
  );
};
