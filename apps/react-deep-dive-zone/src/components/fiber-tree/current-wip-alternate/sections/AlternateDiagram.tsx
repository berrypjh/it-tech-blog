import { cn } from '@it-tech-blog/utils';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CurrentWipAlternateContent } from '../content';
import { ArrowLeftRightIcon, LayersIcon, NetworkIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['alternate'] };

export const AlternateDiagram = ({ content }: Props) => (
  <section id="alternate" aria-labelledby="heading-alternate" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="alternate"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowLeftRightIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="sky"
        icon={LayersIcon}
        title={content.currentCard.title}
        description={content.currentCard.subtitle}
        bullets={content.currentCard.fields}
      />
      <CompareBridge
        icon={<ArrowLeftRightIcon className="h-5 w-5" />}
        headline={content.arrowLabel}
        sub={content.arrowSubLabel}
      />
      <ToneDetailCard
        tone="emerald"
        icon={NetworkIcon}
        title={content.wipCard.title}
        description={content.wipCard.subtitle}
        bullets={content.wipCard.fields}
      />
    </div>

    <WholeTreeLinks content={content} />
  </section>
);

const WholeTreeLinks = ({ content }: { content: CurrentWipAlternateContent['alternate'] }) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-xl border p-md sm:p-lg',
      'bg-[var(--term-surface)] border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-sm">
      <ToneIconBox tone="violet" size="sm">
        <LayersIcon className="h-4 w-4" />
      </ToneIconBox>
      <h3 className={cn('text-sm font-bold tracking-tight', toneTokens.violet.text)}>
        {content.rightTitle}
      </h3>
    </header>

    <ul className="flex flex-col gap-1.5">
      {content.rightNodes.map((row, i) => (
        <li
          key={`${row.current}-${i}`}
          className="grid grid-cols-[1fr_auto_1fr] items-center gap-2"
        >
          <span
            className={cn(
              'inline-flex items-center justify-center rounded-md border px-2 py-1 font-mono text-[11.5px] font-bold',
              toneTokens.sky.chip,
            )}
          >
            {row.current}
          </span>
          <span
            aria-hidden="true"
            className={cn('block w-full border-t-2 border-dashed', toneTokens.violet.border)}
          />
          <span
            className={cn(
              'inline-flex items-center justify-center rounded-md border px-2 py-1 font-mono text-[11.5px] font-bold',
              toneTokens.emerald.chip,
            )}
          >
            {row.wip}
          </span>
        </li>
      ))}
    </ul>

    <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
      {content.rightBody}
    </p>
  </article>
);
