import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { TestAsDocContent } from '../content';
import { FileCheckIcon, FileCodeIcon } from '../icons';

type Props = { content: TestAsDocContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 구현 코드만 읽던 시야 → 테스트를 함께 읽으며 의도를 확인하는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper. 테스트가 곧 의도를 검증한다.
 */
export const VerifyWithTestsHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.visualTitle}. ${content.leftPanelTitle}: ${content.leftFiles.join(
    ', ',
  )}. ${content.rightPanelTitle}: ${content.rightMap
    .map((row) => `${row.from} → ${row.to}`)
    .join(', ')}`;

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <StepHeader tone="blue" label={content.leftPanelTitle} icon={<FileCodeIcon />} />
        <CodePreviewPanel
          code={content.leftFiles.join('\n')}
          showWindowDots
          caption={content.leftCaption}
          size="sm"
        />

        <DownArrow label={content.connectorLabel} sub={content.connectorSub} />

        <StepHeader tone="violet" label={content.rightPanelTitle} icon={<FileCheckIcon />} />
        <ul className="flex flex-col gap-1.5">
          {content.rightMap.map((row) => (
            <MapRow key={row.from} from={row.from} to={row.to} />
          ))}
        </ul>
        <StepNote text={content.rightCaption} />
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
        <span className="flex h-[18px] w-[18px] items-center justify-center">{icon}</span>
      </ToneIconBox>
      <span className={cn('min-w-0 text-sm font-bold tracking-tight break-keep', t.text)}>
        {label}
      </span>
      <span
        aria-hidden="true"
        className="flex-1 border-t border-dashed border-[var(--term-border)]"
      />
    </div>
  );
};

const MapRow = ({ from, to }: { from: string; to: string }) => {
  const t = toneTokens.violet;
  return (
    <li
      className={cn(
        'flex flex-wrap items-center gap-2 rounded-md border bg-[var(--term-bg)] px-2 py-1.5',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <code
        className={cn(
          'inline-flex items-center rounded-md border px-1.5 py-0.5',
          t.chip,
          'font-mono text-[10.5px] font-bold',
        )}
      >
        {from}
      </code>
      <span aria-hidden="true" className={cn('shrink-0 text-[10px]', t.text)}>
        →
      </span>
      <span className="text-[11px] text-[var(--term-fg)] break-keep">{to}</span>
    </li>
  );
};

const StepNote = ({ text }: { text: string }) => (
  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{text}</p>
);

const DownArrow = ({ label, sub }: { label: string; sub: string }) => (
  <div className="flex items-center justify-center gap-2">
    <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
      ↓
    </span>
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] break-keep">
      {label} · {sub}
    </span>
  </div>
);
