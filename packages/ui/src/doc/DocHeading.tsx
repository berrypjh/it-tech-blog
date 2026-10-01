'use client';

import { useLang } from '@it-tech-blog/utils';

import { VisuallyHidden } from '@berrypjh/react-ui';
import { Hash } from 'lucide-react';

type Props = { id: string; title: string };

const strings = { ko: { anchor: '섹션 링크' }, en: { anchor: 'section link' } };

/** 섹션 제목(h2). 앵커 링크로 해당 위치 URL을 공유할 수 있다. */
export const DocH2 = ({ id, title }: Props) => {
  const t = useLang(strings);

  return (
    <h2
      id={id}
      className="group mt-5xl mb-lg pt-xl border-t border-stroke-light text-xl leading-xl font-bold tracking-sm text-text-default"
    >
      {title}
      <a
        href={`#${id}`}
        data-plain
        className="ml-sm inline-flex align-middle text-text-light opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
      >
        <Hash className="h-4 w-4" aria-hidden="true" />
        <VisuallyHidden>
          {title} {t.anchor}
        </VisuallyHidden>
      </a>
    </h2>
  );
};

/** 하위 제목(h3). */
export const DocH3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-3xl mb-md text-md leading-md font-semiBold text-text-default">{children}</h3>
);
