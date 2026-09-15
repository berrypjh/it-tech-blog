import { cx } from '@berrypjh/react-ui';
import { ChevronDown, FastForward, HelpCircle, Workflow } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { BeginWorkContent } from '../content';

type Props = { content: BeginWorkContent['summary'] };

const isMono = (text: string) => text.includes('(') || text.includes('workInProgress');

export const BeginWorkFlowSummary = ({ content }: Props) => (
  <section id="flow-summary" aria-labelledby="heading-flow-summary" className="space-y-md">
    <SectionHeader
      id="flow-summary"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// bailout? → tag dispatch → reconcile'}
        </span>
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)] rounded-md border border-[var(--term-border)] px-2 py-0.5">
          whole flow
        </span>
      </header>

      <div className="flex flex-col items-center gap-2">
        {/* Start */}
        <article
          className={cx(
            'inline-flex w-full max-w-[420px] items-center justify-center rounded-lg border px-md py-3',
            'shadow-[0_1px_0_var(--term-border)]',
            toneTokens.sky.fill.bg,
            toneTokens.sky.fill.border,
          )}
        >
          <span
            className={cx(
              'text-xsm sm:text-sm font-bold leading-tight text-center break-keep',
              toneTokens.sky.fill.text,
            )}
          >
            {content.start}
          </span>
        </article>

        <ChevronDown aria-hidden="true" className="h-5 w-5 text-[var(--term-accent)]" />

        {/* Decision diamond */}
        <div className="relative flex h-24 w-[min(280px,100%)] items-center justify-center">
          <span
            aria-hidden="true"
            className={cx(
              'absolute inset-0 m-auto rotate-45 h-[80%] w-[80%] rounded-lg border',
              'shadow-[0_1px_0_var(--term-border)]',
              toneTokens.violet.fill.bg,
              toneTokens.violet.fill.border,
            )}
          />
          <div className="relative flex flex-col items-center justify-center gap-1 text-center">
            <HelpCircle aria-hidden="true" className={cx('h-4 w-4', toneTokens.violet.text)} />
            <span
              className={cx(
                'text-xsm sm:text-sm font-bold break-keep',
                toneTokens.violet.fill.text,
              )}
            >
              {content.decision}
            </span>
          </div>
        </div>

        {/* Two paths */}
        <div className="mt-2 grid w-full grid-cols-1 lg:grid-cols-2 gap-md">
          {/* Bailout path (yes) */}
          <article
            className={cx(
              'flex flex-col gap-2 rounded-lg border border-dashed p-md',
              toneTokens.violet.border,
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                className={cx(
                  'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider font-bold',
                  toneTokens.violet.chip,
                )}
              >
                <FastForward className="h-3 w-3" aria-hidden="true" />
                yes
              </span>
              <span
                className={cx(
                  'text-xxsm font-mono uppercase tracking-wider',
                  toneTokens.violet.text,
                )}
              >
                bailout path
              </span>
            </header>
            <PathBox tone="violet" mono>
              {content.bailout.title}
            </PathBox>
            <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] text-center break-keep">
              {content.bailout.description}
            </p>
            <ChevronDown
              aria-hidden="true"
              className={cx('mx-auto h-4 w-4', toneTokens.violet.text)}
            />
            <PathBox tone="violet" filled>
              {content.bailout.afterTitle}
            </PathBox>
          </article>

          {/* Normal path (no) */}
          <article
            className={cx('flex flex-col gap-2 rounded-lg border p-md', toneTokens.sky.border)}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                className={cx(
                  'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider font-bold',
                  toneTokens.sky.chip,
                )}
              >
                no
              </span>
              <span
                className={cx('text-xxsm font-mono uppercase tracking-wider', toneTokens.sky.text)}
              >
                normal path
              </span>
            </header>
            <ol className="flex flex-col gap-1.5">
              {content.normalPath.map((step, idx) => {
                const isLast = idx === content.normalPath.length - 1;
                return (
                  <li key={step.title} className="flex flex-col items-stretch">
                    <PathBox
                      tone={isLast ? 'violet' : 'sky'}
                      mono={isMono(step.title)}
                      filled={isLast}
                    >
                      {step.title}
                    </PathBox>
                    {step.description && (
                      <span
                        className={cx(
                          'mt-1 text-xxsm font-mono uppercase tracking-wider text-center',
                          toneTokens.violet.text,
                        )}
                      >
                        {step.description}
                      </span>
                    )}
                    {!isLast && (
                      <ChevronDown
                        aria-hidden="true"
                        className={cx('mx-auto my-1 h-4 w-4', toneTokens.sky.text)}
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </article>
        </div>
      </div>
    </article>
  </section>
);

type PathBoxProps = {
  tone: 'sky' | 'violet';
  children: React.ReactNode;
  mono?: boolean;
  filled?: boolean;
};

const PathBox = ({ tone, children, mono, filled }: PathBoxProps) => {
  const t = toneTokens[tone];
  return (
    <span
      className={cx(
        'inline-flex w-full items-center justify-center rounded-lg border px-md py-2',
        filled
          ? cx(t.fill.bg, t.fill.border, t.fill.text)
          : cx('bg-[var(--term-bg)]', t.border, t.text),
        mono ? 'font-mono break-all' : 'break-keep',
        'text-xsm sm:text-sm font-bold leading-tight text-center',
      )}
    >
      {children}
    </span>
  );
};
