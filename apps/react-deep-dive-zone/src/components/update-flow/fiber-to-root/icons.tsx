import {
  Database,
  Flag,
  MousePointerClick,
  Network,
  PanelsTopLeft,
  Pin,
  Workflow,
} from 'lucide-react';

// 직접 import해서 쓰는 아이콘은 XxxIcon 별칭으로 re-export.
export {
  ArrowLeftRight as ArrowLeftRightIcon,
  ArrowUp as ArrowUpIcon,
  CheckCircle2 as CheckCircleIcon,
  CircleHelp as CircleHelpIcon,
  FileCode as FileCodeIcon,
  FunctionSquare as FunctionSquareIcon,
  GitBranch as GitBranchIcon,
  MoveUp as MoveUpIcon,
  Network as NetworkIcon,
  RefreshCw as RefreshIcon,
} from 'lucide-react';

// content의 icon 리터럴 → 컴포넌트 맵. 키는 각 타입의 리터럴 유니온과 1:1.
export const fiberStackIconByName = {
  flag: Flag,
  panels: PanelsTopLeft,
  workflow: Workflow,
  pin: Pin,
} as const;

export const laneCardIconByName = {
  database: Database,
  network: Network,
} as const;

export const returnIconByName = {
  mousePointer: MousePointerClick,
  workflow: Workflow,
  panels: PanelsTopLeft,
  flag: Flag,
} as const;
