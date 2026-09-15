import { Boxes, Clock, Leaf, type LucideIcon, MousePointer2, RefreshCw, Zap } from 'lucide-react';

import type { LaneId } from '../content';

type Props = { id: LaneId; className: string };

const laneIcon: Record<LaneId, LucideIcon> = {
  sync: Zap,
  inputContinuous: MousePointer2,
  default: Boxes,
  transition: Clock,
  retry: RefreshCw,
  idle: Leaf,
};

export const LaneIcon = ({ id, className }: Props) => {
  const Icon = laneIcon[id];
  return <Icon className={className} aria-hidden="true" />;
};
