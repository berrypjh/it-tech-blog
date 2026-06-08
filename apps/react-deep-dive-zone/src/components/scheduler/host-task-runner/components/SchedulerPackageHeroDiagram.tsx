import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { SchedulerPackageContent } from '../content';
import { CheckCircleIcon, CpuIcon, PackageIcon } from '../icons';

type HeroContent = SchedulerPackageContent['hero'];

type Props = { content: HeroContent; className?: string };

/**
 * Hero 핵심 비주얼.
 * Root Scheduler가 어떤 React work를 실행할지 정한 뒤
 * scheduleCallback으로 scheduler 패키지에 task를 넘기는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const SchedulerPackageHeroDiagram = ({ content, className }: Props) => {
  const { leftCard, rightCard, bridge } = content;
  const a11y = `${leftCard.title} (${leftCard.items.join(', ')}) → ${bridge} → ${rightCard.title} (${rightCard.items.join(', ')})`;

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
        <RoleCard
          tone="blue"
          icon={<CpuIcon className="h-[18px] w-[18px]" />}
          title={leftCard.title}
          subtitle={leftCard.subtitle}
          items={leftCard.items}
        />

        <DownArrow />

        <CodePreviewPanel code={bridge} showWindowDots language="JS" size="sm" />

        <DownArrow />

        <RoleCard
          tone="teal"
          icon={<PackageIcon className="h-[18px] w-[18px]" />}
          title={rightCard.title}
          subtitle={rightCard.subtitle}
          items={rightCard.items}
        />
      </div>
    </div>
  );
};

const RoleCard = ({
  tone,
  icon,
  title,
  subtitle,
  items,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: string[];
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
        <div className="flex min-w-0 flex-col">
          <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {subtitle}
          </span>
        </div>
      </header>
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm leading-snug text-[var(--term-fg)] break-keep"
          >
            <CheckCircleIcon className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', t.text)} />
            <span>{item}</span>
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
