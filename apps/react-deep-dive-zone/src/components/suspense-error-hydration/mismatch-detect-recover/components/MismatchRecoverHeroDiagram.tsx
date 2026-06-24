import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { MismatchDetectRecoverContent } from '../content';
import { AtomIcon, ServerIcon, TriangleAlertIcon } from '../icons';

type Props = { content: MismatchDetectRecoverContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 서버 HTML(SSR) → Mismatch 감지 → 클라이언트 재렌더 복구로 이어지는
 * Hydration 복구 분기를 위에서 아래로 잇는 컴팩트 stepper.
 */
export const MismatchRecoverHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.serverCard.title} ${content.serverCard.value} → ${content.mismatchCard.title}: ${content.mismatchCard.body} → ${content.clientCard.title} ${content.clientCard.value}`;

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
        <RenderCard
          tone="blue"
          icon={<ServerIcon className="h-[18px] w-[18px]" />}
          title={content.serverCard.title}
          code={content.serverCard.code}
          value={content.serverCard.value}
          caption={content.serverCard.caption}
        />

        <DownArrow />

        <MismatchCard title={content.mismatchCard.title} body={content.mismatchCard.body} />

        <DownArrow />

        <RenderCard
          tone="violet"
          icon={<AtomIcon className="h-[18px] w-[18px]" />}
          title={content.clientCard.title}
          code={content.clientCard.code}
          value={content.clientCard.value}
          caption={content.clientCard.caption}
        />
      </div>
    </div>
  );
};

const RenderCard = ({
  tone,
  icon,
  title,
  code,
  value,
  caption,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  code: string;
  value: string;
  caption: string;
}) => {
  const t = toneTokens[tone];
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
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
        <span
          className={cn(
            'ml-auto shrink-0 rounded-md border px-2 py-0.5 font-mono text-lg font-bold tabular-nums',
            t.chip,
          )}
        >
          {value}
        </span>
      </header>
      <CodePreviewPanel code={code} language="HTML" showWindowDots={false} />
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{caption}</p>
    </article>
  );
};

const MismatchCard = ({ title, body }: { title: string; body: string }) => {
  const t = toneTokens.amber;
  return (
    <article
      className={cn(
        'flex items-center gap-sm rounded-xl border p-md',
        t.chip,
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone="amber" size="sm">
        <TriangleAlertIcon className="h-[18px] w-[18px]" aria-hidden="true" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</h3>
        <p className={cn('text-xsm leading-relaxed break-keep', t.text)}>{body}</p>
      </div>
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
