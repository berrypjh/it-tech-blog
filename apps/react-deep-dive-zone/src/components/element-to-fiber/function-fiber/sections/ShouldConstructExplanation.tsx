import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FlowStep, FunctionClassComponentFiberContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, HelpCircleIcon, LightbulbIcon, SplitIcon } from '../icons';

type Props = { content: FunctionClassComponentFiberContent['shouldConstruct'] };

const amber = toneTokens.amber;
const sky = toneTokens.sky;

const branchToneKey: Record<'green' | 'purple', ToneKey> = {
  green: 'emerald',
  purple: 'violet',
};

export const ShouldConstructExplanation = ({ content }: Props) => (
  <section
    id="should-construct"
    aria-labelledby="heading-should-construct"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="should-construct"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.15fr)] gap-md items-stretch">
      {/* Left: description + emphasis */}
      <div className="flex flex-col gap-md">
        <article
          className={cn(
            'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep">
            React는{' '}
            <code className={cn('font-mono font-bold', sky.text)}>
              Component.prototype.isReactComponent
            </code>{' '}
            존재 여부를 바탕으로 클래스 컴포넌트인지 판단합니다.
          </p>
        </article>

        <article
          className={cn(
            'flex items-start gap-sm rounded-2xl border-2 p-md sm:p-lg',
            amber.fill.bg,
            amber.fill.border,
          )}
        >
          <ToneIconBox tone="amber" size="md">
            <LightbulbIcon className="h-5 w-5" />
          </ToneIconBox>
          <p
            className={cn('text-sm sm:text-md font-bold leading-snug break-keep', amber.fill.text)}
          >
            {content.emphasis}
          </p>
        </article>
      </div>

      {/* Right: flow chart */}
      <article
        className={cn(
          'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'flex flex-col gap-sm',
        )}
      >
        <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
          decision flow
        </span>

        <ol className="flex flex-col gap-1">
          {content.flow.map((step, idx) => (
            <li key={step.id} className="flex flex-col gap-1">
              <FlowQuestion prompt={step.prompt} />
              <BranchOutputs step={step} />
              {idx < content.flow.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <span
                    className={cn(
                      'inline-flex items-center justify-center w-7 h-7 rounded-full border',
                      sky.chip,
                    )}
                  >
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </article>
    </div>
  </section>
);

const FlowQuestion = ({ prompt }: { prompt: string }) => (
  <div
    className={cn(
      'flex items-center gap-sm rounded-xl border-2 px-md py-3',
      sky.fill.bg,
      sky.fill.border,
    )}
  >
    <ToneIconBox tone="sky" size="sm">
      <HelpCircleIcon className="h-4 w-4" />
    </ToneIconBox>
    <code className={cn('font-mono text-xsm sm:text-sm font-bold break-keep', sky.fill.text)}>
      {prompt}
    </code>
  </div>
);

const BranchOutputs = ({ step }: { step: FlowStep }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-md">
    {step.yes && <BranchRow {...step.yes} />}
    {step.no && <BranchRow {...step.no} />}
  </div>
);

const BranchRow = ({
  label,
  result,
  tone,
}: {
  label: string;
  result: string;
  tone: 'green' | 'purple';
}) => {
  const t = toneTokens[branchToneKey[tone]];
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-lg border px-sm py-2',
        t.border,
        'bg-[var(--term-bg)]',
      )}
    >
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono shrink-0',
          t.chip,
        )}
      >
        {label}
      </span>
      <ArrowRightIcon
        className="h-3.5 w-3.5 text-[var(--term-muted)] shrink-0"
        aria-hidden="true"
      />
      <code className={cn('font-mono text-xsm font-bold tracking-tight break-all', t.text)}>
        {result}
      </code>
    </div>
  );
};
