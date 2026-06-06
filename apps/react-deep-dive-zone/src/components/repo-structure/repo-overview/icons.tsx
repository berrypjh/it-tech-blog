import { FlaskConical, Folder, Sparkles, TerminalSquare } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

export {
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  FileText as FileTextIcon,
  Folder as FolderIcon,
  HelpCircle as HelpCircleIcon,
  Lightbulb as LightbulbIcon,
  ListChecks as ListChecksIcon,
  Map as MapIcon,
  RotateCcw as RotateIcon,
  Star as StarIcon,
} from 'lucide-react';

type IconProps = { className?: string };

export { GithubIcon } from '../../shared/GithubIcon';

/** Stylised React atom mark — used in the hero side panel. */
export const ReactAtomIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className ?? 'h-10 w-10'}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
);

type LucideLike = ComponentType<SVGProps<SVGSVGElement>>;

export const directoryIconByName: Record<string, LucideLike> = {
  folder: Folder,
  flask: FlaskConical,
  terminal: TerminalSquare,
  sparkles: Sparkles,
};
