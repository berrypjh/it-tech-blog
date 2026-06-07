import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { ApiToken, ReactPackageContent } from '../content';
import { reactPackageIcon } from '../icons';

type Props = {
  hero: ReactPackageContent['hero'];
  className?: string;
};

/**
 * Hero 우측 API 네트워크.
 * 중앙 react 카드를 두고 좌/우에 API 토큰들이 grid로 배치된다.
 * 데스크톱에서는 점선 connector가 보이고, 모바일에서는 connector를 숨기고 grid로만 보여준다.
 */
export const ApiNetworkDiagram = ({ hero, className }: Props) => {
  const leftTokens = hero.tokens.filter((t) => t.side === 'left');
  const rightTokens = hero.tokens.filter((t) => t.side === 'right');

  return (
    <div
      className={cn(
        '@container relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'px-md py-lg sm:p-lg overflow-hidden',
        className,
      )}
    >
      {/* 옅은 글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.14),transparent_55%)]"
      />

      <p className="sr-only">{hero.apiNetworkAriaLabel}</p>

      <div
        className={cn(
          'relative grid items-center gap-sm',
          'grid-cols-1 @xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]',
        )}
      >
        {/* 좌측 토큰 */}
        <ul className="grid grid-cols-2 gap-2 sm:gap-3 order-2 @xl:order-1">
          {leftTokens.map((token) => (
            <li key={token.id} className="flex min-w-0">
              <TokenCard token={token} side="left" />
            </li>
          ))}
        </ul>

        {/* 중앙 react 카드 + 점선 connector */}
        <div className="flex flex-col items-center order-1 @xl:order-2 relative">
          {/* desktop dashed connectors */}
          <span
            aria-hidden="true"
            className="hidden @xl:block pointer-events-none absolute left-[-120%] top-1/2 -translate-y-1/2 w-[120%] h-[90%]"
          >
            <ConnectorLines direction="left" count={leftTokens.length} />
          </span>
          <span
            aria-hidden="true"
            className="hidden @xl:block pointer-events-none absolute right-[-120%] top-1/2 -translate-y-1/2 w-[120%] h-[90%]"
          >
            <ConnectorLines direction="right" count={rightTokens.length} />
          </span>

          <CenterReactCard center={hero.centerCard} />
        </div>

        {/* 우측 토큰 */}
        <ul className="grid grid-cols-2 gap-2 sm:gap-3 order-3">
          {rightTokens.map((token) => (
            <li key={token.id} className="flex min-w-0">
              <TokenCard token={token} side="right" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type CenterReactCardProps = { center: ReactPackageContent['hero']['centerCard'] };

const CenterReactCard = ({ center }: CenterReactCardProps) => (
  <div
    className={cn(
      'relative flex flex-col items-center justify-center gap-1 rounded-2xl border',
      'border-sky-300/80 bg-sky-50/80 text-sky-900',
      'dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-100',
      'shadow-[0_3px_0_var(--term-border)] px-md py-md sm:px-lg sm:py-lg',
      'min-w-[10rem]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'absolute inset-0 -z-0 opacity-70 rounded-2xl',
        'bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.22),transparent_60%)]',
      )}
    />
    <ReactAtomIcon className="relative h-10 w-10 text-sky-600 dark:text-sky-300" />
    <span className="relative text-lg font-bold font-mono tracking-tight text-sky-700 dark:text-sky-200">
      {center.title}
    </span>
    <span className="relative text-[10px] uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80">
      {center.caption}
    </span>
  </div>
);

type TokenCardProps = { token: ApiToken; side: 'left' | 'right' };

const TokenCard = ({ token }: TokenCardProps) => {
  const tone = toneTokens[token.tone];
  const Icon = reactPackageIcon[token.iconName];

  return (
    <article
      className={cn(
        'group flex w-full flex-col gap-1 rounded-lg border p-2.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <span className="inline-flex items-center gap-1.5 min-w-0">
        <ToneIconBox tone={token.tone} size="sm">
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cn(
            'text-[11px] font-bold font-mono tracking-tight truncate min-w-0',
            tone.text,
          )}
        >
          {token.label}
        </span>
      </span>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
        {token.caption}
      </span>
    </article>
  );
};

type ConnectorLinesProps = { direction: 'left' | 'right'; count: number };

const ConnectorLines = ({ direction, count }: ConnectorLinesProps) => {
  const start = direction === 'left' ? 0 : 100;
  const end = direction === 'left' ? 100 : 0;

  return (
    <svg
      className="h-full w-full text-sky-300/70 dark:text-sky-700/70"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {Array.from({ length: count }).map((_, i) => {
        const y = ((i + 0.5) / count) * 100;
        return (
          <path
            key={i}
            d={`M ${start} ${y} Q 50 50 ${end} 50`}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 4"
            fill="none"
          />
        );
      })}
    </svg>
  );
};

const ReactAtomIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
);
