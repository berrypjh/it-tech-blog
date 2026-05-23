import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from '../../../start/_shared/tones';
import type { HeroFieldGroup } from '../content';
import {
  DatabaseIcon,
  FingerprintIcon,
  FlagIcon,
  LayersIcon,
  NetworkIcon,
  ZapIcon,
} from '../icons';

type Props = { group: HeroFieldGroup };

const iconMap = {
  fingerprint: FingerprintIcon,
  network: NetworkIcon,
  database: DatabaseIcon,
  flag: FlagIcon,
  zap: ZapIcon,
  layers: LayersIcon,
} as const;

const accentBorder: Record<ToneKey, string> = {
  sky: 'border-sky-400/40',
  cyan: 'border-cyan-400/40',
  violet: 'border-violet-400/40',
  emerald: 'border-emerald-400/40',
  blue: 'border-blue-400/40',
  teal: 'border-teal-400/40',
  indigo: 'border-indigo-400/40',
  amber: 'border-amber-400/40',
};

const accentDot: Record<ToneKey, string> = {
  sky: 'bg-sky-400',
  cyan: 'bg-cyan-400',
  violet: 'bg-violet-400',
  emerald: 'bg-emerald-400',
  blue: 'bg-blue-400',
  teal: 'bg-teal-400',
  indigo: 'bg-indigo-400',
  amber: 'bg-amber-400',
};

const accentText: Record<ToneKey, string> = {
  sky: 'text-sky-200',
  cyan: 'text-cyan-200',
  violet: 'text-violet-200',
  emerald: 'text-emerald-200',
  blue: 'text-blue-200',
  teal: 'text-teal-200',
  indigo: 'text-indigo-200',
  amber: 'text-amber-200',
};

export const FiberObjectGroupCard = ({ group }: Props) => {
  const Icon = iconMap[group.iconName];
  return (
    <article
      className={cn(
        'rounded-xl border bg-slate-900/60 px-3 py-2.5 backdrop-blur-sm',
        accentBorder[group.tone],
      )}
    >
      <header className="mb-2 flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-5 h-5 rounded-md bg-slate-800/80',
            accentText[group.tone],
          )}
        >
          <Icon className="h-3 w-3" />
        </span>
        <h3 className={cn('text-[11px] font-bold tracking-tight', accentText[group.tone])}>
          {group.title}
        </h3>
      </header>
      <ul className="flex flex-col gap-0.5">
        {group.fields.map((f) => (
          <li
            key={f}
            className="flex items-center gap-1.5 rounded-md bg-slate-950/50 px-2 py-1 text-[11px] text-slate-200"
          >
            <span
              aria-hidden="true"
              className={cn('inline-block h-1 w-1 rounded-full shrink-0', accentDot[group.tone])}
            />
            <code className="font-mono leading-none">{f}</code>
          </li>
        ))}
      </ul>
    </article>
  );
};
