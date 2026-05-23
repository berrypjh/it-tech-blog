import type { PriorityItem } from '../content';
import { BoxesIcon, ClockIcon, LeafIcon, MouseIcon, RefreshIcon, ZapIcon } from '../icons';

type Props = { iconName: PriorityItem['iconName']; className?: string };

const map = {
  zap: ZapIcon,
  mouse: MouseIcon,
  cube: BoxesIcon,
  clock: ClockIcon,
  refresh: RefreshIcon,
  leaf: LeafIcon,
} as const;

export const LaneIcon = ({ iconName, className }: Props) => {
  const Icon = map[iconName];
  return <Icon className={className} aria-hidden="true" />;
};
