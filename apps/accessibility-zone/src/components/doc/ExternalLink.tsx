'use client';

import { useLang } from '@it-tech-blog/utils';

import { VisuallyHidden } from '@berrypjh/react-ui';
import { ArrowUpRight } from 'lucide-react';

const strings = { ko: '(새 창에서 열림)', en: '(opens in a new tab)' };

/** 새 창으로 여는 외부 링크. 새 창 동작을 시각·스크린 리더 양쪽에 알린다. */
export const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const newTab = useLang(strings);

  return (
    <a href={href} target="_blank" rel="noreferrer" className="group/ext">
      {children}
      <ArrowUpRight
        className="ml-2xs inline h-3.5 w-3.5 align-text-top transition-transform group-hover/ext:-translate-y-2xs group-hover/ext:translate-x-2xs"
        aria-hidden="true"
      />
      <VisuallyHidden>{newTab}</VisuallyHidden>
    </a>
  );
};
