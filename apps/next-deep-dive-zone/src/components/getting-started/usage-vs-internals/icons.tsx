import {
  Boxes,
  Database,
  FileCode2,
  FilePlus2,
  FolderTree,
  GitMerge,
  Layers,
  LayoutTemplate,
  LoaderCircle,
  Repeat2,
  Rocket,
  Route,
  Send,
  ServerCog,
  TriangleAlert,
  Workflow,
} from 'lucide-react';

export {
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckIcon,
  ListChecks as ChecklistIcon,
  Code2 as CodeIcon,
  Cpu as CpuIcon,
  Network as InternalsIcon,
  MapPin as MapPinIcon,
  HelpCircle as QuestionIcon,
  Sparkles as SparkIcon,
  Wand2 as TransformIcon,
  PenLine as UsageIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

/** 사용법 학습 플로우 단계 아이콘 */
export const usageIconByName = {
  'file-plus': FilePlus2,
  layout: LayoutTemplate,
  loading: LoaderCircle,
  cache: Database,
  action: Workflow,
  deploy: Rocket,
} as const;
export type UsageIconName = keyof typeof usageIconByName;

/** 파일 규칙 카드 아이콘 */
export const fileIconByName = {
  page: FileCode2,
  layout: LayoutTemplate,
  loading: LoaderCircle,
  error: TriangleAlert,
  route: Route,
} as const;
export type FileIconName = keyof typeof fileIconByName;

/** 내부 구조 흐름도 단계 아이콘 */
export const flowIconByName = {
  'file-convention': FileCode2,
  'route-segment': FolderTree,
  'loader-tree': Layers,
  'component-tree': Boxes,
  'app-render': ServerCog,
  'rsc-payload': Send,
  'router-state-patch': GitMerge,
} as const;

/** 질문 변환기 예시 아이콘 */
export const transformerIconByName = {
  loading: LoaderCircle,
  router: Repeat2,
  action: Workflow,
  cache: Database,
} as const;
export type TransformerIconName = keyof typeof transformerIconByName;
