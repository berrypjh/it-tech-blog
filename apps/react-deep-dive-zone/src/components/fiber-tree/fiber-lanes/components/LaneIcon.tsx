import { Boxes, Clock, Leaf, MousePointer2, RefreshCw, Zap } from 'lucide-react';

import type { PriorityItem } from '../content';

type Props = { iconName: PriorityItem['iconName']; className?: string };

const map = {
  zap: Zap,
  mouse: MousePointer2,
  cube: Boxes,
  clock: Clock,
  refresh: RefreshCw,
  leaf: Leaf,
} as const;

export const LaneIcon = ({ iconName, className }: Props) => {
  const Icon = map[iconName];
  return <Icon className={className} aria-hidden="true" />;
};
