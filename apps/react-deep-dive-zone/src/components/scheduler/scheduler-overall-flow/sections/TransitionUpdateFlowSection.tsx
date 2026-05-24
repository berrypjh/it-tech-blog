import type { FullFlowContent } from '../content';

import { UpdateFlowSection } from './UpdateFlowSection';

type Props = { content: FullFlowContent['transitionFlow'] };

export const TransitionUpdateFlowSection = ({ content }: Props) => (
  <UpdateFlowSection
    id="transition-flow"
    variant="transition"
    number={content.number}
    title={content.title}
    helper={content.helper}
    steps={content.steps}
    note={content.note}
  />
);
