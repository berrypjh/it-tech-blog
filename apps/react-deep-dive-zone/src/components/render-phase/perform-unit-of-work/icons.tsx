import { ArrowDown, ArrowUp, Box, RotateCw } from 'lucide-react';

import type { DescendCompleteExplanation } from './content';

export {
  ArrowDown as ArrowDownIcon,
  ArrowUp as ArrowUpIcon,
  Box as BoxIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  Code2 as CodeIcon,
  Database as DatabaseIcon,
  FileCode as FileCodeIcon,
  GitBranch as GitBranchIcon,
  HelpCircle as HelpCircleIcon,
  Monitor as MonitorIcon,
  RotateCw as RotateCwIcon,
  Settings as SettingsIcon,
  Sparkles as SparklesIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

export const descendIconByName: Record<
  DescendCompleteExplanation['items'][number]['icon'],
  typeof Box
> = {
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  rotate: RotateCw,
} as const;
