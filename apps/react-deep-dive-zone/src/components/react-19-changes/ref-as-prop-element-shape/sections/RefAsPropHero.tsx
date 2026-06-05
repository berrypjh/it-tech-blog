import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { RefAsPropElementShapeContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon } from '../icons';
import { pathTone } from '../tone';

import { CodePanel } from './_CodePanel';

type Props = { content: RefAsPropElementShapeContent['hero'] };

export const RefAsPropHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/ref-as-prop-element-shape.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // forwardRef wrapper → props.ref direct'}</span>
    }
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.subtitleLines.join(' ')}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn className="w-full">
      {/* BEFORE/AFTER comparison */}
      <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_11fr)_auto_minmax(0,_11fr)] lg:gap-md items-stretch">
        {/* React 18 (Before) */}
        <CodeColumn
          label={content.before.label}
          centerLabel={content.centerLabels.before}
          path="react18"
          code={content.before.code}
          fileName="MyInput.jsx · React 18"
          langBadge={content.before.langBadge}
        />

        {/* Arrow */}
        <div className="flex lg:flex-col items-center justify-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
              'border-blue-300 bg-blue-50 text-blue-700',
              'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <span className="hidden lg:inline-flex">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
            <span className="inline-flex lg:hidden">
              <ArrowDownIcon className="h-5 w-5" />
            </span>
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200 break-keep">
            ref as prop
          </span>
        </div>

        {/* React 19 (After) */}
        <CodeColumn
          label={content.after.label}
          centerLabel={content.centerLabels.after}
          path="react19"
          code={content.after.code}
          fileName="MyInput.jsx · React 19"
          langBadge={content.after.langBadge}
        />
      </div>
    </HeroVisualColumn>
  </HeroSection>
);

const CodeColumn = ({
  label,
  centerLabel,
  path,
  code,
  fileName,
  langBadge,
}: {
  label: string;
  centerLabel: string;
  path: 'react18' | 'react19';
  code: string;
  fileName: string;
  langBadge: 'JSX';
}) => {
  const tone = pathTone[path];
  const borderClass = path === 'react18' ? 'border-indigo-700/70' : 'border-emerald-700/70';

  return (
    <article className="flex flex-col gap-sm">
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
            tone.chip,
            'font-mono text-[10px] font-bold uppercase tracking-wider',
          )}
        >
          <span aria-hidden="true" className={cn('block h-1.5 w-1.5 rounded-full', tone.dot)} />
          {label}
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-1.5 py-0.5',
            'border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300',
            'font-mono text-[10px] font-bold uppercase tracking-wider',
          )}
        >
          {centerLabel}
        </span>
      </header>
      <CodePanel code={code} fileName={fileName} langBadge={langBadge} toneBorder={borderClass} />
    </article>
  );
};
