import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { WhyOpenSourceContent } from '../content';
import { ArrowRightIcon, ExternalLinkIcon, FlaskIcon } from '../icons';

type Props = { content: WhyOpenSourceContent['chain'] };

const COLUMNS = 3;

export const ApiToImplementationToTestFlow = ({ content }: Props) => {
  return (
    <section id="section-chain" aria-labelledby="heading-chain" className="space-y-lg">
      <SectionHeader
        id="chain"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FlaskIcon className="h-5 w-5" />}
      />

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md lg:gap-x-xl items-stretch">
        {content.cards.map((card, idx) => {
          const t = toneTokens[card.tone];
          const showConnector = idx < content.cards.length - 1 && (idx + 1) % COLUMNS !== 0;
          return (
            <li key={card.id} className="relative flex min-w-0">
              <article
                className={cn(
                  'group flex min-w-0 flex-1 flex-col gap-sm rounded-2xl border p-md sm:p-lg',
                  'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                  'transition-all hover:-translate-y-0.5',
                  t.border,
                )}
              >
                {/* step 배지 + 라벨 */}
                <header className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                      t.chip,
                    )}
                  >
                    <span className="font-mono tabular-nums">step {card.stepNum}</span>
                  </span>
                  <span className="text-xsm font-bold text-[var(--term-fg)] tracking-tight">
                    {card.stepLabel}
                  </span>
                </header>

                {/* 파일명 */}
                <h3
                  className={cn(
                    'text-md sm:text-lg font-bold font-mono tracking-tight break-all',
                    t.text,
                  )}
                >
                  {card.title}
                </h3>

                {/* 코드 프리뷰 */}
                <pre className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-2 text-[10.5px] sm:text-[11px] leading-[1.55] font-mono text-[var(--term-fg)] whitespace-pre overflow-x-auto">
                  <code>{card.code}</code>
                </pre>

                {/* 설명 */}
                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                  {card.description}
                </p>

                {/* CTA */}
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 px-md py-2 rounded-md border border-[var(--term-border)] text-xsm font-bold',
                    'transition-colors mt-auto hover:bg-[var(--term-surface)]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                    t.text,
                  )}
                >
                  {card.cta}
                  <ExternalLinkIcon className="h-3.5 w-3.5 opacity-80" />
                </a>
              </article>

              {/* 카드 사이 흐름 화살표 (FlowStepsGrid와 동일) */}
              {showConnector && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute z-10 hidden lg:flex items-center justify-center',
                    'top-1/2 left-full ml-1 -translate-y-1/2 text-[var(--term-accent)]',
                  )}
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
};
