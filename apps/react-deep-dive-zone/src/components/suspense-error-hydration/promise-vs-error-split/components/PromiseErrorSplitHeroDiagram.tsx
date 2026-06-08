import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { PromiseVsErrorSplitContent } from '../content';
import { FilterIcon, HourglassIcon, LoaderIcon, TriangleAlertIcon } from '../icons';

type Props = { content: PromiseVsErrorSplitContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 렌더 중 던져진 값(Thrown value)이 thenable 판별을 거쳐
 * Suspense 경로와 Error Boundary 경로로 갈라지는 분기를
 * 분류기 → ↓ → 두 갈래 카드로 컴팩트하게 보여준다.
 */
export const PromiseErrorSplitHeroDiagram = ({ content, className }: Props) => {
  const { diagram, promiseCode, errorCode } = content;
  const a11y =
    `${diagram.rootLabel}: ${diagram.diamondTitle} ${diagram.diamondSubtitle} → ` +
    `${diagram.yesLabel} ${diagram.yesTitle}(${diagram.yesSubtitle}), ` +
    `${diagram.noLabel} ${diagram.noTitle}(${diagram.noSubtitle})`;

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
        <ClassifierHeader
          title={diagram.rootLabel}
          condition={diagram.diamondTitle}
          hint={diagram.diamondSubtitle}
        />

        <DownArrow />

        <ol className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          <li>
            <BranchCard
              tone="emerald"
              badge={diagram.yesLabel}
              title={diagram.yesTitle}
              subtitle={diagram.yesSubtitle}
              icon={<LoaderIcon className="h-4 w-4" />}
              code={promiseCode.code}
              caption={promiseCode.label}
              pill={promiseCode.pill}
              pillIcon={<HourglassIcon className="h-3 w-3" aria-hidden="true" />}
            />
          </li>
          <li>
            <BranchCard
              tone="amber"
              badge={diagram.noLabel}
              title={diagram.noTitle}
              subtitle={diagram.noSubtitle}
              icon={<TriangleAlertIcon className="h-4 w-4" />}
              code={errorCode.code}
              caption={errorCode.label}
              pill={errorCode.pill}
              pillIcon={<TriangleAlertIcon className="h-3 w-3" aria-hidden="true" />}
            />
          </li>
        </ol>
      </div>
    </div>
  );
};

const ClassifierHeader = ({
  title,
  condition,
  hint,
}: {
  title: string;
  condition: string;
  hint: string;
}) => (
  <header className="flex items-center gap-sm">
    <ToneIconBox tone="blue" size="sm">
      <FilterIcon className="h-[18px] w-[18px]" />
    </ToneIconBox>
    <div className="flex min-w-0 flex-col">
      <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
        {title}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {condition} {hint}
      </span>
    </div>
  </header>
);

const BranchCard = ({
  tone,
  badge,
  title,
  subtitle,
  icon,
  code,
  caption,
  pill,
  pillIcon,
}: {
  tone: ToneKey;
  badge: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  code: string;
  caption: string;
  pill: string;
  pillIcon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <div className="flex min-w-0 flex-col">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {badge}
          </span>
          <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</h3>
        </div>
      </header>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{subtitle}</p>

      <CodePreviewPanel code={code} caption={caption} language="TS" size="sm" />

      <p
        className={cn(
          'mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
          'text-[11px] font-bold break-keep',
          t.chip,
        )}
      >
        {pillIcon}
        {pill}
      </p>
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
