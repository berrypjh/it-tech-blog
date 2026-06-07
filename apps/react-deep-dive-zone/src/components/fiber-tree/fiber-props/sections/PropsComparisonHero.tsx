import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { PropsCompareCard } from '../components/PropsCompareCard';
import type { FiberPropsContent } from '../content';

type Props = { content: FiberPropsContent['hero'] };

export const PropsComparisonHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactInternalTypes.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">
          {content.title.line2.split(content.emphasis).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="text-[var(--term-accent)]">{content.emphasis}</span>
              )}
            </span>
          ))}
        </span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[62ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn className="@container">
      <div className="grid grid-cols-1 @lg:grid-cols-[1fr_auto_1fr] gap-sm items-stretch">
        <PropsCompareCard
          kind="memoizedProps"
          title={content.memoizedCard.title}
          subtitle={content.memoizedCard.subtitle}
          badge={content.memoizedCard.badge}
          exampleLabel={content.memoizedCard.exampleLabel}
          example={content.memoizedCard.example}
        />
        <VsBadge label={content.vs} />
        <PropsCompareCard
          kind="pendingProps"
          title={content.pendingCard.title}
          subtitle={content.pendingCard.subtitle}
          badge={content.pendingCard.badge}
          exampleLabel={content.pendingCard.exampleLabel}
          example={content.pendingCard.example}
        />
      </div>
    </HeroVisualColumn>
  </HeroSection>
);

const VsBadge = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-full',
        'bg-slate-900 text-white border-2 border-slate-700',
        'dark:bg-slate-950 dark:border-slate-700',
        'shadow-[0_8px_20px_-8px_rgba(15,23,42,0.55)]',
        'font-bold text-sm tracking-wider',
      )}
    >
      {label}
    </span>
  </div>
);
