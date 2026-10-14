import { DocTable } from '@it-tech-blog/ui';

import { Check, X } from 'lucide-react';

/** 흔한 오해와 더 정확한 관점을 짝으로 보여 주는 표. 아이콘과 열 제목으로 색 이외에도 구분한다. */
export const MisconceptionTable = ({
  caption,
  head,
  pairs,
}: {
  caption: string;
  head: [string, string];
  pairs: [string, string][];
}) => (
  <DocTable
    caption={caption}
    head={head}
    rows={pairs.map(([myth, fact]) => [
      <span key="myth" className="flex gap-sm">
        <X className="mt-xs h-4 w-4 shrink-0 text-text-error" aria-hidden="true" />
        {myth}
      </span>,
      <span key="fact" className="flex gap-sm text-text-default">
        <Check className="mt-xs h-4 w-4 shrink-0 text-text-success" aria-hidden="true" />
        <span>{fact}</span>
      </span>,
    ])}
  />
);
