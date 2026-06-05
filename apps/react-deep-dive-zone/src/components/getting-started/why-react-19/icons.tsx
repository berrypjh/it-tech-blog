import { Book, Box, CircleCheck, Link, Scale, Shield, Sparkle, Zap } from 'lucide-react';

export { GithubIcon } from '../../shared/GithubIcon';
export {
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
  Shield as ShieldIcon,
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

export const principleIconByName = {
  check: CircleCheck,
  book: Book,
  shield: Shield,
  scale: Scale,
} as const;
