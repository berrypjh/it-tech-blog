import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { MissionCard, TransitionDeferredContent } from '../content';
import {
  ArrowRightIcon,
  BookOpenIcon,
  ExternalLinkIcon,
  HashIcon,
  LinkIcon,
  ListChecksIcon,
} from '../icons';
import {
  responseCardBorder,
  responseIconBox,
  responsePill,
  responseTextStrong,
} from '../responseAccent';

type Props = { content: TransitionDeferredContent['mission'] };

const LinkCard = ({
  card,
  index,
}: {
  card: Extract<MissionCard, { kind: 'link' }>;
  index: number;
}) => (
  <article
    className={cn(
      'group flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)] transition-all',
      'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
      responseCardBorder[card.accent],
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
          responseIconBox[card.accent],
        )}
      >
        {index === 2 ? <LinkIcon className="h-5 w-5" /> : <BookOpenIcon className="h-5 w-5" />}
      </span>
      <span
        aria-hidden="true"
        className="inline-flex h-7 px-2 items-center justify-center rounded-md font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)] border border-[var(--term-border)] bg-[var(--term-bg)]"
      >
        mission · {String(index + 1).padStart(2, '0')}
      </span>
    </header>

    <h3 className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
      {card.title}
    </h3>

    <a
      href={card.href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'mt-auto group inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2',
        'border-2 border-[var(--term-border)] bg-[var(--term-bg)] font-bold text-[11px] sm:text-xsm',
        'shadow-[0_2px_0_var(--term-border)] transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-700',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        responseTextStrong[card.accent],
      )}
    >
      <span className="break-keep">{card.button}</span>
      <ExternalLinkIcon
        aria-hidden="true"
        className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
      />
      <ArrowRightIcon aria-hidden="true" className="hidden h-3.5 w-3.5" />
    </a>
  </article>
);

const KeywordsCard = ({
  card,
  index,
}: {
  card: Extract<MissionCard, { kind: 'keywords' }>;
  index: number;
}) => (
  <article
    className={cn(
      'group flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)] transition-all',
      'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
      responseCardBorder[card.accent],
    )}
  >
    <header className="flex items-center justify-between gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
          responseIconBox[card.accent],
        )}
      >
        <HashIcon className="h-5 w-5" />
      </span>
      <span
        aria-hidden="true"
        className="inline-flex h-7 px-2 items-center justify-center rounded-md font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)] border border-[var(--term-border)] bg-[var(--term-bg)]"
      >
        mission · {String(index + 1).padStart(2, '0')}
      </span>
    </header>

    <h3 className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
      {card.title}
    </h3>

    <ul className="mt-auto flex flex-wrap gap-1.5">
      {card.keywords.map((kw) => (
        <li key={kw}>
          <code
            className={cn(
              'inline-flex items-center rounded-md border px-2 py-1 font-mono text-[10px] sm:text-[11px] font-semibold',
              responsePill[card.accent],
            )}
          >
            {kw}
          </code>
        </li>
      ))}
    </ul>
  </article>
);

export const TransitionDeferredMission = ({ content }: Props) => (
  <section aria-labelledby="heading-mission">
    <NumberedSectionHeader
      id="mission"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((c, i) => (
        <li key={c.title} className="h-full">
          {c.kind === 'link' ? (
            <LinkCard card={c} index={i} />
          ) : (
            <KeywordsCard card={c} index={i} />
          )}
        </li>
      ))}
    </ul>
  </section>
);
