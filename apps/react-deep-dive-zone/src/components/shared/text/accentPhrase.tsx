/** text 안의 phrase를 강조색(--term-accent)으로 감싼다. 히어로 제목 한 줄 강조용. */
export const accentPhrase = (text: string, phrase: string): React.ReactNode =>
  text.split(phrase).map((part, i, parts) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <span className="text-[var(--term-accent)]">{phrase}</span>}
    </span>
  ));
