import { cx } from '@berrypjh/react-ui';
import { Code } from 'lucide-react';

import { toneTokens } from '../../../shared/tones';

type Props = {
  title: string;
  code: string;
};

export const JsxExampleCard = ({ title, code }: Props) => {
  const tone = toneTokens.sky;

  return (
    <article
      className={cx(
        'group flex flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-2">
        <Code className={cx('h-4 w-4', tone.text)} aria-hidden="true" />
        <h3 className={cx('text-sm font-bold font-mono tracking-tight', tone.text)}>{title}</h3>
      </header>
      <pre
        className={cx(
          'overflow-x-auto rounded-md border p-2 text-[11.5px] leading-snug font-mono',
          'border-dashed border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
        )}
      >
        <code>{code}</code>
      </pre>
    </article>
  );
};
