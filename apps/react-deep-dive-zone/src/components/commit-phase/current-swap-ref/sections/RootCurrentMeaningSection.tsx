import { cx } from '@berrypjh/react-ui';
import { ArrowDown, ArrowLeftRight, ArrowRight, Lightbulb, TreePine } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { RootCurrentRefContent } from '../content';

type Props = { content: RootCurrentRefContent['meaning'] };

export const RootCurrentMeaningSection = ({ content }: Props) => (
  <section
    id="root-current-meaning"
    aria-labelledby="heading-root-current-meaning"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="root-current-meaning"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ArrowLeftRight className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <TreeSideCard title={content.beforeTitle} subtitle={content.beforeSubtitle} tone="violet" />
        <FormulaArrow formula={content.formula} />
        <TreeSideCard title={content.afterTitle} subtitle={content.afterSubtitle} tone="teal" />
      </div>
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const TreeSideCard = ({
  title,
  subtitle,
  tone,
}: {
  title: string;
  subtitle: string;
  tone: ToneKey;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col items-center gap-md rounded-lg border-2 bg-[var(--term-bg)] p-md text-center',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={tone}>
        <TreePine className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>
      <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
        {title}
      </h3>
      <p className={cx('text-xsm leading-snug break-keep', t.text)}>{subtitle}</p>
    </article>
  );
};

const FormulaArrow = ({ formula }: { formula: string }) => {
  const t = toneTokens.blue;
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-2 md:py-0">
      <span
        aria-hidden="true"
        className={cx(
          'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <ArrowRight className="hidden md:inline-block h-6 w-6" aria-hidden="true" />
        <ArrowDown className="md:hidden h-6 w-6" aria-hidden="true" />
      </span>
      <code
        className={cx(
          'inline-block rounded-md border px-2 py-1 text-[11px] font-mono font-bold whitespace-nowrap',
          t.chip,
        )}
      >
        {formula}
      </code>
    </div>
  );
};
