import {
  ArrowRight,
  Atom,
  Box,
  Boxes,
  CheckCircle2,
  Clock,
  Code,
  FileCode,
  FileText,
  GitBranch,
  GitCommit,
  HelpCircle,
  Layers,
  Lightbulb,
  Monitor,
  Network,
  Search,
  SlidersHorizontal,
  Workflow,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { ReconcilerIconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
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
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  XCircle as XCircleIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const reconcilerIcon: Record<ReconcilerIconName, LucideLike> = {
  arrowRight: ArrowRight,
  atom: Atom,
  box: Box,
  cube: Boxes,
  check: CheckCircle2,
  clock: Clock,
  code: Code,
  commit: GitCommit,
  fileCode: FileCode,
  fileText: FileText,
  gitBranch: GitBranch,
  helpCircle: HelpCircle,
  layers: Layers,
  lightbulb: Lightbulb,
  monitor: Monitor,
  network: Network,
  question: HelpCircle,
  search: Search,
  sliders: SlidersHorizontal,
  workflow: Workflow,
};
