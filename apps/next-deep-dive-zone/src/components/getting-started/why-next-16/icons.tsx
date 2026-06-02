import {
  Database,
  FileText,
  FolderTree,
  Hammer,
  Network,
  Route,
  Server,
  Workflow,
  Zap,
} from 'lucide-react';

export {
  Workflow as ActionIcon,
  ArrowRight as ArrowRightIcon,
  Hammer as BuildIcon,
  Database as CacheIcon,
  CheckCircle2 as CheckIcon,
  Layers as LayersIcon,
  MapPin as MapPinIcon,
  Route as RouteIcon,
  Network as RscIcon,
  Sparkles as SparkIcon,
  GitBranch as TimelineIcon,
  Zap as TurbopackIcon,
  TriangleAlert as WarnIcon,
} from 'lucide-react';

/** Hero 키워드 카드 / 4개 축 카드 아이콘 */
export const keywordIconByName = {
  'app-router': Route,
  cache: Database,
  action: Workflow,
  turbopack: Zap,
} as const;
export type KeywordIconName = keyof typeof keywordIconByName;

/** 버전 변화 타임라인 단계 아이콘 */
export const timelineIconByName = {
  pages: FileText,
  'app-router': FolderTree,
  rsc: Server,
  actions: Workflow,
  cache: Database,
  turbopack: Zap,
} as const;
export type TimelineIconName = keyof typeof timelineIconByName;

/** 4개 독해 축 카드 아이콘 */
export const axisIconByName = {
  'app-router': Route,
  rsc: Network,
  cache: Database,
  build: Hammer,
} as const;
export type AxisIconName = keyof typeof axisIconByName;
