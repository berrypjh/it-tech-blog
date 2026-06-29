import { AlertTriangle, Ban, CheckCircle2, CircleDotDashed, Scale, Settings } from 'lucide-react';

// 직접 import해서 쓰는 아이콘은 XxxIcon 별칭으로 re-export.
export {
  Ban as BanIcon,
  CheckCircle2 as CheckCircleIcon,
  CircleDotDashed as CircleDotDashedIcon,
  Code2 as CodeIcon,
  Equal as EqualIcon,
  FileCode as FileCodeIcon,
  GitCompare as GitCompareIcon,
  Lightbulb as LightbulbIcon,
  Search as SearchIcon,
  Sparkles as SparklesIcon,
  Table as TableIcon,
  Zap as ZapIcon,
} from 'lucide-react';

// content의 icon 리터럴 → 컴포넌트 맵. 키는 각 타입의 리터럴 유니온과 1:1.
export const bailoutStepIconByName = {
  circleDotDashed: CircleDotDashed,
  settings: Settings,
  scale: Scale,
  checkCircle: CheckCircle2,
  ban: Ban,
} as const;

export const queueIconByName = {
  checkCircle: CheckCircle2,
  alertTriangle: AlertTriangle,
} as const;
