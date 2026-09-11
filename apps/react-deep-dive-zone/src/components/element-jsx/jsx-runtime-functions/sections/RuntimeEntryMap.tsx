import { cn } from '@it-tech-blog/utils';

import { ArrowDown, Atom, Box, Braces, Code, Layers, Map } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { JsxRuntimeFunctionsContent } from '../content';

type Props = { content: JsxRuntimeFunctionsContent['entryMap'] };

const fnIconMap = {
  jsx: Box,
  jsxs: Layers,
  jsxDEV: Braces,
} as const;

export const RuntimeEntryMap = ({ content }: Props) => (
  <section id="entry-map" aria-labelledby="heading-entry-map" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="entry-map"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Map className="h-5 w-5" aria-hidden="true" />}
    />

    <p className="sr-only">{content.a11ySummary}</p>

    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex flex-col items-stretch gap-md">
        {/* Top JSX node */}
        <div className="flex justify-center">
          <DiagramNode
            label={content.topLabel}
            icon={<Code className="h-5 w-5" aria-hidden="true" />}
            tone="sky"
            variant="top"
          />
        </div>

        <Connector vertical />

        {/* Runtime entry nodes row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-start">
          <div className="flex flex-col gap-md items-center">
            <RuntimeEntryNode
              label={content.productionLabel}
              icon={<Box className="h-5 w-5" aria-hidden="true" />}
              tone="sky"
            />
            <Connector vertical />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md w-full">
              {content.productionFunctions.map((fn) => (
                <FunctionNode
                  key={fn.id}
                  label={fn.label}
                  note={fn.note}
                  tone={fn.tone}
                  icon={iconFor(fn.id)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-md items-center">
            <RuntimeEntryNode
              label={content.devLabel}
              icon={<Braces className="h-5 w-5" aria-hidden="true" />}
              tone="violet"
            />
            <Connector vertical />
            <div className="grid grid-cols-1 gap-md w-full">
              {content.devFunctions.map((fn) => (
                <FunctionNode
                  key={fn.id}
                  label={fn.label}
                  note={fn.note}
                  tone={fn.tone}
                  icon={iconFor(fn.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <Connector vertical dashed />

        {/* Final result node */}
        <div className="flex justify-center">
          <ResultBigNode label={content.bottomLabel} note={content.bottomNote} />
        </div>
      </div>
    </div>
  </section>
);

const iconFor = (id: 'jsx' | 'jsxs' | 'jsxDEV') => {
  const Icon = fnIconMap[id];
  return <Icon className="h-4 w-4" />;
};

const Connector = ({ vertical, dashed }: { vertical?: boolean; dashed?: boolean }) => (
  <div
    className={cn(
      'flex justify-center',
      vertical ? 'flex-col items-center' : 'flex-row items-center',
    )}
    aria-hidden="true"
  >
    <span
      className={cn(
        'block w-px h-6',
        dashed ? 'border-l border-dashed border-[var(--term-border)]' : 'bg-[var(--term-border)]',
      )}
    />
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
      <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
    </span>
  </div>
);

type NodeProps = {
  label: string;
  icon?: React.ReactNode;
  tone: ToneKey;
  variant?: 'top' | 'entry';
};

const DiagramNode = ({ label, icon, tone, variant = 'entry' }: NodeProps) => (
  <div
    className={cn(
      'inline-flex items-center gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-lg border',
        toneTokens[tone].chip,
      )}
    >
      {icon}
    </span>
    <span
      className={cn(
        variant === 'top' ? 'font-mono text-md font-bold' : 'font-mono text-sm font-bold',
        toneTokens[tone].text,
      )}
    >
      {label}
    </span>
  </div>
);

const RuntimeEntryNode = ({
  label,
  icon,
  tone,
}: {
  label: string;
  icon: React.ReactNode;
  tone: ToneKey;
}) => (
  <div
    className={cn(
      'inline-flex items-center gap-2 rounded-xl border-2 bg-[var(--term-bg)] px-md py-2',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-lg border',
        toneTokens[tone].chip,
      )}
    >
      {icon}
    </span>
    <span className={cn('font-mono text-sm font-bold', toneTokens[tone].text)}>{label}</span>
  </div>
);

const FunctionNode = ({
  label,
  note,
  tone,
  icon,
}: {
  label: string;
  note: string;
  tone: ToneKey;
  icon: React.ReactNode;
}) => (
  <article
    className={cn(
      'flex items-start gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-lg border',
        toneTokens[tone].chip,
      )}
    >
      {icon}
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className={cn('font-mono text-sm font-bold', toneTokens[tone].text)}>{label}</span>
      <span className="text-[11px] text-[var(--term-muted)] break-keep">{note}</span>
    </div>
  </article>
);

const ResultBigNode = ({ label, note }: { label: string; note: string }) => (
  <div
    className={cn(
      'inline-flex items-center gap-md rounded-2xl border-2 px-md py-3',
      'border-[var(--term-accent)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-11 h-11 rounded-2xl border',
        toneTokens.amber.chip,
      )}
    >
      <Atom className="h-6 w-6" aria-hidden="true" />
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <span
        className={cn(
          'font-mono text-sm sm:text-md font-bold tracking-tight',
          toneTokens.amber.text,
        )}
      >
        {label}
      </span>
      <span className="text-[11px] text-[var(--term-muted)] break-keep">{note}</span>
    </div>
  </div>
);
