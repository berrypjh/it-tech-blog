import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { FinalArchitectureDiagram } from '../components/FinalArchitectureDiagram';
import type { PackageDesignContent } from '../content';
import { MapIcon, StarIcon } from '../icons';

type Props = { content: PackageDesignContent['finalDiagram']; sectionId: string };

export const FinalDiagramSection = ({ content, sectionId }: Props) => {
  const a11y = `사용자 코드 → react → react-reconciler → renderer → DOM / Native 중앙 흐름과, 우측에 scheduler / shared 두 보조 축이 있는 종합 다이어그램.`;

  return (
    <section
      id={sectionId}
      aria-labelledby="heading-final-diagram"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="final-diagram"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <FinalArchitectureDiagram
        main={content.main}
        scheduler={content.scheduler}
        shared={content.shared}
        a11y={a11y}
      />

      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-teal-300/80 bg-teal-50 text-teal-900',
          'dark:border-teal-800/70 dark:bg-teal-950/40 dark:text-teal-100',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-teal-600 dark:text-teal-300">
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.banner}</p>
      </div>
    </section>
  );
};
