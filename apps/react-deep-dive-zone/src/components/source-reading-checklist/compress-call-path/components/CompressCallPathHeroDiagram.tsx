import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { CallPathCompressionContent, CallStep } from '../content';
import { CircleDotIcon, RouteIcon } from '../icons';
import { stepToneKey } from '../stepTone';

type Props = { content: CallPathCompressionContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 흩어진 함수 카드 → compress → 한 줄 호출 경로로 압축되는 흐름을
 * ToneIconBox + accent arrow + CodePreviewPanel로 잇는 컴팩트 다이어그램.
 */
export const CompressCallPathHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.visualTitle}. ${content.leftPanelTitle}: ${content.leftFunctions.join(
    ', ',
  )}. ${content.connectorLabel} — ${content.connectorSub}. ${content.rightPanelTitle}: ${content.rightFlow
    .map((step) => step.fn)
    .join(' → ')}.`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="cyan" size="sm">
            <RouteIcon className="h-[18px] w-[18px]" aria-hidden="true" />
          </ToneIconBox>
          <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.visualTitle}
          </h2>
        </header>

        <ScatteredPanel
          title={content.leftPanelTitle}
          functions={content.leftFunctions}
          caption={content.leftCaption}
        />

        <DownArrow label={content.connectorLabel} />

        <CompressedPanel
          title={content.rightPanelTitle}
          flow={content.rightFlow}
          caption={content.rightCaption}
        />
      </div>
    </div>
  );
};

const ScatteredPanel = ({
  title,
  functions,
  caption,
}: {
  title: string;
  functions: string[];
  caption: string;
}) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span className="flex min-w-0 items-center gap-2">
      <ToneIconBox tone="amber" size="sm">
        <CircleDotIcon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <span className={cn('min-w-0 text-sm font-bold tracking-tight', toneTokens.amber.text)}>
        {title}
      </span>
    </span>
    <ul className="grid grid-cols-1 gap-1.5 @sm:grid-cols-2">
      {functions.map((fn) => (
        <li
          key={fn}
          className={cn(
            'flex items-center gap-2 rounded-md border px-2 py-1.5',
            toneTokens.amber.border,
          )}
        >
          <span className={cn('block h-1.5 w-1.5 shrink-0 rounded-full', toneTokens.amber.dot)} />
          <code className="min-w-0 truncate font-mono text-[11px] text-[var(--term-fg)]">{fn}</code>
        </li>
      ))}
    </ul>
    <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">{caption}</p>
  </article>
);

const CompressedPanel = ({
  title,
  flow,
  caption,
}: {
  title: string;
  flow: CallStep[];
  caption: string;
}) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span className="flex min-w-0 items-center gap-2">
      <ToneIconBox tone="cyan" size="sm">
        <RouteIcon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <span className={cn('min-w-0 text-sm font-bold tracking-tight', toneTokens.cyan.text)}>
        {title}
      </span>
    </span>
    <CodePreviewPanel
      code={flow.map((step, i) => `${i + 1}. ${step.fn}`).join('\n')}
      language="flow"
      showWindowDots={false}
    />
    <ol className="flex flex-col gap-1">
      {flow.map((step, i) => {
        const t = toneTokens[stepToneKey[step.kind]];
        return (
          <Fragment key={`${step.fn}-${i}`}>
            <li className={cn('flex items-center gap-2 rounded-md border px-2 py-1.5', t.border)}>
              <ToneIconBox tone={stepToneKey[step.kind]} size="sm" className="h-5 w-5">
                <span className="font-mono text-[9px] font-bold tabular-nums">{i + 1}</span>
              </ToneIconBox>
              <code className={cn('min-w-0 truncate font-mono text-[11px] font-bold', t.text)}>
                {step.fn}
              </code>
            </li>
            {i < flow.length - 1 && <DownArrow />}
          </Fragment>
        );
      })}
    </ol>
    <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">{caption}</p>
  </article>
);

const DownArrow = ({ label }: { label?: string }) => (
  <span className="flex flex-col items-center justify-center gap-0.5">
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
    >
      ↓
    </span>
    {label && (
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {label}
      </span>
    )}
  </span>
);
