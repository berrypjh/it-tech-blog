import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberIdentityFieldsContent } from '../content';
import { CodeIcon, TargetIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['typeVs'] };

export const ElementTypeVsType = ({ content }: Props) => (
  <section id="type-vs" aria-labelledby="heading-type-vs" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="type-vs"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-stretch gap-md lg:gap-lg">
        {/* elementType */}
        <CompareCard
          accent="violet"
          icon={<CodeIcon className="h-6 w-6" aria-hidden="true" />}
          title={content.elementType.title}
          subtitle={content.elementType.subtitle}
          body={content.elementType.body}
        />

        {/* VS badge */}
        <div className="flex items-center justify-center lg:px-0">
          <span
            className={cn(
              'inline-flex items-center justify-center w-12 h-12 rounded-full',
              'bg-slate-900 text-white border border-slate-700',
              'shadow-[0_8px_16px_-8px_rgba(15,23,42,0.5)]',
              'font-bold text-sm tracking-wider',
            )}
            aria-hidden="true"
          >
            {content.vs}
          </span>
        </div>

        {/* type */}
        <CompareCard
          accent="amber"
          icon={<TargetIcon className="h-6 w-6" aria-hidden="true" />}
          title={content.type.title}
          subtitle={content.type.subtitle}
          body={content.type.body}
        />
      </div>

      {/* Examples */}
      <div className="mt-md">
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
    </div>
  </section>
);

const CompareCard = ({
  accent,
  icon,
  title,
  subtitle,
  body,
}: {
  accent: 'violet' | 'amber';
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  body: string;
}) => {
  const tones = {
    violet: {
      border:
        'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
      iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
      titleColor: 'text-violet-800 dark:text-violet-100',
      subtitleColor: 'text-violet-700/80 dark:text-violet-200/80',
    },
    amber: {
      border:
        'border-amber-200/80 dark:border-amber-800/60 hover:border-amber-400/70 dark:hover:border-amber-500/60',
      iconWrap: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
      titleColor: 'text-amber-900 dark:text-amber-100',
      subtitleColor: 'text-amber-700/80 dark:text-amber-200/80',
    },
  }[accent];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        tones.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-xl',
          tones.iconWrap,
        )}
      >
        {icon}
      </span>
      <code className={cn('font-mono text-md font-bold tracking-tight', tones.titleColor)}>
        {title}
      </code>
      <p className={cn('text-xsm font-medium leading-snug break-keep', tones.subtitleColor)}>
        {subtitle}
      </p>
      <p className="mt-auto text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {body}
      </p>
    </article>
  );
};

const ExampleCard = ({ ex }: { ex: FiberIdentityFieldsContent['typeVs']['examples'][number] }) => (
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
      <dt className="font-mono font-bold text-violet-700 dark:text-violet-300">elementType</dt>
      <dd className="font-mono text-[var(--term-fg)] break-all">{ex.elementType}</dd>
      <dt className="font-mono font-bold text-amber-700 dark:text-amber-300">type</dt>
      <dd className="font-mono text-[var(--term-fg)] break-all">{ex.type}</dd>
    </dl>
  </article>
);
