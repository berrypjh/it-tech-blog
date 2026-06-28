import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { CompareBridge } from '../../../shared/compare';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CreateFiberFromElementContent } from '../content';
import { BoxIcon, GitBranchIcon, LayersIcon, WandIcon } from '../icons';

type Props = { content: CreateFiberFromElementContent['io'] };

export const InputOutputStructure = ({ content }: Props) => (
  <section id="io" aria-labelledby="heading-io" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="io"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'grid grid-cols-1 items-stretch gap-md',
        'lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)_minmax(0,1fr)]',
      )}
    >
      <IoPanel
        tone="sky"
        label={content.inputTitle}
        badge="input"
        icon={<BoxIcon className="h-[18px] w-[18px]" />}
        code={content.inputCode}
        showWindowDots
      />

      <CompareBridge
        icon={<WandIcon className="h-5 w-5" />}
        headline={content.functionTitle}
        sub={content.functionSubtitle}
      />

      <IoPanel
        tone="teal"
        label={content.outputTitle}
        badge="output"
        icon={<LayersIcon className="h-[18px] w-[18px]" />}
        code={content.outputCode}
      />
    </div>
  </section>
);

type IoPanelProps = {
  tone: ToneKey;
  label: string;
  badge: string;
  icon: React.ReactNode;
  code: string;
  showWindowDots?: boolean;
};

const IoPanel = ({ tone, label, badge, icon, code, showWindowDots = false }: IoPanelProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <span className={cn('min-w-0 truncate font-mono text-sm font-bold tracking-tight', t.text)}>
          {label}
        </span>
        <span
          className={cn(
            'ml-auto shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider',
            t.chip,
          )}
        >
          {badge}
        </span>
      </header>

      <CodePreviewPanel code={code} language="JS" showWindowDots={showWindowDots} />
    </article>
  );
};
