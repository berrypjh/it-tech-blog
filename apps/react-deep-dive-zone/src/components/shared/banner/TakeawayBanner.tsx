import { cn } from '@it-tech-blog/utils';

type Props = { lines: string[]; className?: string };

/**
 * 핵심 정리 배너. 좌측 accent 라인 + 은은한 글로우 + 여러 줄 강조 문장.
 * 섹션 헤더(eyebrow/title/icon)는 호출부의 SectionHeader가 담당한다.
 */
export const TakeawayBanner = ({ lines, className }: Props) => (
  <div
    className={cn(
      'relative overflow-hidden rounded-xl border border-[var(--term-border)] border-l-[3px] border-l-[var(--term-accent)] bg-[var(--term-surface)] p-lg sm:p-xl shadow-[0_2px_0_var(--term-border)]',
      className,
    )}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[var(--term-accent)] opacity-[0.07] blur-2xl"
    />

    <p className="relative text-sm sm:text-md font-semibold leading-relaxed text-[var(--term-fg)] break-keep">
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </p>
  </div>
);
