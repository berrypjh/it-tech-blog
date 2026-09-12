import { cn } from '@it-tech-blog/utils';

import { ArrowDown, ArrowRight, CheckCircle2, Key, KeyRound, Lightbulb } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberIdentityFieldsContent, SiblingItem } from '../content';

type Props = { content: FiberIdentityFieldsContent['keyField'] };

export const KeyIdentitySection = ({ content }: Props) => (
  <section id="key" aria-labelledby="heading-key" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="key"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Key className="h-5 w-5" aria-hidden="true" />}
    />

    <CodePreviewPanel
      code={content.code}
      caption="todo-list.jsx"
      language={content.codeLabel}
      size="md"
    />

    <SiblingReorderDiagram content={content} />

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {renderWithHighlights(content.note, content.highlights)}
    </SectionNote>
  </section>
);

/** 형제 순서가 바뀌어도 같은 key끼리 같은 Fiber로 매칭되는 모습을 보여주는 before/after 도식. */
const SiblingReorderDiagram = ({ content }: Props) => {
  const describe = (items: SiblingItem[]) =>
    items.map((item) => `${item.label}(key=${item.keyValue})`).join(', ');
  const a11y = `${content.beforeLabel}: ${describe(content.before)} — ${content.moveLabel} — ${content.afterLabel}: ${describe(content.after)}. ${content.matchNote}`;

  return (
    <div className="rounded-2xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <p className="sr-only">{a11y}</p>

      <div aria-hidden="true" className="flex flex-col gap-md">
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-center gap-sm">
          <ListBlock label={content.beforeLabel} items={content.before} />
          <MoveStep label={content.moveLabel} />
          <ListBlock label={content.afterLabel} items={content.after} />
        </div>

        <p className="flex items-center justify-center gap-2 text-xsm sm:text-sm font-medium text-[var(--term-fg)] break-keep text-center">
          <CheckCircle2 className={cn('h-4 w-4 shrink-0', toneTokens.emerald.text)} />
          {content.matchNote}
        </p>
      </div>
    </div>
  );
};

const ListBlock = ({ label, items }: { label: string; items: SiblingItem[] }) => (
  <article className="flex flex-col gap-2 rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] p-md">
    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
      {label}
    </span>
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item.keyValue}>
          <SiblingRow item={item} />
        </li>
      ))}
    </ul>
  </article>
);

const SiblingRow = ({ item }: { item: SiblingItem }) => {
  const t = toneTokens[item.tone];
  return (
    <div className="flex items-center justify-between gap-sm min-w-0">
      <span className="flex items-center gap-2 min-w-0">
        <ToneIconBox tone={item.tone} size="sm">
          <span className="font-mono text-sm font-extrabold uppercase">{item.keyValue}</span>
        </ToneIconBox>
        <span className="truncate text-sm font-bold text-[var(--term-fg)]">{item.label}</span>
      </span>
      <span
        className={cn(
          'inline-flex shrink-0 items-center gap-1 rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
          t.chip,
        )}
      >
        <KeyRound className="h-3 w-3" />
        key=&quot;{item.keyValue}&quot;
      </span>
    </div>
  );
};

const MoveStep = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center gap-1 text-[var(--term-accent)]">
    <ArrowDown className="h-5 w-5 sm:hidden" />
    <ArrowRight className="hidden h-5 w-5 sm:block" />
    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
      {label}
    </span>
  </div>
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
