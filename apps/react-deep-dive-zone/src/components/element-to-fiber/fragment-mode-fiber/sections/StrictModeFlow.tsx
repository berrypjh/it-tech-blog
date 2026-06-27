import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { FlowSteps } from '../components/FlowSteps';
import type { FragmentModeFiberContent } from '../content';
import { LightbulbIcon, ShieldCheckIcon } from '../icons';

type Props = { content: FragmentModeFiberContent['strictFlow'] };

export const StrictModeFlow = ({ content }: Props) => (
  <section
    id="strict-flow"
    aria-labelledby="heading-strict-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="strict-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ShieldCheckIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] gap-md items-stretch">
      {/* JSX */}
      <article className="flex flex-col gap-2 min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border px-2.5 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            toneTokens.emerald.chip,
          )}
        >
          {content.jsxLabel}
        </span>
        <CodePreviewPanel
          code={content.jsxCode}
          caption="strict-mode.jsx"
          language="JSX"
          showWindowDots
        />
      </article>

      {/* Flow steps */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          className={cn(
            'text-[10px] uppercase tracking-wider font-mono font-bold',
            toneTokens.emerald.text,
          )}
        >
          strict mode flow
        </span>
        <FlowSteps tone="emerald" steps={content.steps} />
      </article>

      {/* Info */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg justify-center',
          toneTokens.sky.border,
          toneTokens.sky.fill.bg,
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl border shrink-0',
            toneTokens.sky.fill.bg,
            toneTokens.sky.fill.border,
            toneTokens.sky.text,
          )}
        >
          <LightbulbIcon className="h-6 w-6" />
        </span>
        <p
          className={cn(
            'text-sm sm:text-md font-bold leading-snug break-keep',
            toneTokens.sky.fill.text,
          )}
        >
          {content.infoBody}
        </p>
      </article>
    </div>
  </section>
);
