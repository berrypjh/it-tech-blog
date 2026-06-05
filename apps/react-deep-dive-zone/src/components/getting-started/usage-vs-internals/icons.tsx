import {
  Atom,
  Box,
  CircleCheck,
  Database,
  FunctionSquare,
  History,
  MousePointer2,
} from 'lucide-react';

export {
  Atom as AtomIcon,
  BookOpen as BookIcon,
  CircleCheck as CheckCircleIcon,
  Box as CubeWireframeIcon,
  MousePointer2 as CursorIcon,
  FunctionSquare as FxIcon,
  Lightbulb as LightbulbIcon,
  Quote as QuoteIcon,
} from 'lucide-react';

export const flowIconByName = {
  cursor: MousePointer2,
  fx: FunctionSquare,
  database: Database,
  clockRefresh: History,
  cube: Box,
  checkCircle: CircleCheck,
  atom: Atom,
} as const;
