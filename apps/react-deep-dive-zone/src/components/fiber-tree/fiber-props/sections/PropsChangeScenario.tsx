import { cx } from '@berrypjh/react-ui';
import { GitCompare, Lightbulb } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { DownArrow } from '../../../shared/icon';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import { propsTone } from '../components/propsTone';
import type { FiberPropsContent, PropsKind } from '../content';

type Props = { content: FiberPropsContent['scenario'] };

export const PropsChangeScenario = ({ content }: Props) => (
  <section id="scenario" aria-labelledby="heading-scenario" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="scenario"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitCompare className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.2fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Left: previous → next flow */}
      <div className="flex flex-col gap-sm">
        <RenderCard
          label={content.previousLabel}
          code={content.previousCode}
          tone={propsTone.memoizedProps}
        />
        <DownArrow />
        <RenderCard
          label={content.nextLabel}
          code={content.nextCode}
          tone={propsTone.pendingProps}
        />
      </div>

      {/* Right: current fiber internal state */}
      <article
        className={cx(
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

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.bannerPrefix}
      <ValueBadge tone={propsTone.memoizedProps}>{content.bannerOldValue}</ValueBadge>
      {content.bannerMid}
      <ValueBadge tone={propsTone.pendingProps}>{content.bannerNewValue}</ValueBadge>
      {content.bannerSuffix}
    </SectionNote>
  </section>
);

const RenderCard = ({ label, code, tone }: { label: string; code: string; tone: ToneKey }) => {
  const t = toneTokens[tone];
  return (
    <article className={cx('rounded-2xl border-2 bg-[var(--term-bg)] p-md', t.border)}>
      <h3 className={cx('text-xsm font-bold tracking-tight mb-sm', t.text)}>{label}</h3>
      <CodePreviewPanel code={code} caption="render.jsx" language="JSX" size="sm" />
    </article>
  );
};

const StateRow = ({ line, kind }: { line: string; kind: PropsKind }) => {
  const t = toneTokens[propsTone[kind]];
  return (
    <code
      className={cx(
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
    className={cx(
      'inline-flex items-center rounded-md border px-1.5 py-0 font-mono text-[12px] font-bold',
      toneTokens[tone].chip,
    )}
  >
    {children}
  </span>
);
