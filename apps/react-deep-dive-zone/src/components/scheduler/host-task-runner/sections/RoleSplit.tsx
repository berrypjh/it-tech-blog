import { Cpu, Layers, type LucideIcon, SplitSquareHorizontal } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { HostTaskRunnerContent, SideId } from '../content';

type Props = { content: HostTaskRunnerContent['roles'] };

const sideIcon: Record<SideId, LucideIcon> = {
  root: Layers,
  package: Cpu,
};

export const RoleSplit = ({ content }: Props) => {
  const [root, pkg] = content.sides;

  return (
    <section id="roles" aria-labelledby="heading-roles" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="roles"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SplitSquareHorizontal className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={root.tone}
          icon={sideIcon[root.id]}
          title={root.title}
          badge={root.badge}
          description={root.description}
          bullets={root.bullets}
        />
        <CompareBridge
          icon={<SplitSquareHorizontal className="h-5 w-5" aria-hidden="true" />}
          headline={content.bridge.headline}
          sub={content.bridge.sub}
        />
        <ToneDetailCard
          tone={pkg.tone}
          icon={sideIcon[pkg.id]}
          title={pkg.title}
          badge={pkg.badge}
          description={pkg.description}
          bullets={pkg.bullets}
        />
      </div>
    </section>
  );
};
