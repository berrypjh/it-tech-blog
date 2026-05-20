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
  History as ClockRefreshIcon,
  Box as CubeWireframeIcon,
  MousePointer2 as CursorIcon,
  Database as DatabaseIcon,
  FunctionSquare as FxIcon,
  Lightbulb as LightbulbIcon,
  Quote as QuoteIcon,
  Sparkles as SparkleIcon,
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
