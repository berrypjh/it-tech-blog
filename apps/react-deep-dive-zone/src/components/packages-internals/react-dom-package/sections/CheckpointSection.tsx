import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { ReactDomContent } from '../content';
import { reactDomIcon } from '../icons';

type Props = { content: ReactDomContent['checkpoint'] };

export const CheckpointSection = ({ content }: Props) => {
  const [fileItem, functionsItem, questionItem] = content.items;

  return (
    <section aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="checkpoint"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckpointHeaderIcon />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        <CheckpointInfoCard
          rows={[
            {
              label: fileItem.label,
              value: <code className="font-mono break-all">{fileItem.value}</code>,
              icon: reactDomIcon[fileItem.iconName],
            },
            {
              label: functionsItem.label,
              value: (
                <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                  {functionsItem.value}
                </code>
              ),
              icon: reactDomIcon[functionsItem.iconName],
            },
          ]}
          question={questionItem.value}
        />

        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel header={content.codeCaption} badge="main" code={content.code} />

          <GithubButton href={content.primaryHref} label={content.primaryCta} />
        </div>
      </div>
    </section>
  );
};

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
