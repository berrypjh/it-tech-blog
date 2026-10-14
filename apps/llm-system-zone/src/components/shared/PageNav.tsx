import Link from 'next/link';

import type { Locale } from '@it-tech-blog/preferences';

import { cx } from '@berrypjh/react-ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { navData } from '@/data';

const strings = {
  ko: { label: '이전·다음 페이지', prev: '이전', next: '다음' },
  en: { label: 'Previous and next pages', prev: 'Previous', next: 'Next' },
};

const labelOf = (locale: Locale, id: string) =>
  navData[locale].flatMap((group) => group.items).find((item) => item.id === id)?.label ?? id;

const linkClass =
  'flex flex-1 flex-col gap-2xs rounded-md border border-stroke-light bg-background-surface p-md transition-colors hover:border-stroke-primary';

/** 문서 끝의 이전·다음 페이지 링크. 라벨은 navData에서 읽어 목록을 중복하지 않는다. */
export const PageNav = ({
  locale,
  prev,
  next,
}: {
  locale: Locale;
  prev?: string;
  next?: string;
}) => {
  const t = strings[locale];

  return (
    <nav aria-label={t.label} className="mt-5xl flex flex-col gap-md sm:flex-row">
      {prev && (
        <Link href={`/${prev}`} data-plain className={linkClass}>
          <span className="flex items-center gap-xs text-xxsm text-text-light">
            <ArrowLeft className="h-3 w-3" aria-hidden="true" />
            {t.prev}
          </span>
          <span className="text-xsm font-semiBold text-text-default">{labelOf(locale, prev)}</span>
        </Link>
      )}
      {next && (
        <Link href={`/${next}`} data-plain className={cx(linkClass, 'sm:items-end sm:text-right')}>
          <span className="flex items-center gap-xs text-xxsm text-text-light">
            {t.next}
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </span>
          <span className="text-xsm font-semiBold text-text-default">{labelOf(locale, next)}</span>
        </Link>
      )}
    </nav>
  );
};
