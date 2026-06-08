import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { HeroExplanationCard, JsxIsNotHtmlContent } from '../content';
import { BracesIcon, EyeIcon } from '../icons';

type Props = { content: JsxIsNotHtmlContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 코드 한 줄(button.jsx)이 '겉보기로는 HTML' → '실제로는 JavaScript 표현식'으로
 * 읽히는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const JsxHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.code} — ${content.explanationCards
    .map((c) => `${c.label}: ${c.title}`)
    .join(', ')}`;

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

      <div className="relative flex flex-col items-stretch gap-sm">
        <CodePreviewPanel
          code={content.code}
          showWindowDots
          caption={content.codeCaption}
          size="md"
        />

        <DownArrow />

        <ol className="flex flex-col gap-sm" aria-hidden="true">
          {content.explanationCards.map((card, i) => (
            <li key={card.id} className="flex flex-col gap-sm">
              <FlowCard card={card} />
              {i < content.explanationCards.length - 1 && <DownArrow />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const FlowCard = ({ card }: { card: HeroExplanationCard }) => {
  const t = toneTokens[card.tone];
  const Icon = card.iconName === 'eye' ? EyeIcon : BracesIcon;
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={card.tone} size="md">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            t.chip,
          )}
        >
          {card.label}
        </span>
        <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)]">{card.title}</h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
      </div>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
