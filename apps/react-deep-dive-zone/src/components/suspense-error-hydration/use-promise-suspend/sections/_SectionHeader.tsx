import { cn } from '@it-tech-blog/utils';

import { sectionNumberBadge } from '../tone';

type Props = {
  number: string;
  title: string;
  subtitle?: string;
  id?: string;
};

export const SectionHeader = ({ number, title, subtitle, id }: Props) => (
  <header className="flex items-start gap-3">
    <span aria-hidden="true" className={sectionNumberBadge}>
      {number}
    </span>
    <div className="flex flex-col">
      <h2
        id={id}
        className={cn(
          'text-xl sm:text-xxl font-bold text-[var(--term-fg)] break-keep leading-tight',
        )}
      >
        {title}
      </h2>
      {subtitle && <p className="text-xsm text-[var(--term-muted)] break-keep mt-1">{subtitle}</p>}
    </div>
  </header>
);
