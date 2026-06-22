import {
  Code,
  FileText,
  FlaskConical,
  Folder,
  MessageCircle,
  MousePointer2,
  Search,
  Tag,
} from 'lucide-react';

export { GithubIcon } from '../../shared/GithubIcon';
export {
  ArrowRight as ArrowRightIcon,
  BookOpen as BookIcon,
  CircleCheck as CheckCircleIcon,
  ChevronDown as ChevronDownIcon,
  ChevronRight as ChevronRightIcon,
  Code as CodeIcon,
  MousePointer2 as CursorIcon,
  FileText as DocIcon,
  ExternalLink as ExternalLinkIcon,
  File as FileIcon,
  FlaskConical as FlaskIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  GitBranch as GitBranchIcon,
  GitCommit as GitCommitIcon,
  Info as InfoIcon,
  Sparkle as SparkIcon,
} from 'lucide-react';

export const perspectiveIconByName = {
  doc: FileText,
  code: Code,
  flask: FlaskConical,
  chat: MessageCircle,
} as const;

export const priorityIconByName = {
  folder: Folder,
  flask: FlaskConical,
  chat: MessageCircle,
  tag: Tag,
} as const;

export const routineIconByName = {
  doc: FileText,
  search: Search,
  cursor: MousePointer2,
  flask: FlaskConical,
  tag: Tag,
} as const;
