import {
  AlertCircle,
  ArrowRight,
  Atom,
  BadgeInfo,
  Box,
  Boxes,
  CheckCircle2,
  Code,
  FileCode,
  FileText,
  Flag,
  GitBranch,
  HelpCircle,
  Layers,
  Network,
  Package,
  Share2,
  Star,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { SharedIconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
  BadgeInfo as BadgeInfoIcon,
  BookOpen as BookOpenIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronRight as ChevronRightIcon,
  Code2 as CodeIcon,
  ExternalLink as ExternalLinkIcon,
  HelpCircle as HelpCircleIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  Map as MapIcon,
  PlayCircle as PlayCircleIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  XCircle as XCircleIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const sharedIcon: Record<SharedIconName, LucideLike> = {
  alertCircle: AlertCircle,
  arrowRight: ArrowRight,
  atom: Atom,
  box: Box,
  check: CheckCircle2,
  code: Code,
  cube: Boxes,
  fileCode: FileCode,
  fileText: FileText,
  flag: Flag,
  gitBranch: GitBranch,
  help: HelpCircle,
  info: BadgeInfo,
  layers: Layers,
  network: Network,
  package: Package,
  share: Share2,
  star: Star,
};
