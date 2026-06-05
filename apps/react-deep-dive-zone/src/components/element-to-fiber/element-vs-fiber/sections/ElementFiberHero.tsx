import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ExpansionArrow } from '../components/ExpansionArrow';
import { ObjectCard } from '../components/ObjectCard';
import type { ElementVsFiberContent } from '../content';

type Props = { content: ElementVsFiberContent['hero'] };

export const ElementFiberHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/INTRO.md"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <p
        className={cn(
          'text-3xl sm:text-[2.5rem] lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight break-keep',
          'text-[var(--term-accent)]',
        )}
      >
        <span className="block">{content.emphasis.line1}</span>
        <span className="block">{content.emphasis.line2}</span>
      </p>
    </HeroTextColumn>

    <HeroVisualColumn>
      <div
        className={cn(
          'relative rounded-3xl p-md sm:p-lg',
          'bg-[var(--term-surface)]',
          'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex flex-col gap-md min-w-0">
          <div
            className={cn(
              'grid items-stretch min-w-0',
              'grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_auto_minmax(0,1.15fr)]',
              'gap-sm lg:gap-md',
            )}
          >
            <ObjectCard
              label={content.elementLabel}
              code={content.elementCode}
              variant="element"
              caption="simple"
            />
            <div className="self-center justify-self-center">
              <ExpansionArrow label={content.arrowLabel} />
            </div>
            <ObjectCard
              label={content.fiberLabel}
              code={content.fiberCode}
              variant="fiber"
              caption="richer"
            />
          </div>

          <p className="sr-only">
            {content.elementLabel}는 type, key, props 정도의 작은 정보 객체이고,
            {content.fiberLabel}는 트리 연결과 작업 진행을 위한 더 많은 필드를 가집니다.
          </p>
        </div>
      </div>
    </HeroVisualColumn>
  </HeroSection>
);
