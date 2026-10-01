import type { Locale } from '@it-tech-blog/preferences';

import { List, ListItem, VisuallyHidden } from '@berrypjh/react-ui';
import { ArrowUpRight } from 'lucide-react';

export type DocReference = {
  href: string;
  source: Record<Locale, string>;
  title: Record<Locale, string>;
  note: Record<Locale, string>;
};

const newTab = { ko: '(새 창에서 열림)', en: '(opens in a new tab)' };

/** 출처 · 제목 · 한 줄 설명으로 된 외부 참고 자료 목록. 각 항목은 새 창으로 열린다. */
export const ReferenceList = ({
  references,
  locale,
}: {
  references: DocReference[];
  locale: Locale;
}) => (
  <List className="divide-y divide-stroke-light rounded-md border border-stroke-light">
    {references.map((ref) => (
      <ListItem key={ref.href}>
        <a
          href={ref.href}
          target="_blank"
          rel="noreferrer"
          data-plain
          className="group flex items-start gap-md px-lg py-md hover:bg-primaryBtn-outlinedHover"
        >
          <span className="mt-2xs w-24 shrink-0 text-xxsm font-semiBold text-text-light">
            {ref.source[locale]}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xsm font-semiBold text-text-link">{ref.title[locale]}</span>
            <span className="block text-xxsm text-text-light">{ref.note[locale]}</span>
          </span>
          <ArrowUpRight
            className="mt-2xs h-4 w-4 shrink-0 text-text-link transition-transform group-hover:-translate-y-2xs group-hover:translate-x-2xs"
            aria-hidden="true"
          />
          <VisuallyHidden>{newTab[locale]}</VisuallyHidden>
        </a>
      </ListItem>
    ))}
  </List>
);
