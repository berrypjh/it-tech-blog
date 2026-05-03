export const PageContainer = ({ children, wide = false }: { children: React.ReactNode; wide?: boolean }) => {
  return (
    <div className={`mx-auto w-full px-4 py-6 sm:px-6 lg:px-8 lg:py-8 ${wide ? 'max-w-3xl' : 'max-w-2xl'}`}>
      {children}
    </div>
  );
};
