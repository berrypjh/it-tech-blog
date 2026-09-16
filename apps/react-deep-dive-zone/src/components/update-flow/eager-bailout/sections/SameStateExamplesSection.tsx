import { Code2, Lightbulb } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import type { EagerBailoutContent } from '../content';

type Props = { content: EagerBailoutContent['sameStateExamples'] };

export const SameStateExamplesSection = ({ content }: Props) => (
  <section id="examples" aria-labelledby="heading-examples" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="examples"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Code2 className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
      {content.examples.map((example) => (
        <div key={example.fileName} className="min-w-0">
          <CodePreviewPanel
            header={example.fileName}
            code={`${example.code}\n${example.comment}`}
          />
        </div>
      ))}

      <article className="flex flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ToneIconBox tone="amber" size="md">
          <Lightbulb className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)] break-keep">
          {content.explanation.title}
        </h3>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.explanation.body}
        </p>
      </article>
    </div>
  </section>
);
