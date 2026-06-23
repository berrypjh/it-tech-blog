import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { EntrypointCard, ReactVsReactDomContent } from '../content';
import { CheckCircleIcon, iconByName, SplitIcon } from '../icons';

/** client=A(accent), server=B(sky). 카드 크롬은 중립, 텍스트만 색. */
const sideText = (id: EntrypointCard['id']) =>
  id === 'client' ? 'text-[var(--term-accent)]' : toneTokens.sky.text;

type Props = { content: ReactVsReactDomContent['entrypoints'] };

export const ReactDomEntrypointsSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-entrypoints" className="space-y-md">
      <SectionHeader
        id="entrypoints"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SplitIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <EntrypointCardItem card={content.client} />
        <CenterExplainer heading={content.centerHeading} caption={content.centerCaption} />
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
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'bg-[var(--term-surface)] border-[var(--term-border)] hover:border-[var(--term-accent)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-md border',
            'bg-[var(--term-surface)] border-[var(--term-border)]',
            accent,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-lg font-bold font-mono tracking-tight break-words', accent)}>
            {card.title}
          </h3>
          <p className="text-[11px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {card.subtitle}
          </p>
        </div>
      </header>

      <ul className="flex flex-col gap-2">
        {card.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <CheckCircleIcon className={cn('mt-0.5 h-4 w-4 shrink-0', accent)} aria-hidden="true" />
            <span className="min-w-0 break-words">{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-medium',
            'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-muted)]',
          )}
        >
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

type CenterProps = { heading: string; caption: string };

const CenterExplainer = ({ heading, caption }: CenterProps) => (
  <div className="flex flex-col items-center justify-center gap-sm text-center lg:max-w-[200px]">
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] text-[var(--term-accent)]"
    >
      <SplitIcon className="h-5 w-5" />
    </span>
    <p className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep whitespace-pre-line">
      {heading}
    </p>
    <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{caption}</p>
  </div>
);
