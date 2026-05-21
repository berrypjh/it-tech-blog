import {
  CircleCheck,
  ClipboardCheck,
  Code2,
  FileCode2,
  FileText,
  Folder,
  FolderOpen,
  Package,
  PackageSearch,
  Tag,
  Workflow,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { IconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
  BookOpen as BookOpenIcon,
  CheckCircle2 as CheckCircleIcon,
  Compass as CompassIcon,
  ExternalLink as ExternalLinkIcon,
  FileText as FileTextIcon,
  Map as MapIcon,
  PencilLine as PencilIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  Trophy as TrophyIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const iconByName: Record<IconName, LucideLike> = {
  folder: Folder,
  package: Package,
  code: Code2,
  check: CircleCheck,
  tag: Tag,
  folderOpen: FolderOpen,
  search: PackageSearch,
  fileCode: FileCode2,
  clipboard: ClipboardCheck,
  workflow: Workflow,
  fileText: FileText,
};
