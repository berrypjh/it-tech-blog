import {
  Atom,
  Box,
  Code,
  Database,
  DoorOpen,
  ExternalLink,
  FileCode,
  FileText,
  GitBranch,
  Layers,
  Link as LinkIcon,
  Monitor,
  Network,
  PlayCircle,
  RotateCw,
  Sparkles,
  User,
  Workflow,
  Zap,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { ReactPackageIconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
  BookOpen as BookOpenIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronRight as ChevronRightIcon,
  Code2 as CodeIcon,
  ExternalLink as ExternalLinkIcon,
  HelpCircle as HelpCircleIcon,
  Info as InfoIcon,
  Map as MapIcon,
  PlayCircle as PlayCircleIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  XCircle as XCircleIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const reactPackageIcon: Record<ReactPackageIconName, LucideLike> = {
  atom: Atom,
  box: Box,
  code: Code,
  database: Database,
  door: DoorOpen,
  externalLink: ExternalLink,
  fileCode: FileCode,
  fileText: FileText,
  flow: Workflow,
  hook: GitBranch,
  layers: Layers,
  lightning: Zap,
  link: LinkIcon,
  monitor: Monitor,
  network: Network,
  play: PlayCircle,
  refresh: RotateCw,
  star: Sparkles,
  user: User,
  zap: Zap,
};
