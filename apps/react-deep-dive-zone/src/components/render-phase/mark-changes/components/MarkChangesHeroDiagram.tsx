import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { MarkChangesContent } from '../content';
import { BoxIcon, ListChecksIcon, markIconByName } from '../icons';
import { facetFor } from '../markFacet';

type HeroContent = MarkChangesContent['hero'];
type FlagCard = HeroContent['diagram']['flagCards'][number];

type Props = { content: HeroContent };

/**
 * Hero 핵심 비주얼.
 * Fiber(workInProgress) → 변경 흔적(flags) → deletions 리스트로 이어지는
 * "표시만 남기는" Render Phase 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const MarkChangesHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.fiberCard.title} → ${diagram.flagCards
    .map((c) => c.title)
    .join(', ')} → ${diagram.deletionsCard.title}: ${diagram.deletionsCard.description}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <FiberCard card={diagram.fiberCard} />

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          {diagram.flagCards.map((card, i) => (
            <li key={card.title} className="flex flex-col gap-sm">
              <FlagRow card={card} />
              {i < diagram.flagCards.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>

        <DownArrow />

        <DeletionsCard card={diagram.deletionsCard} />
      </div>
    </HeroDiagramShell>
  );
};

const FiberCard = ({ card }: { card: HeroContent['diagram']['fiberCard'] }) => (
  <article className="flex flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
    <header className="flex items-center gap-sm">
      <ToneIconBox tone="violet" size="sm">
        <BoxIcon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight', toneTokens.violet.text)}>
        {card.title}
      </span>
      <span className="font-mono text-xxsm text-[var(--term-muted)]">{card.subtitle}</span>
    </header>
    <CodePreviewPanel
      code={card.fields.map((f) => `${f.label}: ${f.value}`).join('\n')}
      showWindowDots={false}
      language="fiber"
      size="sm"
    />
  </article>
);

const FlagRow = ({ card }: { card: FlagCard }) => {
  const t = facetFor(card.tone);
  const Icon = markIconByName[card.icon];
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-lg border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        t.border,
      )}
    >
      <span
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border',
          t.chip,
        )}
      >
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <div className="flex min-w-0 flex-col">
        <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
          {card.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.description}
        </span>
      </div>
    </article>
  );
};

const DeletionsCard = ({ card }: { card: HeroContent['diagram']['deletionsCard'] }) => (
  <article className="flex items-center gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
    <ToneIconBox tone="amber" size="sm">
      <ListChecksIcon className="h-[18px] w-[18px]" />
    </ToneIconBox>
    <div className="flex min-w-0 flex-col">
      <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {card.title}
      </span>
      <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </span>
    </div>
  </article>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
