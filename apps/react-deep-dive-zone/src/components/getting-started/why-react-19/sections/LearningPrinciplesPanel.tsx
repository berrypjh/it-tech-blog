import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { WhyReact19Content } from '../content';
import { principleIconByName, ShieldIcon } from '../icons';

type Props = { content: WhyReact19Content['principles'] };

/** 선언 순서대로 A·B·C 순환 — 중립 크롬 위 부드러운 3색 텍스트 액센트. */
const accentTexts = [
  'text-[var(--term-accent)]',
  'text-sky-600 dark:text-sky-300',
  'text-violet-600 dark:text-violet-300',
] as const;

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
      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-[var(--term-border)] lg:divide-y-0 lg:divide-x lg:divide-[var(--term-border)]">
          {content.items.map((p, idx) => {
            const Icon = principleIconByName[p.icon];
            const accentText = accentTexts[idx % accentTexts.length];
            return (
              <li
                key={p.id}
                className="flex flex-col gap-sm py-md lg:py-2 sm:px-md lg:px-md first:pt-0 sm:first:pt-md lg:first:pt-2 first:lg:pl-0"
              >
                {/* 상단: 인덱스 + 아이콘 */}
                <div className="flex items-center gap-sm">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center w-9 h-9 rounded-full',
                      'bg-[var(--term-surface)] border border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
                      accentText,
                    )}
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
