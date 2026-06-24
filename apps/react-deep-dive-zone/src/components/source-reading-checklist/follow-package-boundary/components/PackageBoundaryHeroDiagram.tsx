import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FollowPackageBoundaryContent, PackageKey } from '../content';
import { FileCodeIcon, MapIcon, PackageIcon, RepeatIcon } from '../icons';
import { packageToneKey } from '../packageTone';

type Props = { content: FollowPackageBoundaryContent['hero']; className?: string };

/** shared는 toneTokens에 없어 가장 가까운 amber로 매핑한다. */
const tone = (key: PackageKey): ToneKey => (key === 'shared' ? 'amber' : packageToneKey[key]);

/**
 * Hero 핵심 비주얼.
 * 파일명만 보고 들어가던 코드를(상단 CodePreviewPanel) 패키지 경계로 재분류하는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper. 각 패키지는 톤 칩으로 책임이 드러난다.
 */
export const PackageBoundaryHeroDiagram = ({ content, className }: Props) => {
  const a11y = `${content.leftPanelTitle}: ${content.leftFiles.join(', ')}. ${content.connectorLabel} — ${content.rightPanelTitle}: ${content.rightMap
    .map((pkg) => `${pkg.name} (${pkg.role})`)
    .join(', ')}.`;

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm">
        <header className="flex items-center gap-sm" aria-hidden="true">
          <ToneIconBox tone="blue" size="sm">
            <MapIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <h2 className="min-w-0 text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.visualTitle}
          </h2>
        </header>

        {/* 파일명만 보고 들어가기 — 점들의 묶음 */}
        <article className="flex flex-col gap-2 rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center gap-2" aria-hidden="true">
            <ToneIconBox tone="amber" size="sm">
              <FileCodeIcon className="h-[18px] w-[18px]" />
            </ToneIconBox>
            <span
              className={cn('text-sm font-bold tracking-tight break-keep', toneTokens.amber.text)}
            >
              {content.leftPanelTitle}
            </span>
          </div>
          <CodePreviewPanel
            code={content.leftFiles.join('\n')}
            showWindowDots={false}
            language="files"
          />
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.leftCaption}
          </p>
        </article>

        <DownArrow label={content.connectorLabel} sub={content.connectorSub} />

        {/* 패키지 경계로 재분류 */}
        <article className="flex flex-col gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center gap-2" aria-hidden="true">
            <ToneIconBox tone="blue" size="sm">
              <PackageIcon className="h-[18px] w-[18px]" />
            </ToneIconBox>
            <span
              className={cn('text-sm font-bold tracking-tight break-keep', toneTokens.blue.text)}
            >
              {content.rightPanelTitle}
            </span>
          </div>

          <ol className="flex flex-col gap-1.5" aria-hidden="true">
            {content.rightMap.map((pkg) => (
              <PackageRow key={pkg.name} name={pkg.name} role={pkg.role} />
            ))}
          </ol>

          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.rightCaption}
          </p>
        </article>
      </div>
    </div>
  );
};

const PackageRow = ({ name, role }: { name: PackageKey; role: string }) => {
  const t = toneTokens[tone(name)];
  return (
    <li
      className={cn(
        'flex items-center gap-sm rounded-lg border bg-[var(--term-bg)] px-3 py-2',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone(name)} size="sm">
        <PackageIcon className="h-4 w-4" />
      </ToneIconBox>
      <span className={cn('shrink-0 font-mono text-xsm font-bold tracking-tight', t.text)}>
        {name}
      </span>
      <span aria-hidden="true" className="text-[var(--term-accent)] text-sm leading-none">
        →
      </span>
      <span className="min-w-0 truncate text-xsm text-[var(--term-muted)] break-keep">{role}</span>
    </li>
  );
};

const DownArrow = ({ label, sub }: { label: string; sub: string }) => (
  <div className="flex flex-col items-center gap-1" aria-hidden="true">
    <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
      ↓
    </span>
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5',
        'text-[10px] font-bold uppercase tracking-wider font-mono',
        toneTokens.blue.chip,
      )}
    >
      <RepeatIcon className="h-3 w-3" />
      {label}
    </span>
    <span className="text-[10px] font-mono text-[var(--term-muted)] break-keep text-center">
      {sub}
    </span>
  </div>
);
