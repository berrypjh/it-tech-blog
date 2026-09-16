import { cx } from '@berrypjh/react-ui';
import { ListTree, Target } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HostBullet, PlacementContent } from '../content';

type Props = { content: PlacementContent['hostParent'] };

export const HostParentSiblingSection = ({ content }: Props) => (
  <section
    id="host-parent-sibling"
    aria-labelledby="heading-host-parent-sibling"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="host-parent-sibling"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListTree className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_0.9fr)] gap-3 items-stretch">
      <FiberTreeCard content={content} />
      <ExplanationCard
        title={content.explanationTitle}
        explanation={content.explanation}
        bullets={content.bullets}
      />
    </div>
  </section>
);

const FiberTreeCard = ({ content }: { content: PlacementContent['hostParent'] }) => (
  <article className="flex h-full flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
    <FiberTree newLabel={content.newLabel} a11yItems={content.treeA11y} />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <LabelCard tag={content.parentLabel.tag} value={content.parentLabel.value} tone="sky" />
      <LabelCard tag={content.siblingLabel.tag} value={content.siblingLabel.value} tone="teal" />
    </div>
  </article>
);

/** 실제 Fiber 트리를 흉내 낸 일러스트. 그룹 className으로 색을 정하고 도형은 currentColor를 따른다. */
const FiberTree = ({ newLabel, a11yItems }: { newLabel: string; a11yItems: string[] }) => (
  <div className="relative">
    <svg aria-hidden="true" viewBox="0 0 420 220" className="w-full h-auto">
      <g className="text-[var(--term-dim)]" stroke="currentColor" strokeWidth={1.4} fill="none">
        <line x1={210} y1={36} x2={210} y2={84} />
        <line x1={210} y1={108} x2={90} y2={156} />
        <line x1={210} y1={108} x2={210} y2={156} />
      </g>
      <g
        className={toneTokens.violet.stroke}
        stroke="currentColor"
        strokeWidth={1.6}
        strokeDasharray="4 3"
        fill="none"
      >
        <line x1={210} y1={108} x2={330} y2={156} />
      </g>

      <g className={toneTokens.violet.text}>
        <rect
          x={150}
          y={16}
          rx={10}
          ry={10}
          width={120}
          height={32}
          className="fill-[var(--term-bg)]"
          stroke="currentColor"
          strokeWidth={1.4}
        />
        <text x={210} y={36} textAnchor="middle" fontSize={11} fontWeight={700} fill="currentColor">
          Main Fiber
        </text>
      </g>

      <g className={toneTokens.sky.text}>
        <rect
          x={150}
          y={84}
          rx={10}
          ry={10}
          width={120}
          height={32}
          className="fill-[var(--term-bg)]"
          stroke="currentColor"
          strokeWidth={1.4}
        />
        <text
          x={210}
          y={104}
          textAnchor="middle"
          fontSize={11}
          fontWeight={700}
          fill="currentColor"
        >
          List Fiber
        </text>
      </g>

      <g className="text-[var(--term-fg)]">
        <rect
          x={40}
          y={156}
          rx={8}
          ry={8}
          width={100}
          height={30}
          className="fill-[var(--term-bg)] stroke-[var(--term-border)]"
          strokeWidth={1.2}
        />
        <text x={90} y={175} textAnchor="middle" fontSize={11} fontWeight={600} fill="currentColor">
          Item A
        </text>
      </g>

      <g className={toneTokens.teal.text}>
        <rect
          x={160}
          y={156}
          rx={8}
          ry={8}
          width={100}
          height={30}
          className="fill-[var(--term-surface)]"
          stroke="currentColor"
          strokeWidth={1.4}
        />
        <text
          x={210}
          y={175}
          textAnchor="middle"
          fontSize={11}
          fontWeight={700}
          fill="currentColor"
        >
          Item B
        </text>
      </g>

      <g className={toneTokens.violet.text}>
        <rect
          x={280}
          y={156}
          rx={8}
          ry={8}
          width={100}
          height={30}
          className="fill-[var(--term-surface)]"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeDasharray="4 3"
        />
        <text
          x={330}
          y={172}
          textAnchor="middle"
          fontSize={11}
          fontWeight={700}
          fill="currentColor"
        >
          Item C
        </text>
        <text x={330} y={184} textAnchor="middle" fontSize={9} fontWeight={600} fill="currentColor">
          {newLabel}
        </text>
      </g>

      <g className={toneTokens.teal.text}>
        <line
          x1={270}
          y1={100}
          x2={355}
          y2={100}
          stroke="currentColor"
          strokeWidth={1.2}
          strokeDasharray="3 3"
        />
        <rect
          x={355}
          y={86}
          rx={8}
          ry={8}
          width={60}
          height={28}
          className="fill-[var(--term-surface)]"
          stroke="currentColor"
          strokeWidth={1.2}
        />
        <text
          x={385}
          y={104}
          textAnchor="middle"
          fontSize={10}
          fontWeight={700}
          fill="currentColor"
        >
          {'<ul>'}
        </text>
        <text x={385} y={80} textAnchor="middle" fontSize={9} fontWeight={700} fill="currentColor">
          host parent
        </text>

        <line
          x1={260}
          y1={171}
          x2={310}
          y2={210}
          stroke="currentColor"
          strokeWidth={1.2}
          strokeDasharray="3 3"
        />
        <rect
          x={250}
          y={196}
          rx={8}
          ry={8}
          width={120}
          height={20}
          className="fill-[var(--term-surface)]"
          stroke="currentColor"
          strokeWidth={1.2}
        />
        <text
          x={310}
          y={210}
          textAnchor="middle"
          fontSize={10}
          fontWeight={700}
          fill="currentColor"
        >
          host sibling: {'<li>B</li>'}
        </text>
      </g>
    </svg>

    <ul className="sr-only">
      {a11yItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const LabelCard = ({ tag, value, tone }: { tag: string; value: string; tone: ToneKey }) => {
  const t = toneTokens[tone];
  return (
    <div className={cx('flex flex-col gap-0.5 rounded-md border-2 p-sm', t.fill.border, t.fill.bg)}>
      <span className={cx('text-[10px] font-mono uppercase tracking-wider font-bold', t.text)}>
        {tag}
      </span>
      <code className={cx('text-xsm font-mono font-bold break-all', t.fill.text)}>{value}</code>
    </div>
  );
};

const ExplanationCard = ({
  title,
  explanation,
  bullets,
}: {
  title: string;
  explanation: PlacementContent['hostParent']['explanation'];
  bullets: HostBullet[];
}) => {
  const t = toneTokens.violet;
  return (
    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border-2 p-md sm:p-lg',
        t.fill.border,
        t.fill.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone="violet">
          <Target className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3 className={cx('text-[10px] font-mono uppercase tracking-wider font-bold', t.text)}>
          {title}
        </h3>
      </header>

      <p className={cx('text-sm sm:text-md font-bold leading-relaxed break-keep', t.fill.text)}>
        <span className="block">{explanation.line1}</span>
        <span className="block">{explanation.line2}</span>
        <span className="block">{explanation.line3}</span>
        <span className="block">{explanation.line4}</span>
      </p>

      <ul className={cx('flex flex-col gap-1.5 border-t border-dashed pt-sm', t.fill.border)}>
        {bullets.map((b) => (
          <li key={b.label}>
            <BulletRow bullet={b} />
          </li>
        ))}
      </ul>
    </article>
  );
};

const BulletRow = ({ bullet }: { bullet: HostBullet }) => {
  const t = toneTokens[bullet.tone];
  return (
    <div className="flex items-center gap-2 text-xsm sm:text-sm">
      <span
        className={cx(
          'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider shrink-0',
          t.chip,
        )}
      >
        {bullet.label}
      </span>
      <code className={cx('font-mono font-bold break-all', t.fill.text)}>{bullet.value}</code>
    </div>
  );
};
