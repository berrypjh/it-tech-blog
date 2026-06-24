import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { UseEffectEventContent } from '../content';
import { PlugIcon, ShieldCheckIcon, SplitIcon } from '../icons';

type Props = { content: UseEffectEventContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * Before(useEffect 단일 의존성 배열로 theme 변경 시 reconnect) → useEffectEvent로
 * 이벤트성 로직 분리 → After(roomId만 의존, theme 변경에도 reconnect 없음)로
 * 이어지는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const UseEffectEventHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.beforeCode.title}: ${content.beforeCode.footerLines.join(', ')}. ${
    content.reconnect.title
  } — ${content.reconnect.beforeLabel}: ${content.reconnect.beforeBody}, ${
    content.reconnect.afterLabel
  }: ${content.reconnect.afterBody}. ${content.afterCode.title}: ${content.afterCode.footerLines.join(
    ', ',
  )}`;

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
        <article className="flex flex-col gap-sm">
          <StepHeader
            tone="amber"
            label={content.beforeCode.title}
            icon={<PlugIcon className="h-[18px] w-[18px]" />}
          />
          <CodePreviewPanel
            code={content.beforeCode.code}
            showWindowDots
            language={content.beforeCode.langBadge}
            size="sm"
          />
          <StepNote tone="amber" lines={content.beforeCode.footerLines} />
        </article>

        <DownArrow />

        <SeparationCard reconnect={content.reconnect} />

        <DownArrow />

        <article className="flex flex-col gap-sm">
          <StepHeader
            tone="teal"
            label={content.afterCode.title}
            icon={<ShieldCheckIcon className="h-[18px] w-[18px]" />}
          />
          <CodePreviewPanel
            code={content.afterCode.code}
            language={content.afterCode.langBadge}
            size="sm"
          />
          <StepNote tone="teal" lines={content.afterCode.footerLines} />
        </article>
      </div>
    </div>
  );
};

const StepHeader = ({
  tone,
  label,
  icon,
}: {
  tone: ToneKey;
  label: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
        {label}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const StepNote = ({ tone, lines }: { tone: ToneKey; lines: readonly [string, string] }) => {
  const t = toneTokens[tone];
  return (
    <div
      className={cn(
        'flex flex-col gap-0.5 rounded-xl border bg-[var(--term-bg)] px-md py-2',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        t.borderHover,
      )}
    >
      <code className={cn('font-mono text-[11px] font-bold break-all', t.text)}>{lines[0]}</code>
      <span className="text-[10px] leading-relaxed text-[var(--term-muted)] break-keep">
        {lines[1]}
      </span>
    </div>
  );
};

const SeparationCard = ({
  reconnect,
}: {
  reconnect: UseEffectEventContent['hero']['reconnect'];
}) => (
  <article
    className={cn(
      'flex flex-col gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-sm">
      <ToneIconBox tone="sky" size="sm">
        <SplitIcon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {reconnect.title}
      </h3>
    </header>

    <ReconnectRow tone="amber" label={reconnect.beforeLabel} body={reconnect.beforeBody} />
    <ReconnectRow tone="teal" label={reconnect.afterLabel} body={reconnect.afterBody} />
  </article>
);

const ReconnectRow = ({ tone, label, body }: { tone: ToneKey; label: string; body: string }) => {
  const t = toneTokens[tone];
  return (
    <div
      className={cn(
        'flex items-center gap-sm rounded-lg border bg-[var(--term-bg)] px-md py-2',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <span
        className={cn(
          'shrink-0 rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider',
          t.chip,
        )}
      >
        {label}
      </span>
      <span className={cn('text-xsm font-bold leading-snug break-keep', t.text)}>{body}</span>
    </div>
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
