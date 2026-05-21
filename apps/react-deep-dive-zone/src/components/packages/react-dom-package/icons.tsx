import {
  AppWindow,
  Atom,
  Box,
  Boxes,
  Code,
  Droplet,
  FileCode,
  FileText,
  Globe,
  HelpCircle,
  Layers,
  Monitor,
  Network,
  RefreshCw,
  Server,
  Sparkles,
  Workflow,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { ReactDomIconName } from './content';

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

export const reactDomIcon: Record<ReactDomIconName, LucideLike> = {
  atom: Atom,
  box: Box,
  container: AppWindow,
  cube: Boxes,
  fileCode: FileCode,
  fileText: FileText,
  flow: Workflow,
  globe: Globe,
  help: HelpCircle,
  hydration: Droplet,
  layers: Layers,
  monitor: Monitor,
  network: Network,
  refresh: RefreshCw,
  server: Server,
  sparkles: Sparkles,
};

export { Code as CodeBlockIcon };
