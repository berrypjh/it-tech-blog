import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { UpdatePhaseContent, WhatChangedItem } from '../content';
import { ArrowDownIcon, CheckCircleIcon, LockIcon, PencilIcon, ReplaceIcon } from '../icons';

type Props = { content: UpdatePhaseContent['beforeAfter'] };

export const UpdateBeforeAfterSection = ({ content }: Props) => (
  <section
    id="before-after"
    aria-labelledby="heading-before-after"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="before-after"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ReplaceIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_minmax(0,_0.85fr)] gap-3 items-stretch">
      <BeforeAfterCard
        title={content.beforeTitle}
        dom={content.beforeDom}
        screen={content.beforeScreen}
        variant="before"
      />
      <MiddleFlow middle={content.middle} />
      <BeforeAfterCard
        title={content.afterTitle}
        dom={content.afterDom}
        screen={content.afterScreen}
        variant="after"
      />
      <WhatChangedCard title={content.whatChangedTitle} items={content.whatChangedItems} />
    </div>
  </section>
);

const BeforeAfterCard = ({
  title,
  dom,
  screen,
  variant,
}: {
  title: string;
  dom: string;
  screen: string;
  variant: 'before' | 'after';
}) => {
  const isAfter = variant === 'after';
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        isAfter ? t.fill.border : 'border-[var(--term-border)]',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            isAfter ? t.text : 'text-[var(--term-fg)]',
          )}
        >
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isAfter
              ? t.chip
              : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
          )}
        >
          {isAfter ? 'after' : 'before'}
        </span>
      </header>

      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          DOM
        </span>
        <pre
          className={cn(
            'overflow-x-auto rounded-md border p-sm text-[11px] sm:text-xsm leading-snug font-mono',
            isAfter
              ? cn(t.fill.border, t.fill.bg, t.fill.text)
              : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          )}
        >
          <code>{dom}</code>
        </pre>
      </div>

      <div className="flex flex-col gap-1.5 mt-1">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          화면 / screen
        </span>
        <div
          className={cn(
            'flex items-center justify-center rounded-md border px-3 py-3',
            isAfter
              ? cn(t.fill.border, t.fill.bg)
              : 'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-bold',
              isAfter
                ? cn(t.fill.bg, t.fill.border, t.fill.text)
                : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
            )}
          >
            {isAfter && <LockIcon aria-hidden="true" className="h-3.5 w-3.5" />}
            <span>{screen}</span>
          </span>
        </div>
      </div>
    </article>
  );
};

const MiddleFlow = ({ middle }: { middle: UpdatePhaseContent['beforeAfter']['middle'] }) => (
  <div className="flex flex-col items-stretch justify-center gap-2 py-1 lg:py-0">
    <MiniStep
      title={middle.step1Title}
      note={middle.step1Note}
      icon={<PencilIcon className="h-3.5 w-3.5" />}
      tone="sky"
    />
    <ArrowDownIcon aria-hidden="true" className="h-4 w-4 mx-auto text-[var(--term-dim)]" />
    <MiniStep
      title={middle.step2Title}
      note={middle.step2Note}
      icon={<ReplaceIcon className="h-3.5 w-3.5" />}
      tone="blue"
    />
  </div>
);

const MiniStep = ({
  title,
  note,
  icon,
  tone,
}: {
  title: string;
  note: string;
  icon: React.ReactNode;
  tone: ToneKey;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col items-center gap-0.5 rounded-lg border-2 px-sm py-1.5 text-center',
        t.fill.border,
        t.fill.bg,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('text-xsm font-bold break-keep', t.fill.text)}>{title}</span>
      <span className="text-[10px] font-mono leading-snug text-[var(--term-muted)] break-keep">
        {note}
      </span>
    </article>
  );
};

const WhatChangedCard = ({ title, items }: { title: string; items: WhatChangedItem[] }) => {
  const card = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md',
        card.fill.border,
        card.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="teal" size="sm">
          <CheckCircleIcon className="h-4 w-4" />
        </ToneIconBox>
        <h3 className={cn('text-sm font-bold break-keep', card.fill.text)}>{title}</h3>
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          const t = toneTokens[item.tone];
          return (
            <li key={item.text} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border',
                  t.chip,
                )}
              >
                <CheckCircleIcon className="h-3 w-3" />
              </span>
              <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
