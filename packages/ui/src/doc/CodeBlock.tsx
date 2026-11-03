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
      data-code-block
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

const compareStrings = {
  ko: { before: '고치기 전', after: '고친 후' },
  en: { before: 'Before', after: 'After' },
};

/** 본문 폭(46rem)을 반으로 나눈 칸에 가로 스크롤 없이 들어가는 고정폭 글자 수. */
const HALF_COLUMNS = 44;

/** 고정폭 글꼴에서 한글 · 전각 문자는 두 칸을 차지한다. */
const columnsOf = (line: string) =>
  [...line].reduce(
    (sum, ch) => sum + (/[\u1100-\u11ff\u3000-\u9fff\uac00-\ud7af\uff00-\uffef]/.test(ch) ? 2 : 1),
    0,
  );

const fitsHalf = (code: string) =>
  code.split('\n').every((line) => columnsOf(line) <= HALF_COLUMNS);

/**
 * 고치기 전·후 코드를 비교한다. 두 코드가 반 칸에 들어가면 나란히, 아니면 가로 스크롤 대신 위아래로 쌓는다.
 * 좁은 화면에서는 항상 위아래로 쌓인다.
 */
export const CodeCompare = ({ before, after }: { before: string; after: string }) => {
  const t = useLang(compareStrings);
  const sideBySide = fitsHalf(before) && fitsHalf(after);

  return (
    <div data-code-compare className={cx('my-lg grid gap-md', sideBySide && 'md:grid-cols-2')}>
      <CodeBlock label={t.before} tone="bad" code={before} />
      <CodeBlock label={t.after} tone="good" code={after} />
    </div>
  );
};
