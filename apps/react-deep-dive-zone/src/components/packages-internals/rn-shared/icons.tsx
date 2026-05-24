import {
  ArrowRight,
  Box,
  Boxes,
  CheckCircle2,
  Clock,
  Code,
  FileText,
  GitBranch,
  HelpCircle,
  Layers,
  Monitor,
  Network,
  Pencil,
  Puzzle,
  Search,
  Smartphone,
  Sparkles,
  Star,
  Terminal,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { RnIconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
  BadgeInfo as BadgeInfoIcon,
  BookOpen as BookOpenIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronRight as ChevronRightIcon,
  Code2 as CodeIcon,
  HelpCircle as HelpCircleIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  Map as MapIcon,
  PlayCircle as PlayCircleIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  XCircle as XCircleIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const rnIcon: Record<RnIconName, LucideLike> = {
  arrowRight: ArrowRight,
  box: Box,
  check: CheckCircle2,
  clock: Clock,
  code: Code,
  cube: Boxes,
  fileText: FileText,
  gitBranch: GitBranch,
  help: HelpCircle,
  layers: Layers,
  monitor: Monitor,
  network: Network,
  pencil: Pencil,
  puzzle: Puzzle,
  search: Search,
  smartphone: Smartphone,
  sparkles: Sparkles,
  stack: Layers,
  star: Star,
  terminal: Terminal,
};
