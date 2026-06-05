import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { AlternateLink } from '../components/AlternateLink';
import { FiberPairCard } from '../components/FiberPairCard';
import type { AlternateFiberContent } from '../content';

type Props = { content: AlternateFiberContent['hero'] };

export const AlternateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    promptSuffix={<span className="text-[var(--term-muted)]"> # createWorkInProgress</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">
          <code className="font-mono text-[var(--term-accent)]">alternate</code>가 있을까?
        </span>
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
            current
          </span>
          <code className="text-xsm font-mono font-bold text-[var(--term-fg)]">
            화면에 반영된 트리
          </code>
        </li>
        <li
          className={cn(
            'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
            workInProgress
          </span>
          <code className="text-xsm font-mono font-bold text-[var(--term-fg)]">
            계산 중인 작업 트리
          </code>
        </li>
      </ul>
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
            'grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)]',
            'gap-sm lg:gap-md',
          )}
        >
          <FiberPairCard
            variant="current"
            title={content.currentTitle}
            items={content.currentItems}
            compact
          />
          <AlternateLink
            forwardLabel={content.forwardLabel}
            backwardLabel={content.backwardLabel}
          />
          <FiberPairCard
            variant="workInProgress"
            title={content.workTitle}
            items={content.workItems}
            compact
          />
        </div>

        <p className="sr-only">
          React는 같은 노드에 대해 current Fiber와 workInProgress Fiber 두 가지를 동시에 가지며,
          alternate 포인터로 서로 양방향 연결합니다. current는 화면에 반영된 안정적인 트리이고,
          workInProgress는 다음 화면을 계산 중인 작업 트리입니다.
        </p>
      </div>
    </HeroVisualColumn>
  </HeroSection>
);
