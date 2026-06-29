import {
  Box,
  Code2,
  CornerDownRight,
  FunctionSquare,
  GitFork,
  Home,
  ListChecks,
  MoreHorizontal,
  Network,
  Settings,
  SquareDashed,
  TimerReset,
  Workflow,
} from 'lucide-react';

import type { FiberTagItem, ReconcileStep, RoleCard } from './content';

export {
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  Code2 as CodeIcon,
  FastForward as FastForwardIcon,
  FileCode as FileCodeIcon,
  GitFork as GitForkIcon,
  HelpCircle as HelpCircleIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  Settings as SettingsIcon,
  Sparkles as SparklesIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

export const fiberTagIconByName: Record<FiberTagItem['icon'], typeof Box> = {
  function: FunctionSquare,
  cube: Box,
  home: Home,
  code: Code2,
  fragment: SquareDashed,
  suspense: TimerReset,
  other: MoreHorizontal,
} as const;

export const roleIconByName: Record<RoleCard['icon'], typeof Box> = {
  checklist: ListChecks,
  branch: GitFork,
  tree: Network,
} as const;

export const reconcileIconByName: Record<ReconcileStep['icon'], typeof Box> = {
  start: Settings,
  branch: GitFork,
  compute: Code2,
  reconcile: Workflow,
  return: CornerDownRight,
} as const;
