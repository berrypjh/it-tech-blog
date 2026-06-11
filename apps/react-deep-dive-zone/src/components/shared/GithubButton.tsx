import { cn } from '@it-tech-blog/utils';

import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { GithubIcon } from './GithubIcon';

type Props = { href: string; label: ReactNode; className?: string };

/** 소스 보기용 GitHub CTA 버튼. 라이트=slate-900, 다크=slate-800. */
export const GithubButton = ({ href, label, className }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      'group inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold',
      'border border-transparent bg-slate-900 text-slate-50 transition-colors hover:bg-slate-800',
      'dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
      className,
    )}
  >
    <GithubIcon className="h-3.5 w-3.5" />
    {label}
    <ArrowRight
      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
      aria-hidden="true"
    />
  </a>
);
