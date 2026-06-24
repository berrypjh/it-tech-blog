import { cn } from '@it-tech-blog/utils';

import { CompareBridge } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { EntrypointCard, ReactVsReactDomContent } from '../content';
import { iconByName, SplitIcon } from '../icons';

/** client=A(accent), server=B(sky). 카드 크롬은 중립, 텍스트만 색. */
const sideText = (id: EntrypointCard['id']) =>
  id === 'client' ? 'text-[var(--term-accent)]' : toneTokens.sky.text;

type Props = { content: ReactVsReactDomContent['entrypoints'] };

export const ReactDomEntrypointsSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-entrypoints" className="space-y-lg">
      <SectionHeader
        id="entrypoints"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SplitIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(200px,_0.7fr)_1fr] gap-md lg:gap-lg items-stretch">
        <EntrypointCardItem card={content.client} />

        <CompareBridge
          icon={<SplitIcon className="h-5 w-5" />}
          headline={content.centerHeading}
          sub={content.centerCaption}
        />

        <EntrypointCardItem card={content.server} />
      </div>
    </section>
  );
};

type ItemProps = { card: EntrypointCard };

const EntrypointCardItem = ({ card }: ItemProps) => {
  const Icon = iconByName[card.icon];
  const accent = sideText(card.id);

  return (
    <article
      aria-labelledby={`entrypoint-${card.id}-header`}
      className={cn(
        'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:-translate-y-px',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2 pb-sm border-b border-dashed border-[var(--term-border)]">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0',
            'bg-[var(--term-surface)] border border-[var(--term-border)]',
            accent,
          )}
        >
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3
            id={`entrypoint-${card.id}-header`}
            className={cn(
              'text-sm sm:text-md font-bold font-mono tracking-tight break-words',
              accent,
            )}
          >
            {card.title}
          </h3>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {card.subtitle}
          </span>
        </div>
      </header>

      <ul className="flex flex-col gap-md">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'mt-1.5 inline-block w-1.5 h-1.5 rounded-full shrink-0 bg-current',
                accent,
              )}
            />
            <span className="min-w-0 text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 text-[10px] font-medium text-[var(--term-muted)]">
          <span
            aria-hidden="true"
            className={cn('inline-block w-1 h-1 rounded-full bg-current', accent)}
          />
          {card.tag}
        </span>
      </div>
    </article>
  );
};
