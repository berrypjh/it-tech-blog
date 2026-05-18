export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-mdl py-xlg sm:px-xlg lg:px-xxl lg:py-xxl text-[var(--term-fg)]`}
    >
      {children}
    </div>
  );
};
