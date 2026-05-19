export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-lg py-xl sm:px-xl lg:px-2xl lg:py-2xl text-[var(--term-fg)]`}
    >
      {children}
    </div>
  );
};
