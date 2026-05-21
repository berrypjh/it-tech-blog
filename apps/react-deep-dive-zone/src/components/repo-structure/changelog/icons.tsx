import {
  BookOpen,
  Box,
  FileClock,
  FileCode2,
  FileText,
  GitCommit,
  GitPullRequest,
  History,
  Package,
  PencilLine,
  RotateCcw,
  ShieldCheck,
  Tag,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { IconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
  BadgeCheck as BadgeCheckIcon,
  BookOpen as BookOpenIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  Compass as CompassIcon,
  ExternalLink as ExternalLinkIcon,
  FileText as FileTextIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  Map as MapIcon,
  PencilLine as PencilIcon,
  RotateCcw as RotateIcon,
  ShieldCheck as ShieldCheckIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  Tag as TagIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const iconByName: Record<IconName, LucideLike> = {
  fileText: FileText,
  bookOpen: BookOpen,
  fileClock: FileClock,
  tag: Tag,
  history: History,
  rotate: RotateCcw,
  gitPull: GitPullRequest,
  package: Package,
  fileCode: FileCode2,
  gitCommit: GitCommit,
  box: Box,
  pencil: PencilLine,
  shieldCheck: ShieldCheck,
};
