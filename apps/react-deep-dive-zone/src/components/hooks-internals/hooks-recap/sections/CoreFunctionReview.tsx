import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { HooksRecapContent } from '../content';
import { FileSearchIcon } from '../icons';

import { toneDot, toneText } from './_shared/tones';

type Props = { content: HooksRecapContent['functions'] };

export const CoreFunctionReview = ({ content }: Props) => (
  <section
    aria-labelledby="heading-functions"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="functions"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileSearchIcon className="h-5 w-5" />}
    />

    {/* Desktop table */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th
              scope="col"
              className="text-left p-md text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] border-b-2 border-[var(--term-border)] bg-[var(--term-border)]/15 break-keep"
            >
              {content.headers.name}
            </th>
            <th
              scope="col"
              className="text-left p-md text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] border-b-2 border-l border-[var(--term-border)] bg-[var(--term-border)]/15 break-keep"
            >
              {content.headers.file}
            </th>
            <th
              scope="col"
              className="text-left p-md text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] border-b-2 border-l border-[var(--term-border)] bg-[var(--term-border)]/15 break-keep"
            >
              {content.headers.description}
            </th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, i) => (
            <tr key={row.name} className={i % 2 === 1 ? 'bg-[var(--term-border)]/5' : ''}>
              <th
                scope="row"
                className="text-left align-top p-md border-b border-[var(--term-border)] break-keep"
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn('inline-block h-2 w-2 rounded-full', toneDot[row.tone])}
                  />
                  <code
                    className={cn('font-mono text-xsm font-bold break-all', toneText[row.tone])}
                  >
                    {row.name}
                  </code>
                </div>
              </th>
              <td className="p-md border-b border-l border-[var(--term-border)] text-[11px] sm:text-xsm align-top">
                <code className="font-mono text-[var(--term-muted)] break-all">{row.file}</code>
              </td>
              <td className="p-md border-b border-l border-[var(--term-border)] text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep align-top">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile cards */}
    <ul className="md:hidden flex flex-col gap-md">
      {content.rows.map((row) => (
        <li key={row.name}>
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
              'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn('inline-block h-2 w-2 rounded-full', toneDot[row.tone])}
              />
              <code className={cn('font-mono text-sm font-bold break-all', toneText[row.tone])}>
                {row.name}
              </code>
            </header>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.headers.file}
              </p>
              <code className="font-mono text-[11px] text-[var(--term-fg)] break-all">
                {row.file}
              </code>
            </div>
            <p className="text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep">
              {row.description}
            </p>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
