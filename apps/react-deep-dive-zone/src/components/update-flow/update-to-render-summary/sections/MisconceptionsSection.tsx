import { MisconceptionCardGrid, type MisconceptionItem } from '../../../shared/misconception';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { UpdateToRenderSummaryContent } from '../content';
import { AlertCircleIcon, misconceptionIconByName, SparklesIcon } from '../icons';

type Props = { content: UpdateToRenderSummaryContent['misconceptions'] };

export const MisconceptionsSection = ({ content }: Props) => {
  const items: MisconceptionItem[] = content.cards.map((card) => ({
    id: card.id,
    icon: misconceptionIconByName[card.icon],
    accentClassName: toneTokens[card.tone].text,
    badgeWrong: card.badge,
    wrong: card.wrong,
    right: card.right,
    note: card.note,
  }));

  return (
    <section
      id="section-misconceptions"
      aria-labelledby="heading-misconceptions"
      className="space-y-md"
    >
      <SectionHeader
        id="misconceptions"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<AlertCircleIcon className="h-5 w-5" />}
      />

      <MisconceptionCardGrid items={items} />

      <div className="flex items-start gap-sm rounded-lg border border-[var(--term-border)] border-l-[3px] border-l-[var(--term-accent)] bg-[var(--term-surface)] p-md">
        <SparklesIcon
          aria-hidden="true"
          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--term-accent)]"
        />
        <p className="text-xsm sm:text-sm font-semibold leading-snug text-[var(--term-fg)] break-keep">
          {content.summary}
        </p>
      </div>
    </section>
  );
};
