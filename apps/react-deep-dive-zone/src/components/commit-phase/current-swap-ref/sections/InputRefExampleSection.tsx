import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { RootCurrentRefContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, BoxIcon, LightbulbIcon, LinkIcon } from '../icons';

type Props = { content: RootCurrentRefContent['inputRef'] };

export const InputRefExampleSection = ({ content }: Props) => (
  <section
    id="input-ref-example"
    aria-labelledby="heading-input-ref-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="input-ref-example"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BoxIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-stretch">
      <CodeCard title={content.codeTitle} code={content.code} />
      <ExplanationCard title={content.explanationTitle} text={content.explanation} />
      <DomCard title={content.domTitle} code={content.domCode} label={content.domLabel} />
    </div>
  </section>
);

const CodeCard = ({ title, code }: { title: string; code: string }) => (
  <article className="flex h-full flex-col gap-2 rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_1px_0_var(--term-border)]">
    <header className="flex items-center justify-between gap-2">
      <h3 className="text-xsm sm:text-sm font-bold uppercase tracking-wider text-[var(--term-fg)]">
        {title}
      </h3>
      <span className="inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        tsx
      </span>
    </header>
    <div className="min-w-0">
      <CodePreviewPanel code={code} language="tsx" />
    </div>
  </article>
);

const ExplanationCard = ({ title, text }: { title: string; text: string }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center justify-center gap-md rounded-lg border-2 p-md sm:p-lg text-center',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-12 w-12 items-center justify-center rounded-lg border-2',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        <LightbulbIcon className="h-6 w-6" />
      </span>
      <span className={cn('text-[10px] font-mono uppercase tracking-wider font-bold', t.text)}>
        {title}
      </span>
      <p className={cn('text-sm sm:text-md leading-relaxed font-bold break-keep', t.fill.text)}>
        {text}
      </p>
    </article>
  );
};

const DomCard = ({ title, code, label }: { title: string; code: string; label: string }) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3 className={cn('text-xsm sm:text-sm font-bold uppercase tracking-wider', t.text)}>
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          host
        </span>
      </header>
      <pre
        className={cn(
          'overflow-x-auto rounded-md border bg-[var(--term-surface)] p-sm text-xsm leading-snug font-mono',
          t.fill.border,
          t.fill.text,
        )}
      >
        <code>{code}</code>
      </pre>
      <div className="flex flex-col items-center gap-1 mt-auto pt-2">
        <span aria-hidden="true" className={t.text}>
          <ArrowDownIcon className="hidden md:inline-block h-5 w-5" />
          <ArrowRightIcon className="md:hidden h-5 w-5" />
        </span>
        <code
          className={cn(
            'inline-flex items-center gap-1.5 rounded-md border-2 px-3 py-1 text-xsm font-mono font-bold',
            t.fill.bg,
            t.fill.border,
            t.fill.text,
          )}
        >
          <LinkIcon aria-hidden="true" className="h-3.5 w-3.5" />
          {label}
        </code>
      </div>
    </article>
  );
};
