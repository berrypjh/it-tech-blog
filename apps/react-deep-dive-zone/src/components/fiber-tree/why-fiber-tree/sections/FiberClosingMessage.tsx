import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberCentralContent } from '../content';
import { AwardIcon } from '../icons';

type Props = { content: FiberCentralContent['closing'] };

export const FiberClosingMessage = ({ content }: Props) => (
  <section id="closing" aria-labelledby="heading-closing" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="closing"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<AwardIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'relative overflow-hidden rounded-3xl border-2 p-md sm:p-xl',
        'border-slate-800 bg-slate-950 text-slate-100',
        'shadow-[0_24px_48px_-24px_rgba(2,6,23,0.7)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.6fr)_minmax(0,_0.4fr)] gap-md lg:gap-lg items-center">
        <div className="flex flex-col gap-md min-w-0">
          <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold leading-[1.25] tracking-tight break-keep text-slate-50">
            <span className="block">{content.mainMessage.line1}</span>
            <span className="block">
              {content.mainMessage.line2.split(content.emphasis).map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span
                      className={cn(
                        'bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent',
                      )}
                    >
                      {content.emphasis}
                    </span>
                  )}
                </span>
              ))}
            </span>
          </h3>
          <p className="text-sm sm:text-md leading-relaxed text-slate-300 max-w-[62ch] break-keep">
            {content.body}
          </p>
        </div>

        {/* Cube/node network illustration */}
        <div aria-hidden="true" className="relative flex items-center justify-center min-h-[160px]">
          <span
            className={cn(
              'absolute left-2 top-2 w-16 h-16 rounded-2xl',
              'bg-gradient-to-br from-sky-500/40 via-violet-500/40 to-emerald-500/40',
              'border border-slate-700 shadow-[0_12px_24px_-12px_rgba(2,6,23,0.6)]',
            )}
          />
          <span
            className={cn(
              'absolute right-2 bottom-2 w-14 h-14 rounded-2xl',
              'bg-gradient-to-br from-emerald-500/40 via-cyan-500/40 to-sky-500/40',
              'border border-slate-700 shadow-[0_12px_24px_-12px_rgba(2,6,23,0.6)]',
            )}
          />
          <span
            className={cn(
              'absolute inset-0 m-auto inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700',
              'text-cyan-300',
            )}
          >
            <AwardIcon className="h-7 w-7" />
          </span>
          {/* connectors */}
          <span className="absolute left-10 top-10 block h-px w-12 border-t border-dashed border-cyan-400/50 rotate-45" />
          <span className="absolute right-10 bottom-10 block h-px w-12 border-t border-dashed border-violet-400/50 rotate-45" />
        </div>
      </div>
    </article>
  </section>
);
