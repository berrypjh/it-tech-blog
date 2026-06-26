import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { SourcePathCard, UpdateToRenderSummaryContent } from '../content';
import { FileCodeIcon, FileTextIcon, GitBranchIcon, SparklesIcon } from '../icons';

type Props = { content: UpdateToRenderSummaryContent['sourcePath'] };

export const SourcePathSection = ({ content }: Props) => (
  <section
    id="source-path"
    aria-labelledby="heading-source-path"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="source-path"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((card) => (
        <Card key={card.number} card={card} />
      ))}
    </ul>
  </section>
);

const Card = ({ card }: { card: SourcePathCard }) => {
  const t = toneTokens[card.tone];
  return (
    <ToneCardItem
      tone={card.tone}
      icon={<FileCodeIcon className="h-5 w-5" />}
      topRight={card.number}
    >
      <h3 className={cn('font-mono text-md font-bold tracking-tight break-all', t.text)}>
        {card.file}
      </h3>

      <ul className="flex flex-col gap-2">
        {card.functions.map((fn) => (
          <li
            key={fn.name}
            className={cn('flex flex-col gap-1 rounded-xl border px-3 py-2', t.chip)}
          >
            <span
              className={cn(
                'inline-flex items-center gap-1.5 font-mono text-xsm font-bold',
                t.text,
              )}
            >
              <FileTextIcon aria-hidden="true" className="h-3.5 w-3.5" />
              {fn.name}
            </span>
            <span className="text-[10px] sm:text-xxsm text-[var(--term-muted)] leading-snug break-keep">
              {fn.body}
            </span>
          </li>
        ))}
      </ul>

      {card.followBoxTitle && (
        <div
          className={cn('mt-auto rounded-2xl border-2 border-dashed p-3', t.fill.bg, t.fill.border)}
        >
          <span
            className={cn(
              'inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider',
              t.fill.text,
            )}
          >
            <SparklesIcon aria-hidden="true" className="h-3 w-3" />
            {card.followBoxTitle}
          </span>
          <p className={cn('mt-1 text-xxsm font-mono leading-snug break-keep', t.fill.text)}>
            {card.followBoxBody}
          </p>
        </div>
      )}
    </ToneCardItem>
  );
};
