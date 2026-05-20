/** 백틱 `code` 부분을 mono + accent 처리한 노드로 변환 */
export const formatInline = (text: string): React.ReactNode => {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="px-1 py-0.5 rounded border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] text-[0.9em] font-mono"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
};
