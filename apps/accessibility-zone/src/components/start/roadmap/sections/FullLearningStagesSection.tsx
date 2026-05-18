import { LearningStageRow } from '../components/LearningStageRow';
import type { RoadmapContent } from '../content';

export const FullLearningStagesSection = ({ content }: { content: RoadmapContent['stages'] }) => {
  return (
    <section
      aria-labelledby="stages-heading"
      className="rounded-xl border border-stroke-default bg-background-surface shadow-sm"
    >
      <header className="flex flex-col gap-1 border-b border-stroke-default px-lg py-mdl sm:px-xl sm:py-lg">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-default px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            01
          </span>
          학습 단계
        </span>
        <h2 id="stages-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
        <p className="text-xsm leading-relaxed text-text-light sm:text-sm">{content.description}</p>
      </header>

      <ol className="flex flex-col">
        {content.items.map((stage, i) => (
          <LearningStageRow key={stage.id} stage={stage} isLast={i === content.items.length - 1} />
        ))}
      </ol>
    </section>
  );
};
