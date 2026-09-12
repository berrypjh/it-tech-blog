import { cn } from '@it-tech-blog/utils';

import { Code2, Lightbulb, Target } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ExampleMapping, FiberIdentityFieldsContent } from '../content';

type Props = { content: FiberIdentityFieldsContent['typeVs'] };

export const ElementTypeVsType = ({ content }: Props) => (
  <section id="type-vs" aria-labelledby="heading-type-vs" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="type-vs"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Code2 className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-md lg:gap-lg">
      <CompareCard
        tone="violet"
        icon={<Code2 className="h-5 w-5" aria-hidden="true" />}
        title={content.elementType.title}
        subtitle={content.elementType.subtitle}
        body={content.elementType.body}
      />

      <CompareVs />

      <CompareCard
        tone="amber"
        icon={<Target className="h-5 w-5" aria-hidden="true" />}
        title={content.type.title}
        subtitle={content.type.subtitle}
        body={content.type.body}
      />
    </div>

    <div>
      <h3 className="text-xxsm uppercase tracking-wider font-mono text-[var(--term-muted)] mb-sm">
        {`// ${content.examplesLabel}`}
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
        {content.examples.map((ex) => (
          <li key={ex.id}>
            <ExampleCard ex={ex} sameLabel={content.sameLabel} diffLabel={content.diffLabel} />
          </li>
        ))}
      </ul>
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.note}
    </SectionNote>
  </section>
);

const CompareCard = ({
  tone,
  icon,
  title,
  subtitle,
  body,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  body: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <ToneIconBox tone={tone}>{icon}</ToneIconBox>
      <code className={cn('font-mono text-md font-bold tracking-tight', t.text)}>{title}</code>
      <p className={cn('text-xsm font-medium leading-snug break-keep', t.text)}>{subtitle}</p>
      <p className="mt-auto text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {body}
      </p>
    </article>
  );
};

/** elementType과 type이 다르면 amber 테두리·배지로 강조한다. */
const ExampleCard = ({
  ex,
  sameLabel,
  diffLabel,
}: {
  ex: ExampleMapping;
  sameLabel: string;
  diffLabel: string;
}) => {
  const same = ex.elementType === ex.type;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        same ? 'border-[var(--term-border)]' : toneTokens.amber.border,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <code className="min-w-0 font-mono text-xsm font-bold tracking-tight text-[var(--term-fg)] break-all">
          {ex.code}
        </code>
        <span
          className={cn(
            'shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold',
            same ? 'border-[var(--term-border)] text-[var(--term-muted)]' : toneTokens.amber.chip,
          )}
        >
          {same ? sameLabel : diffLabel}
        </span>
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5 text-[11.5px]">
        <dt className={cn('font-mono font-bold', toneTokens.violet.text)}>elementType</dt>
        <dd className="font-mono text-[var(--term-fg)] break-all">{ex.elementType}</dd>
        <dt className={cn('font-mono font-bold', toneTokens.amber.text)}>type</dt>
        <dd className="font-mono text-[var(--term-fg)] break-all">{ex.type}</dd>
      </dl>
    </article>
  );
};
