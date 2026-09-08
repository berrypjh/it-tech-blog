import { cn } from '@it-tech-blog/utils';

import { FileCode, MessageCircle } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HostComponentContent } from '../content';

type Props = { content: HostComponentContent['userCode'] };

export const HostUserCodeExample = ({ content }: Props) => (
  <section id="user-code" aria-labelledby="heading-user-code" className="space-y-md">
    <SectionHeader
      id="user-code"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCode className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.3fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      <div className="min-w-0">
        <CodePreviewPanel header="Profile.jsx" badge="jsx" language="jsx" code={content.code} />
      </div>

      <article
        className={cn(
          'flex items-start gap-md rounded-lg border p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          toneTokens.sky.border,
        )}
      >
        <ToneIconBox tone="sky" size="md">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <div className="flex flex-col gap-1 min-w-0">
          <span className={cn('text-xxsm font-mono uppercase tracking-wider', toneTokens.sky.text)}>
            props · children
          </span>
          <p
            className={cn(
              'text-sm sm:text-md leading-relaxed font-bold break-keep',
              toneTokens.sky.text,
            )}
          >
            {content.explanation}
          </p>
        </div>
      </article>
    </div>
  </section>
);
