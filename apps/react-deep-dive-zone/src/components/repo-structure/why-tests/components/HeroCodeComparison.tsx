import { cn } from '@it-tech-blog/utils';

import type { TestCodeContent } from '../content';
import { ArrowLeftRightIcon, CodeIcon, FlaskIcon } from '../icons';

type Props = { content: TestCodeContent['hero'] };

/**
 * Hero 우측: 구현 코드 카드 ↔ 테스트 코드 카드.
 * 색상만이 아니라 좌측 라벨에 "구현 코드" / "테스트 코드" 텍스트도 명시.
 */
export const HeroCodeComparison = ({ content }: Props) => {
  return (
    <div
      className={cn(
        '@container relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_3px_0_var(--term-border)]',
        'p-md sm:p-lg overflow-hidden',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(245,158,11,0.10),transparent_60%)]"
      />

      <div className="relative grid grid-cols-1 @lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md @lg:gap-sm items-stretch">
        <CodeCard
          label={content.implLabel}
          code={content.implCode}
          badge={content.badge1}
          variant="impl"
        />
        <ArrowConnector />
        <CodeCard
          label={content.testLabel}
          code={content.testCode}
          badge={content.badge2}
          variant="test"
        />
      </div>
    </div>
  );
};

const ArrowConnector = () => (
  <div className="flex @lg:flex-col items-center justify-center" aria-hidden="true">
    <span
      className={cn(
        'inline-flex items-center justify-center w-10 h-10 rounded-full',
        'border-2 border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)] text-[var(--term-accent)]',
      )}
    >
      <ArrowLeftRightIcon className="h-5 w-5 @lg:rotate-0 rotate-90" />
    </span>
  </div>
);

type CardProps = {
  label: string;
  code: string;
  badge: string;
  variant: 'impl' | 'test';
};

const CodeCard = ({ label, code, badge, variant }: CardProps) => {
  const isImpl = variant === 'impl';
  const Icon = isImpl ? CodeIcon : FlaskIcon;
  const accentText = isImpl ? 'text-sky-600 dark:text-sky-300' : 'text-[var(--term-accent)]';
  const tintClass =
    'bg-[var(--term-surface)] border-[var(--term-border)] hover:border-[var(--term-accent)]';
  const labelTextClass = accentText;
  const iconChipClass = cn('bg-[var(--term-surface)] border-[var(--term-border)]', accentText);

  const lines = code.replace(/\n$/, '').split('\n');

  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border p-3',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tintClass,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <div className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-7 h-7 rounded-md border shrink-0',
              iconChipClass,
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <span className={cn('text-[11px] font-bold tracking-tight truncate', labelTextClass)}>
            {label}
          </span>
        </div>
      </header>

      <pre
        className={cn(
          'rounded-md border bg-[var(--term-bg)] px-3 py-2 text-[11px] leading-snug font-mono',
          'border-[var(--term-border)] text-[var(--term-fg)] overflow-x-auto',
        )}
      >
        <code>
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line || ' '}
            </div>
          ))}
        </code>
      </pre>

      <div className="flex justify-end">
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            iconChipClass,
          )}
        >
          {badge}
        </span>
      </div>
    </article>
  );
};
