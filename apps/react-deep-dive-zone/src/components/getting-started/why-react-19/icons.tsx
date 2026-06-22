import { Box, Link, Sparkle, Zap } from 'lucide-react';

export { GithubIcon } from '../../shared/icon';
export {
  ArrowDown as ArrowDownIcon,
  MoveRight as ArrowLongRightIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUp as ArrowUpIcon,
  Book as BookIcon,
  CircleCheck as CheckCircleIcon,
  Check as CheckIcon,
  ExternalLink as ExternalLinkIcon,
  Quote as QuoteIcon,
  RefreshCw as RefreshIcon,
  Rss as RssIcon,
  Sparkle as SparkIcon,
  ArrowLeftRight as SwapIcon,
  X as XIcon,
} from 'lucide-react';

export const topicIconByName = {
  spark: Sparkle,
  bolt: Zap,
  link: Link,
  cube: Box,
} as const;
