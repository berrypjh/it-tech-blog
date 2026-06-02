import { cn } from '@it-tech-blog/utils';

import { HeroTitle } from '../../../shared/HeroTitle';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { type FlowNodeView, HeroColumn } from '../components/HeroColumn';
import type { ReactNextBoundaryContent } from '../content';
import {
  ArrowRightIcon,
  boundaryIconByName,
  nextFlowIconByName,
  reactFlowIconByName,
} from '../icons';

type Props = { content: ReactNextBoundaryContent['hero'] };

const ctaBase =
  'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md text-xsm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)] w-full sm:w-auto';

const titleTones = ['text-indigo-600 dark:text-indigo-300', 'text-cyan-600 dark:text-cyan-300'];

export const ReactNextBoundaryHero = ({ content }: Props) => {
  const reactNodes: FlowNodeView[] = content.react.nodes.map((n) => ({
    key: n.id,
    label: n.label,
    Icon: reactFlowIconByName[n.id],
  }));
  const bridgeNodes: FlowNodeView[] = content.bridge.nodes.map((n) => ({
    key: n.id,
    label: n.label,
    Icon: boundaryIconByName[n.id],
  }));
  const nextNodes: FlowNodeView[] = content.next.nodes.map((n) => ({
    key: n.id,
    label: n.label,
    Icon: nextFlowIconByName[n.id],
  }));

  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt command="diff" path="react.model next.runtime" />

      <div className="mt-lg flex flex-col gap-md">
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          {content.title.lines.map((line, i) => (
            <span key={i} className="block">
              <span className={titleTones[i] ?? 'text-[var(--term-accent)]'}>{line.accent}</span>
              {line.rest}
            </span>
          ))}
        </HeroTitle>

        <p className="rounded-md border-l-2 border-[var(--term-accent)] bg-[var(--term-surface)] px-md py-2 text-sm sm:text-md font-bold leading-snug text-cyan-700 dark:text-cyan-300 break-keep">
          {content.highlight.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>

        <div className="text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[72ch]">
          {content.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href="#section-split"
            className={cn(
              ctaBase,
              'bg-[var(--term-accent)] text-[var(--term-bg)] hover:opacity-90',
            )}
          >
            {content.primaryCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
          </a>
          <a
            href="#section-boundary"
            className={cn(
              ctaBase,
              'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
            )}
          >
            {content.secondaryCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* 3영역: React Flow | Boundary Bridge | Next.js Flow */}
      <div className="mt-xl grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.12fr)_minmax(0,_1fr)] gap-md items-stretch">
        <HeroColumn
          title={content.react.title}
          tone="indigo"
          nodes={reactNodes}
          note={content.react.note}
          pill={content.react.pill}
          variant="flow"
        />
        <HeroColumn
          title={content.bridge.title}
          tone="violet"
          nodes={bridgeNodes}
          note={content.bridge.note}
          pill={content.bridge.pill}
          variant="bridge"
        />
        <HeroColumn
          title={content.next.title}
          tone="cyan"
          nodes={nextNodes}
          note={content.next.note}
          pill={content.next.pill}
          variant="flow"
        />
      </div>
    </section>
  );
};
