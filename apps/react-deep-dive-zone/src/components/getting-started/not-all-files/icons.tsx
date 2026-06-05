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
  Monitor,
  Pencil,
  Pin,
  Route,
  X,
  Zap,
} from 'lucide-react';

export {
  ArrowRight as ArrowRightIcon,
  BookOpen as BookIcon,
  CircleCheck as CheckCircleIcon,
  Check as CheckIcon,
  Code as CodeIcon,
  Network as DiagramIcon,
  File as FileIcon,
  FolderOpen as FolderOpenIcon,
  FunctionSquare as FxIcon,
  HelpCircle as QuestionIcon,
  Route as RouteIcon,
  Sparkles as SparkIcon,
  X as XIcon,
} from 'lucide-react';

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
