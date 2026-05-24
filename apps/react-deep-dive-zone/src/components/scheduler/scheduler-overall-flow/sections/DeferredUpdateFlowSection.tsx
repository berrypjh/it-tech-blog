import type { FullFlowContent } from '../content';

import { UpdateFlowSection } from './UpdateFlowSection';

type Props = { content: FullFlowContent['deferredFlow'] };

export const DeferredUpdateFlowSection = ({ content }: Props) => (
  <UpdateFlowSection
    id="deferred-flow"
    variant="deferred"
    number={content.number}
    title={content.title}
    helper={content.helper}
    steps={content.steps}
    note={content.note}
  />
);
