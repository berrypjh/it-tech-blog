import { cn } from '@it-tech-blog/utils';

import { CompareVs } from '../../../shared/compare';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ExampleMapping, FiberIdentityFieldsContent } from '../content';
import { CodeIcon, TargetIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['typeVs'] };

export const ElementTypeVsType = ({ content }: Props) => (
  <section id="type-vs" aria-labelledby="heading-type-vs" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="type-vs"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-md lg:gap-lg">
      <CompareCard
        tone="violet"
        icon={<CodeIcon className="h-5 w-5" aria-hidden="true" />}
        title={content.elementType.title}
        subtitle={content.elementType.subtitle}
        body={content.elementType.body}
      />

      <CompareVs />

      <CompareCard
        tone="amber"
        icon={<TargetIcon className="h-5 w-5" aria-hidden="true" />}
        title={content.type.title}
        subtitle={content.type.subtitle}
        body={content.type.body}
      />
    </div>

    <div>
      <h3 className="text-xxsm uppercase tracking-wider font-mono text-[var(--term-muted)] mb-sm">
        {`// ${content.examplesLabel}`}
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
        {content.examples.map((ex) => (
          <li key={ex.id}>
            <ExampleCard ex={ex} />
          </li>
        ))}
      </ul>
    </div>
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
        t.borderHover,
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

const ExampleCard = ({ ex }: { ex: ExampleMapping }) => (
  <article
    className={cn(
      'rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <code className="block font-mono text-xsm font-bold tracking-tight text-[var(--term-fg)] mb-2 break-all">
      {ex.code}
    </code>
    <dl className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-0.5 text-[11.5px]">
      <dt className={cn('font-mono font-bold', toneTokens.violet.text)}>elementType</dt>
      <dd className="font-mono text-[var(--term-fg)] break-all">{ex.elementType}</dd>
      <dt className={cn('font-mono font-bold', toneTokens.amber.text)}>type</dt>
      <dd className="font-mono text-[var(--term-fg)] break-all">{ex.type}</dd>
    </dl>
  </article>
);
