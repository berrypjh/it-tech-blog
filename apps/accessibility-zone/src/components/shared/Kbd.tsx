/** 키보드 키 하나를 표시한다. */
export const Kbd = ({ children }: { children: React.ReactNode }) => (
  <kbd className="rounded-xs border border-stroke-light px-xs">{children}</kbd>
);
