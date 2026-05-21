import {
  Activity,
  ArrowRight,
  Boxes,
  CheckCircle2,
  Clock,
  Code,
  FileCode,
  FileText,
  Gauge,
  GitBranch,
  HelpCircle,
  Keyboard,
  Layers,
  ListOrdered,
  Monitor,
  Puzzle,
  RefreshCw,
  Sparkles,
  Star,
  Timer,
  User,
  Zap,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { SchedulerIconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
  BookOpen as BookOpenIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronRight as ChevronRightIcon,
  Code2 as CodeIcon,
  HelpCircle as HelpCircleIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  ListOrdered as ListOrderedIcon,
  Map as MapIcon,
  PlayCircle as PlayCircleIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  XCircle as XCircleIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const schedulerIcon: Record<SchedulerIconName, LucideLike> = {
  activity: Activity,
  arrowRight: ArrowRight,
  check: CheckCircle2,
  clock: Clock,
  code: Code,
  cube: Boxes,
  fileCode: FileCode,
  fileText: FileText,
  gauge: Gauge,
  gitBranch: GitBranch,
  help: HelpCircle,
  keyboard: Keyboard,
  layers: Layers,
  lightning: Zap,
  list: ListOrdered,
  monitor: Monitor,
  puzzle: Puzzle,
  refresh: RefreshCw,
  star: Star,
  timer: Timer,
  user: User,
};

export { Sparkles as SparkleIcon };
