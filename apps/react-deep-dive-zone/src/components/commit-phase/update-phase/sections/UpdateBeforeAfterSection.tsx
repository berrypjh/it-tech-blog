import { cx } from '@berrypjh/react-ui';
import { ArrowDown, CheckCircle2, Lock, Pencil, Replace } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { UpdatePhaseContent, WhatChangedItem } from '../content';

type Props = { content: UpdatePhaseContent['beforeAfter'] };

export const UpdateBeforeAfterSection = ({ content }: Props) => (
  <section
    id="before-after"
    aria-labelledby="heading-before-after"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="before-after"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Replace className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_minmax(0,_0.85fr)] gap-3 items-stretch">
      <BeforeAfterCard
        title={content.beforeTitle}
        dom={content.beforeDom}
        screen={content.beforeScreen}
        domLabel={content.domLabel}
        screenLabel={content.screenLabel}
        variant="before"
      />
      <MiddleFlow middle={content.middle} />
      <BeforeAfterCard
        title={content.afterTitle}
        dom={content.afterDom}
        screen={content.afterScreen}
        domLabel={content.domLabel}
        screenLabel={content.screenLabel}
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
  domLabel,
  screenLabel,
  variant,
}: {
  title: string;
  dom: string;
  screen: string;
  domLabel: string;
  screenLabel: string;
  variant: 'before' | 'after';
}) => {
  const isAfter = variant === 'after';
  const t = toneTokens.sky;
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-2 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        isAfter ? t.fill.border : 'border-[var(--term-border)]',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <h3
        className={cx(
          'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
          isAfter ? t.text : 'text-[var(--term-fg)]',
        )}
      >
        {title}
      </h3>

      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {domLabel}
        </span>
        <pre
          className={cx(
            'overflow-x-auto rounded-md border p-sm text-[11px] sm:text-xsm leading-snug font-mono',
            isAfter
              ? cx(t.fill.border, t.fill.bg, t.fill.text)
              : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          )}
        >
          <code>{dom}</code>
        </pre>
      </div>

      <div className="flex flex-col gap-1.5 mt-1">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {screenLabel}
        </span>
        <div
          className={cx(
            'flex items-center justify-center rounded-md border px-3 py-3',
            isAfter
              ? cx(t.fill.border, t.fill.bg)
              : 'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span
            className={cx(
              'inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-bold',
              isAfter
                ? cx(t.fill.bg, t.fill.border, t.fill.text)
                : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
            )}
          >
            {isAfter && <Lock aria-hidden="true" className="h-3.5 w-3.5" />}
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
      icon={<Pencil className="h-3.5 w-3.5" aria-hidden="true" />}
      tone="sky"
    />
    <ArrowDown aria-hidden="true" className="h-4 w-4 mx-auto text-[var(--term-dim)]" />
    <MiniStep
      title={middle.step2Title}
      note={middle.step2Note}
      icon={<Replace className="h-3.5 w-3.5" aria-hidden="true" />}
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
      className={cx(
        'flex flex-col items-center gap-0.5 rounded-lg border-2 px-sm py-1.5 text-center',
        t.fill.border,
        t.fill.bg,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cx('text-xsm font-bold break-keep', t.fill.text)}>{title}</span>
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
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md',
        card.fill.border,
        card.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="teal" size="sm">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cx('text-sm font-bold break-keep', card.fill.text)}>{title}</h3>
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          const t = toneTokens[item.tone];
          return (
            <li key={item.text} className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className={cx(
                  'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border',
                  t.chip,
                )}
              >
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
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
