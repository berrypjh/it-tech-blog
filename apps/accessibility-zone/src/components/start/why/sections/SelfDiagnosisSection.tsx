'use client';

import { useMemo, useState } from 'react';

import { AccessibilityScoreDonut } from '../components/AccessibilityScoreDonut';
import { DiagnosisChecklist, effectiveStatus } from '../components/DiagnosisChecklist';
import type { ChecklistStatus, ImportanceContent } from '../content';

const STATUS_WEIGHT: Record<ChecklistStatus, number> = {
  done: 100,
  progress: 50,
  review: 20,
  todo: 0,
};

export const SelfDiagnosisSection = ({ content }: { content: ImportanceContent['diagnosis'] }) => {
  const [checked, setChecked] = useState<Set<string>>(
    () => new Set(content.items.filter((i) => i.initialChecked).map((i) => i.id)),
  );

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const { score, counts } = useMemo(() => {
    const c: Record<ChecklistStatus, number> = { done: 0, review: 0, progress: 0, todo: 0 };
    let total = 0;
    for (const item of content.items) {
      const status = effectiveStatus(item, checked.has(item.id));
      c[status] += 1;
      total += STATUS_WEIGHT[status];
    }
    const computed = Math.round(total / content.items.length);
    return { score: computed, counts: c };
  }, [checked, content.items]);

  return (
    <section
      aria-labelledby="diagnosis-heading"
      className="rounded-xl border border-stroke-default bg-background-surface p-lg shadow-sm sm:p-xl"
    >
      <h2 id="diagnosis-heading" className="sr-only">
        {content.title}
      </h2>
      <div className="mb-mdl">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            04
          </span>
          자가 진단
        </span>
      </div>

      <div className="grid grid-cols-1 gap-lg lg:grid-cols-[0.6fr_0.4fr] lg:gap-xl">
        <DiagnosisChecklist
          title={content.title}
          description={content.description}
          items={content.items}
          checkedIds={checked}
          onToggle={toggle}
          statusBadges={content.statusBadges}
        />
        <div className="lg:border-l lg:border-stroke-default/60 lg:pl-xl">
          <AccessibilityScoreDonut score={score} counts={counts} diagnosis={content} />
        </div>
      </div>
    </section>
  );
};
