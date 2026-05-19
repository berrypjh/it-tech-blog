export const PageContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={[
        'mx-auto w-full max-w-[1200px] px-lg py-xl sm:px-xl lg:px-2xl lg:py-2xl',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
};
