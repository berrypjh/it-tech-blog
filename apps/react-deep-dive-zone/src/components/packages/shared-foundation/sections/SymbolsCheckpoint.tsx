import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { ToneIconBox } from '../../../start/_shared/ToneIconBox';
import { SharedCodePanel } from '../components/SharedCodePanel';
import type { SharedContent } from '../content';
import { ChevronRightIcon, CodeIcon, sharedIcon } from '../icons';

type Props = { content: SharedContent['symbolsCheckpoint']; sectionId: string };

export const SymbolsCheckpoint = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-symbols-checkpoint"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="symbols-checkpoint"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckHeaderIcon />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.6fr)_minmax(0,_1.4fr)] gap-md items-stretch">
        {/* 좌측 정보 카드 */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          <ul className="flex flex-col divide-y divide-dashed divide-[var(--term-border)]">
            {/* file */}
            <li className="py-3 first:pt-0">
              <CheckpointRow
                label={content.checkpoint.file.label}
                value={content.checkpoint.file.value}
                iconName="fileText"
                tone="sky"
                isMonoValue
              />
            </li>
            {/* look at */}
            <li className="py-3">
              <CheckpointRow
                label={content.checkpoint.look.label}
                value={content.checkpoint.look.values.join(', ')}
                iconName="fileCode"
                tone="violet"
                isMonoValue
              />
            </li>
            {/* question */}
            <li className="py-3 last:pb-0">
              <CheckpointRow
                label={content.checkpoint.question.label}
                value={content.checkpoint.question.value}
                iconName="help"
                tone="amber"
              />
            </li>
          </ul>

          <button
            type="button"
            className={cn(
              'group/btn inline-flex items-center justify-center gap-2 rounded-md px-md py-2 text-xsm font-bold',
              'bg-violet-500 text-white transition-colors hover:bg-violet-400',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-violet-500 dark:hover:bg-violet-400 dark:text-slate-950',
            )}
          >
            <CodeIcon className="h-4 w-4" aria-hidden="true" />
            {content.checkpoint.button}
            <ChevronRightIcon
              className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
        </article>

        {/* 우측 코드 패널 + 콜아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.4fr)_minmax(0,_0.7fr)] gap-md items-stretch">
          <SharedCodePanel caption={content.codeCaption} code={content.code} />

          <ul className="flex flex-col gap-md">
            {content.callouts.map((callout) => (
              <li key={callout.id}>
                <CalloutCard title={callout.title} code={callout.code} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type RowProps = {
  label: string;
  value: string;
  iconName: 'fileText' | 'fileCode' | 'help';
  tone: 'sky' | 'violet' | 'amber';
  isMonoValue?: boolean;
};

const CheckpointRow = ({ label, value, iconName, tone, isMonoValue = false }: RowProps) => {
  const Icon = sharedIcon[iconName];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,6.5rem)_minmax(0,1fr)] items-start gap-sm">
      <ToneIconBox tone={tone} size="sm">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </ToneIconBox>
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold font-mono pt-2">
        {label}
      </span>
      <span
        className={cn(
          'text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-words pt-1.5',
          isMonoValue && 'font-mono',
        )}
      >
        {value}
      </span>
    </div>
  );
};

const CalloutCard = ({ title, code }: { title: string; code: string }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-1.5 rounded-xl border p-md',
      'border-violet-300/80 bg-violet-50 text-violet-900',
      'dark:border-violet-800/70 dark:bg-violet-950/40 dark:text-violet-100',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <span className="text-[10px] uppercase tracking-wider font-bold font-mono text-violet-700 dark:text-violet-300">
      {title}
    </span>
    <code className="text-xsm font-mono leading-snug break-words text-violet-800 dark:text-violet-100">
      {code}
    </code>
  </article>
);

const CheckHeaderIcon = () => (
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
