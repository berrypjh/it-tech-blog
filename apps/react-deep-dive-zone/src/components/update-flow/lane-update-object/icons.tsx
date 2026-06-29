import {
  Braces,
  Crosshair,
  Database,
  FunctionSquare,
  Gauge,
  Hand,
  Link2,
  Route,
  Sparkles,
  Split,
  Undo2,
  Workflow,
  Zap,
} from 'lucide-react';

// 직접 import해서 쓰는 아이콘은 XxxIcon 별칭으로 re-export.
export {
  ArrowDown as ArrowDownIcon,
  ArrowRight as ArrowRightIcon,
  Braces as BracesIcon,
  FileCode as FileCodeIcon,
  FunctionSquare as FunctionSquareIcon,
  Lightbulb as LightbulbIcon,
  ListChecks as ListChecksIcon,
  Package as PackageIcon,
  Route as RouteIcon,
  Target as TargetIcon,
  Zap as ZapIcon,
} from 'lucide-react';

// content의 icon 리터럴 → 컴포넌트 맵. 키는 각 타입의 리터럴 유니온과 1:1.
export const heroFlowIconByName = {
  hand: Hand,
  route: Route,
  crosshair: Crosshair,
  braces: Braces,
} as const;

export const heroSummaryIconByName = {
  crosshair: Crosshair,
  database: Database,
  link: Link2,
} as const;

export const laneDecisionIconByName = {
  hand: Hand,
  workflow: Workflow,
  split: Split,
  crosshair: Crosshair,
} as const;

export const updateFieldIconByName = {
  crosshair: Crosshair,
  zap: Zap,
  undo: Undo2,
  gauge: Gauge,
  sparkles: Sparkles,
  link: Link2,
} as const;

export const actionIconByName = {
  crosshair: Crosshair,
  functionSquare: FunctionSquare,
} as const;
