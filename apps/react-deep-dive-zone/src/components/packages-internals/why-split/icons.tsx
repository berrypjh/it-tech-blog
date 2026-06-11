import {
  Atom,
  Book,
  Boxes,
  Clock,
  Code,
  Globe,
  Layers,
  Monitor,
  Network,
  Shield,
  Smartphone,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { ArchitectureIconName } from './content';

export {
  ArrowDown as ArrowDownIcon,
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircleIcon,
  Compass as CompassIcon,
  HelpCircle as HelpCircleIcon,
  Map as MapIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
  XCircle as XCircleIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const architectureIcon: Record<ArchitectureIconName, LucideLike> = {
  code: Code,
  atom: Atom,
  boxes: Boxes,
  monitor: Monitor,
  smartphone: Smartphone,
  clock: Clock,
  layers: Layers,
  shield: Shield,
  globe: Globe,
  network: Network,
  book: Book,
};
