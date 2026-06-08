import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { BoundaryCard, ServerComponentsContractContent } from '../content';
import { CheckCircleIcon } from '../icons';
import { iconRegistry } from '../sections/_iconRegistry';
import type { BoundaryKey } from '../tone';

type Props = { content: ServerComponentsContractContent['hero']; className?: string };

/** boundary 키를 공유 ToneKey로 매핑. (가장 가까운 톤) */
const boundaryToneKey: Record<BoundaryKey, ToneKey> = {
  server: 'blue',
  client: 'indigo',
  function: 'teal',
  react: 'blue',
  framework: 'violet',
  contract: 'sky',
};

/**
 * Hero 핵심 비주얼.
 * Server Component → 'use client' 경계 → Client Component → 'use server' 경계 →
 * Server Function으로 이어지는 React 19의 경계 모델을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ServerComponentsHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const [serverCard, clientCard, fnCard] = diagram.cards;
  const a11y = `${diagram.title}: ${diagram.cards
    .map((c) => `${c.title}(${c.caption})`)
    .join(' → ')}. ${diagram.footer}`;

  if (!serverCard || !clientCard || !fnCard) return null;

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
        <header className="flex items-center gap-sm">
          <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {diagram.title}
          </span>
          <span
            aria-hidden="true"
            className="flex-1 border-t border-dashed border-[var(--term-border)]"
          />
        </header>

        <HeroCard card={serverCard} />

        <BoundaryLabel
          primary={diagram.boundaryLabels.useClient.primary}
          secondary={diagram.boundaryLabels.useClient.secondary}
        />

        <HeroCard card={clientCard} />

        <BoundaryLabel
          primary={diagram.boundaryLabels.useServer.primary}
          secondary={diagram.boundaryLabels.useServer.secondary}
        />

        <HeroCard card={fnCard} />

        <p className="text-center text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {diagram.footer}
        </p>
      </div>
    </div>
  );
};

const HeroCard = ({ card }: { card: BoundaryCard }) => {
  const tone = boundaryToneKey[card.boundary];
  const t = toneTokens[tone];
  const Icon = iconRegistry[card.iconKey];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex min-w-0 flex-col">
          <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
            {card.title}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {card.caption}
          </span>
        </div>
      </header>
      <ul className="flex flex-col gap-1">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-1.5 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <CheckCircleIcon aria-hidden="true" className={cn('mt-0.5 h-3 w-3 shrink-0', t.text)} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const BoundaryLabel = ({ primary, secondary }: { primary: string; secondary: string }) => (
  <div className="flex flex-col items-center gap-0.5">
    <DownArrow />
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      {primary}
    </span>
    <code className="font-mono text-[11px] font-bold text-[var(--term-accent)]">{secondary}</code>
  </div>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
