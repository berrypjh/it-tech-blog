import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HostComponentContent } from '../content';
import { CheckCircleIcon, SparklesIcon } from '../icons';

type Props = { content: HostComponentContent['quiz'] };

export const HostComponentQuiz = ({ content }: Props) => (
  <section id="quiz" aria-labelledby="heading-quiz" className="space-y-md">
    <SectionHeader
      id="quiz"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
      <QaCard tone="sky" label="question" mark="Q" text={content.question} />
      <QaCard
        tone="emerald"
        label="answer"
        mark={<CheckCircleIcon className="h-5 w-5" />}
        text={content.answer}
      />
    </div>
  </section>
);

type QaCardProps = {
  tone: ToneKey;
  label: string;
  mark: React.ReactNode;
  text: string;
};

const QaCard = ({ tone, label, mark, text }: QaCardProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-md border font-mono font-bold',
            t.chip,
          )}
        >
          {mark}
        </span>
        <span className={cn('text-xxsm font-mono uppercase tracking-wider', t.text)}>{label}</span>
      </header>
      <p className={cn('text-sm sm:text-md font-bold leading-relaxed break-keep', t.text)}>
        {text}
      </p>
    </article>
  );
};
