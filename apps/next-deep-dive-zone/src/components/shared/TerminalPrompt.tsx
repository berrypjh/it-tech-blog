import { cn } from '@it-tech-blog/utils';

type Props = {
  command: React.ReactNode;
  /** 강조 색(var(--term-fg))으로 표시되는 경로/인자 */
  path?: React.ReactNode;
  /** path 뒤에 muted 톤으로 붙는 추가 텍스트 */
  suffix?: React.ReactNode;
  className?: string;
};

export const TerminalPrompt = ({ command, path, suffix, className }: Props) => (
  <p className={cn('mb-md text-xxsm text-[var(--term-muted)] tabular-nums', className)}>
    <span className="text-[var(--term-accent)] font-bold">$</span> {command}
    {path != null && (
      <>
        {' '}
        <span className="text-[var(--term-fg)]">{path}</span>
      </>
    )}
    {suffix}
  </p>
);
