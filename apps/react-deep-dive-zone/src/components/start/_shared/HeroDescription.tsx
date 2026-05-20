import { cn } from '@it-tech-blog/utils';

type Props = {
  /** 본문 최대 너비 클래스. 기본값 'max-w-[56ch]'. */
  maxWidth?: string;
  className?: string;
  /** 여러 줄을 한 그룹으로 렌더할 때 사용. 지정되면 children은 무시된다. */
  lines?: React.ReactNode[];
  children?: React.ReactNode;
};

const baseClass = 'text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep';

/**
 * Hero 본문 설명.
 * - 단일 단락: children 전달 → <p>로 렌더.
 * - 다중 단락: lines 전달 → <div> 안에 여러 <p>로 렌더(gap 없음, 텍스트 스타일 상속).
 */
export const HeroDescription = ({
  maxWidth = 'max-w-[56ch]',
  className,
  lines,
  children,
}: Props) => {
  const wrapperClass = cn(baseClass, maxWidth, className);

  if (lines) {
    return (
      <div className={wrapperClass}>
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    );
  }

  return <p className={wrapperClass}>{children}</p>;
};
