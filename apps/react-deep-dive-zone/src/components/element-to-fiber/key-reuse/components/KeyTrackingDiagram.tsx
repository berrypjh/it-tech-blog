import { cn } from '@it-tech-blog/utils';

import type { ListItem } from '../content';
import { ArrowDownIcon, ArrowRightIcon, CheckCircleIcon, FingerprintIcon } from '../icons';

import { ListItemKeyCard } from './ListItemKeyCard';

type Props = {
  beforeLabel: string;
  afterLabel: string;
  beforeItems: ListItem[];
  afterItems: ListItem[];
  centerLabel: string;
  resultTitle: string;
  resultItems: string[];
};

/**
 * Hero 우측: 재정렬 전 목록 / 추적 라벨 / 재정렬 후 목록 / 결과 카드.
 * - lg+: 3열 (Before / Tracking / After) + 결과 카드 별도 행
 * - mobile: 세로 스택
 */
export const KeyTrackingDiagram = ({
  beforeLabel,
  afterLabel,
  beforeItems,
  afterItems,
  centerLabel,
  resultTitle,
  resultItems,
}: Props) => (
  <div className="flex flex-col gap-md min-w-0">
    {/* Desktop and mobile share this top portion */}
    <div
      className={cn(
        'grid items-stretch min-w-0',
        'grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)]',
        'gap-sm lg:gap-md',
      )}
    >
      <ListColumn label={beforeLabel} items={beforeItems} />
      <TrackingCenter label={centerLabel} />
      <ListColumn label={afterLabel} items={afterItems} />
    </div>

    <ResultCard title={resultTitle} items={resultItems} />

    <p className="sr-only">
      재정렬 전 목록은 A(key=1), B(key=2), C(key=3) 순서이고, 재정렬 후 목록은 B(key=2), C(key=3),
      A(key=1) 순서입니다. 같은 key를 가진 항목은 서로 다른 위치라도 React가 같은 항목으로
      추적합니다.
    </p>
  </div>
);

const ListColumn = ({ label, items }: { label: string; items: ListItem[] }) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-md min-w-0',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
      {label}
    </span>
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.id}>
          <ListItemKeyCard label={item.label} keyValue={item.keyValue} tone={item.tone} />
        </li>
      ))}
    </ul>
  </article>
);

const TrackingCenter = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 py-1">
    {/* desktop: right arrow / mobile: down arrow */}
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        'w-11 h-11 bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
        'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
      )}
    >
      <span className="contents">
        <ArrowDownIcon className="h-5 w-5 lg:hidden" />
        <ArrowRightIcon className="h-5 w-5 hidden lg:block" />
      </span>
    </span>
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
        'text-[10px] font-bold uppercase tracking-wider font-mono',
        'border-sky-300/80 bg-sky-50 text-sky-700',
        'dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
      )}
    >
      <FingerprintIcon className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </span>
  </div>
);

const ResultCard = ({ title, items }: { title: string; items: string[] }) => (
  <article
    className={cn(
      'flex items-start gap-sm rounded-2xl border-2 p-md sm:p-lg',
      'border-sky-300/70 bg-sky-50/70',
      'dark:border-sky-700/70 dark:bg-sky-950/30',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
        'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
        'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
      )}
    >
      <CheckCircleIcon className="h-6 w-6" />
    </span>
    <div className="flex flex-col gap-sm min-w-0">
      <p className="text-sm sm:text-md font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {title}
      </p>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5',
              'text-[11px] font-mono font-bold',
              'border-sky-200/80 bg-white text-sky-700',
              'dark:border-sky-700/60 dark:bg-[var(--term-bg)] dark:text-sky-200',
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </article>
);
