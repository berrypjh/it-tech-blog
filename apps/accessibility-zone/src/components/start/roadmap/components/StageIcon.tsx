import {
  Briefcase,
  CircleCheck,
  ClipboardList,
  CodeXml,
  Flag,
  Keyboard,
  Layers,
  Palette,
  Rocket,
  Volume2,
} from 'lucide-react';

import type { LearningStage } from '../content';

type Props = { id: LearningStage['iconId'] };

/** iconId를 lucide 아이콘 노드로 매핑. 장식용이므로 aria-hidden. */
export const StageIcon = ({ id }: Props) => {
  const props = { className: 'h-4.5 w-4.5', 'aria-hidden': true } as const;
  switch (id) {
    case 'flag':
      return <Flag {...props} />;
    case 'code':
      return <CodeXml {...props} />;
    case 'keyboard':
      return <Keyboard {...props} />;
    case 'speaker':
      return <Volume2 {...props} />;
    case 'form':
      return <ClipboardList {...props} />;
    case 'cube':
      return <Layers {...props} />;
    case 'palette':
      return <Palette {...props} />;
    case 'check-list':
      return <CircleCheck {...props} />;
    case 'briefcase':
      return <Briefcase {...props} />;
    case 'rocket':
      return <Rocket {...props} />;
  }
};
