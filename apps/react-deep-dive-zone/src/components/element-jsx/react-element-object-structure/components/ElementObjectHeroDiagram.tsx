import { cx } from '@berrypjh/react-ui';
import { Box, Fingerprint, Key, LayoutPanelTop, type LucideIcon, User } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroCallout, ReactElementObjectStructureContent } from '../content';

type Props = { content: ReactElementObjectStructureContent['hero'] };

const fieldIcon: Record<HeroCallout['field'], LucideIcon> = {
  $$typeof: Fingerprint,
  type: Box,
  key: Key,
  props: LayoutPanelTop,
  _owner: User,
};

export const ElementObjectHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.codeCardLabel} — ${content.callouts
    .map((c) => `${c.field}: ${c.label}`)
    .join(', ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col items-stretch gap-sm">
        <CodePreviewPanel
          code={content.code}
          language="JS"
          showWindowDots
          caption={content.codeCardLabel}
          size="sm"
        />

        <DownArrow />

        <ol className="grid grid-cols-1 @sm:grid-cols-2 gap-sm items-stretch" aria-hidden="true">
          {content.callouts.map((callout) => (
            <li key={callout.id} className="flex min-w-0">
              <FieldCard callout={callout} />
            </li>
          ))}
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const FieldCard = ({ callout }: { callout: HeroCallout }) => {
  const Icon = fieldIcon[callout.field];
  return (
    <article
      className={cx(
        'group flex flex-1 min-w-0 items-start gap-sm rounded-xl border bg-[var(--term-surface)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={callout.tone} size="md">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-1">
        <span
          className={cx(
            'inline-flex w-fit items-center rounded-md border px-2 py-0.5 text-[11px] font-mono font-bold tracking-tight',
            toneTokens[callout.tone].chip,
          )}
        >
          {callout.field}
        </span>
        <h3 className={cx('text-sm font-bold tracking-tight', toneTokens[callout.tone].text)}>
          {callout.label}
        </h3>
      </div>
    </article>
  );
};
