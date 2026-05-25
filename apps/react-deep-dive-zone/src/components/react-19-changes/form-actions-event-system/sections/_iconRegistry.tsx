import type { ComponentType, SVGProps } from 'react';

import type { IconKey } from '../content';
import {
  AtomIcon,
  CompassIcon,
  DatabaseIcon,
  FilterIcon,
  GlobeIcon,
  HourglassIcon,
  LayersIcon,
  MousePointerClickIcon,
  PuzzleIcon,
  RouteIcon,
  SearchIcon,
  SendIcon,
  SplitIcon,
  TargetIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

export const iconRegistry: Record<IconKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  'mouse-click': MousePointerClickIcon,
  globe: GlobeIcon,
  atom: AtomIcon,
  puzzle: PuzzleIcon,
  filter: FilterIcon,
  target: TargetIcon,
  search: SearchIcon,
  workflow: WorkflowIcon,
  split: SplitIcon,
  database: DatabaseIcon,
  hourglass: HourglassIcon,
  zap: ZapIcon,
  send: SendIcon,
  route: RouteIcon,
  compass: CompassIcon,
  layers: LayersIcon,
};
