export const PageContainer = ({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) => {
  return (
    <div
      className={`mx-auto w-full px-lg py-xl sm:px-xl lg:px-2xl lg:py-2xl ${wide ? 'max-w-3xl' : 'max-w-2xl'}`}
    >
      {children}
    </div>
  );
};
