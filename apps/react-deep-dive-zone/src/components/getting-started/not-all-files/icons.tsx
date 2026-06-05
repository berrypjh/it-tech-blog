import {
  Anchor,
  Box,
  Brain,
  Check,
  CircleCheck,
  Clock,
  Code,
  Database,
  FolderOpen,
  FunctionSquare,
  HelpCircle,
  Monitor,
  Network,
  Pencil,
  Pin,
  Route,
  X,
  Zap,
} from 'lucide-react';

export {
  ArrowRight as ArrowRightIcon,
  BookOpen as BookIcon,
  Brain as BrainIcon,
  CircleCheck as CheckCircleIcon,
  Check as CheckIcon,
  Clock as ClockIcon,
  Code as CodeIcon,
  Box as CubeIcon,
  Database as DatabaseIcon,
  Network as DiagramIcon,
  File as FileIcon,
  FolderOpen as FolderOpenIcon,
  FunctionSquare as FxIcon,
  Anchor as HookIcon,
  Monitor as MonitorIcon,
  HelpCircle as QuestionIcon,
  Route as RouteIcon,
  Sparkles as SparkIcon,
  X as XIcon,
} from 'lucide-react';

export const insightIconByName = {
  question: HelpCircle,
  route: Route,
  diagram: Network,
} as const;

export const approachIconByName = {
  x: X,
  open: FolderOpen,
  brain: Brain,
  check: Check,
  pin: Pin,
  route: Route,
  pencil: Pencil,
} as const;

export const questionCardIconByName = {
  code: Code,
  cube: Box,
  bolt: Zap,
  monitor: Monitor,
} as const;

export const flowIconByName = {
  hook: Anchor,
  fx: FunctionSquare,
  database: Database,
  clock: Clock,
  cube: Box,
  check: CircleCheck,
} as const;
