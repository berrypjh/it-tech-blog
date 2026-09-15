import { FileText, Map } from 'lucide-react';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { SharedContent } from '../content';

type Props = { content: SharedContent['clientImport'] };

export const ClientImportSection = ({ content }: Props) => {
  return (
    <section
      id="client-import"
      aria-labelledby="heading-client-import"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="client-import"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Map className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        <CheckpointInfoCard
          rows={[
            {
              label: content.explanation.title,
              value: (
                <div className="flex flex-col gap-2">
                  {content.explanation.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              ),
              icon: FileText,
            },
          ]}
        />

        {/* 우측 코드 패널 + GitHub 링크 */}
        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel header={content.codeCaption} badge="main" code={content.code} />

          <GithubButton href={content.primaryHref} label={content.primaryCta} />
        </div>
      </div>
    </section>
  );
};
