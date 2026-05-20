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
  Zap as BoltIcon,
  BookOpen as BookIcon,
  Brain as BrainIcon,
  CircleCheck as CheckCircleIcon,
  Check as CheckIcon,
  ChevronDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon,
  Clock as ClockIcon,
  Code as CodeIcon,
  Box as CubeIcon,
  Database as DatabaseIcon,
  Network as DiagramIcon,
  File as FileIcon,
  FolderOpen as FolderOpenIcon,
  FunctionSquare as FxIcon,
  Anchor as HookIcon,
  Lightbulb as LightbulbIcon,
  Monitor as MonitorIcon,
  Pencil as PencilIcon,
  Pin as PinIcon,
  HelpCircle as QuestionIcon,
  Route as RouteIcon,
  Sparkles as SparkIcon,
  Trophy as TrophyIcon,
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
