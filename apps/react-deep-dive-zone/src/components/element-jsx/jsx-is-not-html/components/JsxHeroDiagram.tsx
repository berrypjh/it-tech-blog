import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { DownArrow } from '../../../shared/DownArrow';
import { HeroDiagramShell } from '../../../shared/HeroDiagramShell';
import type { HeroExplanationCard, JsxIsNotHtmlContent } from '../content';
import { BracesIcon, EyeIcon } from '../icons';
import { accentText, chromeChip, chromeHover } from '../toneLocal';

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
    <HeroDiagramShell a11yLabel={a11y} className={className}>
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
    </HeroDiagramShell>
  );
};

const FlowCard = ({ card }: { card: HeroExplanationCard }) => {
  const Icon = card.iconName === 'eye' ? EyeIcon : BracesIcon;
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        chromeHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-md',
          chromeChip,
          accentText(card.tone),
        )}
      >
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <div className="flex min-w-0 flex-col gap-1">
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            chromeChip,
            accentText(card.tone),
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
