import { cn } from '@it-tech-blog/utils';

type Props = {
  /** 화면에는 숨기고 스크린리더에 읽힐 다이어그램 설명 */
  a11yLabel: string;
  className?: string;
  children: React.ReactNode;
  /** 상단 radial glow (CSS background-image). 존별 색 정체성을 위해 덮어쓸 수 있다. 기본은 teal. */
  gradient?: string;
  /** 래퍼 패딩 유틸 클래스. 기본 'p-md sm:p-lg'. */
  padding?: string;
};

const DEFAULT_GRADIENT =
  'radial-gradient(circle at 50% 0%, rgba(45,212,191,0.12), transparent 55%)';

/**
 * Hero 비주얼 공통 셸.
 * @container 컨테이너, 둥근 테두리 카드, 상단 radial 그라데이션, sr-only 설명을 제공한다.
 */
export const HeroDiagramShell = ({
  a11yLabel,
  className,
  children,
  gradient = DEFAULT_GRADIENT,
  padding = 'p-md sm:p-lg',
}: Props) => (
  <div
    className={cn(
      '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      padding,
      className,
    )}
  >
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{ backgroundImage: gradient }}
    />
    <p className="sr-only">{a11yLabel}</p>
    {children}
  </div>
);
