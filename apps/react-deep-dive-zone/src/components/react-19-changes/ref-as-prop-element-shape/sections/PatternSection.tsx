import { cn } from '@it-tech-blog/utils';

import { CheckCircleIcon, PackageIcon, SparklesIcon } from '../icons';
import { type PathKey, pathTone } from '../tone';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = {
  number: string;
  eyebrow: string;
  title: string;
  path: PathKey;
  code: { fileName: string; langBadge: 'TSX'; code: string };
  explanationTitle: string;
  explanationPoints: string[];
  /** id 충돌 방지용 슬러그 */
  slug: string;
};

/**
 * React 18 forwardRef / React 19 ref-as-prop 패턴 카드 (코드 + 설명 2열).
 * 두 섹션이 같은 구조이므로 path만 바꿔 재사용한다.
 */
export const PatternSection = ({
  number,
  eyebrow,
  title,
  path,
  code,
  explanationTitle,
  explanationPoints,
  slug,
}: Props) => {
  const tone = pathTone[path];
  const Icon = path === 'react19' ? SparklesIcon : PackageIcon;
  const headingId = `${slug}-heading`;

  return (
    <section aria-labelledby={headingId} className="flex flex-col">
      <SectionHeader id={headingId} number={number} eyebrow={eyebrow} title={title} />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] lg:gap-lg items-stretch">
        {/* Code panel */}
        <div className="flex">
          <CodePanel
            code={code.code}
            fileName={code.fileName}
            langBadge={code.langBadge}
            toneBorder={path === 'react19' ? 'border-emerald-700/70' : 'border-indigo-700/70'}
          />
        </div>

        {/* Explanation card */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            tone.border,
            'bg-white dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                tone.iconChip,
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-sm font-bold break-keep', tone.text)}>{explanationTitle}</h3>
          </header>

          <ul className="flex flex-col gap-1.5">
            {explanationPoints.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', tone.text)}
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
