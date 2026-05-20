type Props = { code: string; language?: string };

/**
 * 어두운 코드 패널 — 첫 코드 맛보기의 시각적 focal point.
 * 줄 번호 + 가벼운 토큰 하이라이트.
 */
export const CodePreviewPanel = ({ code, language = 'js' }: Props) => {
  const lines = code.split('\n');
  return (
    <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950 shadow-[0_4px_0_var(--term-border)]">
      {/* 패널 헤더 */}
      <div className="flex items-center justify-between border-b border-slate-800 px-md py-2">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
          {language}
        </span>
      </div>

      {/* 코드 본문 */}
      <pre className="overflow-x-auto px-md py-md text-[12px] leading-[1.7] font-mono text-slate-100">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
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
  'export',
  'function',
  'const',
  'let',
  'var',
  'return',
  'if',
  'else',
  'true',
  'false',
  'null',
  'undefined',
  'new',
]);

/**
 * 매우 가벼운 하이라이터: 정규식 한 번으로 토큰을 분리해
 * 키워드/문자열/숫자/주석에만 색을 입힌다. 완벽한 파서는 아니지만,
 * 교육용 코드 미리보기에는 충분하다.
 */
const highlight = (line: string): React.ReactNode => {
  const commentMatch = line.match(/^(\s*)(\/\/.*|\/\*.*|\*.*|\*\/)$/);
  if (commentMatch) {
    return (
      <>
        <span>{commentMatch[1]}</span>
        <span className="text-slate-500 italic">{commentMatch[2]}</span>
      </>
    );
  }

  const tokens = line.split(/(\s+|[(){}[\];,.])/);
  const nodes: React.ReactNode[] = [];
  tokens.forEach((tok, idx) => {
    if (!tok) return;
    if (/^['"`].*['"`]$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-emerald-300">
          {tok}
        </span>,
      );
    } else if (KEYWORDS.has(tok)) {
      nodes.push(
        <span key={idx} className="text-sky-300">
          {tok}
        </span>,
      );
    } else if (/^[A-Z][A-Za-z0-9_$]*$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-amber-200">
          {tok}
        </span>,
      );
    } else if (/^\$\$?[A-Za-z_]/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-violet-300">
          {tok}
        </span>,
      );
    } else if (/^[a-z_$][\w$]*$/i.test(tok)) {
      nodes.push(
        <span key={idx} className="text-slate-100">
          {tok}
        </span>,
      );
    } else {
      nodes.push(
        <span key={idx} className="text-slate-400">
          {tok}
        </span>,
      );
    }
  });
  return nodes;
};
