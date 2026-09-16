import { Lightbulb, Repeat } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { UseReducerSharedContent } from '../content';

type Props = { content: UseReducerSharedContent['basicReducer'] };

export const BasicStateReducerCode = ({ content }: Props) => (
  <section
    id="basic-reducer"
    aria-labelledby="heading-basic-reducer"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="basic-reducer"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Repeat className="h-5 w-5" aria-hidden="true" />}
    />

    <CodePreviewPanel header={content.codeHeader} badge="main" code={content.code} />

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
