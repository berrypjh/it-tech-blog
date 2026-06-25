import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneChoiceCard } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ChangelogContent, ScenarioCard } from '../content';
import { ArrowRightIcon, iconByName, SparklesIcon } from '../icons';

type Props = { content: ChangelogContent['scenarios'] };

export const SourceChoiceScenarioCards = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-scenarios" className="space-y-md">
      <SectionHeader
        id="scenarios"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => {
          const Icon = iconByName[card.icon];
          return (
            <li key={card.id} className="flex">
              <ToneChoiceCard
                tone={card.tone}
                icon={<Icon className="h-5 w-5" />}
                question={card.question}
                resultTone={card.resultTone}
                result={card.resultBadge}
                lead={
                  <ArrowRightIcon
                    className={cn(
                      'h-5 w-5 my-2 rotate-90 transition-transform group-hover:translate-y-0.5',
                      toneTokens[card.resultTone].text,
                    )}
                    aria-hidden="true"
                  />
                }
                detail={<ScenarioFlow flow={card.flow} resultTone={card.resultTone} />}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

type FlowProps = { flow: ScenarioCard['flow']; resultTone: ScenarioCard['resultTone'] };

const ScenarioFlow = ({ flow, resultTone }: FlowProps) => (
  <ol className="w-full flex flex-col gap-1.5 mt-md pt-md border-t border-dashed border-[var(--term-border)]">
    {flow.map((step, i) => (
      <li key={i} className="flex flex-col gap-1">
        <div
          className={cn(
            'flex items-center gap-2 rounded-md border px-2 py-1.5 text-xsm text-left',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          )}
        >
          <span
            aria-hidden="true"
            className={cn('inline-block w-1 h-1 rounded-full shrink-0', toneTokens[resultTone].dot)}
          />
          <div className="flex flex-col min-w-0">
            <span className="font-bold font-mono text-xsm break-keep">{step.label}</span>
            {step.sublabel && (
              <span className="text-[10px] text-[var(--term-muted)] break-keep">
                {step.sublabel}
              </span>
            )}
          </div>
        </div>
        {i < flow.length - 1 && (
          <span aria-hidden="true" className="flex justify-center text-[var(--term-dim)]">
            <ArrowRightIcon className="h-3 w-3 rotate-90" />
          </span>
        )}
      </li>
    ))}
  </ol>
);
