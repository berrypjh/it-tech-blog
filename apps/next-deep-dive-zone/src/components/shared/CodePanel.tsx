import { cn } from '@it-tech-blog/utils';

type Props = {
  code: string;
  /** 우상단 작은 라벨 (예: JS, JSX) */
  language?: string;
  /** 코드 패널의 컨테이너 위에 추가할 클래스 */
  className?: string;
  /** macOS dot 3개 (히어로용) */
  showWindowDots?: boolean;
  /** 라벨 (e.g. button.jsx) — showWindowDots와 함께 쓰면 코드창 캡션이 됨 */
  caption?: string;
  /** 본문 폰트 크기 */
  size?: 'sm' | 'md';
};

/**
 * 어두운 navy 톤의 코드 패널.
 * 매우 가벼운 토큰 색상 분류: keyword / string / tag / attribute / brace.
 */
export const CodePanel = ({
  code,
  language = 'JS',
  className,
  showWindowDots = false,
  caption,
  size = 'sm',
}: Props) => {
  const lines = code.split('\n');
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-slate-800 bg-slate-950 text-slate-100',
        'shadow-[0_8px_24px_-12px_rgba(15,23,42,0.65),0_2px_0_var(--term-border)]',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/60 px-md py-2">
        <div className="flex items-center gap-1.5">
          {showWindowDots ? (
            <>
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
            </>
          ) : (
            <span
              className="text-[10px] uppercase tracking-wider font-mono text-slate-400"
              aria-hidden="true"
            >
              {'// snippet'}
            </span>
          )}
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
          {caption ?? language}
        </span>
      </div>

      <pre
        className={cn(
          'overflow-x-auto px-md py-md font-mono leading-[1.7]',
          size === 'md' ? 'text-[14px] sm:text-[15px]' : 'text-[12.5px]',
        )}
      >
        <code className="text-slate-100">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-7 shrink-0 pr-3 text-right tabular-nums text-slate-600"
              >
                {i + 1}
              </span>
              <span className="whitespace-pre">{highlight(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

const KEYWORDS = new Set([
  'const',
  'let',
  'var',
  'function',
  'return',
  'if',
  'else',
  'import',
  'from',
  'export',
  'true',
  'false',
  'null',
  'undefined',
  'new',
]);

const highlight = (line: string): React.ReactNode => {
  const tokens = line.split(/(\s+|[(){}[\];,.<>=]|\/?>|<\/?)/g);
  const nodes: React.ReactNode[] = [];
  let inTag = false;
  tokens.forEach((tok, idx) => {
    if (!tok) return;
    if (tok === '<' || tok === '</' || tok === '<') {
      inTag = true;
      nodes.push(
        <span key={idx} className="text-slate-400">
          {tok}
        </span>,
      );
      return;
    }
    if (tok === '>' || tok === '/>') {
      inTag = false;
      nodes.push(
        <span key={idx} className="text-slate-400">
          {tok}
        </span>,
      );
      return;
    }
    if (tok === '{' || tok === '}') {
      nodes.push(
        <span key={idx} className="text-fuchsia-300">
          {tok}
        </span>,
      );
      return;
    }
    if (KEYWORDS.has(tok)) {
      nodes.push(
        <span key={idx} className="text-fuchsia-300">
          {tok}
        </span>,
      );
      return;
    }
    if (/^['"`].*['"`]$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-emerald-300">
          {tok}
        </span>,
      );
      return;
    }
    if (inTag && /^[A-Za-z][A-Za-z0-9-]*$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-cyan-300">
          {tok}
        </span>,
      );
      return;
    }
    if (/^[A-Z][A-Za-z0-9_$]*$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-amber-200">
          {tok}
        </span>,
      );
      return;
    }
    if (/^[a-z_$][\w$]*$/i.test(tok)) {
      nodes.push(
        <span key={idx} className="text-sky-200">
          {tok}
        </span>,
      );
      return;
    }
    nodes.push(
      <span key={idx} className="text-slate-300">
        {tok}
      </span>,
    );
  });
  return nodes;
};
