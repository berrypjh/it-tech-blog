import {
  ArrowRight,
  Box,
  Boxes,
  Calendar,
  CheckCircle2,
  Clock,
  Code,
  FileCode,
  FileText,
  GitBranch,
  HelpCircle,
  Info,
  Layers,
  ListTodo,
  Monitor,
  Network,
  Server,
  Settings,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Star,
  Table,
  Workflow,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { RvrIconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
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

export const rvrIcon: Record<RvrIconName, LucideLike> = {
  arrowRight: ArrowRight,
  box: Box,
  calendar: Calendar,
  check: CheckCircle2,
  clock: Clock,
  code: Code,
  cube: Boxes,
  fileCode: FileCode,
  fileText: FileText,
  gitBranch: GitBranch,
  help: HelpCircle,
  info: Info,
  layers: Layers,
  monitor: Monitor,
  network: Network,
  queue: ListTodo,
  server: Server,
  settings: Settings,
  sliders: SlidersHorizontal,
  smartphone: Smartphone,
  star: Star,
  table: Table,
  workflow: Workflow,
};

export { Sparkles as SparkleIcon };
