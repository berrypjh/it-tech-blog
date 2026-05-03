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
      <h2 id={`heading-${id}`} className="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border">
        {title}
      </h2>

      {children}
    </section>
  );
};
