import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { EffectBadge } from '../components/EffectBadge';
import { EFFECT_NEUTRAL, effectBorder, effectText } from '../components/effectStyles';
import type { EffectKind, FiberFlagsContent } from '../content';
import { FlagIcon, TrashIcon } from '../icons';

type Props = { content: FiberFlagsContent['subtree'] };

export const SubtreeFlagsDeletions = ({ content }: Props) => (
  <section id="subtree" aria-labelledby="heading-subtree" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="subtree"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FlagIcon className="h-5 w-5" />}
    />

    {/* Top: concept cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <ConceptCard
        title={content.subtreeCard.title}
        description={content.subtreeCard.description}
        body={content.subtreeCard.body}
        tone="violet"
        icon={<FlagIcon className="h-6 w-6" />}
      />
      <ConceptCard
        title={content.deletionsCard.title}
        description={content.deletionsCard.description}
        body={content.deletionsCard.body}
        tone="rose"
        icon={<TrashIcon className="h-6 w-6" />}
      />
    </div>

    {/* Bottom: visuals */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md">
      {/* Parent Fiber visual */}
      <article
        className={cn(
          'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
          toneTokens.violet.border,
        )}
      >
        <span
          className={cn('text-[10px] font-mono uppercase tracking-wider', toneTokens.violet.text)}
        >
          {`// ${content.parentLabel}`}
        </span>
        <div
          className={cn(
            'mt-sm flex flex-col gap-2 rounded-xl border-2 p-md',
            toneTokens.violet.fill.bg,
            toneTokens.violet.fill.border,
          )}
        >
          <span className={cn('text-xsm font-bold', toneTokens.violet.fill.text)}>
            Parent Fiber
          </span>
          <div
            className={cn(
              'flex items-center gap-2 rounded-md border px-2 py-1.5',
              toneTokens.violet.fill.bg,
              toneTokens.violet.fill.border,
            )}
          >
            <code className={cn('font-mono text-xsm font-bold', toneTokens.violet.fill.text)}>
              {content.parentFieldLabel}
            </code>
            <span
              className={cn(
                'ml-auto inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-tight',
                toneTokens.violet.chip,
              )}
            >
              {content.parentBadge}
            </span>
          </div>
        </div>
      </article>

      {/* Child subtree visual */}
      <article
        className={cn(
          'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {`// ${content.childTreeLabel}`}
        </span>
        <div className="mt-sm flex flex-col items-center gap-2">
          <ChildNode label="Parent" />
          <span
            aria-hidden="true"
            className="block h-3 w-px border-l-2 border-[var(--term-border)]"
          />
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center gap-1">
              <ChildNode label="Child A" effect="update" />
              <EffectBadge effect={content.childLabels[0].kind}>
                {content.childLabels[0].text}
              </EffectBadge>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ChildNode label="Child B" effect="childDeletion" />
              <EffectBadge effect={content.childLabels[1].kind}>
                {content.childLabels[1].text}
              </EffectBadge>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
);

/** violet = subtreeFlags 카테고리(toneTokens), rose = 삭제(의미색, 중립 크롬 + rose 텍스트). */
const conceptCls = {
  violet: {
    border: toneTokens.violet.border,
    iconWrap: toneTokens.violet.chip,
    title: toneTokens.violet.text,
  },
  rose: {
    border: 'border-rose-200/70 dark:border-rose-800/60',
    iconWrap: cn(EFFECT_NEUTRAL, 'text-rose-600 dark:text-rose-300'),
    title: 'text-rose-600 dark:text-rose-300',
  },
} as const;

const ConceptCard = ({
  title,
  description,
  body,
  tone,
  icon,
}: {
  title: string;
  description: string;
  body: string;
  tone: 'violet' | 'rose';
  icon: React.ReactNode;
}) => {
  const cls = conceptCls[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_var(--term-border)]',
        cls.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl border',
            cls.iconWrap,
          )}
        >
          {icon}
        </span>
        <div className="flex flex-col min-w-0">
          <code className={cn('font-mono text-md font-bold tracking-tight', cls.title)}>
            {title}
          </code>
          <p className="text-xsm font-bold text-[var(--term-muted)] break-keep">{description}</p>
        </div>
      </header>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
    </article>
  );
};

const ChildNode = ({ label, effect }: { label: string; effect?: EffectKind }) => (
  <span
    className={cn(
      'inline-flex items-center rounded-lg border-2 px-2.5 py-1 font-mono text-xsm font-bold',
      EFFECT_NEUTRAL,
      effect ? cn(effectBorder[effect], effectText[effect]) : 'text-[var(--term-fg)]',
      effect === 'childDeletion' && 'border-dashed',
    )}
  >
    {label}
  </span>
);
