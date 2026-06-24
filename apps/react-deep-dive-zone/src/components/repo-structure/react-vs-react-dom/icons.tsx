import {
  AppWindow,
  Atom,
  Braces,
  Container,
  FileCode2,
  Layers,
  MonitorSmartphone,
  Server,
  ShieldCheck,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { IconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  Code2 as CodeIcon,
  ExternalLink as ExternalLinkIcon,
  FileCode2 as FileCodeIcon,
  Info as InfoIcon,
  Map as MapIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
  Split as SplitIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const iconByName: Record<IconName, LucideLike> = {
  atom: Atom,
  monitor: MonitorSmartphone,
  braces: Braces,
  layers: Layers,
  container: Container,
  browser: AppWindow,
  fileCode: FileCode2,
  server: Server,
  shieldCheck: ShieldCheck,
};
