import {
  Anchor,
  Box,
  Brain,
  Check,
  CircleCheck,
  Clock,
  Database,
  FolderOpen,
  FunctionSquare,
  Pencil,
  Pin,
  Route,
  X,
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

export const flowIconByName = {
  hook: Anchor,
  fx: FunctionSquare,
  database: Database,
  clock: Clock,
  cube: Box,
  check: CircleCheck,
} as const;
