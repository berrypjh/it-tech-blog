import { Box, Boxes, ExternalLink, FileText, Network, Sparkles, Square } from 'lucide-react';

import type { ChildShapeCard, InputCard } from './content';

export {
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  Code2 as CodeIcon,
  FileCode as FileCodeIcon,
  FileText as FileTextIcon,
  GitFork as GitForkIcon,
  Hexagon as HexagonIcon,
  Layers as LayersIcon,
  ListChecks as ListChecksIcon,
  Network as NetworkIcon,
  Plus as PlusIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  Workflow as WorkflowIcon,
} from 'lucide-react';

export const inputIconByName: Record<InputCard['icon'], typeof Box> = {
  tree: Network,
  cube: Box,
  fileText: FileText,
} as const;

export const childShapeIconByName: Record<ChildShapeCard['icon'], typeof Box> = {
  element: Square,
  array: Boxes,
  portal: ExternalLink,
  sparkle: Sparkles,
} as const;
