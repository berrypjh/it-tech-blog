import {
  BookOpen,
  Bug,
  FileCode2,
  FlaskConical,
  GitBranch,
  GitCompareArrows,
  GitMerge,
  GitPullRequest,
  Info,
  Lightbulb,
  ListOrdered,
  Sparkles,
  ZapOff,
} from 'lucide-react';

export {
  Workflow as ActionTabIcon,
  ArrowRight as ArrowRightIcon,
  Database as CacheTabIcon,
  Code2 as CodeIcon,
  GitMerge as ConnectorIcon,
  BookOpen as DocsIcon,
  TriangleAlert as GapIcon,
  MapPin as MapPinIcon,
  HelpCircle as QuestionIcon,
  Sparkles as SparkIcon,
  FlaskConical as TestIcon,
  Wand2 as TransformIcon,
} from 'lucide-react';

/** 공식 문서가 잘하는 것 카드 아이콘 */
export const strengthIconByName = {
  api: BookOpen,
  pattern: Sparkles,
  example: FileCode2,
  migration: GitMerge,
  concept: Lightbulb,
  caution: Info,
} as const;
export type StrengthIconName = keyof typeof strengthIconByName;

/** 공식 문서만으로 부족한 것 카드 아이콘 */
export const gapIconByName = {
  'call-order': ListOrdered,
  'dev-prod': GitCompareArrows,
  'edge-case': ZapOff,
  tested: FlaskConical,
  pr: GitPullRequest,
  canary: GitBranch,
  'impl-exception': Bug,
} as const;
export type GapIconName = keyof typeof gapIconByName;
