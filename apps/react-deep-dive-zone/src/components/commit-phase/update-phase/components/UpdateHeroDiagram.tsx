import { cx } from '@berrypjh/react-ui';
import { ArrowRight, Lock, Pencil, Repeat, Type } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { UpdatePhaseContent } from '../content';

type Props = { content: UpdatePhaseContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * 재사용된 기존 host node → Update flag(변경 필요 표시) → props update / text update로
 * 이어지는 commitUpdate 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const UpdateHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.leftTitle}: ${diagram.leftCode} → ${diagram.centerTitle}(${diagram.centerSubtitle}) → ${diagram.branch1Title}: ${diagram.branch1Detail}, ${diagram.branch2Title}: ${diagram.branch2Detail}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <StepHeader tone="indigo" label={diagram.leftTitle} icon={<Repeat className="h-4 w-4" />} />
        <CodePreviewPanel
          code={diagram.leftCode}
          showWindowDots
          caption={diagram.leftPreview}
          language="JSX"
          size="md"
        />

        <DownArrow />

        <FlagRow title={diagram.centerTitle} subtitle={diagram.centerSubtitle} />

        <DownArrow />

        <ol className="flex flex-col gap-sm">
          <li className="flex flex-col gap-sm">
            <StepHeader
              tone="sky"
              label={diagram.branch1Title}
              detail={diagram.branch1Detail}
              icon={<Lock className="h-4 w-4" />}
            />
            <CodePreviewPanel code={diagram.branch1Code} showWindowDots={false} language="JSX" />
          </li>

          <li className="flex flex-col gap-sm">
            <StepHeader
              tone="teal"
              label={diagram.branch2Title}
              detail={diagram.branch2Detail}
              icon={<Type className="h-4 w-4" />}
            />
            <DiffRow before={diagram.branch2BeforeCode} after={diagram.branch2AfterCode} />
          </li>
        </ol>
      </div>
    </HeroDiagramShell>
  );
};

const StepHeader = ({
  tone,
  label,
  detail,
  icon,
}: {
  tone: ToneKey;
  label: string;
  detail?: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex items-center gap-sm">
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <span className={cx('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
        {label}
      </span>
      {detail ? (
        <span className="ml-auto shrink-0 font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {detail}
        </span>
      ) : (
        <span className="flex-1 border-t border-dashed border-[var(--term-border)]" />
      )}
    </div>
  );
};

const FlagRow = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const t = toneTokens.sky;
  return (
    <div
      className={cx(
        'flex items-center gap-sm rounded-xl border px-md py-2.5',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.chip,
        t.border,
      )}
    >
      <ToneIconBox tone="sky" size="sm">
        <Pencil className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cx('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

const DiffRow = ({ before, after }: { before: string; after: string }) => {
  const t = toneTokens.teal;
  return (
    <div
      className={cx(
        'flex items-center gap-sm rounded-lg border px-md py-2',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <code className="font-mono text-xsm text-[var(--term-fg)]">{before}</code>
      <ArrowRight className="h-4 w-4 shrink-0 text-[var(--term-accent)]" />
      <code className={cx('font-mono text-xsm font-bold', t.text)}>{after}</code>
    </div>
  );
};
