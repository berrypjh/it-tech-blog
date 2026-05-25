import { Boxes, GitBranch, History, Plug } from 'lucide-react';

export {
  AlertTriangle as AlertTriangleIcon,
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircleIcon,
  ClipboardCheck as ClipboardCheckIcon,
  Compass as CompassIcon,
  FileCode2 as FileCodeIcon,
  HelpCircle as HelpCircleIcon,
  ListChecks as ListChecksIcon,
  MessageCircleQuestion as MessageCircleQuestionIcon,
  Quote as QuoteIcon,
  Repeat as RepeatIcon,
  Route as RouteIcon,
  Sparkles as SparkIcon,
  Target as TargetIcon,
  Wand2 as WandIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

export const readingTypeIcon = {
  plug: Plug,
  boxes: Boxes,
  gitBranch: GitBranch,
  history: History,
} as const;
