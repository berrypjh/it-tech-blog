import type { React19ChangeMapContent } from '../content';

type Props = { content: React19ChangeMapContent['versionNote'] };

export const PageVersionNote = ({ content }: Props) => (
  <footer
    role="contentinfo"
    aria-label="page version note"
    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 px-1 pt-0 text-[10px] font-mono text-[var(--term-dim)]"
  >
    <span className="break-keep">{content.left}</span>
    <span className="break-keep">{content.right}</span>
  </footer>
);
