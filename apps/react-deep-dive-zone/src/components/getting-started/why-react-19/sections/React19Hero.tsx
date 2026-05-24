import { HeroDescription } from '../../_shared/HeroDescription';
import { HeroSection } from '../../_shared/HeroSection';
import { HeroTextColumn } from '../../_shared/HeroTextColumn';
import { HeroTitle } from '../../_shared/HeroTitle';
import { HeroVisualColumn } from '../../_shared/HeroVisualColumn';
import { TerminalBadge } from '../../_shared/TerminalBadge';
import { VersionStackVisual } from '../components/VersionStackVisual';
import type { WhyReact19Content } from '../content';
import { CheckIcon, InfoIcon } from '../icons';

type Props = { content: WhyReact19Content['hero'] };

export const React19Hero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react-versions.history"
      gridColumns="lg:grid-cols-[minmax(0,_1.04fr)_minmax(0,_0.96fr)]"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.stepBadge}
        </TerminalBadge>

        <HeroTitle>
          {content.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </HeroTitle>

        <HeroDescription lines={content.description} />

        {/* supporting points */}
        <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-md gap-y-sm mt-1">
          {content.points.map((p, i) => (
            <li key={i} className="inline-flex items-center gap-2 text-xsm text-[var(--term-fg)]">
              <span
                aria-hidden="true"
                className="inline-flex shrink-0 items-center justify-center w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-300 border border-teal-300/70 dark:border-teal-700/70"
              >
                <CheckIcon className="h-3 w-3" />
              </span>
              <span className="break-keep">{p}</span>
            </li>
          ))}
        </ul>

        {/* baseline info card */}
        <aside
          className="mt-sm relative flex items-start gap-sm rounded-md border border-sky-200 bg-sky-50 dark:border-sky-800/70 dark:bg-sky-950/40 p-md shadow-[0_2px_0_var(--term-border)]"
          aria-label={content.infoCard.title}
        >
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-full bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900"
          >
            <InfoIcon className="h-[1.125rem] w-[1.125rem]" />
          </span>
          <div className="flex flex-col gap-0.5 min-w-0">
            <p className="text-xsm sm:text-sm font-bold text-sky-900 dark:text-sky-100 break-keep">
              {content.infoCard.title}
            </p>
            <p className="text-xsm text-sky-700 dark:text-sky-300 leading-relaxed break-keep">
              {content.infoCard.description}
            </p>
          </div>
        </aside>
      </HeroTextColumn>

      <HeroVisualColumn>
        <VersionStackVisual
          versions={content.visual.versions}
          axisTop={content.visual.axisTop}
          axisBottom={content.visual.axisBottom}
        />
      </HeroVisualColumn>
    </HeroSection>
  );
};
