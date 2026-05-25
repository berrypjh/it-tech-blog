import type { ComponentType, SVGProps } from 'react';

import type { IconKey } from '../content';
import {
  CheckCircleIcon,
  ClockIcon,
  CompassIcon,
  LayersIcon,
  MousePointerClickIcon,
  PlayCircleIcon,
  RotateCcwIcon,
  SendIcon,
  ServerIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TargetIcon,
  TriangleAlertIcon,
  WorkflowIcon,
  XCircleIcon,
  ZapIcon,
} from '../icons';

export const iconRegistry: Record<IconKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  clock: ClockIcon,
  'triangle-alert': TriangleAlertIcon,
  send: SendIcon,
  zap: ZapIcon,
  rotate: RotateCcwIcon,
  'shield-alert': ShieldAlertIcon,
  'shield-check': ShieldCheckIcon,
  sparkles: SparklesIcon,
  workflow: WorkflowIcon,
  'play-circle': PlayCircleIcon,
  'mouse-click': MousePointerClickIcon,
  server: ServerIcon,
  'check-circle': CheckCircleIcon,
  'x-circle': XCircleIcon,
  layers: LayersIcon,
  compass: CompassIcon,
  target: TargetIcon,
};
