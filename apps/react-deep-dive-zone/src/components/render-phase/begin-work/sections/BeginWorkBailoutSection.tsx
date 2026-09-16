import { cx } from '@berrypjh/react-ui';
import { ChevronDown, FastForward, GitFork, Lightbulb } from 'lucide-react';

import { ComparePanel } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { BeginWorkContent } from '../content';

type Props = { content: BeginWorkContent['bailout'] };

const panelTone = (tone: ToneKey) => {
  const t = toneTokens[tone];
  return {
    card: cx(t.border, 'shadow-[0_2px_0_var(--term-border)]'),
    iconBadge: cx('border border-[var(--term-border)] bg-[var(--term-surface)]', t.text),
    header: t.text,
  };
};

export const BeginWorkBailoutSection = ({ content }: Props) => (
  <section id="bailout" aria-labelledby="heading-bailout" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="bailout"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.intro}
      icon={<GitFork className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
      <ComparePanel
        tone={panelTone('teal')}
        icon={<ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
        title={content.normal.title}
        headerId="bailout-normal-header"
      >
        <FlowChain items={content.normal.items} tone="teal" />
        <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.normal.description}
        </p>
      </ComparePanel>

      <ComparePanel
        tone={panelTone('violet')}
        icon={<FastForward className="h-3.5 w-3.5" aria-hidden="true" />}
        title={content.bailout.title}
        headerId="bailout-skip-header"
      >
        <FlowChain items={content.bailout.items} tone="violet" skipMiddle />
        <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.bailout.description}
        </p>
      </ComparePanel>
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

type ChainProps = { items: string[]; tone: ToneKey; skipMiddle?: boolean };

const FlowChain = ({ items, tone, skipMiddle }: ChainProps) => {
  const t = toneTokens[tone];
  return (
    <ol className="flex flex-col gap-1">
      {items.map((item, idx) => {
        const isSkip = Boolean(skipMiddle) && idx > 0 && idx < items.length - 1;
        return (
          <li key={item} className="flex flex-col">
            <span
              className={cx(
                'inline-flex w-fit items-center gap-2 rounded-lg border px-3 py-1.5',
                'bg-[var(--term-bg)]',
                isSkip ? 'border-[var(--term-border)]' : t.border,
              )}
            >
              <span
                aria-hidden="true"
                className={cx(
                  'inline-block h-1.5 w-1.5 rounded-full',
                  isSkip ? 'bg-[var(--term-dim)]' : t.dot,
                )}
              />
              <span
                className={cx(
                  'text-xsm sm:text-sm font-bold break-keep',
                  isSkip ? 'text-[var(--term-muted)] line-through' : t.text,
                )}
              >
                {item}
              </span>
            </span>
            {idx < items.length - 1 && (
              <ChevronDown aria-hidden="true" className="ml-3 h-4 w-4 text-[var(--term-dim)]" />
            )}
          </li>
        );
      })}
    </ol>
  );
};
