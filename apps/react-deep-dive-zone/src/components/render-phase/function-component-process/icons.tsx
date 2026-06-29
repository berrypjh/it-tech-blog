import { Box, Braces, CornerDownRight, FunctionSquare, Settings, Workflow } from 'lucide-react';

import type { InternalFlowStep } from './content';

export {
  ArrowRight as ArrowRightIcon,
  Braces as BracesIcon,
  CheckCircle2 as CheckCircleIcon,
  Code2 as CodeIcon,
  FileCode as FileCodeIcon,
  FunctionSquare as FunctionSquareIcon,
  Lightbulb as LightbulbIcon,
  Link as LinkIcon,
  PlayCircle as PlayCircleIcon,
  Settings as SettingsIcon,
  Sparkles as SparklesIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

export const internalFlowIconByName: Record<InternalFlowStep['icon'], typeof Box> = {
  fiber: FunctionSquare,
  hooks: Settings,
  jsx: Braces,
  reconcile: Workflow,
  child: CornerDownRight,
} as const;
