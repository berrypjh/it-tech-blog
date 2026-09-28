'use client';

import { useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { Button, cx } from '@berrypjh/react-ui';
import { Check, Copy } from 'lucide-react';

type Tone = 'bad' | 'good';

const toneStyles: Record<Tone, string> = {
  bad: 'text-text-error',
  good: 'text-text-success',
};

const strings = {
  ko: { copy: '복사', copied: '복사됨' },
  en: { copy: 'Copy', copied: 'Copied' },
};

/** 파일/라벨 바와 복사 버튼이 있는 코드 블록. */
export const CodeBlock = ({
  code,
  label,
  tone,
  className,
}: {
  code: string;
  label: string;
  tone?: Tone;
  className?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const t = useLang(strings);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={cx(
        'overflow-hidden rounded-md border border-stroke-light bg-background-default',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-stroke-light px-lg py-xs">
        <span
          className={cx('text-xxsm font-semiBold', tone ? toneStyles[tone] : 'text-text-light')}
        >
          {label}
        </span>
        <Button
          variant="text"
          size="sm"
          onClick={copy}
          startIcon={
            copied ? (
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <Copy className="h-3.5 w-3.5" aria-hidden="true" />
            )
          }
        >
          <span aria-live="polite">{copied ? t.copied : t.copy}</span>
        </Button>
      </div>
      <pre className="overflow-x-auto px-lg py-md font-mono text-xsm leading-xsm text-text-default">
        <code>{code}</code>
      </pre>
    </div>
  );
};

/** Before/After 코드를 나란히 비교한다. 좁은 화면에서는 위아래로 쌓인다. */
export const CodeCompare = ({ before, after }: { before: string; after: string }) => (
  <div className="my-lg grid gap-md md:grid-cols-2">
    <CodeBlock label="Before" tone="bad" code={before} />
    <CodeBlock label="After" tone="good" code={after} />
  </div>
);
