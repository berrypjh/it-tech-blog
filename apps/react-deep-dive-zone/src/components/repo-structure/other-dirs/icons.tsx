import {
  Bug,
  Cuboid,
  FileCode2,
  FlaskConical,
  Folder,
  GitBranch,
  Package,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Zap,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { IconName } from './content';

export {
  ArrowDown as ArrowDownIcon,
  ArrowRight as ArrowRightIcon,
  ExternalLink as ExternalLinkIcon,
  FileJson as FileJsonIcon,
  Folder as FolderIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  MapPinned as MapPinnedIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
  TerminalSquare as TerminalIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const iconByName: Record<IconName, LucideLike> = {
  folder: Folder,
  flask: FlaskConical,
  terminal: TerminalSquare,
  package: Package,
  zap: Zap,
  bug: Bug,
  server: Server,
  sparkles: Sparkles,
  gitBranch: GitBranch,
  fileCode: FileCode2,
  shieldCheck: ShieldCheck,
  cuboid: Cuboid,
};
