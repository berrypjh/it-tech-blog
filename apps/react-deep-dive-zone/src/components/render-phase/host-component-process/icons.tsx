import { Box, Braces, CornerDownRight, FileText, Workflow } from 'lucide-react';

import type { UpdateHostFlowStep } from './content';

export {
  ArrowDown as ArrowDownIcon,
  ArrowUp as ArrowUpIcon,
  Box as BoxIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  Code2 as CodeIcon,
  FileCode as FileCodeIcon,
  FileText as FileTextIcon,
  Layers as LayersIcon,
  Lightbulb as LightbulbIcon,
  MessageCircle as MessageCircleIcon,
  Sparkles as SparklesIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

export const updateFlowIconByName: Record<UpdateHostFlowStep['icon'], typeof Box> = {
  fiber: Box,
  props: Braces,
  children: FileText,
  reconcile: Workflow,
  child: CornerDownRight,
} as const;
