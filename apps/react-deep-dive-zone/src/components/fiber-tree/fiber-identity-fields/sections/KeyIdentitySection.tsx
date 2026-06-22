import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberIdentityFieldsContent } from '../content';
import { KeyIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['keyField'] };

export const KeyIdentitySection = ({ content }: Props) => (
  <section id="key" aria-labelledby="heading-key" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="key"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<KeyIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] gap-md lg:gap-lg items-start">
      <div className="min-w-0">
        <CodePreviewPanel
          code={content.code}
          caption="todo-list.jsx"
          language={content.codeLabel}
          size="md"
        />
      </div>

      <article
        className={cn(
          'rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
          'border-emerald-200/80 dark:border-emerald-800/60',
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
          'hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
        )}
      >
        <header className="flex items-center gap-sm mb-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-12 h-12 rounded-xl',
              'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
            )}
          >
            <KeyIcon className="h-6 w-6" />
          </span>
          <h3 className="text-sm sm:text-md font-bold tracking-tight text-emerald-900 dark:text-emerald-100 break-keep leading-snug">
            {content.cardTitle}
          </h3>
        </header>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {renderWithHighlights(content.cardBody, content.highlights)}
        </p>
      </article>
    </div>
  </section>
);

const renderWithHighlights = (text: string, highlights: string[]): React.ReactNode => {
  if (highlights.length === 0) return text;
  const pattern = new RegExp(`(${highlights.map(escape).join('|')})`, 'g');
  return text.split(pattern).map((part, i) => {
    if (highlights.includes(part)) {
      return (
        <span key={i} className="font-bold text-emerald-700 dark:text-emerald-300">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
