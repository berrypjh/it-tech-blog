import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberIdentityFieldsContent } from '../content';
import { KeyIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['keyField'] };

export const KeyIdentitySection = ({ content }: Props) => (
  <section id="key" aria-labelledby="heading-key" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="key"
      number={content.badge}
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
          'rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_var(--term-border)]',
          toneTokens.emerald.border,
          toneTokens.emerald.borderHover,
        )}
      >
        <header className="flex items-center gap-sm mb-sm">
          <ToneIconBox tone="emerald">
            <KeyIcon className="h-5 w-5" />
          </ToneIconBox>
          <h3
            className={cn(
              'text-sm sm:text-md font-bold tracking-tight break-keep leading-snug',
              toneTokens.emerald.text,
            )}
          >
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
        <span key={i} className={cn('font-bold', toneTokens.emerald.text)}>
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
