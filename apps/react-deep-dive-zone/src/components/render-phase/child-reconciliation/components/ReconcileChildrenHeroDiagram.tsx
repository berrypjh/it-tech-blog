import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ReconcileChildrenContent } from '../content';
import { FileTextIcon, HexagonIcon, LayersIcon, NetworkIcon } from '../icons';

type Props = { content: ReconcileChildrenContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 이전 child Fiber + nextChildren(입력) → reconcileChildren → 새 child Fiber 구조로
 * 이어지는 자식 재조정 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const ReconcileChildrenHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.currentCard.title}(${diagram.currentCard.subtitle}) + ${diagram.inputCard.title} → ${diagram.centerCard.title} → ${diagram.newCard.title}(${diagram.newCard.subtitle})`;

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
          <h2 className="min-w-0 text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {diagram.title}
          </h2>
          <span
            aria-hidden="true"
            className="flex-1 border-t border-dashed border-[var(--term-border)]"
          />
        </header>

        <FlowCard
          tone="sky"
          icon={<NetworkIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
          title={diagram.currentCard.title}
          mono={diagram.currentCard.subtitle}
          body={diagram.currentCard.description}
        />

        <FlowCard
          tone="violet"
          icon={<FileTextIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
          title={diagram.inputCard.title}
          body={diagram.inputCard.description}
        />

        <DownArrow />

        <article
          className={cn(
            'flex flex-col gap-sm rounded-xl border px-md py-2.5',
            'bg-[var(--term-bg)] shadow-[0_3px_0_var(--term-border)]',
            toneTokens.teal.chip,
            toneTokens.teal.border,
          )}
        >
          <div className="flex items-center gap-sm">
            <ToneIconBox tone="teal" size="sm">
              <HexagonIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            </ToneIconBox>
            <span className="font-mono text-sm font-bold tracking-tight text-teal-700 dark:text-teal-300">
              {diagram.centerCard.title}
            </span>
          </div>
          <CodePreviewPanel
            code={diagram.centerCard.signature}
            showWindowDots={false}
            language="args"
            size="sm"
          />
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {diagram.centerCard.description}
          </p>
        </article>

        <DownArrow />

        <FlowCard
          tone="indigo"
          icon={<LayersIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
          title={diagram.newCard.title}
          mono={diagram.newCard.subtitle}
          body={diagram.newCard.description}
        />
      </div>
    </div>
  );
};

const FlowCard = ({
  tone,
  icon,
  title,
  mono,
  body,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  mono?: string;
  body: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="flex flex-wrap items-baseline gap-x-2">
          <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
          {mono && (
            <code className="font-mono text-[10px] text-[var(--term-muted)] break-all">{mono}</code>
          )}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
      </div>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
