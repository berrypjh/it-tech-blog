import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { FlowArrow } from '../components/FlowArrow';
import { FunctionCard } from '../components/FunctionCard';
import { ObjectPreviewCard } from '../components/ObjectPreviewCard';
import type { CreateFiberFromElementContent } from '../content';
import { GitBranchIcon } from '../icons';

type Props = { content: CreateFiberFromElementContent['io'] };

export const InputOutputStructure = ({ content }: Props) => (
  <section id="io" aria-labelledby="heading-io" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="io"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div
        className={cn(
          'grid items-stretch min-w-0',
          'grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]',
          'gap-sm lg:gap-md',
        )}
      >
        <ObjectPreviewCard
          variant="element"
          label={content.inputTitle}
          code={content.inputCode}
          badgeText="input"
        />
        <FlowArrow className="self-center" />
        <FunctionCard label={content.functionTitle} subtitle={content.functionSubtitle} size="sm" />
        <FlowArrow className="self-center" />
        <ObjectPreviewCard
          variant="fiber"
          label={content.outputTitle}
          code={content.outputCode}
          badgeText="output"
        />
      </div>
    </article>
  </section>
);
