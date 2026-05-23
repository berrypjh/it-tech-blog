import { cn } from '@it-tech-blog/utils';

import type { ToneKey } from '../../../start/_shared/tones';
import type { CodeAnnotation } from '../content';

type Props = {
  code: string;
  language: string;
  fileName: string;
  annotations: CodeAnnotation[];
};

const labelStyle: Record<ToneKey, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
  indigo:
    'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
  amber:
    'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/70',
};

const bracketColor: Record<ToneKey, string> = {
  sky: 'border-sky-400/70 dark:border-sky-500/70',
  cyan: 'border-cyan-400/70 dark:border-cyan-500/70',
  violet: 'border-violet-400/70 dark:border-violet-500/70',
  emerald: 'border-emerald-400/70 dark:border-emerald-500/70',
  blue: 'border-blue-400/70 dark:border-blue-500/70',
  teal: 'border-teal-400/70 dark:border-teal-500/70',
  indigo: 'border-indigo-400/70 dark:border-indigo-500/70',
  amber: 'border-amber-400/70 dark:border-amber-500/70',
};

const KEYWORDS = new Set(['export', 'type', 'null', 'number', 'string', 'any', 'Array']);

const highlight = (line: string): React.ReactNode => {
  const tokens = line.split(/(\s+|[(){}[\];,.<>=|]|\?|:)/g);
  return tokens.map((tok, i) => {
    if (!tok) return null;
    if (KEYWORDS.has(tok)) {
      return (
        <span key={i} className="text-fuchsia-300">
          {tok}
        </span>
      );
    }
    if (/^[A-Z][A-Za-z0-9_$]*$/.test(tok)) {
      return (
        <span key={i} className="text-amber-200">
          {tok}
        </span>
      );
    }
    if (tok === '{' || tok === '}' || tok === '<' || tok === '>' || tok === '|') {
      return (
        <span key={i} className="text-slate-400">
          {tok}
        </span>
      );
    }
    if (/^[a-z_$][\w$]*$/i.test(tok)) {
      return (
        <span key={i} className="text-sky-200">
          {tok}
        </span>
      );
    }
    return (
      <span key={i} className="text-slate-300">
        {tok}
      </span>
    );
  });
};

type AnnotatedLineProps = {
  lineNumber: number;
  content: string;
  annotation?: CodeAnnotation;
  annotationPosition?: 'top' | 'middle' | 'bottom' | 'single';
};

const AnnotatedLine = ({
  lineNumber,
  content,
  annotation,
  annotationPosition,
}: AnnotatedLineProps) => (
  <div className="grid grid-cols-[1fr_minmax(110px,_140px)] sm:grid-cols-[1fr_minmax(140px,_180px)] items-stretch">
    {/* Code line */}
    <div className="flex px-md font-mono leading-[1.7] text-[12.5px]">
      <span
        aria-hidden="true"
        className="select-none w-7 shrink-0 pr-3 text-right tabular-nums text-slate-600"
      >
        {lineNumber}
      </span>
      <span className="whitespace-pre text-slate-100">{highlight(content)}</span>
    </div>

    {/* Annotation rail cell */}
    <div className="relative border-l border-slate-800/80">
      {annotation && (
        <div className="absolute inset-0 flex items-center gap-1.5 px-2">
          {/* Bracket — vertical line spans top, middle, or bottom */}
          <span
            aria-hidden="true"
            className={cn(
              'block w-2 border-r-2 self-stretch',
              bracketColor[annotation.tone],
              annotationPosition === 'top' && 'border-t-2 rounded-tr-md',
              annotationPosition === 'bottom' && 'border-b-2 rounded-br-md',
              annotationPosition === 'single' && 'border-t-2 border-b-2 rounded-r-md',
            )}
          />
          {/* Label visible only on middle/single rows */}
          {(annotationPosition === 'middle' || annotationPosition === 'single') && (
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold tracking-tight whitespace-nowrap',
                labelStyle[annotation.tone],
              )}
            >
              {annotation.label}
            </span>
          )}
        </div>
      )}
    </div>
  </div>
);

export const AnnotatedCodePanel = ({ code, language, fileName, annotations }: Props) => {
  const lines = code.split('\n');

  const annotationFor = (
    lineNumber: number,
  ):
    | { annotation: CodeAnnotation; position: 'top' | 'middle' | 'bottom' | 'single' }
    | undefined => {
    const a = annotations.find((x) => lineNumber >= x.from && lineNumber <= x.to);
    if (!a) return undefined;
    const isSingle = a.from === a.to;
    if (isSingle) return { annotation: a, position: 'single' };
    if (lineNumber === a.from) return { annotation: a, position: 'top' };
    if (lineNumber === a.to) return { annotation: a, position: 'bottom' };
    const middleLine = Math.floor((a.from + a.to) / 2);
    if (lineNumber === middleLine) return { annotation: a, position: 'middle' };
    return { annotation: a, position: 'top' };
  };

  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-slate-100',
        'shadow-[0_12px_32px_-16px_rgba(15,23,42,0.6),0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/70 px-md py-2">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">
            {fileName}
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
          {language}
        </span>
      </header>

      <div className="py-md overflow-x-auto">
        {lines.map((line, i) => {
          const lineNumber = i + 1;
          const ann = annotationFor(lineNumber);
          return (
            <AnnotatedLine
              key={i}
              lineNumber={lineNumber}
              content={line}
              annotation={ann?.annotation}
              annotationPosition={ann?.position}
            />
          );
        })}
      </div>
    </div>
  );
};
