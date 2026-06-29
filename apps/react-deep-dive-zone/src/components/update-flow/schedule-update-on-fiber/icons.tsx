import {
  Flag,
  FunctionSquare,
  MousePointerClick,
  Network,
  RefreshCw,
  Repeat2,
  Target,
  User,
  Workflow,
} from 'lucide-react';

// 직접 import해서 쓰는 아이콘은 XxxIcon 별칭으로 re-export.
export {
  ArrowDown as ArrowDownIcon,
  CheckCircle2 as CheckCircleIcon,
  CircleHelp as CircleHelpIcon,
  FileCode as FileCodeIcon,
  Flag as FlagIcon,
  FunctionSquare as FunctionSquareIcon,
  Layers as LayersIcon,
  Network as NetworkIcon,
  Split as SplitIcon,
  Target as TargetIcon,
  Workflow as WorkflowIcon,
  Zap as ZapIcon,
} from 'lucide-react';

// content의 icon 리터럴 → 컴포넌트 맵. 키는 각 타입의 리터럴 유니온과 1:1.
export const flowIconByName = {
  function: FunctionSquare,
  workflow: Workflow,
  network: Network,
  target: Target,
} as const;

export const responsibilityIconByName = {
  flag: Flag,
  user: User,
  repeat: Repeat2,
} as const;

export const contextIconByName = {
  refresh: RefreshCw,
  mousePointer: MousePointerClick,
} as const;
