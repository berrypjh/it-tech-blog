import {
  Box,
  CornerDownRight,
  Cuboid,
  Database,
  FileCode,
  Flame,
  FunctionSquare,
  Hand,
  Layers,
  Link2,
  Loader,
  Save,
  ShieldCheck,
  Zap,
} from 'lucide-react';

// 직접 import해서 쓰는 아이콘은 XxxIcon 별칭으로 re-export.
export {
  ArrowDown as ArrowDownIcon,
  ArrowLeftRight as ArrowLeftRightIcon,
  Braces as BracesIcon,
  CheckCircle2 as CheckCircleIcon,
  CircleHelp as CircleHelpIcon,
  Code2 as CodeIcon,
  Cuboid as CuboidIcon,
  FileCode as FileCodeIcon,
  FunctionSquare as FunctionSquareIcon,
  GitBranch as GitBranchIcon,
  Layers as LayersIcon,
  Link2 as Link2Icon,
  Network as NetworkIcon,
  Sparkles as SparklesIcon,
  Target as TargetIcon,
} from 'lucide-react';

// content의 icon 리터럴 → 컴포넌트 맵. 키는 각 타입의 리터럴 유니온과 1:1.
export const flowIconByName = {
  fileCode: FileCode,
  flame: Flame,
  database: Database,
  box: Box,
  save: Save,
  cornerDownRight: CornerDownRight,
} as const;

export const bindReasonIconByName = {
  box: Box,
  link: Link2,
  shield: ShieldCheck,
} as const;

export const memoryIconByName = {
  cuboid: Cuboid,
  layers: Layers,
  database: Database,
  functionSquare: FunctionSquare,
} as const;

export const runtimeIconByName = {
  hand: Hand,
  zap: Zap,
  database: Database,
  loader: Loader,
} as const;
