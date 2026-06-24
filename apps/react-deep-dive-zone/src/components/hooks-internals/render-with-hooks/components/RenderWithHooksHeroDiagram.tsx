import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroStep, RenderWithHooksContent } from '../content';
import { CheckCircleIcon, CodeIcon, SettingsIcon } from '../icons';

type Props = { content: RenderWithHooksContent['hero']; className?: string };

const stepIcons = [CodeIcon, SettingsIcon, CheckCircleIcon];

/** renderWithHooks 핵심 동작: dispatcher 설정 → 컴포넌트 호출 → reset. */
const RENDER_WITH_HOOKS_CODE = `ReactCurrentDispatcher.current = HooksDispatcher;
const children = Component(props, secondArg);
ReactCurrentDispatcher.current = ContextOnlyDispatcher;`;

/**
 * Hero 핵심 비주얼.
 * 함수 컴포넌트 → renderWithHooks(Hook 추적 환경 준비) → Hook 실행 가능 상태로
 * 이어지는 흐름을 위에서 아래로 잇는 컴팩트 stepper. 중앙 단계 아래에는
 * renderWithHooks가 dispatcher를 설정하고 컴포넌트를 호출한 뒤 reset하는 핵심 코드를 보여준다.
 */
export const RenderWithHooksHeroDiagram = ({ content, className }: Props) => {
  const a11y = content.steps.map((s) => `${s.title} — ${s.description}`).join(' → ');

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

      <ol className="relative flex flex-col gap-sm" aria-hidden="true">
        {content.steps.map((step, i) => {
          const Icon = stepIcons[i] ?? CodeIcon;
          const isMiddle = i === 1;
          return (
            <li key={step.title} className="flex flex-col gap-sm">
              <StepRow step={step} icon={<Icon className="h-[18px] w-[18px]" />} />
              {isMiddle && (
                <CodePreviewPanel
                  code={RENDER_WITH_HOOKS_CODE}
                  header="renderWithHooks()"
                  language="JS"
                  size="sm"
                />
              )}
              {i < content.steps.length - 1 && <DownArrow />}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const StepRow = ({ step, icon }: { step: HeroStep; icon: React.ReactNode }) => {
  const t = toneTokens[step.tone as ToneKey];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        step.emphasis ? cn(t.chip, t.border) : cn('border-[var(--term-border)]', t.borderHover),
      )}
    >
      <ToneIconBox tone={step.tone as ToneKey} size="sm">
        {icon}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>
          {step.title}
        </span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.description}
        </span>
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
