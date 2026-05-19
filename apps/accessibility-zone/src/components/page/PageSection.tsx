export const PageSection = ({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section aria-labelledby={`heading-${id}`} className={className}>
      <h2
        id={`heading-${id}`}
        className="text-sm font-semiBold text-text-default mb-md pb-sm border-b border-stroke-default"
      >
        {title}
      </h2>

      {children}
    </section>
  );
};
