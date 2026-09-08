import { Map, Star } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { FinalArchitectureDiagram } from '../components/FinalArchitectureDiagram';
import type { PackageDesignContent } from '../content';

type Props = { content: PackageDesignContent['recap'] };

const DIAGRAM_A11Y = `사용자 코드 → react → react-reconciler → renderer → DOM / Native 중앙 흐름과, 우측에 scheduler / shared 두 보조 축이 있는 종합 다이어그램. 각 단계에는 패키지 역할을 한 문장으로 설명하는 문구가 붙어 있다.`;

export const RecapSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-recap" className="space-y-md">
      <SectionHeader
        id="recap"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Map className="h-5 w-5" aria-hidden="true" />}
      />

      <FinalArchitectureDiagram
        main={content.main}
        scheduler={content.scheduler}
        shared={content.shared}
        a11y={DIAGRAM_A11Y}
      />

      <SectionNote icon={<Star className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};
