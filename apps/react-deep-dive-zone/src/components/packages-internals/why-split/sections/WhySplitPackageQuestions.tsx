import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { WhySplitContent } from '../content';
import { architectureIcon, HelpCircleIcon } from '../icons';

type Props = { content: WhySplitContent['questions'] };

export const WhySplitPackageQuestions = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-questions" className="space-y-md">
      <SectionHeader
        id="questions"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md items-stretch">
        {content.cards.map((card) => {
          const tone = toneTokens[card.tone];
          const Icon = architectureIcon[card.iconName];

          return (
            <li key={card.id} className="flex">
              <article
                className={cn(
                  'group flex flex-1 flex-col items-center gap-sm rounded-2xl border p-md text-center',
                  'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                  'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
                  tone.borderHover,
                )}
              >
                <ToneIconBox tone={card.tone} size="md">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </ToneIconBox>

                <span
                  className={cn(
                    'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold font-mono tracking-tight',
                    tone.chip,
                  )}
                >
                  {card.name}
                </span>

                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {card.question}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
