import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CompareCard, FunctionClassComponentFiberContent } from '../content';
import {
  ArrowDownIcon,
  ComponentIcon,
  GitForkIcon,
  HexagonIcon,
  SquareFunctionIcon,
} from '../icons';

type Props = { content: FunctionClassComponentFiberContent['compare'] };

const toneByKey: Record<CompareCard['id'], ToneKey> = {
  function: 'emerald',
  class: 'violet',
};

export const FunctionClassExampleComparison = ({ content }: Props) => (
  <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitForkIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CompareCardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CompareCardView = ({ card }: { card: CompareCard }) => {
  const tone = toneByKey[card.id];
  const t = toneTokens[tone];
  const Icon = card.id === 'function' ? SquareFunctionIcon : ComponentIcon;
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.fill.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="md">
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <div className="flex flex-col gap-0.5">
          <span
            className={cn(
              'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono font-bold',
              t.chip,
            )}
          >
            {card.badge}
          </span>
          <h3 className={cn('text-sm sm:text-md font-bold tracking-tight break-keep', t.text)}>
            {card.title}
          </h3>
        </div>
      </header>

      <CodePreviewPanel
        code={card.code}
        caption={card.id === 'function' ? 'function.jsx' : 'class.jsx'}
        language="JSX"
        showWindowDots
      />

      <div className="flex justify-center" aria-hidden="true">
        <span
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-full border',
            t.chip,
          )}
        >
          <ArrowDownIcon className="h-4 w-4" />
        </span>
      </div>

      <div
        className={cn(
          'flex items-center gap-sm rounded-xl border-2 p-md',
          t.fill.bg,
          t.fill.border,
        )}
      >
        <ToneIconBox tone={tone} size="sm">
          <HexagonIcon className="h-[18px] w-[18px]" />
        </ToneIconBox>
        <div className="flex flex-col gap-0.5 min-w-0">
          <code className={cn('font-mono text-sm font-extrabold', t.text)}>{card.resultTitle}</code>
          <code className="font-mono text-[11px] text-[var(--term-muted)] font-bold">
            {card.resultSubtitle}
          </code>
        </div>
      </div>
    </article>
  );
};
