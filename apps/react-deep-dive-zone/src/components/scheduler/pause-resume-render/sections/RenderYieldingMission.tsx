import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RenderYieldingContent } from '../content';
import {
  CogIcon,
  FileCodeIcon,
  FileSearchIcon,
  GaugeIcon,
  ListChecksIcon,
  Repeat2Icon,
} from '../icons';
import { yldCardBorder, yldIconBox } from '../yieldAccent';

type Props = { content: RenderYieldingContent['mission'] };

const missionIcons = [FileSearchIcon, FileCodeIcon, GaugeIcon, Repeat2Icon];

export const RenderYieldingMission = ({ content }: Props) => (
  <section aria-labelledby="heading-mission">
    <NumberedSectionHeader
      id="mission"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((m, i) => {
        const Icon = missionIcons[i] ?? CogIcon;
        return (
          <li key={m.title} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
                'shadow-[0_2px_0_var(--term-border)] transition-all',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                yldCardBorder[m.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                    yldIconBox[m.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 px-2 items-center justify-center rounded-md font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)] border border-[var(--term-border)] bg-[var(--term-bg)]"
                >
                  mission · {String(i + 1).padStart(2, '0')}
                </span>
              </header>

              <h3 className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {m.title}
              </h3>

              <p className="mt-auto text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {m.description}
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
