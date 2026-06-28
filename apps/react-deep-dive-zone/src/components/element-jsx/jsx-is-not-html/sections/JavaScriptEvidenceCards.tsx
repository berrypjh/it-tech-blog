import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { EvidenceCard, JsxIsNotHtmlContent } from '../content';
import { Code2Icon } from '../icons';

type Props = { content: JsxIsNotHtmlContent['evidence'] };

export const JavaScriptEvidenceCards = ({ content }: Props) => (
  <section
    id="evidence"
    aria-labelledby="heading-evidence"
    className="@container space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="evidence"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Code2Icon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 @2xl:grid-cols-2 @4xl:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <EvidenceCardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const EvidenceCardView = ({ card }: { card: EvidenceCard }) => {
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <h3 className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {card.title}
        </h3>
        <span
          className={cn(
            'shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            toneTokens[card.tone].chip,
          )}
        >
          JS
        </span>
      </header>

      <CodePreviewPanel code={card.code} language="JS" />

      <div
        className={cn(
          'flex items-start gap-sm rounded-lg px-md py-2.5 mt-auto',
          'bg-[var(--term-surface)] border border-[var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0',
            toneTokens[card.tone].dot,
          )}
        />
        <p className="text-xsm leading-relaxed break-keep">{card.description}</p>
      </div>
    </article>
  );
};
