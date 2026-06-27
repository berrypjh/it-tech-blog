import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { FinalArchitectureDiagram } from '../components/FinalArchitectureDiagram';
import type { PackageDesignContent } from '../content';
import { MapIcon, StarIcon } from '../icons';

type Props = { content: PackageDesignContent['finalDiagram'] };

export const FinalDiagramSection = ({ content }: Props) => {
  const a11y = `사용자 코드 → react → react-reconciler → renderer → DOM / Native 중앙 흐름과, 우측에 scheduler / shared 두 보조 축이 있는 종합 다이어그램.`;

  return (
    <section aria-labelledby="heading-final-diagram" className="space-y-md">
      <SectionHeader
        id="final-diagram"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <FinalArchitectureDiagram
        main={content.main}
        scheduler={content.scheduler}
        shared={content.shared}
        a11y={a11y}
      />

      <SectionNote icon={<StarIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};
