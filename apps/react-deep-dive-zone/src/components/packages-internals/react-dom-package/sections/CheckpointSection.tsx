import { FileCode, FileText, SquareCheckBig } from 'lucide-react';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { ReactDomContent } from '../content';

type Props = { content: ReactDomContent['checkpoint'] };

export const CheckpointSection = ({ content }: Props) => {
  const [fileItem, functionsItem] = content.items;

  return (
    <section aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="checkpoint"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SquareCheckBig className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        <CheckpointInfoCard
          rows={[
            {
              label: fileItem.label,
              value: <code className="font-mono break-all">{fileItem.value}</code>,
              icon: FileText,
            },
            {
              label: functionsItem.label,
              value: (
                <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                  {functionsItem.value}
                </code>
              ),
              icon: FileCode,
            },
          ]}
        />

        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel header={content.codeCaption} badge="main" code={content.code} />

          <GithubButton href={content.primaryHref} label={content.primaryCta} />
        </div>
      </div>
    </section>
  );
};
