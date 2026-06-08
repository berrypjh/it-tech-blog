import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ReactCreateElementContent } from '../content';
import { AtomIcon, BracesIcon, FunctionSquareIcon } from '../icons';

type Props = { content: ReactCreateElementContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * JSX 문법 → 명시적 createElement 호출 → React Element 객체로 이어지는
 * 생성 파이프라인을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const CreateElementHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.leftCardLabel}: ${content.leftCode} → ${content.rightCardLabel}: ${content.rightCode} → ${content.resultTitle}: ${content.resultBody}`;

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
    </div>
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
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{label}</span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const ResultCard = ({ title, body }: { title: string; body: string }) => (
  <article
    className={cn(
      'flex items-center gap-md rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      'transition-all hover:-translate-y-0.5',
      toneTokens.teal.borderHover,
    )}
  >
    <ToneIconBox tone="teal" size="md">
      <AtomIcon className="h-[18px] w-[18px]" aria-hidden="true" />
    </ToneIconBox>
    <div className="flex min-w-0 flex-col gap-1">
      <h3 className={cn('font-mono text-sm font-bold tracking-tight', toneTokens.teal.text)}>
        {title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
    </div>
  </article>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
