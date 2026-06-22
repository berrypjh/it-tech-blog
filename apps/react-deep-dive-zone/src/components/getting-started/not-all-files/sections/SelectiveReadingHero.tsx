import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { QuestionPathVisual } from '../components/QuestionPathVisual';
import type { NotAllFilesContent } from '../content';

type Props = { content: NotAllFilesContent['hero'] };

export const SelectiveReadingHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="grep -r"
      promptPath="'question'"
      promptSuffix=" packages/"
      gridColumns="lg:grid-cols-[minmax(0,_1.04fr)_minmax(0,_0.96fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.stepBadge}
        </TerminalBadge>

        <HeroTitle>
          {content.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </HeroTitle>

        <HeroDescription maxWidth="max-w-[58ch]" lines={content.description} />
      </HeroTextColumn>

      <HeroVisualColumn>
        <QuestionPathVisual visual={content.visual} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
