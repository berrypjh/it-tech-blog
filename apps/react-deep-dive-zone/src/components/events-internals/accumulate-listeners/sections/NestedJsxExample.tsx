import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ListenerCollectionContent } from '../content';
import { CodeIcon, FileTextIcon } from '../icons';

type Props = { content: ListenerCollectionContent['nested'] };

const KEYWORDS = new Set(['function', 'return', 'const']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-blue-600 dark:text-blue-400 font-semibold">
        {tok}
      </span>
    );
  if (tok === 'onClickCapture')
    return (
      <span key={i} className="text-violet-700 dark:text-violet-300 font-bold">
        {tok}
      </span>
    );
  if (tok === 'onClick')
    return (
      <span key={i} className="text-teal-700 dark:text-teal-300 font-bold">
        {tok}
      </span>
    );
  if (tok === 'handleSectionCapture' || tok === 'handleDivClick' || tok === 'handleButtonClick')
    return (
      <span key={i} className="text-violet-700 dark:text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'section' || tok === 'div' || tok === 'button')
    return (
      <span key={i} className="text-rose-600 dark:text-rose-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-700 dark:text-slate-200">
      {tok}
    </span>
  );
};

export const NestedJsxExample = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section aria-labelledby="heading-nested">
      <NumberedSectionHeader
        id="nested"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CodeIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'overflow-hidden rounded-2xl border bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          'border-[var(--term-border)]',
        )}
      >
        <div className="flex items-center gap-2 border-b border-[var(--term-border)] bg-blue-50/50 px-md py-2 dark:bg-blue-950/20">
          <span
            aria-hidden="true"
            className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-blue-200/80 bg-white text-blue-700 dark:border-blue-800/60 dark:bg-slate-950/40 dark:text-blue-200"
          >
            <FileTextIcon className="h-3.5 w-3.5" />
          </span>
          <code className="font-mono text-[11px] sm:text-xsm font-bold text-[var(--term-fg)]">
            {content.fileLabel}
          </code>
        </div>
        <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.85] font-mono">
          <code>
            {lines.map((line, i) => {
              const tokens = line.split(/(\s+|[(){}[\];,.<>=/])/);
              return (
                <div key={i} className="flex">
                  <span
                    aria-hidden="true"
                    className="select-none w-7 shrink-0 pr-3 text-right text-[var(--term-dim)] tabular-nums border-r border-[var(--term-border)] mr-3"
                  >
                    {i + 1}
                  </span>
                  <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>

      <ul className="mt-md flex flex-wrap items-center gap-2">
        {content.legend.map((item) => (
          <li
            key={item.label}
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-3 py-1.5',
              item.tone === 'violet'
                ? 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200'
                : 'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'block h-2 w-2 rounded-full',
                item.tone === 'violet'
                  ? 'bg-violet-500 dark:bg-violet-400'
                  : 'bg-teal-500 dark:bg-teal-400',
              )}
            />
            <code className="font-mono text-[11px] sm:text-xsm font-bold">{item.label}</code>
            <span className="text-[10px] font-mono uppercase tracking-wider opacity-80">
              {item.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
