'use client';

import { useEffect, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { KeyFiberReuseContent } from '../content';
import {
  AlertTriangleIcon,
  BoxIcon,
  InfoIcon,
  RefreshIcon,
  RepeatIcon,
  ShuffleIcon,
  TagIcon,
} from '../icons';

type Props = { content: KeyFiberReuseContent['stateExample'] };

const STEP_COUNT = 3;

export const StateResetExample = ({ content }: Props) => {
  // 0: 선택 전 · 1: 옵션 고름 · 2: 상품 전환 → 초기화
  const [step, setStep] = useState(0);

  const itemIndex = step === 2 ? 1 : 0;
  const item = content.items[itemIndex];
  const tone: ToneKey = itemIndex === 0 ? 'emerald' : 'violet';
  const filled = step === 1;

  const action =
    step === 0
      ? { label: content.setCta, Icon: TagIcon, onClick: () => setStep(1) }
      : step === 1
        ? {
            label: `${content.switchCta} → ${content.items[1].name}`,
            Icon: ShuffleIcon,
            onClick: () => setStep(2),
          }
        : { label: content.restartCta, Icon: RefreshIcon, onClick: () => setStep(0) };

  return (
    <section
      id="state-example"
      aria-labelledby="heading-state-example"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        id="state-example"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<RepeatIcon className="h-5 w-5" />}
      />

      {/* 1) 예제 코드 — product.id를 key로 사용한다 */}
      <CodePreviewPanel
        code={content.code}
        caption="product-page.jsx"
        language="JSX"
        showWindowDots
      />

      {/* 2) 버튼으로 시나리오를 진행: 옵션 고르기 → 상품 전환(key 변경) → 초기화 */}
      <div
        className={cn(
          'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex items-center justify-between gap-sm flex-wrap">
          <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
            live demo
          </span>
          <StepDots step={step} />
        </div>

        {/* key가 바뀌면 이 컴포넌트는 통째로 새로 마운트되어 내부 useState가 초기화된다 */}
        <ItemCard
          key={item.id}
          tone={tone}
          itemName={item.name}
          itemId={item.id}
          filled={filled}
          sampleValue={content.sampleValue}
          stateLabel={content.stateLabel}
          emptyText={content.emptyText}
        />

        {step === 2 && (
          <p
            role="status"
            className={cn(
              'flex items-start gap-2 rounded-lg border px-sm py-2 text-xsm font-bold leading-snug break-keep',
              toneTokens.amber.chip,
            )}
          >
            <AlertTriangleIcon className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
            {content.resetNotice}
          </p>
        )}

        <div className="flex flex-col gap-1.5">
          <button
            type="button"
            onClick={action.onClick}
            className={cn(
              'inline-flex w-fit items-center gap-2 rounded-lg border-2 px-md py-2.5',
              'font-mono text-xsm font-bold',
              'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
              'transition-colors hover:bg-[var(--term-surface)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            )}
          >
            <action.Icon className="h-4 w-4" aria-hidden="true" />
            {action.label}
          </button>
          <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
            {content.guide}
          </p>
        </div>
      </div>

      {/* 3) 핵심 정리 */}
      <SectionNote icon={<InfoIcon className="h-4 w-4" />}>{content.explanation}</SectionNote>
    </section>
  );
};

const StepDots = ({ step }: { step: number }) => (
  <span className="flex items-center gap-1.5" aria-hidden="true">
    {Array.from({ length: STEP_COUNT }).map((_, i) => (
      <span
        key={i}
        className={cn(
          'inline-block h-1.5 rounded-full transition-all',
          i === step ? 'w-4 bg-[var(--term-accent)]' : 'w-1.5 bg-[var(--term-border)]',
        )}
      />
    ))}
  </span>
);

type ItemCardProps = {
  tone: ToneKey;
  itemName: string;
  itemId: string;
  filled: boolean;
  sampleValue: string;
  stateLabel: string;
  emptyText: string;
};

const ItemCard = ({
  tone,
  itemName,
  itemId,
  filled,
  sampleValue,
  stateLabel,
  emptyText,
}: ItemCardProps) => {
  const t = toneTokens[tone];
  const [picked, setPicked] = useState('');

  useEffect(() => {
    if (filled) setPicked(sampleValue);
  }, [filled, sampleValue]);

  return (
    <div
      className={cn(
        'flex flex-col gap-sm rounded-xl border-2 p-md',
        t.fill.border,
        'bg-[var(--term-surface)]',
      )}
    >
      <div className="flex items-center justify-between gap-sm">
        <div className="flex items-center gap-sm min-w-0">
          <ToneIconBox tone={tone} size="sm">
            <BoxIcon className="h-4 w-4" />
          </ToneIconBox>
          <code
            className={cn('font-mono text-sm font-extrabold tracking-tight break-keep', t.text)}
          >
            {itemName}
          </code>
        </div>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
            t.chip,
          )}
        >
          key: {itemId}
        </span>
      </div>

      <StateRow label={stateLabel} value={picked || emptyText} empty={!picked} />
    </div>
  );
};

const StateRow = ({ label, value, empty }: { label: string; value: string; empty: boolean }) => (
  <div className="flex items-center justify-between gap-sm rounded-lg border px-sm py-2 border-[var(--term-border)] bg-[var(--term-bg)]">
    <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
      {label}
    </span>
    <code
      className={cn(
        'font-mono text-xsm font-bold break-all text-right',
        empty ? 'text-[var(--term-muted)] italic' : 'text-[var(--term-fg)]',
      )}
    >
      {value}
    </code>
  </div>
);
