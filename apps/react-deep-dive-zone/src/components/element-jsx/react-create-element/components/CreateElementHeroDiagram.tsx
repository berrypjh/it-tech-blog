import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { DownArrow } from '../../../shared/DownArrow';
import { HeroDiagramShell } from '../../../shared/hero';
import type { ReactCreateElementContent, ToneKey } from '../content';
import { AtomIcon, BracesIcon, FunctionSquareIcon } from '../icons';
import { localTone } from '../localTone';

type Props = { content: ReactCreateElementContent['hero']; className?: string };

export const CreateElementHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.leftCardLabel}: ${content.leftCode} → ${content.rightCardLabel}: ${content.rightCode} → ${content.resultTitle}: ${content.resultBody}`;

  return (
    <HeroDiagramShell a11yLabel={a11y} className={className}>
      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="sky"
            label={content.leftCardLabel}
            icon={<BracesIcon className="h-[18px] w-[18px]" />}
          />
          <CodePreviewPanel code={content.leftCode} showWindowDots language="JSX" size="md" />
        </li>

        <DownArrow />

        <li className="flex flex-col gap-sm">
          <StepHeader
            tone="violet"
            label={content.rightCardLabel}
            icon={<FunctionSquareIcon className="h-[18px] w-[18px]" />}
          />
          <CodePreviewPanel code={content.rightCode} language="JS" size="md" />
        </li>

        <DownArrow />

        <li>
          <ResultCard title={content.resultTitle} body={content.resultBody} />
        </li>
      </ol>
    </HeroDiagramShell>
  );
};

const IconBox = ({
  tone,
  size = 'md',
  children,
}: {
  tone: ToneKey;
  size?: 'sm' | 'md';
  children: React.ReactNode;
}) => {
  const t = localTone(tone);
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center rounded-md',
        size === 'sm' ? 'w-9 h-9' : 'w-11 h-11',
        t.chip,
        t.text,
      )}
    >
      {children}
    </span>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
}: {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
}) => {
  const t = localTone(tone);
  return (
    <div className="flex items-center gap-sm">
      <IconBox tone={tone} size="sm">
        {icon}
      </IconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const ResultCard = ({ title, body }: { title: string; body: string }) => {
  const t = localTone('teal');
  return (
    <article
      className={cn(
        'flex items-center gap-md rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <IconBox tone="teal" size="md">
        <AtomIcon className="h-[18px] w-[18px]" aria-hidden="true" />
      </IconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{title}</h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
      </div>
    </article>
  );
};
