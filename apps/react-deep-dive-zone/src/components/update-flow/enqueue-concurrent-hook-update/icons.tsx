import {
  Database,
  FileText,
  Flag,
  FunctionSquare,
  Network,
  Settings,
  SquareDashed,
  Workflow,
} from 'lucide-react';

// 직접 import해서 쓰는 아이콘은 XxxIcon 별칭으로 re-export.
export {
  ArrowRight as ArrowRightIcon,
  Database as DatabaseIcon,
  FileCode as FileCodeIcon,
  FunctionSquare as FunctionSquareIcon,
  Layers as LayersIcon,
  Lightbulb as LightbulbIcon,
  Network as NetworkIcon,
  Settings as SettingsIcon,
  Sparkles as SparklesIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

// content의 icon 리터럴 → 컴포넌트 맵. 키는 각 타입의 리터럴 유니온과 1:1.
export const elementIconByName = {
  squareDashed: SquareDashed,
  database: Database,
  fileText: FileText,
  flag: Flag,
  settings: Settings,
} as const;

export const flowIconByName = {
  function: FunctionSquare,
  workflow: Workflow,
  database: Database,
  network: Network,
} as const;
