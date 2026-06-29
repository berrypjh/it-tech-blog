import { ArrowDown, ArrowUp, Box, CircleDashed } from 'lucide-react';

import type { CompareRow, LegendItem } from './content';

export {
  ArrowDown as ArrowDownIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUp as ArrowUpIcon,
  Box as BoxIcon,
  CheckCircle2 as CheckCircleIcon,
  CheckSquare as CheckSquareIcon,
  ChevronDown as ChevronDownIcon,
  CircleDashed as CircleDashedIcon,
  Code2 as CodeIcon,
  FileCode as FileCodeIcon,
  GitBranch as GitBranchIcon,
  HelpCircle as HelpCircleIcon,
  ListChecks as ListChecksIcon,
  RefreshCw as RefreshCwIcon,
  Trophy as TrophyIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

export const legendIconByName: Record<LegendItem['icon'], typeof Box> = {
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  dashed: CircleDashed,
} as const;

export const directionIconByName: Record<CompareRow['direction']['icon'], typeof Box> = {
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
} as const;
