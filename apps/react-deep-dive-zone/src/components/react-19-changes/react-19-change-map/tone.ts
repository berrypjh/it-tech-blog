export type LayerKey = 'update' | 'render' | 'element' | 'dom' | 'server' | 'priority';

export type LayerTone = {
  /** 카드/Plate 배경 (살짝 좌→우 gradient) */
  plate: string;
  /** Plate / chip border */
  border: string;
  /** 강조 보조 border (hover, active) */
  borderStrong: string;
  /** Layer 이름 text */
  text: string;
  /** 작은 dot / 작은 원형 액센트 */
  dot: string;
  /** dashed connector 색 */
  connectorBorder: string;
  /** 외부 chip 배경/텍스트/border (Feature Chip, Tag) */
  chip: string;
  /** Icon chip(라운드 사각형) bg+text+border */
  iconChip: string;
  /** Solid badge (가장 강한 강조) */
  solidBg: string;
};

export const layerTone: Record<LayerKey, LayerTone> = {
  update: {
    plate:
      'bg-gradient-to-r from-blue-50 via-blue-100/70 to-blue-50 dark:from-blue-950/40 dark:via-blue-900/50 dark:to-blue-950/40',
    border: 'border-blue-200/80 dark:border-blue-800/70',
    borderStrong: 'border-blue-400/80 dark:border-blue-500/70',
    text: 'text-blue-700 dark:text-blue-200',
    dot: 'bg-blue-500 dark:bg-blue-400',
    connectorBorder: 'border-blue-300/80 dark:border-blue-700/70',
    chip: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    solidBg: 'bg-blue-600 dark:bg-blue-500',
  },
  render: {
    plate:
      'bg-gradient-to-r from-sky-50 via-sky-100/70 to-sky-50 dark:from-sky-950/40 dark:via-sky-900/50 dark:to-sky-950/40',
    border: 'border-sky-200/80 dark:border-sky-800/70',
    borderStrong: 'border-sky-400/80 dark:border-sky-500/70',
    text: 'text-sky-700 dark:text-sky-200',
    dot: 'bg-sky-500 dark:bg-sky-400',
    connectorBorder: 'border-sky-300/80 dark:border-sky-700/70',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    iconChip:
      'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    solidBg: 'bg-sky-600 dark:bg-sky-500',
  },
  element: {
    plate:
      'bg-gradient-to-r from-cyan-50 via-cyan-100/70 to-cyan-50 dark:from-cyan-950/40 dark:via-cyan-900/50 dark:to-cyan-950/40',
    border: 'border-cyan-200/80 dark:border-cyan-800/70',
    borderStrong: 'border-cyan-400/80 dark:border-cyan-500/70',
    text: 'text-cyan-700 dark:text-cyan-200',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    connectorBorder: 'border-cyan-300/80 dark:border-cyan-700/70',
    chip: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    iconChip:
      'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    solidBg: 'bg-cyan-600 dark:bg-cyan-500',
  },
  dom: {
    plate:
      'bg-gradient-to-r from-teal-50 via-teal-100/70 to-teal-50 dark:from-teal-950/40 dark:via-teal-900/50 dark:to-teal-950/40',
    border: 'border-teal-200/80 dark:border-teal-800/70',
    borderStrong: 'border-teal-400/80 dark:border-teal-500/70',
    text: 'text-teal-700 dark:text-teal-200',
    dot: 'bg-teal-500 dark:bg-teal-400',
    connectorBorder: 'border-teal-300/80 dark:border-teal-700/70',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    solidBg: 'bg-teal-600 dark:bg-teal-500',
  },
  server: {
    plate:
      'bg-gradient-to-r from-emerald-50 via-emerald-100/70 to-emerald-50 dark:from-emerald-950/40 dark:via-emerald-900/50 dark:to-emerald-950/40',
    border: 'border-emerald-200/80 dark:border-emerald-800/70',
    borderStrong: 'border-emerald-400/80 dark:border-emerald-500/70',
    text: 'text-emerald-700 dark:text-emerald-200',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    connectorBorder: 'border-emerald-300/80 dark:border-emerald-700/70',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    iconChip:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    solidBg: 'bg-emerald-600 dark:bg-emerald-500',
  },
  priority: {
    plate:
      'bg-gradient-to-r from-violet-50 via-violet-100/70 to-violet-50 dark:from-violet-950/40 dark:via-violet-900/50 dark:to-violet-950/40',
    border: 'border-violet-200/80 dark:border-violet-800/70',
    borderStrong: 'border-violet-400/80 dark:border-violet-500/70',
    text: 'text-violet-700 dark:text-violet-200',
    dot: 'bg-violet-500 dark:bg-violet-400',
    connectorBorder: 'border-violet-300/80 dark:border-violet-700/70',
    chip: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    solidBg: 'bg-violet-600 dark:bg-violet-500',
  },
};

export const cardSurface =
  'rounded-2xl border-2 border-slate-200 bg-white shadow-[0_2px_0_var(--term-border)] dark:border-slate-700 dark:bg-[var(--term-bg)]';

export const cardSurfaceHover =
  'transition-all motion-safe:hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_4px_0_var(--term-border)] dark:hover:border-blue-700/70';
