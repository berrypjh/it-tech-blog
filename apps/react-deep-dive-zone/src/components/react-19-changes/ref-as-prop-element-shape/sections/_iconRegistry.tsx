import type { ComponentType, SVGProps } from 'react';

import type { IconKey } from '../content';
import {
  CodeIcon,
  CompassIcon,
  LayersIcon,
  MousePointerClickIcon,
  PackageIcon,
  PenSquareIcon,
  PlayCircleIcon,
  RouteIcon,
  SearchIcon,
  ShieldAlertIcon,
  SparklesIcon,
  SplitIcon,
  TargetIcon,
  TriangleAlertIcon,
  WorkflowIcon,
} from '../icons';

export const iconRegistry: Record<IconKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  package: PackageIcon,
  route: RouteIcon,
  layers: LayersIcon,
  sparkles: SparklesIcon,
  workflow: WorkflowIcon,
  code: CodeIcon,
  split: SplitIcon,
  'shield-alert': ShieldAlertIcon,
  'triangle-alert': TriangleAlertIcon,
  compass: CompassIcon,
  'mouse-click': MousePointerClickIcon,
  'play-circle': PlayCircleIcon,
  search: SearchIcon,
  target: TargetIcon,
  pen: PenSquareIcon,
};
