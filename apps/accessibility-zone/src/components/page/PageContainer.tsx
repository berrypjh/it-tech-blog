export const PageContainer = ({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) => {
  return (
    <div className={`mx-auto w-full px-mdl py-xlg sm:px-xlg lg:px-xxl lg:py-xxl ${wide ? 'max-w-3xl' : 'max-w-2xl'}`}>
      {children}
    </div>
  );
};
