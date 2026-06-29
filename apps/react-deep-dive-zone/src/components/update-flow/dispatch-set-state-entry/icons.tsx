import { Box, Crosshair, Database, PenTool, Server, Target, Workflow, Zap } from 'lucide-react';

// 직접 import해서 쓰는 아이콘은 XxxIcon 별칭으로 re-export.
export {
  ArrowLeftRight as ArrowLeftRightIcon,
  CheckCircle2 as CheckCircleIcon,
  Code2 as CodeIcon,
  Crosshair as CrosshairIcon,
  FileCode as FileCodeIcon,
  FunctionSquare as FunctionSquareIcon,
  GitBranch as GitBranchIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  Sparkles as SparklesIcon,
  Split as SplitIcon,
  User as UserIcon,
} from 'lucide-react';

// content의 icon 리터럴 → 컴포넌트 맵. 키는 각 타입의 리터럴 유니온과 1:1.
export const responsibilityIconByName = {
  target: Target,
  box: Box,
  zap: Zap,
} as const;

export const laneFlowIconByName = {
  crosshair: Crosshair,
  database: Database,
  server: Server,
  penTool: PenTool,
} as const;

export const splitIconByName = {
  workflow: Workflow,
  box: Box,
} as const;
