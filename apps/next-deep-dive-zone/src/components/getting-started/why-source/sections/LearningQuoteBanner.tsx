import type { WhyReadNextSourceContent } from '../content';
import { QuoteIcon } from '../icons';

type Props = { content: WhyReadNextSourceContent['quote'] };

export const LearningQuoteBanner = ({ content }: Props) => {
  return (
    <section aria-label="learning attitude" className="relative">
      <figure className="relative overflow-hidden rounded-lg border border-cyan-200/70 bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50 p-lg sm:p-xl text-center dark:border-cyan-800/50 dark:from-sky-950/40 dark:via-cyan-950/30 dark:to-slate-950/40">
        <QuoteIcon
          className="mx-auto mb-sm h-7 w-7 text-cyan-500 dark:text-cyan-300"
          aria-hidden="true"
        />
        <blockquote>
          <p className="mx-auto max-w-[60ch] text-md sm:text-lg font-bold leading-relaxed tracking-tight text-slate-800 dark:text-slate-100 break-keep">
            {content.lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </blockquote>
      </figure>
    </section>
  );
};
