import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroSideBadge, React19ChangeMapContent } from '../content';
import { CompassIcon } from '../icons';
import { iconRegistry } from '../sections/_iconRegistry';

type Props = { content: React19ChangeMapContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * "오늘 풀 질문" 카드 → 변화를 읽는 3개 진입점(지도·버전·구조) →
 * 읽기 가이드 노트로 이어지는, React 19 변화 지도의 컴팩트 개요.
 */
export const ChangeMapHeroDiagram = ({ content, className }: Props) => {
  const { questionCard, guideCard } = content;
  const a11y = `${questionCard.eyebrow}: ${questionCard.questionLines.join(' ')} ${questionCard.badges
    .map((b) => b.label)
    .join(', ')}. ${guideCard.eyebrow} — ${guideCard.bodyLines.join(' ')} (${guideCard.source})`;

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
          <ToneIconBox tone="blue" size="sm">
            <span className="font-mono text-xsm font-bold tabular-nums">{questionCard.number}</span>
          </ToneIconBox>
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-300">
            {questionCard.eyebrow}
          </span>
        </header>

        <h2 className="text-md font-bold leading-snug tracking-tight text-[var(--term-fg)] break-keep">
          {questionCard.questionLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <DownArrow />

        <ol className="grid grid-cols-3 gap-sm">
          {questionCard.badges.map((badge, i) => (
            <li key={badge.label}>
              <BadgeCard badge={badge} tone={badgeTones[i % badgeTones.length]} />
            </li>
          ))}
        </ol>

        <DownArrow />

        <GuideNote
          eyebrow={guideCard.eyebrow}
          body={guideCard.bodyLines.join(' ')}
          source={guideCard.source}
        />
      </div>
    </div>
  );
};

const badgeTones: ToneKey[] = ['cyan', 'violet', 'teal'];

const BadgeCard = ({ badge, tone }: { badge: HeroSideBadge; tone: ToneKey }) => {
  const t = toneTokens[tone];
  const Icon = iconRegistry[badge.iconKey];
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center gap-2 rounded-xl border bg-[var(--term-bg)] p-md text-center',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <span className={cn('text-[10px] font-mono font-bold tracking-tight break-keep', t.text)}>
        {badge.label}
      </span>
    </article>
  );
};

const GuideNote = ({
  eyebrow,
  body,
  source,
}: {
  eyebrow: string;
  body: string;
  source: string;
}) => (
  <div
    className={cn(
      'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="emerald" size="sm">
      <CompassIcon className="h-[18px] w-[18px]" />
    </ToneIconBox>
    <div className="flex min-w-0 flex-col gap-1">
      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
        {eyebrow}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
      <span
        className={cn(
          'mt-1 inline-flex items-center gap-1.5 self-start rounded-full border px-2 py-0.5',
          'border-[var(--term-border)] text-[10px] font-mono font-bold tracking-wider text-[var(--term-muted)]',
        )}
      >
        <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {source}
      </span>
    </div>
  </div>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
