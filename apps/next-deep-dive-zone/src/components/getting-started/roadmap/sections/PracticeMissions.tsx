'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { Mission, RoadmapContent } from '../content';
import { CheckIcon, MissionIcon } from '../icons';

type Props = { content: RoadmapContent['missions'] };

const Card = ({
  mission,
  labels,
  done,
  onToggle,
}: {
  mission: Mission;
  labels: RoadmapContent['missions']['labels'];
  done: boolean;
  onToggle: () => void;
}) => {
  const t = toneTokens[mission.tone];
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={done}
      onClick={onToggle}
      className={cn(
        'group flex h-full w-full flex-col gap-sm rounded-lg border p-md sm:p-lg text-left transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        done
          ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)]'
          : cn(
              'border-[var(--term-border)] bg-[var(--term-bg)] motion-safe:hover:-translate-y-0.5',
              t.borderHover,
            ),
      )}
    >
      <div className="flex items-start gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border',
            done
              ? 'border-[var(--term-accent)] bg-[var(--term-accent)] text-[var(--term-bg)]'
              : cn('bg-[var(--term-bg)]', t.chip),
          )}
        >
          {done && <CheckIcon className="h-3.5 w-3.5" />}
        </span>
        <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {mission.title}
        </h3>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {labels.action}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep [overflow-wrap:anywhere]">
          {mission.action}
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {labels.files}
        </span>
        <ul className="flex flex-wrap gap-1.5">
          {mission.files.map((f) => (
            <li key={f}>
              <code
                className={cn(
                  'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
                  t.chip,
                )}
              >
                {f}
              </code>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-col gap-0.5 pt-sm border-t border-dashed border-[var(--term-border)]">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {labels.outcome}
        </span>
        <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {mission.outcome}
        </p>
      </div>
    </button>
  );
};

export const PracticeMissions = ({ content }: Props) => {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setDone((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="section-missions" aria-labelledby="heading-missions" className="space-y-lg">
      <SectionHeader
        id="missions"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MissionIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.items.map((m) => (
          <li key={m.id} className="flex">
            <Card
              mission={m}
              labels={content.labels}
              done={!!done[m.id]}
              onToggle={() => toggle(m.id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
