export const PageSection = ({
  id,
  renderHeader,
  children,
  className,
}: {
  id: string;
  renderHeader: (headingId: string) => React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  const headingId = `heading-${id}`;

  return (
    <section aria-labelledby={headingId} className={className}>
      {renderHeader(headingId)}
      {children}
    </section>
  );
};
