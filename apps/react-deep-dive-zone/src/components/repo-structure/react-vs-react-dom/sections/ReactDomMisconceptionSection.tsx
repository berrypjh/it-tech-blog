import { ContrastCard, StatusPill } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import type { ReactVsReactDomContent } from '../content';
import { CheckCircleIcon, HelpCircleIcon, XCircleIcon } from '../icons';

type Props = { content: ReactVsReactDomContent['misconception'] };

export const ReactDomMisconceptionSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-misconception" className="space-y-md">
      <SectionHeader
        id="misconception"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <ContrastCard
        left={
          <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl">
            <StatusPill
              icon={<XCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />}
              tone="text-rose-600 dark:text-rose-300"
            >
              {content.leftBadge}
            </StatusPill>

            <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-rose-600 dark:text-rose-300 break-keep">
              {content.leftQuote}
            </p>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.leftCaption}
            </p>
          </article>
        }
        right={
          <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl">
            <StatusPill
              icon={<CheckCircleIcon className="h-3.5 w-3.5" aria-hidden="true" />}
              tone="text-[var(--term-accent)]"
            >
              {content.rightBadge}
            </StatusPill>

            <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-[var(--term-fg)] break-keep">
              {content.rightQuote}
            </p>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.rightCaption}
            </p>
          </article>
        }
      />
    </section>
  );
};
