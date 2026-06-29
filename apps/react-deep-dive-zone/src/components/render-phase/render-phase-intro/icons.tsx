import {
  Box,
  CheckCircle2,
  Clock,
  Cpu,
  FileText,
  Flag,
  GitBranch,
  Layers,
  Monitor,
  MousePointerClick,
  Network,
  PlayCircle,
  RefreshCcw,
} from 'lucide-react';

import type { PreviousChapterStepIcon, WarningStepIcon, WorkCardIcon } from './content';

export {
  ArrowDown as ArrowDownIcon,
  ArrowRight as ArrowRightIcon,
  BellRing as BellRingIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  Clock as ClockIcon,
  Cpu as CpuIcon,
  Lightbulb as LightbulbIcon,
  ListChecks as ListChecksIcon,
  Sparkles as SparklesIcon,
  Workflow as WorkflowIcon,
  X as XIcon,
} from 'lucide-react';

export const previousIconByName: Record<PreviousChapterStepIcon, typeof Box> = {
  mousePointer: MousePointerClick,
  fileText: FileText,
  network: Network,
  clock: Clock,
  play: PlayCircle,
} as const;

export const workIconByName: Record<WorkCardIcon, typeof Box> = {
  refresh: RefreshCcw,
  layers: Layers,
  gitBranch: GitBranch,
  flag: Flag,
} as const;

export const warningIconByName: Record<WarningStepIcon, typeof Box> = {
  cpu: Cpu,
  monitor: Monitor,
  checkCircle: CheckCircle2,
} as const;
