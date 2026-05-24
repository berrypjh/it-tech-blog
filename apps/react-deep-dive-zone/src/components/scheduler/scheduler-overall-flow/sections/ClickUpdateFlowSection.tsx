import type { FullFlowContent } from '../content';

import { UpdateFlowSection } from './UpdateFlowSection';

type Props = { content: FullFlowContent['clickFlow'] };

export const ClickUpdateFlowSection = ({ content }: Props) => (
  <UpdateFlowSection
    id="click-flow"
    variant="click"
    number={content.number}
    title={content.title}
    helper={content.helper}
    steps={content.steps}
    note={content.note}
  />
);
