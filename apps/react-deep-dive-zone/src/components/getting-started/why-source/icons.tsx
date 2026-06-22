import { BarChart3, Clock, Eye, Gauge, Key, Puzzle, Search, Zap } from 'lucide-react';

export { GithubIcon } from '../../shared/icon';
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
  eye: Eye,
  search: Search,
  'bar-chart': BarChart3,
  puzzle: Puzzle,
} as const;
