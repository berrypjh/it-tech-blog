/** 1:1 비교 패널 사이의 'Vs' 디바이더. dashed 가이드 라인 + 원형 배지. */
export const CompareVs = () => (
  <div className="relative flex lg:flex-col items-center justify-center py-md">
    <span
      aria-hidden="true"
      className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
    />
    <span
      aria-hidden="true"
      className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
    />
    <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--term-border)] bg-[var(--term-bg)] text-xxsm font-bold tracking-wider text-[var(--term-muted)] shadow-[0_2px_0_var(--term-border)]">
      Vs
    </span>
  </div>
);
