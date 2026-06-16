import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ResourceCard, WhyReact19Content } from '../content';
import { ArrowRightIcon, BookIcon, ExternalLinkIcon, GithubIcon, RssIcon } from '../icons';

type Props = { content: WhyReact19Content['resources'] };

/** 파란 블로그 mock — react.dev/blog 느낌 */
const BlogPreview = () => (
  <div
    aria-hidden="true"
    className="relative h-28 rounded-md border border-sky-200/70 dark:border-sky-800/60 bg-gradient-to-br from-sky-50 to-white dark:from-sky-950/40 dark:to-slate-900 overflow-hidden"
  >
    {/* 좌상단 brand bar */}
    <div className="absolute top-0 left-0 right-0 px-2.5 py-1.5 flex items-center justify-between border-b border-sky-200/70 dark:border-sky-800/50 bg-white/60 dark:bg-slate-900/40">
      <div className="flex items-center gap-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-sky-500" />
        <span className="text-[9px] font-bold text-sky-700 dark:text-sky-200">react.dev</span>
      </div>
      <RssIcon className="h-3 w-3 text-sky-500 dark:text-sky-400" />
    </div>
    {/* 본문 mock */}
    <div className="absolute top-7 left-0 right-0 px-2.5 pt-1.5 flex flex-col gap-1">
      <div className="h-2 w-3/4 rounded bg-sky-500/80" />
      <div className="h-1.5 w-full rounded bg-sky-200/80 dark:bg-sky-700/40" />
      <div className="h-1.5 w-5/6 rounded bg-sky-200/80 dark:bg-sky-700/40" />
      <div className="h-1.5 w-2/3 rounded bg-sky-200/60 dark:bg-sky-700/30" />
    </div>
    {/* 우하단 코드 칩 */}
    <div className="absolute bottom-1.5 right-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded border border-sky-300/70 dark:border-sky-700/60 bg-white/70 dark:bg-slate-900/60 text-[9px] font-mono text-sky-700 dark:text-sky-200">
      19.2
    </div>
  </div>
);

/** GitHub releases mock — 라이트/다크 대응 (표준 코드 박스와 동일 슬레이트 스킴) */
const ReleasesPreview = () => (
  <div
    aria-hidden="true"
    className="relative h-28 rounded-md border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 overflow-hidden"
  >
    {/* 상단 brand bar */}
    <div className="absolute top-0 left-0 right-0 px-2.5 py-1.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/80">
      <div className="flex items-center gap-1.5">
        <GithubIcon className="h-3 w-3 text-slate-700 dark:text-slate-200" />
        <span className="text-[9px] font-bold text-slate-700 dark:text-slate-200">
          facebook/react
        </span>
      </div>
      <span className="text-[9px] font-mono text-teal-600 dark:text-teal-300">/releases</span>
    </div>
    {/* releases mock list */}
    <ul className="absolute top-7 left-0 right-0 px-2.5 pt-1 flex flex-col gap-1">
      <li className="flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400" />
        <span className="text-[9px] font-mono text-slate-800 dark:text-slate-200">v19.2.0</span>
        <span className="ml-auto text-[8px] text-slate-400 dark:text-slate-500">2025.10</span>
      </li>
      <li className="flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
        <span className="text-[9px] font-mono text-slate-600 dark:text-slate-300">v19.1.0</span>
        <span className="ml-auto text-[8px] text-slate-400 dark:text-slate-500">2025.06</span>
      </li>
      <li className="flex items-center gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
        <span className="text-[9px] font-mono text-slate-600 dark:text-slate-300">v19.0.0</span>
        <span className="ml-auto text-[8px] text-slate-400 dark:text-slate-500">2024.12</span>
      </li>
    </ul>
  </div>
);

const ResourceCardItem = ({ card }: { card: ResourceCard }) => {
  return (
    <article
      className={cn(
        'group flex flex-col gap-md w-full rounded-lg border bg-[var(--term-bg)]',
        'p-md sm:p-lg transition-all',
        'border-[var(--term-border)] hover:border-[var(--term-accent)]',
        'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
      )}
    >
      {/* 상단: eyebrow + date pill */}
      <header className="flex items-center justify-between gap-sm">
        <p className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-accent)]">
          {card.eyebrow}
        </p>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]">
          {card.date}
        </span>
      </header>

      <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
        {card.title}
      </h3>

      <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
        {card.description}
      </p>

      <ul className="flex flex-col gap-1.5">
        {card.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-xsm text-[var(--term-fg)]">
            <span
              aria-hidden="true"
              className="mt-2 inline-block w-1 h-1 rounded-full bg-[var(--term-accent)] shrink-0"
            />
            <span className="leading-relaxed break-keep">{renderBulletInline(b)}</span>
          </li>
        ))}
      </ul>

      {/* 썸네일 mock */}
      {card.id === 'blog' ? <BlogPreview /> : <ReleasesPreview />}

      {/* CTA */}
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group mt-auto inline-flex items-center justify-center gap-2 px-md py-2.5 rounded-md text-xsm font-bold',
          'border border-transparent bg-slate-900 text-slate-50 transition-colors hover:bg-slate-800',
          'dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
        )}
      >
        {card.cta}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        <ExternalLinkIcon className="h-3 w-3 opacity-80" />
      </a>
    </article>
  );
};

const renderBulletInline = (text: string): React.ReactNode => {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="px-1 py-0.5 rounded border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] text-[0.9em] font-mono"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export const OfficialChangeRecordCards = ({ content }: Props) => {
  return (
    <section id="section-resources" aria-labelledby="heading-resources" className="space-y-lg">
      <SectionHeader
        id="resources"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<BookIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-md lg:gap-lg">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <div className="flex w-full">
              <ResourceCardItem card={card} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
