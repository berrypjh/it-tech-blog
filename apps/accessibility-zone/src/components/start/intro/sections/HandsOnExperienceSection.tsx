import { AccessibleNameMission } from '../components/AccessibleNameMission';
import { KeyboardNavigationMission } from '../components/KeyboardNavigationMission';
import type { IntroContent } from '../content';

export const HandsOnExperienceSection = ({ content }: { content: IntroContent['handsOn'] }) => {
  return (
    <section
      aria-labelledby="handson-heading"
      className="rounded-xl border border-stroke-default bg-background-default/40 p-lg sm:p-xl"
    >
      <header className="mb-mdl flex flex-col gap-1">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-rounded bg-background-surface px-2 py-0.5 text-[0.625rem] font-extraBold uppercase tracking-wider text-text-primary">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-rounded bg-background-primary text-[0.5625rem] text-text-contrastText">
            03
          </span>
          직접 체험
        </span>
        <h2 id="handson-heading" className="text-xl font-bold text-text-default sm:text-xxl">
          {content.title}
        </h2>
        <p className="text-xsm text-text-light sm:text-sm">{content.description}</p>
      </header>

      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        <KeyboardNavigationMission content={content.mission1} />
        <AccessibleNameMission content={content.mission2} />
      </div>
    </section>
  );
};
