import { cx } from '@berrypjh/react-ui';
import { ArrowLeftRight, Braces, Code2, Lightbulb } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DispatchSetStateContent } from '../content';

type Props = { content: DispatchSetStateContent['compare'] };

export const PublicApiInternalCompare = ({ content }: Props) => (
  <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowLeftRight className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      <CodeComparePanel
        tone="sky"
        title={content.left.title}
        code={content.left.code}
        description={content.left.description}
        icon={<Code2 className="h-3.5 w-3.5" aria-hidden="true" />}
      />

      <CompareVs />

      <CodeComparePanel
        tone="violet"
        title={content.right.title}
        code={content.right.code}
        description={content.right.description}
        icon={<Braces className="h-3.5 w-3.5" aria-hidden="true" />}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

type PanelProps = {
  tone: ToneKey;
  title: string;
  code: string;
  description: string;
  icon: React.ReactNode;
};

const CodeComparePanel = ({ tone, title, code, description, icon }: PanelProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-2 pb-sm border-b border-dashed border-[var(--term-border)]">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <h3 className={cx('text-xsm sm:text-sm font-bold tracking-tight break-keep', t.text)}>
          {title}
        </h3>
      </header>

      <pre className="overflow-x-auto rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-3 font-mono text-xsm leading-[1.7] text-[var(--term-fg)]">
        <code>{code}</code>
      </pre>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {description}
      </p>
    </article>
  );
};
