import { cx } from '@berrypjh/react-ui';
import { Database, ListPlus, type LucideIcon, Zap } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Product, ProductId, UseStateInternalsContent } from '../content';

type Props = { content: UseStateInternalsContent['hero'] };

const productIcon: Record<ProductId, LucideIcon> = {
  state: Database,
  queue: ListPlus,
  dispatch: Zap,
};

/** Hero 핵심 비주얼: 호출 한 줄에서 세 갈래 산출물로 갈라지는 구조. */
export const UseStateInternalsHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.description}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <div className="flex items-center justify-between">
          <TerminalBadge dotClassName="bg-[var(--term-accent)]">
            {content.diagramBadge}
          </TerminalBadge>
          <span className="font-mono text-[10px] text-[var(--term-muted)]">
            {'//'} {content.diagramCaption}
          </span>
        </div>

        <article className="rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {'//'} {content.callLabel}
          </p>
          <code className="font-mono text-[11px] font-bold text-[var(--term-fg)] break-all">
            {content.call}
          </code>
        </article>

        <DownArrow />

        <ul className="flex flex-col gap-sm @sm:grid @sm:grid-cols-3">
          {content.products.map((product) => (
            <li key={product.id} className="min-w-0">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  const Icon = productIcon[product.id];
  const t = toneTokens[product.tone];
  return (
    <article className="flex h-full flex-col gap-2 rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
      <ToneIconBox tone={product.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <code className={cx('font-mono text-[11px] font-bold tracking-tight break-all', t.text)}>
        {product.label}
      </code>
      <span className="text-[10px] text-[var(--term-muted)] break-keep">{product.caption}</span>
    </article>
  );
};
