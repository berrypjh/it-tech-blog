import { Box, Clock, Flag, Gauge, Move, Pencil, Shield, Target, Trash2, Zap } from 'lucide-react';

import type { FlagCard, ReasonCard } from './content';

export {
  ArrowDown as ArrowDownIcon,
  ArrowRight as ArrowRightIcon,
  Box as BoxIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  Code2 as CodeIcon,
  FileCode as FileCodeIcon,
  ListChecks as ListChecksIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

/** flag / example / reorder / hero 가 공유하는 변경 표시 아이콘. */
export const markIconByName: Record<FlagCard['icon'] | 'move', typeof Box> = {
  flag: Flag,
  trash: Trash2,
  pencil: Pencil,
  zap: Zap,
  move: Move,
} as const;

export const reasonIconByName: Record<ReasonCard['icon'], typeof Box> = {
  shield: Shield,
  target: Target,
  clock: Clock,
  gauge: Gauge,
} as const;
