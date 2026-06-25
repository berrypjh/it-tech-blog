import { ArrowRight } from 'lucide-react';

/** 가로 비교 그리드 가운데의 화살표 디바이더. 모바일=세로(↓), lg=가로(→) + 점선 경계. */
export const ArrowDivider = () => (
  <div className="flex items-center justify-center px-md py-sm lg:py-md border-y border-dashed border-[var(--term-border)] lg:border-y-0 lg:border-x">
    <ArrowRight
      aria-hidden="true"
      className="h-4 w-4 rotate-90 text-[var(--term-border)] lg:rotate-0"
    />
  </div>
);
