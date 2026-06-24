import {
  Atom,
  FlaskConical,
  Folder,
  Layers,
  MonitorSmartphone,
  Network,
  Palette,
  Timer,
  Wrench,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { CorePackageIconName } from './content';

export {
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  Code2 as CodeIcon,
  ExternalLink as ExternalLinkIcon,
  FileCode as FileCodeIcon,
  Folder as FolderIcon,
  Info as InfoIcon,
  Layers as LayersIcon,
  Map as MapIcon,
  Network as NetworkIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const packageIconByName: Record<CorePackageIconName, LucideLike> = {
  atom: Atom,
  monitor: MonitorSmartphone,
  layers: Layers,
  timer: Timer,
  network: Network,
  folder: Folder,
  tool: Wrench,
  flask: FlaskConical,
  paint: Palette,
};
