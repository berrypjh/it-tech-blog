import {
  BookOpen,
  CircleDot,
  Code2,
  FlaskConical,
  GitBranch,
  GitPullRequest,
  KeyRound,
  Search,
  ShieldCheck,
  Tag,
} from 'lucide-react';

export {
  ArrowRight as ArrowRightIcon,
  GitBranch as CanaryIcon,
  CheckCircle2 as CheckIcon,
  GitCompareArrows as CompareIcon,
  MapPin as MapPinIcon,
  Target as MissionIcon,
  Workflow as RoutineIcon,
  Search as SearchIcon,
  FolderGit2 as SourcesIcon,
  Sparkles as SparkIcon,
  Tag as StableIcon,
} from 'lucide-react';

/** Hero flow / GitHub에서 읽을 5가지 정보원 아이콘 */
export const sourceIconByName = {
  code: Code2,
  test: FlaskConical,
  pr: GitPullRequest,
  issue: CircleDot,
  release: Tag,
} as const;
export type SourceIconName = keyof typeof sourceIconByName;

/** 기능 추적 루틴 단계 아이콘 */
export const routineIconByName = {
  docs: BookOpen,
  search: Search,
  test: FlaskConical,
  csrf: ShieldCheck,
  encryption: KeyRound,
  'pr-issue': GitPullRequest,
  'stable-canary': GitBranch,
} as const;
export type RoutineIconName = keyof typeof routineIconByName;
