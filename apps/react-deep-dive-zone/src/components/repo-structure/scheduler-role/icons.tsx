import {
  Clock,
  Layers,
  MonitorSmartphone,
  MousePointerClick,
  Puzzle,
  RefreshCw,
  Search,
  Sparkles,
  Timer,
  Zap,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { IconName } from './content';

export {
  ArrowDown as ArrowDownIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUp as ArrowUpIcon,
  Boxes as BoxesIcon,
  CheckCircle2 as CheckCircleIcon,
  Check as CheckIcon,
  CircleHelp as CircleHelpIcon,
  Code2 as CodeIcon,
  ExternalLink as ExternalLinkIcon,
  FileCode2 as FileCodeIcon,
  Info as InfoIcon,
  ListOrdered as ListOrderedIcon,
  Map as MapIcon,
  RefreshCw as RefreshIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
  XCircle as XCircleIcon,
  X as XIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const iconByName: Record<IconName, LucideLike> = {
  cursor: MousePointerClick,
  search: Search,
  sparkles: Sparkles,
  zap: Zap,
  puzzle: Puzzle,
  clock: Clock,
  layers: Layers,
  timer: Timer,
  monitor: MonitorSmartphone,
  refresh: RefreshCw,
};
