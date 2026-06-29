import {
  CheckCircle2,
  CircleHelp,
  Clock,
  Code2,
  Database,
  Flag,
  GitBranch,
  Hourglass,
  Layers,
  MousePointerClick,
  PanelsTopLeft,
  PenTool,
  Search,
  Server,
  Workflow,
  Zap,
} from 'lucide-react';

// 직접 import해서 쓰는 아이콘은 XxxIcon 별칭으로 re-export.
export {
  AlertCircle as AlertCircleIcon,
  Boxes as BoxesIcon,
  CircleHelp as CircleHelpIcon,
  FileCode as FileCodeIcon,
  FileText as FileTextIcon,
  GitBranch as GitBranchIcon,
  ListChecks as ListChecksIcon,
  Sparkles as SparklesIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

// content의 icon 리터럴 → 컴포넌트 맵. 키는 각 타입의 리터럴 유니온과 1:1.
export const flowIconByName = {
  mousePointer: MousePointerClick,
  code: Code2,
  workflow: Workflow,
  search: Search,
  panels: PanelsTopLeft,
  server: Server,
  circleHelp: CircleHelp,
  database: Database,
  gitBranch: GitBranch,
  flag: Flag,
  zap: Zap,
  checkCircle: CheckCircle2,
  clock: Clock,
  hourglass: Hourglass,
} as const;

export const misconceptionIconByName = {
  panels: PanelsTopLeft,
  database: Database,
  zap: Zap,
} as const;

export const nextChapterIconByName = {
  workflow: Workflow,
  penTool: PenTool,
  layers: Layers,
  checkCircle: CheckCircle2,
} as const;
