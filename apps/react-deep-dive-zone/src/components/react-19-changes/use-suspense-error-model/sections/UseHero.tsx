import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { UseSuspenseErrorModelContent } from '../content';
import { ArrowRightIcon, AtomIcon } from '../icons';
import { stateTone } from '../tone';

import { CodePanel } from './_CodePanel';
import { iconRegistry } from './_iconRegistry';

type Props = { content: UseSuspenseErrorModelContent['hero'] };

export const UseHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/use-suspense-error-model.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // pending → Suspense · fulfilled → value · rejected → Error Boundary'}
      </span>
    }
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[46ch]">{content.subtitleLines.join(' ')}</HeroDescription>

      {/* code panel */}
      <CodePanel
        code={content.heroCode.code}
        fileName={content.heroCode.fileName}
        langBadge={content.heroCode.langBadge}
      />
    </HeroTextColumn>

    <HeroVisualColumn className="w-full">
      {/* Promise state diagram */}
      <article
        className={cn(
          'relative flex flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-gradient-to-br from-white via-blue-50/40 to-white',
          'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <AtomIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.diagram.title}
          </h3>
        </header>

        <ul className="flex flex-col gap-2">
          {content.diagram.cards.map((card) => {
            const tone = stateTone[card.state];
            const Icon = iconRegistry[card.iconKey];
            return (
              <li key={card.title}>
                <article
                  className={cn(
                    'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-2 rounded-xl border-2 px-3 py-2',
                    'bg-white dark:bg-[var(--term-bg)]',
                    tone.border,
                    'shadow-[0_1px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                      tone.iconChip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col">
                    <span className={cn('text-xsm font-mono font-bold break-keep', tone.text)}>
                      {card.title}
                    </span>
                    <span className="text-[10px] text-[var(--term-muted)] break-keep">
                      {card.subtitle}
                    </span>
                  </div>
                  <span
                    className={cn(
                      'inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
                      'font-mono text-[10px] font-bold',
                      tone.chip,
                    )}
                  >
                    <ArrowRightIcon aria-hidden="true" className="h-3 w-3" />
                    {card.result.replace('→ ', '')}
                  </span>
                </article>
              </li>
            );
          })}
        </ul>
      </article>
    </HeroVisualColumn>
  </HeroSection>
);
