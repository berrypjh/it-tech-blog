type Props = { className?: string };

/** React 로고 3궤도 글리프. lucide Atom과 모양이 달라 로컬 SVG로 둔다. */
export const ReactAtomIcon = ({ className }: Props) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
);
