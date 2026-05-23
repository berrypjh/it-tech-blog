import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { WorkTagCardItem } from '../components/WorkTagCard';
import type { FiberIdentityFieldsContent } from '../content';
import { LightbulbIcon, TagIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['workTags'] };

export const WorkTagSection = ({ content }: Props) => (
  <section id="work-tags" aria-labelledby="heading-work-tags" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="work-tags"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TagIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-sm">
      {content.cards.map((card) => (
        <li key={card.name}>
          <WorkTagCardItem card={card} />
        </li>
      ))}
    </ul>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-sky-300/80 bg-sky-50/70',
        'dark:border-sky-800/60 dark:bg-sky-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
      >
        <LightbulbIcon className="h-5 w-5" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.banner}
      </p>
    </div>
  </section>
);
