import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { PerspectiveCard, WhyOpenSourceContent } from '../content';
import { DocIcon, perspectiveIconByName } from '../icons';

type Props = { content: WhyOpenSourceContent['perspectives'] };

type PerspectiveTone = PerspectiveCard['tone'];

const houseBase = {
  iconBg: 'bg-[var(--term-surface)] border border-[var(--term-border)]',
  border: 'border-[var(--term-border)]',
  hoverBorder: 'hover:border-[var(--term-accent)]',
};

// 소프트 액센트 3색: A amber / B sky / C violet (텍스트 색 + 작은 ribbon만)
const A = {
  ...houseBase,
  iconText: 'text-[var(--term-accent)]',
  subtitle: 'text-[var(--term-accent)]',
  ribbon: 'bg-[var(--term-accent)]',
};
const B = {
  ...houseBase,
  iconText: 'text-sky-600 dark:text-sky-300',
  subtitle: 'text-sky-600 dark:text-sky-300',
  ribbon: 'bg-sky-400 dark:bg-sky-500',
};
const C = {
  ...houseBase,
  iconText: 'text-violet-600 dark:text-violet-300',
  subtitle: 'text-violet-600 dark:text-violet-300',
  ribbon: 'bg-violet-400 dark:bg-violet-500',
};

// 키 선언 순서대로 [A, B, C, A] 순환
const toneClasses: Record<PerspectiveTone, typeof A> = {
  blue: A,
  teal: B,
  lavender: C,
  coral: A,
};

export const GitHubPerspectiveCards = ({ content }: Props) => {
  return (
    <section
      id="section-perspectives"
      aria-labelledby="heading-perspectives"
      className="space-y-lg"
    >
      <SectionHeader
        id="perspectives"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<DocIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const t = toneClasses[card.tone];
          const Icon = perspectiveIconByName[card.icon];
          return (
            <li key={card.id} className="flex">
              <article
                className={cn(
                  'group relative flex flex-col w-full h-full gap-sm rounded-lg border bg-[var(--term-bg)]',
                  'p-md sm:p-lg pt-lg transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                  t.hoverBorder,
                )}
              >
                {/* 상단 컬러 ribbon */}
                <span
                  aria-hidden="true"
                  className={cn('absolute top-0 left-3 right-3 h-0.5 rounded-b-full', t.ribbon)}
                />

                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-12 h-12 rounded-full',
                    t.iconBg,
                    t.iconText,
                    'shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <Icon className="h-[1.25rem] w-[1.25rem]" />
                </span>

                <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                  {card.title}
                </h3>

                <p className={cn('text-xsm font-bold', t.subtitle)}>{card.subtitle}</p>

                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                  {card.description}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
