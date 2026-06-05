import {
  Anchor,
  BarChart3,
  Box,
  Clock,
  Code,
  Eye,
  Gauge,
  Key,
  Layers,
  Layout,
  Network,
  Puzzle,
  Search,
  Timer,
  Wrench,
  Zap,
} from 'lucide-react';

export { GithubIcon } from '../../shared/GithubIcon';
export {
  RotateCw as ArrowLoopIcon,
  ArrowRight as ArrowRightIcon,
  BarChart3 as BarChartIcon,
  Code as CodeIcon,
  HelpCircle as QuestionIcon,
  Sparkles as SparkIcon,
} from 'lucide-react';

export const iconByName = {
  clock: Clock,
  zap: Zap,
  key: Key,
  gauge: Gauge,
  cube: Box,
  code: Code,
  layout: Layout,
  wrench: Wrench,
  layers: Layers,
  network: Network,
  timer: Timer,
  hook: Anchor,
  eye: Eye,
  search: Search,
  'bar-chart': BarChart3,
  puzzle: Puzzle,
} as const;
