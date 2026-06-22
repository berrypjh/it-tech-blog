import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { MarkChangesContent, Tone } from '../content';
import { BoxIcon, FlagIcon, ListChecksIcon, PencilIcon, Trash2Icon } from '../icons';

type HeroContent = MarkChangesContent['hero'];
type FlagCard = HeroContent['diagram']['flagCards'][number];

type Props = { content: HeroContent; className?: string };

/** content Tone → 공유 ToneKey 매핑. 공유 팔레트에 없는 rose는 amber로 대체한다. */
const toneKeyMap: Record<Tone, ToneKey> = {
  teal: 'teal',
  rose: 'amber',
  amber: 'amber',
  sky: 'sky',
  violet: 'violet',
  indigo: 'indigo',
};

const flagIconMap = {
  flag: FlagIcon,
  trash: Trash2Icon,
  pencil: PencilIcon,
} as const;

/**
 * Hero 핵심 비주얼.
 * Fiber(workInProgress) → 변경 흔적(flags) → deletions 리스트로 이어지는
 * "표시만 남기는" Render Phase 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const MarkChangesHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.fiberCard.title} → ${diagram.flagCards
    .map((c) => c.title)
    .join(', ')} → ${diagram.deletionsCard.title}: ${diagram.deletionsCard.description}`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

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
    </div>
  );
};

const FiberCard = ({ card }: { card: HeroContent['diagram']['fiberCard'] }) => {
  const t = toneTokens.violet;
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone="violet" size="sm">
          <BoxIcon className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>
        <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>
          {card.title}
        </span>
        <span className="font-mono text-[10px] text-[var(--term-muted)]">{card.subtitle}</span>
      </header>
      <CodePreviewPanel
        code={card.fields.map((f) => `${f.label}: ${f.value}`).join('\n')}
        showWindowDots={false}
        language="fiber"
        size="sm"
      />
    </article>
  );
};

const FlagRow = ({ card }: { card: FlagCard }) => {
  const tone = toneKeyMap[card.tone];
  const t = toneTokens[tone];
  const Icon = flagIconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
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
  <article
    className={cn(
      'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="amber" size="sm">
      <ListChecksIcon className="h-[18px] w-[18px]" aria-hidden="true" />
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
