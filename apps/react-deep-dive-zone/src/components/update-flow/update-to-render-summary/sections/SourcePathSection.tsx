import { cx } from '@berrypjh/react-ui';
import { FileCode, FileText, GitBranch, Sparkles } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { SourcePathCard, UpdateToRenderSummaryContent } from '../content';

type Props = { content: UpdateToRenderSummaryContent['sourcePath'] };

export const SourcePathSection = ({ content }: Props) => (
  <section id="section-source-path" aria-labelledby="heading-source-path" className="space-y-md">
    <SectionHeader
      id="source-path"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranch className="h-5 w-5" aria-hidden="true" />}
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
      icon={<FileCode className="h-5 w-5" aria-hidden="true" />}
      topRight={card.number}
    >
      <h3 className={cx('font-mono text-md font-bold tracking-tight break-all', t.text)}>
        {card.file}
      </h3>

      <ul className="flex flex-col gap-2">
        {card.functions.map((fn) => (
          <li
            key={fn.name}
            className={cx('flex flex-col gap-1 rounded-md border px-3 py-2', t.chip)}
          >
            <span
              className={cx(
                'inline-flex items-center gap-1.5 font-mono text-xsm font-bold',
                t.text,
              )}
            >
              <FileText aria-hidden="true" className="h-3.5 w-3.5" />
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
          className={cx('mt-auto rounded-md border border-dashed p-3', t.fill.bg, t.fill.border)}
        >
          <span
            className={cx(
              'inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider',
              t.fill.text,
            )}
          >
            <Sparkles aria-hidden="true" className="h-3 w-3" />
            {card.followBoxTitle}
          </span>
          <p className={cx('mt-1 text-xxsm font-mono leading-snug break-keep', t.fill.text)}>
            {card.followBoxBody}
          </p>
        </div>
      )}
    </ToneCardItem>
  );
};
