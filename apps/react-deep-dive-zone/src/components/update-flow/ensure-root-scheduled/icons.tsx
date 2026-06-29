import { CalendarCheck, Clock } from 'lucide-react';

// 직접 import해서 쓰는 아이콘은 XxxIcon 별칭으로 re-export.
export {
  ArrowDown as ArrowDownIcon,
  ArrowRight as ArrowRightIcon,
  BadgeCheck as BadgeCheckIcon,
  CheckCircle2 as CheckCircleIcon,
  CircleHelp as CircleHelpIcon,
  Clock as ClockIcon,
  CopyX as CopyXIcon,
  FileCode as FileCodeIcon,
  FunctionSquare as FunctionSquareIcon,
  Layers as LayersIcon,
  Lightbulb as LightbulbIcon,
  ListChecks as ListChecksIcon,
  Network as NetworkIcon,
  Sparkles as SparklesIcon,
  TimerReset as TimerResetIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

// content의 icon 리터럴 → 컴포넌트 맵. 키는 RoleIcon 유니온과 1:1.
export const roleIconByName = {
  calendarCheck: CalendarCheck,
  clock: Clock,
} as const;
