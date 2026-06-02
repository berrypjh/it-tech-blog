import {
  Atom,
  Database,
  Hammer,
  Inbox,
  MonitorSmartphone,
  Package,
  ServerCog,
  Sprout,
  Workflow,
  Wrench,
} from 'lucide-react';

export {
  ArrowRight as ArrowRightIcon,
  FolderTree as AxisIcon,
  CheckCircle2 as CheckIcon,
  ListChecks as ChecklistIcon,
  MapPin as MapPinIcon,
  Target as MissionIcon,
  Users as PersonaIcon,
  Map as RoadmapIcon,
  Sparkles as SparkIcon,
} from 'lucide-react';

/** Hero 흐름 / 축별 코드 지도 아이콘 */
export const axisIconByName = {
  request: Inbox,
  'app-render': ServerCog,
  'client-router': MonitorSmartphone,
  build: Hammer,
  cache: Database,
  actions: Workflow,
} as const;
export type AxisIconName = keyof typeof axisIconByName;

/** 사용자 유형별 추천 경로 아이콘 */
export const personaIconByName = {
  beginner: Sprout,
  react: Atom,
  practical: Wrench,
  framework: Package,
} as const;
export type PersonaIconName = keyof typeof personaIconByName;
