import {
  Atom,
  Boxes,
  CircleCheck,
  Cuboid,
  FileBox,
  Flag,
  MonitorSmartphone,
  Network,
  Package,
  Workflow,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { IconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  CircleHelp as CircleHelpIcon,
  Cuboid as CuboidIcon,
  ExternalLink as ExternalLinkIcon,
  FileCode2 as FileCodeIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  Map as MapIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const iconByName: Record<IconName, LucideLike> = {
  atom: Atom,
  cube: Cuboid,
  monitor: MonitorSmartphone,
  check: CircleCheck,
  fileCode: FileBox,
  network: Network,
  flag: Flag,
  package: Package,
  workflow: Workflow,
};

// Boxes는 Fiber 노드 네트워크 장식용 — 외부 별칭으로 명시 export
export { Boxes as FiberCubeIcon };
