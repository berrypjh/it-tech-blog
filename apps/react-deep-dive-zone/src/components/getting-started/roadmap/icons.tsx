import {
  Anchor,
  Box,
  CircleCheck,
  Code,
  Flag,
  Gauge,
  MousePointerClick,
  Network,
  Sparkle,
} from 'lucide-react';

export { GithubIcon } from '../../shared/GithubIcon';
export {
  ArrowRight as ArrowRightIcon,
  CircleCheck as CheckCircleIcon,
  Code as CodeIcon,
  File as FileIcon,
  Flag as FlagIcon,
  FolderOpen as FolderOpenIcon,
  Pencil as PencilIcon,
  RefreshCw as RefreshIcon,
  Route as RouteIcon,
  Sparkle as SparkIcon,
} from 'lucide-react';

export const roadmapIconByName = {
  cube: Box,
  network: Network,
  code: Code,
  check: CircleCheck,
  hook: Anchor,
  event: MousePointerClick,
  gauge: Gauge,
  spark: Sparkle,
} as const;

export const deliverableIconByName = {
  cube: Box,
  network: Network,
  code: Code,
  check: CircleCheck,
  hook: Anchor,
  gauge: Gauge,
  flag: Flag,
} as const;
