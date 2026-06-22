import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { RenderYieldingContent } from '../content';
import { CheckCircleIcon, PauseCircleIcon, PlayCircleIcon, Repeat2Icon } from '../icons';

type Props = { content: RenderYieldingContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 긴 렌더 루프가 deadline에서 host에게 yield하고, 다음 frame에서
 * continuation으로 workInProgress를 재개하는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const RenderYieldingHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.subtitle} ${content.mainFlow.join(' → ')}`;
  const yieldCode = content.mainFlow.join('\n');

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <CodePreviewPanel code={yieldCode} showWindowDots caption="workLoop" size="md" />

        <DownArrow />

        <FrameCard
          tone="violet"
          icon={<PauseCircleIcon className="h-[18px] w-[18px]" />}
          title={content.frame1.title}
          items={content.frame1.items}
          badgeIcon={<PauseCircleIcon className="h-3 w-3" aria-hidden="true" />}
          badge={content.frame1.yieldBadge}
        />

        <BridgeNote top={content.bridge.top} bottom={content.bridge.bottom} />

        <FrameCard
          tone="emerald"
          icon={<PlayCircleIcon className="h-[18px] w-[18px]" />}
          title={content.frame2.title}
          items={content.frame2.items}
          badgeIcon={<CheckCircleIcon className="h-3 w-3" aria-hidden="true" />}
          badge={content.frame2.continuationBadge}
        />
      </div>
    </div>
  );
};

const FrameCard = ({
  tone,
  icon,
  title,
  items,
  badgeIcon,
  badge,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  items: string[];
  badgeIcon: React.ReactNode;
  badge: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{title}</span>
        <span
          className={cn(
            'ml-auto inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
            t.chip,
          )}
        >
          {badgeIcon}
          {badge}
        </span>
      </header>
      <ul className="flex flex-col gap-1">
        {items.map((item, i) => {
          const emphasized = i === items.length - 1;
          return (
            <li
              key={item}
              className={cn(
                'flex items-center gap-1.5 text-xsm leading-snug break-keep',
                emphasized ? cn(t.text, 'font-bold') : 'text-[var(--term-fg)]',
              )}
            >
              <span className={cn('inline-block h-1.5 w-1.5 shrink-0 rounded-full', t.dot)} />
              {item}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

const BridgeNote = ({ top, bottom }: { top: string; bottom: string }) => (
  <div className="flex flex-col items-center gap-1">
    <DownArrow />
    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] break-keep">
      <Repeat2Icon className="h-3.5 w-3.5 text-[var(--term-accent)]" aria-hidden="true" />
      {top} · {bottom}
    </span>
    <DownArrow />
  </div>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
