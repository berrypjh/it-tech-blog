import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { ReconcilerContent } from '../content';
import { reconcilerIcon } from '../icons';

type Props = { content: ReconcilerContent['checkpoint'] };

export const CheckpointSection = ({ content }: Props) => (
  <section aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-2xl">
    <SectionHeader
      id="checkpoint"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CheckpointHeaderIcon />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
      <CheckpointInfoCard
        rows={content.items
          .filter((it) => it.id !== 'question')
          .map((item) => ({
            label: item.label,
            value:
              item.id === 'file' ? (
                <code className="font-mono break-all">{item.value}</code>
              ) : (
                <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                  {item.value}
                </code>
              ),
            icon: reconcilerIcon[item.iconName],
          }))}
        question={content.items.find((it) => it.id === 'question')?.value ?? ''}
      />

      <div className="flex flex-col gap-md min-w-0">
        <CodePreviewPanel header={content.codeCaption} badge="main" code={content.code} />

        <GithubButton href={content.primaryHref} label={content.primaryCta} />
      </div>
    </div>
  </section>
);

const CheckpointHeaderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
