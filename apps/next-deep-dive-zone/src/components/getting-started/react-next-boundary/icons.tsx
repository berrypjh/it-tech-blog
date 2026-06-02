import {
  Braces,
  Compass,
  Component,
  Cpu,
  Droplets,
  FileCode2,
  GitCommitHorizontal,
  Hourglass,
  LayoutTemplate,
  Package,
  Route,
  Send,
  Server,
  ServerCog,
  SquareDashedBottomCode,
  Workflow,
} from 'lucide-react';

export {
  ArrowRight as ArrowRightIcon,
  GitMerge as BoundaryIcon,
  Code2 as CodeIcon,
  MapPin as MapPinIcon,
  Layers as NextIcon,
  Split as QuizIcon,
  Atom as ReactIcon,
  Sparkles as SparkIcon,
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

/** React 흐름 노드 아이콘 */
export const reactFlowIconByName = {
  component: Component,
  element: Braces,
  render: Cpu,
  commit: GitCommitHorizontal,
} as const;

/** Next.js 흐름 노드 아이콘 */
export const nextFlowIconByName = {
  route: Route,
  'server-render': ServerCog,
  'rsc-payload': Send,
  'html-flight': FileCode2,
  'client-nav': Compass,
} as const;

/** 경계 지점(브릿지 / 5개 카드) 아이콘 */
export const boundaryIconByName = {
  'server-components': Server,
  suspense: Hourglass,
  'server-actions': Workflow,
  hydration: Droplets,
  'client-boundary': SquareDashedBottomCode,
} as const;
export type BoundaryIconName = keyof typeof boundaryIconByName;

/** 코드 입구 카드 아이콘 */
export const codeEntryIconByName = {
  'app-render': ServerCog,
  'use-flight-response': Send,
  'app-router': Route,
  'layout-router': LayoutTemplate,
  'action-handler': Workflow,
  'next-flight-loader': Package,
} as const;
export type CodeEntryIconName = keyof typeof codeEntryIconByName;
