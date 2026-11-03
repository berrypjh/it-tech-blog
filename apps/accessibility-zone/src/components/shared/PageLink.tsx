import Link from 'next/link';

import type { Locale } from '@it-tech-blog/preferences';

import { ArrowRight } from 'lucide-react';

import { navData } from '@/data';

const labelOf = (locale: Locale, id: string) =>
  navData[locale].flatMap((group) => group.items).find((item) => item.id === id)?.label ?? id;

/** 본문 안에서 다른 페이지(또는 그 섹션)로 가는 링크. 문구는 navData의 라벨을 그대로 쓴다. */
export const PageLink = ({ locale, id, hash }: { locale: Locale; id: string; hash?: string }) => (
  <Link href={`/${id}${hash ? `#${hash}` : ''}`}>{labelOf(locale, id)}</Link>
);

const nextStrings = {
  ko: { label: '다음 페이지' },
  en: { label: 'Next page' },
};

/** 페이지 끝에서 다음 페이지로 이어지는 카드 링크. 내부 이동이라 hover 때 테두리와 화살표로 알린다. */
export const NextPage = ({ locale, id }: { locale: Locale; id: string }) => (
  <nav aria-label={nextStrings[locale].label} className="mt-4xl">
    <Link
      href={`/${id}`}
      data-plain
      className="group flex items-center gap-md rounded-md border border-stroke-light bg-background-default px-lg py-md transition-colors hover:border-stroke-primary"
    >
      <span className="min-w-0 flex-1">
        <span className="block text-xxsm font-semiBold text-text-light">
          {nextStrings[locale].label}
        </span>
        <span className="block font-bold text-text-default">{labelOf(locale, id)}</span>
      </span>
      <ArrowRight
        className="h-5 w-5 shrink-0 text-text-link transition-transform group-hover:translate-x-2xs"
        aria-hidden="true"
      />
    </Link>
  </nav>
);
