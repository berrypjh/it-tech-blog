import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroTopCard, SuspenseHydrationLinkContent } from '../content';
import { CloudIcon, DropletsIcon, PackageIcon, ShieldCheckIcon } from '../icons';

type Props = { content: SuspenseHydrationLinkContent['hero']; className?: string };

const cardMeta: Record<
  HeroTopCard['kind'],
  { tone: ToneKey; Icon: React.ComponentType<{ className?: string }> }
> = {
  server: { tone: 'blue', Icon: CloudIcon },
  hydration: { tone: 'teal', Icon: DropletsIcon },
  recovery: { tone: 'emerald', Icon: ShieldCheckIcon },
};

/**
 * Hero 핵심 비주얼.
 * 서버 렌더 · hydration · client recovery 세 경로가 하나의 Suspense Boundary로
 * 모인다는 점을, 세 톤 카드 → 아래 화살표 → Boundary 코드 패널로 보여준다.
 */
export const SuspenseHydrationHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.topCards
    .map((c) => `${c.title}: ${c.description}`)
    .join('; ')}. ${content.boundary.caption}`;

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
        <ul className="grid grid-cols-1 gap-sm @xl:grid-cols-3">
          {content.topCards.map((card) => (
            <li key={card.kind}>
              <PathCard card={card} />
            </li>
          ))}
        </ul>

        <DownArrow />

        <BoundaryPanel code={content.boundary.code} caption={content.boundary.caption} />
      </div>
    </div>
  );
};

const PathCard = ({ card }: { card: HeroTopCard }) => {
  const { tone, Icon } = cardMeta[card.kind];
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-[18px] w-[18px]" />
        </ToneIconBox>
        <h3 className={cn('text-xsm font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
      </header>
      <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

const BoundaryPanel = ({ code, caption }: { code: string; caption: string }) => (
  <div className="flex flex-col gap-sm">
    <header className="flex items-center gap-sm">
      <ToneIconBox tone="violet" size="sm">
        <PackageIcon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight', toneTokens.violet.text)}>
        Suspense Boundary
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </header>
    <CodePreviewPanel code={code} showWindowDots language="JSX" size="md" />
    <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{caption}</p>
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
