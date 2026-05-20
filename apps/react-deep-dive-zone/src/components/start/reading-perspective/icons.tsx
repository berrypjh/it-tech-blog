import {
  Box,
  CircleCheck,
  Code,
  Link,
  ListOrdered,
  Network,
  Route,
  Target,
  Zap,
} from 'lucide-react';

export {
  ArrowRight as ArrowRightIcon,
  Zap as BoltIcon,
  BookOpen as BookIcon,
  CircleCheck as CheckCircleIcon,
  Check as CheckIcon,
  ChevronRight as ChevronRightIcon,
  Code as CodeIcon,
  Box as CubeIcon,
  File as FileIcon,
  Lightbulb as LightbulbIcon,
  Link as LinkIcon,
  Network as NetworkIcon,
  ListOrdered as QueueIcon,
  RefreshCw as RefreshIcon,
  Route as RouteIcon,
  Sparkle as SparkIcon,
  Target as TargetIcon,
  X as XIcon,
} from 'lucide-react';

export const supportPointIconByName = {
  route: Route,
  target: Target,
  link: Link,
} as const;

export const stageQuestionIconByName = {
  cube: Box,
  network: Network,
  queue: ListOrdered,
  code: Code,
  check: CircleCheck,
  bolt: Zap,
} as const;
