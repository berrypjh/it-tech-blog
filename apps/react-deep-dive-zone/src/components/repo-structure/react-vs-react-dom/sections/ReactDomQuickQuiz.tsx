import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { QuizAccordionCard } from '../../repo-overview/components/QuizAccordionCard';
import type { ReactVsReactDomContent } from '../content';
import { HelpCircleIcon } from '../icons';

type Props = { content: ReactVsReactDomContent['quiz'] };

export const ReactDomQuickQuiz = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-quiz" className="space-y-md">
      <SectionHeader
        id="quiz"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <QuizAccordionCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};
