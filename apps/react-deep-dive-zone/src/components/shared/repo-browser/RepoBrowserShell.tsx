import { cn } from '@it-tech-blog/utils';

import { GithubIcon } from '../icon';
import { SectionHeader } from '../section';

type Props = {
  /** SectionHeader id. section/heading의 id로도 쓰인다. */
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  /** 상단 크롬 바의 저장소 라벨 (예: facebook / react) */
  repoLabel: string;
  /** 브랜치 라벨. 기본값 main. */
  branchLabel?: string;
  /** 우측 상태 라벨 (예: public). 없으면 숨김. */
  statusLabel?: string;
  /** lg+ 좌/우 컬럼 비율. 기본 0.38 : 0.62. */
  gridColumns?: string;
  /** 좌측 트리 슬롯 (RepoBrowserTree 등) */
  tree: React.ReactNode;
  /** 우측 디테일 슬롯. 페이지마다 자유 구성. */
  detail: React.ReactNode;
};

/**
 * 저장소 브라우저 틀: SectionHeader → GitHub 크롬 바 → 좌(트리) / 우(디테일) 2컬럼 카드.
 * 트리와 디테일 내용은 슬롯으로 받고, 카드·크롬·divider·디테일 패널 골격만 공유한다.
 */
export const RepoBrowserShell = ({
  id,
  eyebrow,
  title,
  description,
  icon,
  repoLabel,
  branchLabel = 'main',
  statusLabel,
  gridColumns = 'lg:grid-cols-[minmax(0,_0.38fr)_minmax(0,_0.62fr)]',
  tree,
  detail,
}: Props) => (
  <section id={`section-${id}`} aria-labelledby={`heading-${id}`} className="space-y-lg">
    <SectionHeader id={id} eyebrow={eyebrow} title={title} description={description} icon={icon} />

    <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
      <header className="flex items-center justify-between px-md py-2 border-b border-[var(--term-border)] bg-[var(--term-surface)]">
        <div className="flex items-center gap-2">
          <GithubIcon className="h-4 w-4 text-[var(--term-fg)]" />
          <span className="text-xsm font-mono font-bold text-[var(--term-fg)]">{repoLabel}</span>
          <span className="text-[10px] font-mono text-[var(--term-dim)]">/ {branchLabel}</span>
        </div>
        {statusLabel && (
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-[var(--term-muted)]">
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"
            />
            {statusLabel}
          </span>
        )}
      </header>

      <div className={cn('grid grid-cols-1', gridColumns)}>
        <aside
          aria-label="repository tree"
          className="border-b lg:border-b-0 lg:border-r border-[var(--term-border)] p-sm sm:p-md"
        >
          {tree}
        </aside>
        <article className="p-md sm:p-lg flex flex-col gap-md" aria-live="polite">
          {detail}
        </article>
      </div>
    </div>
  </section>
);
