import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { FlowSteps } from '../components/FlowSteps';
import type { FragmentModeFiberContent } from '../content';
import { GroupIcon, LightbulbIcon } from '../icons';

type Props = { content: FragmentModeFiberContent['fragmentFlow'] };

export const FragmentFlow = ({ content }: Props) => (
  <section
    id="fragment-flow"
    aria-labelledby="heading-fragment-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="fragment-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GroupIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* JSX */}
      <article className="flex flex-col gap-2 min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border px-2.5 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            toneTokens.violet.chip,
          )}
        >
          {content.jsxLabel}
        </span>
        <CodePreviewPanel
          code={content.jsxCode}
          caption="fragment.jsx"
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
            toneTokens.violet.text,
          )}
        >
          fragment flow
        </span>
        <FlowSteps tone="violet" steps={content.steps} />
      </article>
    </div>

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.infoBody}</SectionNote>
  </section>
);
