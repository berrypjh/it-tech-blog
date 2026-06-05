import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { TypeForkDiagram } from '../components/TypeForkDiagram';
import type { FragmentModeFiberContent } from '../content';

type Props = { content: FragmentModeFiberContent['hero'] };

export const FragmentModeHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    promptSuffix={<span className="text-[var(--term-muted)]"> # special-type branches</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">{content.title.line2}</span>
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <ul className="grid grid-cols-2 gap-2 pt-1">
        <li
          className={cn(
            'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
            Fragment
          </span>
          <code className="text-xsm font-mono font-bold text-[var(--term-fg)]">Work Tag 7</code>
        </li>
        <li
          className={cn(
            'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
            Mode
          </span>
          <code className="text-xsm font-mono font-bold text-[var(--term-fg)]">Work Tag 8</code>
        </li>
      </ul>
    </HeroTextColumn>

    <HeroVisualColumn>
      <div
        className={cn(
          'relative rounded-3xl p-md sm:p-lg',
          'bg-gradient-to-br from-violet-50/50 via-white to-emerald-50/60',
          'dark:from-violet-950/20 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
          'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <TypeForkDiagram
          typeLabel={content.typeLabel}
          fragmentTitle={content.fragmentTitle}
          fragmentSubtitle={content.fragmentSubtitle}
          fragmentResultTitle={content.fragmentResultTitle}
          fragmentResultItems={content.fragmentResultItems}
          strictTitle={content.strictTitle}
          strictSubtitle={content.strictSubtitle}
          modeResultTitle={content.modeResultTitle}
          modeResultItems={content.modeResultItems}
        />
      </div>
    </HeroVisualColumn>
  </HeroSection>
);
