import { Book, Box, CircleCheck, Link, Scale, Shield, Sparkle, Zap } from 'lucide-react';

export {
  MoveRight as ArrowLongRightIcon,
  ArrowRight as ArrowRightIcon,
  ArrowUp as ArrowUpIcon,
  Zap as BoltIcon,
  Book as BookIcon,
  CircleCheck as CheckCircleIcon,
  Check as CheckIcon,
  Box as CubeIcon,
  Dot as DotIcon,
  ExternalLink as ExternalLinkIcon,
  Info as InfoIcon,
  Link as LinkIcon,
  Quote as QuoteIcon,
  RefreshCw as RefreshIcon,
  Rss as RssIcon,
  Scale as ScaleIcon,
  Shield as ShieldIcon,
  Sparkle as SparkIcon,
  ArrowLeftRight as SwapIcon,
  X as XIcon,
} from 'lucide-react';

type IconProps = { className?: string };

/** Lucide v1.x removed the GitHub brand icon, so we keep a local copy. */
export const GithubIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className ?? 'h-5 w-5'}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.3 9.3 7.8 10.8.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 3-.4s2.1.1 3 .4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.5 5.7 18.3.5 12 .5Z" />
  </svg>
);

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
