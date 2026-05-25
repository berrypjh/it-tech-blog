import { cn } from '@it-tech-blog/utils';

type Props = {
  code: string;
  langBadge?: string;
  fileName?: string;
  ariaLabel?: string;
};

/**
 * 어두운 navy 코드 패널.
 * - keyword/string/comment를 정규식으로 가볍게 토큰화해 색을 입힌다.
 * - 본격 syntax highlighter가 아니라 시각 인상을 위한 토큰 페인팅.
 */
export const CodePanel = ({ code, langBadge, fileName, ariaLabel }: Props) => (
  <div
    className={cn(
      'relative overflow-hidden rounded-2xl border-2',
      'border-slate-700/80 bg-slate-950',
      'shadow-[0_2px_0_rgba(0,0,0,0.25)]',
    )}
    aria-label={ariaLabel}
  >
    {(langBadge || fileName) && (
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/80 px-3 py-2">
        {fileName && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 break-all">
            {fileName}
          </span>
        )}
        {langBadge && (
          <span className="inline-flex items-center rounded-md border border-amber-400/40 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
            {langBadge}
          </span>
        )}
      </div>
    )}
    <pre className="overflow-x-auto px-md py-md text-[12px] leading-relaxed sm:text-[13px]">
      <code className="block font-mono whitespace-pre text-slate-200">{highlight(code)}</code>
    </pre>
  </div>
);

const KEYWORDS = new Set([
  'const',
  'let',
  'var',
  'function',
  'async',
  'await',
  'return',
  'try',
  'catch',
  'finally',
  'if',
  'else',
  'true',
  'false',
  'null',
  'undefined',
  'new',
  'export',
  'import',
  'from',
  'default',
  'as',
  'type',
  'interface',
]);

const BUILTINS = new Set([
  'useActionState',
  'useOptimistic',
  'useFormStatus',
  'setPending',
  'setError',
  'updateName',
  'updateNameAction',
  'initialState',
  'initialCount',
  'addOptimistic',
  'count',
  'delta',
  'handleSubmit',
  'pending',
  'name',
  'error',
]);

type Token = { kind: 'kw' | 'fn' | 'str' | 'num' | 'punct' | 'comment' | 'text'; value: string };

/** 라인 단위로 매우 단순한 토크나이즈. 정밀 파서가 아니라 색 입히기 용도. */
const tokenizeLine = (line: string): Token[] => {
  const tokens: Token[] = [];
  let i = 0;
  const n = line.length;
  while (i < n) {
    const c = line[i];
    // line comment
    if (c === '/' && line[i + 1] === '/') {
      tokens.push({ kind: 'comment', value: line.slice(i) });
      break;
    }
    // string
    if (c === '"' || c === "'" || c === '`') {
      const quote = c;
      let j = i + 1;
      while (j < n && line[j] !== quote) {
        if (line[j] === '\\') j += 2;
        else j += 1;
      }
      tokens.push({ kind: 'str', value: line.slice(i, Math.min(j + 1, n)) });
      i = j + 1;
      continue;
    }
    // number
    if (/[0-9]/.test(c)) {
      let j = i + 1;
      while (j < n && /[0-9.]/.test(line[j] ?? '')) j += 1;
      tokens.push({ kind: 'num', value: line.slice(i, j) });
      i = j;
      continue;
    }
    // word
    if (/[A-Za-z_$]/.test(c)) {
      let j = i + 1;
      while (j < n && /[A-Za-z0-9_$]/.test(line[j] ?? '')) j += 1;
      const word = line.slice(i, j);
      if (KEYWORDS.has(word)) tokens.push({ kind: 'kw', value: word });
      else if (BUILTINS.has(word) || /^[A-Z]/.test(word)) tokens.push({ kind: 'fn', value: word });
      else tokens.push({ kind: 'text', value: word });
      i = j;
      continue;
    }
    // punctuation/whitespace
    tokens.push({ kind: 'punct', value: c });
    i += 1;
  }
  return tokens;
};

const tokenClass: Record<Token['kind'], string> = {
  kw: 'text-fuchsia-300',
  fn: 'text-sky-300',
  str: 'text-emerald-300',
  num: 'text-amber-300',
  punct: 'text-slate-400',
  comment: 'text-slate-500 italic',
  text: 'text-slate-200',
};

const highlight = (source: string): React.ReactNode => {
  const lines = source.split('\n');
  return lines.map((line, idx) => (
    <span key={idx} className="block">
      {tokenizeLine(line).map((t, j) => (
        <span key={j} className={tokenClass[t.kind]}>
          {t.value}
        </span>
      ))}
      {'\n'}
    </span>
  ));
};
