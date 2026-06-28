import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { DownArrow } from '../../../shared/icon';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberPropsContent, PropsKind } from '../content';
import { GitCompareIcon, LightbulbIcon } from '../icons';

type Props = { content: FiberPropsContent['scenario'] };

const stateTone: Record<PropsKind, ToneKey> = {
  pendingProps: 'sky',
  memoizedProps: 'emerald',
};

export const PropsChangeScenario = ({ content }: Props) => (
  <section id="scenario" aria-labelledby="heading-scenario" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="scenario"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitCompareIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.2fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Left: previous → next flow */}
      <div className="flex flex-col gap-sm">
        <RenderCard label={content.previousLabel} code={content.previousCode} tone="emerald" />
        <DownArrow />
        <RenderCard label={content.nextLabel} code={content.nextCode} tone="sky" />
      </div>

      {/* Right: current fiber internal state */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 border-dashed p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <h3 className="text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {`// ${content.stateLabel}`}
        </h3>
        <div className="flex flex-col gap-2 mt-1">
          <StateRow line={content.stateMemoized} kind="memoizedProps" />
          <StateRow line={content.statePending} kind="pendingProps" />
        </div>
      </article>
    </div>

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>
      {content.bannerPrefix}
      <ValueBadge tone="emerald">{content.bannerOldValue}</ValueBadge>
      {content.bannerMid}
      <ValueBadge tone="sky">{content.bannerNewValue}</ValueBadge>
      {content.bannerSuffix}
    </SectionNote>
  </section>
);

const RenderCard = ({ label, code, tone }: { label: string; code: string; tone: ToneKey }) => {
  const t = toneTokens[tone];
  return (
    <article className={cn('rounded-2xl border-2 bg-[var(--term-bg)] p-md', t.border)}>
      <h3 className={cn('text-xsm font-bold tracking-tight mb-sm', t.text)}>{label}</h3>
      <CodePreviewPanel code={code} caption="render.jsx" language="JSX" size="sm" />
    </article>
  );
};

const StateRow = ({ line, kind }: { line: string; kind: PropsKind }) => {
  const t = toneTokens[stateTone[kind]];
  return (
    <code
      className={cn(
        'block rounded-lg border px-3 py-2 font-mono text-xsm sm:text-sm font-bold break-all',
        t.chip,
      )}
    >
      {line}
    </code>
  );
};

const ValueBadge = ({ children, tone }: { children: React.ReactNode; tone: ToneKey }) => (
  <span
    className={cn(
      'inline-flex items-center rounded-md border px-1.5 py-0 font-mono text-[12px] font-bold',
      toneTokens[tone].chip,
    )}
  >
    {children}
  </span>
);
