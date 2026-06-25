import {
  Code2,
  FileCode2,
  FlaskConical,
  ListChecks,
  RefreshCw,
  Search,
  ShieldCheck,
  Target,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

import type { IconName } from './content';

export {
  ArrowLeftRight as ArrowLeftRightIcon,
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircleIcon,
  Code2 as CodeIcon,
  ExternalLink as ExternalLinkIcon,
  FileCode2 as FileCodeIcon,
  FlaskConical as FlaskIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  ListChecks as ListChecksIcon,
  Map as MapIcon,
  Quote as QuoteIcon,
  RotateCcw as RotateIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
} from 'lucide-react';

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const iconByName: Record<IconName, LucideLike> = {
  fileCode: FileCode2,
  flask: FlaskConical,
  code: Code2,
  shield: ShieldCheck,
  target: Target,
  search: Search,
  refresh: RefreshCw,
  list: ListChecks,
  check: ShieldCheck,
};
