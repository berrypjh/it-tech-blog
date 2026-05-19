import { DisabilityTypesSection } from './sections/DisabilityTypesSection';
import { EnvironmentalBarriersSection } from './sections/EnvironmentalBarriersSection';
import { ExperienceSimulatorSection } from './sections/ExperienceSimulatorSection';
import { NextLearningCta } from './sections/NextLearningCta';
import { ResponsePrinciplesSection } from './sections/ResponsePrinciplesSection';
import { UserEnvironmentHeroSection } from './sections/UserEnvironmentHeroSection';
import { disabilitiesContent, type DisabilitiesLocale } from './content';

export const AccessibilityDisabilitiesPage = ({ locale }: { locale: DisabilitiesLocale }) => {
  const c = disabilitiesContent[locale] ?? disabilitiesContent.ko;
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-lg py-xl sm:px-xl lg:px-2xl lg:py-2xl">
      <div className="flex flex-col gap-xl lg:gap-2xl">
        <UserEnvironmentHeroSection content={c.hero} />
        <DisabilityTypesSection content={c.types} />
        <ExperienceSimulatorSection content={c.simulator} />
        <EnvironmentalBarriersSection content={c.barriers} />
        <ResponsePrinciplesSection content={c.principles} />
        <NextLearningCta content={c.cta} />
      </div>
    </div>
  );
};
