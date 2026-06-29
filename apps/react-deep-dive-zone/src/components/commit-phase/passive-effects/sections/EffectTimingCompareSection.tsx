import { cn } from '@it-tech-blog/utils';

import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CompareRow, PassiveEffectsContent } from '../content';
import { CompareIcon, LightbulbIcon } from '../icons';

type Props = { content: PassiveEffectsContent['compare'] };

export const EffectTimingCompareSection = ({ content }: Props) => (
  <section
    id="effect-compare"
    aria-labelledby="heading-effect-compare"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="effect-compare"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CompareIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.headers.hook, content.headers.feel, content.headers.timing]}
      columnWidths={['26%', '46%', '28%']}
      rows={content.rows.map((row) => ({
        label: <HookLabel row={row} />,
        cells: [<FeelList key="f" row={row} />, <TimingCell key="t" row={row} />],
      }))}
    />

    <aside
      className={cn(
        'flex items-start gap-sm rounded-lg border-2 p-md',
        toneTokens.sky.fill.border,
        toneTokens.sky.fill.bg,
      )}
    >
      <ToneIconBox tone="sky" size="sm" className="mt-0.5 shrink-0">
        <LightbulbIcon className="h-4 w-4" />
      </ToneIconBox>
      <p className={cn('text-xsm sm:text-sm leading-relaxed break-keep', toneTokens.sky.fill.text)}>
        {content.note}
      </p>
    </aside>
  </section>
);

const HookLabel = ({ row }: { row: CompareRow }) => {
  const t = toneTokens[row.timing.tone];
  return (
    <code className={cn('text-xsm sm:text-sm font-bold font-mono break-all', t.text)}>
      {row.hook}
    </code>
  );
};

const FeelList = ({ row }: { row: CompareRow }) => (
  <ul className="flex flex-col gap-0.5">
    {row.feel.map((line) => (
      <li key={line} className="text-xsm sm:text-sm leading-snug">
        {line}
      </li>
    ))}
  </ul>
);

const TimingCell = ({ row }: { row: CompareRow }) => {
  const t = toneTokens[row.timing.tone];
  return (
    <div className="flex flex-col gap-1">
      <code className={cn('text-xsm font-bold font-mono break-all', t.fill.text)}>
        {row.timing.phase}
      </code>
      <span
        className={cn(
          'inline-flex items-center self-start rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
          t.chip,
        )}
      >
        {row.timing.sync}
      </span>
    </div>
  );
};
