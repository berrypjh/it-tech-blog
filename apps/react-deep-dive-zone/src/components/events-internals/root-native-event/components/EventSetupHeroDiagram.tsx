import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RootNativeEventContent } from '../content';
import { ContainerIcon, GlobeIcon, MousePointerIcon, RadioIcon } from '../icons';
import { ListenerPill } from '../ListenerPill';

type Props = { content: RootNativeEventContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * Browser의 Native Event → root container 한 곳 → 미리 등록된 리스너 목록으로
 * 이어지는 이벤트 위임 셋업을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const EventSetupHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.browserTitle} → ${diagram.rootTitle}: ${diagram.listeners
    .map((l) => l.label)
    .join(', ')}. ${diagram.caption}`;

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
        <BrowserCard title={diagram.browserTitle} bullets={diagram.browserBullets} />

        <DownArrow />

        <RootCard title={diagram.rootTitle} dom={diagram.rootDom} />

        <DownArrow />

        <ListenerCard listeners={diagram.listeners} />

        <p className="text-xsm leading-relaxed text-center text-[var(--term-muted)] break-keep">
          {diagram.caption}
        </p>
      </div>
    </div>
  );
};

const BrowserCard = ({ title, bullets }: { title: string; bullets: string[] }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone="sky" size="sm">
        <GlobeIcon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {bullets.join(' · ')}
        </span>
      </div>
      <span className="ml-auto shrink-0 text-[var(--term-muted)]">
        <MousePointerIcon className="h-4 w-4" />
      </span>
    </article>
  );
};

const RootCard = ({ title, dom }: { title: string; dom: string }) => {
  const t = toneTokens.violet;
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone="violet" size="sm">
          <ContainerIcon className="h-[18px] w-[18px]" />
        </ToneIconBox>
        <span className={cn('font-mono text-sm font-bold tracking-tight', t.text)}>{title}</span>
        <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          rootContainerElement
        </span>
      </header>
      <CodePreviewPanel code={dom} language="JSX" showWindowDots={false} size="sm" />
    </article>
  );
};

const ListenerCard = ({
  listeners,
}: {
  listeners: RootNativeEventContent['hero']['diagram']['listeners'];
}) => {
  const t = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone="teal" size="sm">
        <RadioIcon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <ul className="flex flex-wrap items-center gap-2">
        {listeners.map((l) => (
          <li key={l.label}>
            <ListenerPill label={l.label} kind={l.kind} size="sm" />
          </li>
        ))}
      </ul>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
