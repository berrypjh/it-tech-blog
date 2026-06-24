import {
  Atom,
  Braces,
  Brackets,
  CircleDashed,
  CircleDot,
  Cuboid,
  Flag,
  FolderCheck,
  MonitorSmartphone,
  Package,
  ShieldCheck,
  SquareStack,
  TriangleAlert,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { IconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
  BookOpen as BookOpenIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  CircleHelp as CircleHelpIcon,
  ExternalLink as ExternalLinkIcon,
  FileCode2 as FileCodeIcon,
  Hash as HashIcon,
  Info as InfoIcon,
  Map as MapIcon,
  Package as PackageIcon,
  RotateCcw as RotateIcon,
  Search as SearchIcon,
  Sparkles as SparklesIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const iconByName: Record<IconName, LucideLike> = {
  package: Package,
  atom: Atom,
  monitor: MonitorSmartphone,
  cuboid: Cuboid,
  triangleAlert: TriangleAlert,
  folderCheck: FolderCheck,
  brackets: Brackets,
  braces: Braces,
  shield: ShieldCheck,
  flag: Flag,
  fragment: SquareStack,
  suspense: CircleDashed,
  activity: CircleDot,
};
