import { cn } from '@it-tech-blog/utils';

import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/**
 * 외부/새창 링크. "이 링크는 사이트를 떠난다"를 일관되게 알린다.
 * - 항상 ↗ 아이콘 + sr-only "(새 창에서 열림)"
 * - hover 시 옅은 배경(=떠나는 링크는 배경을 채워 구분)
 * - target/rel 고정
 *
 * 버튼형 외부 링크는 GithubButton을 쓴다. 내부 페이지 이동은 next/link + 살짝
 * 뜸/톤 테두리(ToneCard 등), 비대화형 컨텐츠는 hover 효과를 주지 않는다.
 */
export const ExternalLink = ({ href, children, className }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      'group -mx-1 inline-flex items-center gap-1.5 rounded-md px-1 py-0.5 underline-offset-2 transition-colors',
      'hover:bg-[var(--term-accent-soft)] hover:text-[var(--term-accent)] hover:underline hover:decoration-2',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
      className,
    )}
  >
    {children}
    <span className="sr-only">(새 창에서 열림)</span>
    <ExternalLinkIcon
      className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      aria-hidden="true"
    />
  </a>
);
