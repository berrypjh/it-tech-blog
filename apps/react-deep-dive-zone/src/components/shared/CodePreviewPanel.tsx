type Props = {
  code: string;
  language?: string;
  /** 좌측에 표시할 파일 경로 칩 (예: packages/react/src/ReactClient.js) */
  header?: string;
  /** 우측에 표시할 배지 (예: main). 없으면 language 라벨을 보여준다. */
  badge?: string;
  /** 헤더 아래 보조 캡션 줄 */
  caption?: string;
};

export const CodePreviewPanel = ({ code, language = 'js', header, badge, caption }: Props) => {
  const lines = code.replace(/\n$/, '').split('\n');
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-[0_4px_0_var(--term-border)] dark:border-slate-800 dark:bg-slate-950">
      {/* 패널 헤더 */}
      <div className="flex items-center gap-sm border-b border-slate-200 dark:border-slate-800 px-md py-2">
        <div className="flex items-center gap-1.5 shrink-0">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>

        {header ? (
          <span className="min-w-0 truncate rounded border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            {header}
          </span>
        ) : null}

        {badge ? (
          <span className="ml-auto shrink-0 inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-sky-700 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
            {badge}
          </span>
        ) : (
          <span className="ml-auto shrink-0 text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {language}
          </span>
        )}
      </div>

      {caption ? (
        <div className="border-b border-slate-200 dark:border-slate-800 px-md py-1.5">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {caption}
          </span>
        </div>
      ) : null}

      {/* 코드 본문 */}
      <pre className="overflow-x-auto px-md py-md text-[12px] leading-[1.7] font-mono text-slate-800 dark:text-slate-100">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-7 shrink-0 pr-3 text-right text-slate-400 dark:text-slate-600 tabular-nums"
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
        <span className="text-slate-500 italic dark:text-slate-500">{commentMatch[2]}</span>
      </>
    );
  }

  const tokens = line.split(/(\s+|[(){}[\];,.])/);
  const nodes: React.ReactNode[] = [];
  tokens.forEach((tok, idx) => {
    if (!tok) return;
    if (/^['"`].*['"`]$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-emerald-700 dark:text-emerald-300">
          {tok}
        </span>,
      );
    } else if (KEYWORDS.has(tok)) {
      nodes.push(
        <span key={idx} className="text-sky-700 dark:text-sky-300">
          {tok}
        </span>,
      );
    } else if (/^[A-Z][A-Za-z0-9_$]*$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-amber-700 dark:text-amber-200">
          {tok}
        </span>,
      );
    } else if (/^\$\$?[A-Za-z_]/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-violet-700 dark:text-violet-300">
          {tok}
        </span>,
      );
    } else if (/^[a-z_$][\w$]*$/i.test(tok)) {
      nodes.push(
        <span key={idx} className="text-slate-800 dark:text-slate-100">
          {tok}
        </span>,
      );
    } else {
      nodes.push(
        <span key={idx} className="text-slate-500 dark:text-slate-400">
          {tok}
        </span>,
      );
    }
  });
  return nodes;
};
