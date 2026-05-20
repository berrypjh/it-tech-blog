import { SectionHeader } from '../../_shared/SectionHeader';
import type { WhyReact19Content } from '../content';
import { principleIconByName, ShieldIcon } from '../icons';

type Props = { content: WhyReact19Content['principles'] };

export const LearningPrinciplesPanel = ({ content }: Props) => {
  return (
    <section id="section-principles" aria-labelledby="heading-principles" className="space-y-lg">
      <SectionHeader
        id="principles"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ShieldIcon className="h-5 w-5" />}
      />

      {/* 넓은 카드 안에 4 컬럼 — 세로 구분선 */}
      <div className="rounded-lg border border-sky-200/80 dark:border-sky-800/60 bg-gradient-to-br from-sky-50/70 via-white to-teal-50/40 dark:from-sky-950/30 dark:via-transparent dark:to-teal-950/20 p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-[var(--term-border)] lg:divide-y-0 lg:divide-x lg:divide-[var(--term-border)]">
          {content.items.map((p, idx) => {
            const Icon = principleIconByName[p.icon];
            return (
              <li
                key={p.id}
                className="flex flex-col gap-sm py-md lg:py-2 sm:px-md lg:px-md first:pt-0 sm:first:pt-md lg:first:pt-2 first:lg:pl-0"
              >
                {/* 상단: 인덱스 + 아이콘 */}
                <div className="flex items-center gap-sm">
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-sky-200 dark:border-sky-700/70 text-sky-600 dark:text-sky-300 shadow-[0_1px_0_var(--term-border)]"
                  >
                    <Icon className="h-[1.125rem] w-[1.125rem]" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[10px] font-mono tabular-nums text-[var(--term-dim)]"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* 제목 (2줄) */}
                <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                  {p.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                {/* 설명 */}
                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                  {p.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
