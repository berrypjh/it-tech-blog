import { cn } from '@it-tech-blog/utils';

type Props = {
  title: string;
  description: string;
  className?: string;
};

/**
 * 단순한 Fiber tree 그림.
 * root → 2개의 child → 각 child의 sibling 형태로 SVG 노드를 그린다.
 * teal outline 노드와 gray outline 노드가 섞여 있다.
 */
export const FiberTreeGraphic = ({ title, description, className }: Props) => {
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-teal-200/70 dark:border-teal-800/60',
        'hover:border-teal-400/70 dark:hover:border-teal-500/60',
        'transition-all hover:-translate-y-0.5',
        className,
      )}
    >
      <header className="flex flex-col gap-1">
        <h3 className="text-sm font-bold font-mono tracking-tight text-teal-700 dark:text-teal-300">
          {title}
        </h3>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] break-keep">
          {description}
        </span>
      </header>

      <svg
        viewBox="0 0 200 160"
        className="w-full h-auto max-h-[180px]"
        aria-hidden="true"
        role="presentation"
      >
        {/* connectors */}
        <g
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          fill="none"
          className="text-teal-300/80 dark:text-teal-600/80"
        >
          <path d="M 100 38 L 56 78" />
          <path d="M 100 38 L 144 78" />
          <path d="M 56 96 L 34 128" />
          <path d="M 56 96 L 78 128" />
          <path d="M 144 96 L 166 128" />
        </g>

        {/* root */}
        <g>
          <rect
            x="78"
            y="18"
            width="44"
            height="22"
            rx="6"
            fill="currentColor"
            className="text-teal-100 dark:text-teal-900/40"
          />
          <rect
            x="78"
            y="18"
            width="44"
            height="22"
            rx="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="text-teal-500 dark:text-teal-400"
          />
          <text
            x="100"
            y="33"
            textAnchor="middle"
            fontSize="9"
            className="fill-teal-700 dark:fill-teal-200 font-mono"
          >
            root
          </text>
        </g>

        {/* mid nodes */}
        <g>
          <rect
            x="34"
            y="78"
            width="44"
            height="22"
            rx="6"
            fill="currentColor"
            className="text-teal-100 dark:text-teal-900/40"
          />
          <rect
            x="34"
            y="78"
            width="44"
            height="22"
            rx="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="text-teal-500 dark:text-teal-400"
          />
          <text
            x="56"
            y="93"
            textAnchor="middle"
            fontSize="8"
            className="fill-teal-700 dark:fill-teal-200 font-mono"
          >
            child
          </text>
        </g>
        <g>
          <rect
            x="122"
            y="78"
            width="44"
            height="22"
            rx="6"
            fill="currentColor"
            className="text-slate-100 dark:text-slate-800"
          />
          <rect
            x="122"
            y="78"
            width="44"
            height="22"
            rx="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            className="text-slate-400 dark:text-slate-500"
          />
          <text
            x="144"
            y="93"
            textAnchor="middle"
            fontSize="8"
            className="fill-slate-700 dark:fill-slate-200 font-mono"
          >
            sibling
          </text>
        </g>

        {/* leaves */}
        <g>
          <rect
            x="14"
            y="128"
            width="40"
            height="20"
            rx="5"
            fill="currentColor"
            className="text-slate-100 dark:text-slate-800"
          />
          <rect
            x="14"
            y="128"
            width="40"
            height="20"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-slate-400 dark:text-slate-500"
          />
          <text
            x="34"
            y="142"
            textAnchor="middle"
            fontSize="7.5"
            className="fill-slate-600 dark:fill-slate-300 font-mono"
          >
            leaf
          </text>
        </g>
        <g>
          <rect
            x="58"
            y="128"
            width="40"
            height="20"
            rx="5"
            fill="currentColor"
            className="text-teal-100 dark:text-teal-900/40"
          />
          <rect
            x="58"
            y="128"
            width="40"
            height="20"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-teal-500 dark:text-teal-400"
          />
          <text
            x="78"
            y="142"
            textAnchor="middle"
            fontSize="7.5"
            className="fill-teal-700 dark:fill-teal-200 font-mono"
          >
            leaf
          </text>
        </g>
        <g>
          <rect
            x="146"
            y="128"
            width="40"
            height="20"
            rx="5"
            fill="currentColor"
            className="text-slate-100 dark:text-slate-800"
          />
          <rect
            x="146"
            y="128"
            width="40"
            height="20"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-slate-400 dark:text-slate-500"
          />
          <text
            x="166"
            y="142"
            textAnchor="middle"
            fontSize="7.5"
            className="fill-slate-600 dark:fill-slate-300 font-mono"
          >
            leaf
          </text>
        </g>
      </svg>
    </article>
  );
};
