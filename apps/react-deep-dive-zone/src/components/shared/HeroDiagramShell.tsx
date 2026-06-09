import { cn } from '@it-tech-blog/utils';

type Props = {
  /** 화면에는 숨기고 스크린리더에 읽힐 다이어그램 설명 */
  a11yLabel: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Hero 비주얼 공통 셸.
 * @container 컨테이너, 둥근 테두리 카드, 상단 radial 그라데이션, sr-only 설명을 제공한다.
 */
export const HeroDiagramShell = ({ a11yLabel, className, children }: Props) => (
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
    <p className="sr-only">{a11yLabel}</p>
    {children}
  </div>
);
