import { SectionHeader } from '../../../shared/SectionHeader';
import type { UsageVsInternalsContent } from '../content';
import { LightbulbIcon } from '../icons';

type Props = { content: UsageVsInternalsContent['takeaway'] };

export const CoreTakeawayBanner = ({ content }: Props) => {
  return (
    <section id="section-takeaway" aria-labelledby="heading-takeaway" className="space-y-md">
      <SectionHeader
        id="takeaway"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<LightbulbIcon className="h-5 w-5" />}
      />

      <div className="relative overflow-hidden rounded-xl border border-[var(--term-border)] border-l-[3px] border-l-[var(--term-accent)] bg-[var(--term-surface)] p-lg sm:p-xl shadow-[0_2px_0_var(--term-border)]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-[var(--term-accent)] opacity-[0.07] blur-2xl"
        />

        <p className="relative text-sm sm:text-md font-semibold leading-relaxed text-[var(--term-fg)] break-keep">
          {content.lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};
