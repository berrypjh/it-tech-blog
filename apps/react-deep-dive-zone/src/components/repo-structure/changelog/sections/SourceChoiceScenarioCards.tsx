import { cx } from '@berrypjh/react-ui';
import { ArrowRight, GitPullRequest, History, type LucideIcon, Sparkles, Tag } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneChoiceCard } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ChangelogContent, ScenarioCard } from '../content';

const cardIcon: Record<ScenarioCard['id'], LucideIcon> = {
  latest: Tag,
  old: History,
  reason: GitPullRequest,
};

type Props = { content: ChangelogContent['scenarios'] };

export const SourceChoiceScenarioCards = ({ content }: Props) => {
  return (
    <section id="scenarios" aria-labelledby="heading-scenarios" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="scenarios"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card) => {
          const Icon = cardIcon[card.id];
          return (
            <li key={card.id} className="flex">
              <ToneChoiceCard
                tone={card.tone}
                icon={<Icon className="h-5 w-5" aria-hidden="true" />}
                question={card.question}
                resultTone={card.resultTone}
                result={card.resultBadge}
                lead={
                  <ArrowRight
                    className={cx(
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
          className={cx(
            'flex items-center gap-2 rounded-md border px-2 py-1.5 text-xsm text-left',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          )}
        >
          <span
            aria-hidden="true"
            className={cx('inline-block w-1 h-1 rounded-full shrink-0', toneTokens[resultTone].dot)}
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
            <ArrowRight className="h-3 w-3 rotate-90" aria-hidden="true" />
          </span>
        )}
      </li>
    ))}
  </ol>
);
