import type { ComponentType, SVGProps } from 'react';

import type { IconKey } from '../content';
import {
  ActivityIcon,
  CodeIcon,
  CompassIcon,
  FileTextIcon,
  FlagIcon,
  LayersIcon,
  LoaderIcon,
  MapIcon,
  MilestoneIcon,
  RefreshCcwIcon,
  RouteIcon,
  ServerIcon,
  SparklesIcon,
  TargetIcon,
  TelescopeIcon,
  WorkflowIcon,
} from '../icons';

export const iconRegistry: Record<IconKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  refresh: RefreshCcwIcon,
  loader: LoaderIcon,
  code: CodeIcon,
  file: FileTextIcon,
  server: ServerIcon,
  activity: ActivityIcon,
  layers: LayersIcon,
  milestone: MilestoneIcon,
  map: MapIcon,
  compass: CompassIcon,
  sparkles: SparklesIcon,
  route: RouteIcon,
  target: TargetIcon,
  workflow: WorkflowIcon,
  telescope: TelescopeIcon,
  flag: FlagIcon,
};
