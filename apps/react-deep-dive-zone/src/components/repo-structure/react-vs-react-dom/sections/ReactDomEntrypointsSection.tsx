import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { EntrypointCard, ReactVsReactDomContent } from '../content';
import { CheckCircleIcon, iconByName, SplitIcon } from '../icons';

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
  const tone = toneTokens[card.tone];
  const Icon = iconByName[card.icon];
  const tintClass =
    card.tone === 'blue'
      ? 'bg-blue-50/70 dark:bg-blue-950/30'
      : 'bg-emerald-50/70 dark:bg-emerald-950/30';

  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tintClass,
        tone.border,
        tone.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-md border',
            tone.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col min-w-0">
          <h3 className={cn('text-lg font-bold font-mono tracking-tight', tone.text)}>
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
            <CheckCircleIcon
              className={cn('mt-0.5 h-4 w-4 shrink-0', tone.text)}
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-medium',
            tone.chip,
          )}
        >
          <span aria-hidden="true" className={cn('inline-block w-1 h-1 rounded-full', tone.dot)} />
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
