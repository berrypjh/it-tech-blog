import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CreateFiberFromTypeAndPropsContent, JsxToFiberCard } from '../content';
import { ArrowDownIcon, BracesIcon, TagIcon } from '../icons';

type Props = { content: CreateFiberFromTypeAndPropsContent['jsxCards'] };

const toneByKey: Record<JsxToFiberCard['id'], ToneKey> = {
  div: 'emerald',
  function: 'sky',
  class: 'cyan',
  fragment: 'violet',
};

const labelByKey: Record<JsxToFiberCard['id'], string> = {
  div: 'string',
  function: 'function',
  class: 'class',
  fragment: 'symbol',
};

export const JsxToFiberTagCards = ({ content }: Props) => (
  <section id="jsx-cards" aria-labelledby="heading-jsx-cards" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="jsx-cards"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BracesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: JsxToFiberCard }) => {
  const t = toneTokens[toneByKey[card.id]];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border-2 p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.fill.border,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-bold',
            t.text,
          )}
        >
          <span aria-hidden="true" className={cn('inline-block w-1.5 h-1.5 rounded-full', t.dot)} />
          {labelByKey[card.id]}
        </span>
      </header>

      <CodePreviewPanel code={card.code} language="JSX" showWindowDots={false} />

      <code className="font-mono text-[11px] leading-relaxed text-[var(--term-muted)] break-all">
        {card.typeLabel}
      </code>

      <div className="flex justify-center py-1" aria-hidden="true">
        <span
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-full border',
            t.chip,
          )}
        >
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
      </div>

      <div
        className={cn(
          'inline-flex items-center justify-center gap-1.5 rounded-md border px-2 py-1.5',
          'font-mono text-xsm font-bold',
          t.chip,
        )}
      >
        <TagIcon className="h-3.5 w-3.5" aria-hidden="true" />
        {card.result}
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
