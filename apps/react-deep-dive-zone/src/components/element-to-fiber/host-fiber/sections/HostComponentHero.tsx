import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { CurvedArrow } from '../components/CurvedArrow';
import { DomTagCard } from '../components/DomTagCard';
import { HostComponentCard } from '../components/HostComponentCard';
import type { HostComponentFiberContent } from '../content';

type Props = { content: HostComponentFiberContent['hero'] };

export const HostComponentHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    promptSuffix={
      <span className="text-[var(--term-muted)]">
        {' '}
        # branch: typeof type === &apos;string&apos;
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">
          <code className="font-mono text-[var(--term-accent)]">&lt;div /&gt;</code>는
        </span>
        <span className="block text-[var(--term-accent)]">어떤 Fiber가 될까?</span>
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
            'grid-cols-1 lg:grid-cols-[minmax(0,_0.95fr)_auto_minmax(0,_1.15fr)]',
            'gap-sm lg:gap-md',
          )}
        >
          {/* DOM tag stack */}
          <ul className="flex flex-col gap-2 min-w-0">
            {content.domTags.map((tag) => (
              <li key={tag.id}>
                <DomTagCard code={tag.code} type={tag.type} />
              </li>
            ))}
          </ul>

          {/* Arrow conduit */}
          <CurvedArrow />

          {/* Host result */}
          <HostComponentCard title={content.resultTitle} items={content.resultItems} />
        </div>

        <p className="sr-only">
          문자열 type을 가진 div, button, input 같은 요소는 모두 HostComponent Fiber 흐름으로
          모입니다. HostComponent Fiber는 실제 DOM 반영과 연결되는 Host 계열 작업 단위입니다.
        </p>
      </div>
    </HeroVisualColumn>
  </HeroSection>
);
