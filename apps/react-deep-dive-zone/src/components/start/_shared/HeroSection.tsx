import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from './TerminalPrompt';

type Align = 'start' | 'center';

type Props = {
  promptCommand: React.ReactNode;
  promptPath?: React.ReactNode;
  promptSuffix?: React.ReactNode;
  /** lg+ 그리드 컬럼 템플릿. 기본값은 1:1. */
  gridColumns?: string;
  /** 좌/우 컬럼 수직 정렬. 기본값은 start. */
  align?: Align;
  children: React.ReactNode;
};

const alignClass: Record<Align, string> = {
  start: 'items-start',
  center: 'items-center',
};

/**
 * Hero 섹션 쉘: section + 상단 TerminalPrompt + 2컬럼 그리드.
 * children에 HeroTextColumn / HeroVisualColumn 순서로 배치한다.
 */
export const HeroSection = ({
  promptCommand,
  promptPath,
  promptSuffix,
  gridColumns = 'lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]',
  align = 'start',
  children,
}: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command={promptCommand} path={promptPath} suffix={promptSuffix} />

    <div className={cn('mt-lg grid grid-cols-1 gap-xl lg:gap-2xl', alignClass[align], gridColumns)}>
      {children}
    </div>
  </section>
);
