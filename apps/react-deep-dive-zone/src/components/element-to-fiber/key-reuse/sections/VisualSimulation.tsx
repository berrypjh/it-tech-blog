'use client';

import { type ComponentType, useState } from 'react';

import { cx } from '@berrypjh/react-ui';
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  Fingerprint,
  KeyRound,
  ListOrdered,
  Shuffle,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { KeyFiberReuseContent } from '../content';

type Props = { content: KeyFiberReuseContent['simulation'] };
type Item = { id: string; label: string };
type IconType = ComponentType<{ className?: string }>;

export const VisualSimulation = ({ content }: Props) => {
  const [items, setItems] = useState<Item[]>(content.items);
  const selectedId = content.items[0].id;

  // 첫 항목을 맨 뒤로 보내는 회전 — 결정적이라 SSR과도 안전하다.
  const shuffle = () => setItems((prev) => [...prev.slice(1), prev[0]]);

  return (
    <section
      id="simulation"
      aria-labelledby="heading-simulation"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="simulation"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Shuffle className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md items-stretch">
        <Column
          tone="emerald"
          title={content.keyTitle}
          code="key={item.id}"
          Icon={KeyRound}
          items={items}
          selectedId={selectedId}
          useIndexKey={false}
          result={content.keyResult}
          ResultIcon={CheckCircle2}
          selectedLabel={content.selectedLabel}
        />
        <Column
          tone="violet"
          title={content.indexTitle}
          code="key={index}"
          Icon={ListOrdered}
          items={items}
          selectedId={selectedId}
          useIndexKey
          result={content.indexResult}
          ResultIcon={AlertTriangle}
          selectedLabel={content.selectedLabel}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <button
          type="button"
          onClick={shuffle}
          className={cx(
            'inline-flex w-fit items-center gap-2 rounded-lg border-2 px-md py-2.5',
            'font-mono text-xsm font-bold',
            'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
            'transition-colors hover:bg-[var(--term-surface)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          )}
        >
          <Shuffle className="h-4 w-4" aria-hidden="true" />
          {content.shuffleCta}
        </button>
        <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {content.guide}
        </p>
      </div>

      <SectionNote icon={<Fingerprint className="h-4 w-4" aria-hidden="true" />}>
        {content.emphasis}
      </SectionNote>
    </section>
  );
};

type ColumnProps = {
  tone: ToneKey;
  title: string;
  code: string;
  Icon: IconType;
  items: Item[];
  selectedId: string;
  useIndexKey: boolean;
  result: string;
  ResultIcon: IconType;
  selectedLabel: string;
};

const Column = ({
  tone,
  title,
  code,
  Icon,
  items,
  selectedId,
  useIndexKey,
  result,
  ResultIcon,
  selectedLabel,
}: ColumnProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.fill.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <div className="flex flex-col">
          <span className={cx('text-sm font-bold tracking-tight', t.text)}>{title}</span>
          <code className="font-mono text-[11px] text-[var(--term-muted)]">{code}</code>
        </div>
      </header>

      <ul className="flex flex-col gap-1.5">
        {items.map((item, i) => (
          <Row
            key={useIndexKey ? i : item.id}
            tone={tone}
            label={item.label}
            defaultChecked={item.id === selectedId}
            selectedLabel={selectedLabel}
          />
        ))}
      </ul>

      <p
        className={cx(
          'mt-auto flex items-start gap-2 rounded-lg border px-sm py-2',
          'text-xsm font-bold leading-snug break-keep',
          t.chip,
        )}
      >
        <ResultIcon className="h-4 w-4 shrink-0 mt-0.5" />
        {result}
      </p>
    </article>
  );
};

type RowProps = { tone: ToneKey; label: string; defaultChecked: boolean; selectedLabel: string };

const Row = ({ tone, label, defaultChecked, selectedLabel }: RowProps) => {
  const t = toneTokens[tone];
  const [checked] = useState(defaultChecked);

  return (
    <li
      className={cx(
        'flex items-center gap-sm rounded-lg border px-sm py-2 transition-colors',
        checked ? t.chip : 'border-[var(--term-border)] bg-[var(--term-bg)]',
      )}
    >
      {checked ? (
        <Check className={cx('h-4 w-4 shrink-0', t.text)} aria-hidden="true" />
      ) : (
        <span
          aria-hidden="true"
          className="h-4 w-4 shrink-0 rounded-full border border-[var(--term-border)]"
        />
      )}
      <code
        className={cx(
          'font-mono text-sm font-extrabold',
          checked ? t.text : 'text-[var(--term-fg)]',
        )}
      >
        {label}
      </code>
      {checked && (
        <span className="ml-auto text-[10px] uppercase tracking-wider font-mono font-bold opacity-80">
          {selectedLabel}
        </span>
      )}
    </li>
  );
};
