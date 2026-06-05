import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FlowArrow } from '../components/FlowArrow';
import { FunctionCard } from '../components/FunctionCard';
import { ObjectPreviewCard } from '../components/ObjectPreviewCard';
import type { CreateFiberFromElementContent } from '../content';

type Props = { content: CreateFiberFromElementContent['hero'] };

export const CreateFiberHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription>{content.description1}</HeroDescription>
      <HeroDescription>{content.description2}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn>
      <div
        className={cn(
          'relative rounded-3xl p-md sm:p-lg',
          'bg-[var(--term-surface)]',
          'border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div
          className={cn(
            'grid items-stretch min-w-0',
            'grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_auto_minmax(0,1.15fr)_auto_minmax(0,1.1fr)]',
            'gap-sm lg:gap-md',
          )}
        >
          <ObjectPreviewCard
            variant="element"
            label={content.elementLabel}
            code={content.elementCode}
            badgeText="input"
          />
          <FlowArrow className="self-center" />
          <FunctionCard label={content.functionLabel} subtitle={content.functionSubtitle}>
            <ul className="flex flex-col gap-1.5 pt-1">
              {content.extractionChips.map((chip) => (
                <li
                  key={chip.badge}
                  className={cn(
                    'flex items-center gap-2 rounded-lg border px-sm py-2',
                    'border-[var(--term-border)] bg-[var(--term-bg)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center w-6 h-6 rounded-md font-mono text-[11px] font-bold tabular-nums',
                      'bg-[var(--term-accent)] text-[var(--term-bg)]',
                    )}
                  >
                    {chip.badge}
                  </span>
                  <code className="font-mono text-xsm font-bold text-[var(--term-fg)]">
                    {chip.label}
                  </code>
                </li>
              ))}
            </ul>
          </FunctionCard>
          <FlowArrow className="self-center" />
          <ObjectPreviewCard
            variant="fiber"
            label={content.fiberLabel}
            code={content.fiberCode}
            badgeText="output"
          />
        </div>

        <p className="sr-only">
          React Element는 type, key, props를 가진 작은 객체이고, createFiberFromElement 함수가 이
          값을 추출해 Fiber 객체로 확장합니다.
        </p>
      </div>
    </HeroVisualColumn>
  </HeroSection>
);
