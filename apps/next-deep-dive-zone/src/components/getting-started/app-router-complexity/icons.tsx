import {
  Boxes,
  Columns3,
  Database,
  FolderTree,
  Globe,
  Layers,
  LayoutTemplate,
  LoaderCircle,
  Network,
  PictureInPicture2,
  RefreshCw,
  Route,
  Send,
  ServerCog,
  TriangleAlert,
} from 'lucide-react';

export {
  ArrowRight as ArrowRightIcon,
  Code2 as CodeIcon,
  GitCompareArrows as CompareIcon,
  TriangleAlert as ErrorIcon,
  Boxes as FactorIcon,
  LayoutTemplate as LayoutIcon,
  LoaderCircle as LoadingIcon,
  MapPin as MapPinIcon,
  FileCode2 as PageIcon,
  FolderTree as TreeIcon,
} from 'lucide-react';

type IconProps = { className?: string };

/** Lucide v1.x removed the GitHub brand icon, so we keep a local copy. */
export const GithubIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className ?? 'h-5 w-5'}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 3-.4s2.1.1 3 .4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.5 5.7 18.3.5 12 .5Z" />
  </svg>
);

/** Hero 흐름 다이어그램 단계 아이콘 */
export const flowIconByName = {
  url: Globe,
  'segment-tree': FolderTree,
  'loader-tree': Layers,
  'rsc-payload': Send,
  'router-state': Network,
  'cache-node': Database,
} as const;

/** 복잡도 9개 요소 아이콘 */
export const factorIconByName = {
  'nested-layout': LayoutTemplate,
  'route-segment': FolderTree,
  'loading-boundary': LoaderCircle,
  'error-boundary': TriangleAlert,
  'parallel-route': Columns3,
  'intercepting-route': PictureInPicture2,
  'rsc-payload': Send,
  'router-reducer': RefreshCw,
  'router-cache': Database,
} as const;
export type FactorIconName = keyof typeof factorIconByName;

/** 코드 입구 카드 아이콘 */
export const codeEntryIconByName = {
  'create-component-tree': Boxes,
  'flight-router-state': Network,
  'app-render': ServerCog,
  'layout-router': LayoutTemplate,
  'app-router': Route,
  'router-reducer': RefreshCw,
} as const;
export type CodeEntryIconName = keyof typeof codeEntryIconByName;
