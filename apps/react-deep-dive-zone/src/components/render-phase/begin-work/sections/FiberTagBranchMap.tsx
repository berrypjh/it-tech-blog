import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem, ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BeginWorkContent } from '../content';
import { fiberTagIconByName, GitForkIcon, SettingsIcon } from '../icons';

type Props = { content: BeginWorkContent['tagBranch'] };

export const FiberTagBranchMap = ({ content }: Props) => (
  <section id="tag-branches" aria-labelledby="heading-tag-branches" className="space-y-md">
    <SectionHeader
      id="tag-branches"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitForkIcon className="h-5 w-5" />}
    />

    {/* Root: beginWork → dispatch */}
    <article
      className={cn(
        'flex items-center gap-sm rounded-lg border px-md py-3',
        'shadow-[0_2px_0_var(--term-border)]',
        toneTokens.sky.fill.bg,
        toneTokens.sky.fill.border,
      )}
    >
      <ToneIconBox tone="sky" size="md">
        <SettingsIcon className="h-[18px] w-[18px]" />
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <code
          className={cn('text-sm font-bold font-mono tracking-tight', toneTokens.sky.fill.text)}
        >
          {content.rootTitle}
        </code>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.rootSubtitle}
        </span>
      </div>
    </article>

    <ToneCardGrid>
      {content.branches.map((branch) => {
        const Icon = fiberTagIconByName[branch.icon];
        return (
          <ToneCardItem
            key={branch.id}
            tone={branch.tone}
            icon={<Icon className={cn('h-5 w-5', toneTokens[branch.tone].text)} />}
          >
            <div className="flex flex-col gap-1 min-w-0">
              <h3
                className={cn(
                  'text-sm font-bold tracking-tight break-keep [overflow-wrap:anywhere]',
                  toneTokens[branch.tone].text,
                )}
              >
                {branch.title}
              </h3>
              {branch.detail && (
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {branch.detail}
                </p>
              )}
              {branch.updateFn && (
                <code className="mt-1 inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xxsm font-mono text-[var(--term-fg)]">
                  {branch.updateFn}
                </code>
              )}
            </div>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>
  </section>
);
