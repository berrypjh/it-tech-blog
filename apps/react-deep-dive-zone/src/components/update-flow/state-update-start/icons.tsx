import {
  CalendarClock,
  Code2,
  Database,
  FilePlus,
  Flag,
  Hand,
  Loader,
  MonitorCheck,
  MousePointer,
  PanelsTopLeft,
  Play,
  ShieldCheck,
  Timer,
} from 'lucide-react';

// 직접 import해서 쓰는 아이콘은 XxxIcon 별칭으로 re-export.
export {
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircleIcon,
  Code2 as CodeIcon,
  Database as DatabaseIcon,
  HelpCircle as HelpCircleIcon,
  Hourglass as HourglassIcon,
  Layers as LayersIcon,
  Lightbulb as LightbulbIcon,
  ListChecks as ListChecksIcon,
  MonitorCheck as MonitorCheckIcon,
  MousePointer as MousePointerIcon,
  Sparkles as SparklesIcon,
  Target as TargetIcon,
  User as UserIcon,
  XCircle as XCircleIcon,
} from 'lucide-react';

// content의 icon 리터럴 → 컴포넌트 맵. 키는 각 타입의 리터럴 유니온과 1:1.
export const heroStepIconByName = {
  hand: Hand,
  shield: ShieldCheck,
  timer: Timer,
  panels: PanelsTopLeft,
  monitor: MonitorCheck,
} as const;

export const flowIconByName = {
  mouse: MousePointer,
  play: Play,
  code: Code2,
  flag: Flag,
  filePlus: FilePlus,
  database: Database,
  calendar: CalendarClock,
  loader: Loader,
} as const;
