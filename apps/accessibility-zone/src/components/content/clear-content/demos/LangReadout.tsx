'use client';

import { useEffect, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

const content = {
  ko: {
    sample: (term: React.ReactNode) => <>행사 이름은 {term}입니다.</>,
    title: '페이지가 읽은 언어 속성',
    page: '페이지 (html의 lang)',
    part: '행사 이름 (가장 가까운 lang)',
  },
  en: {
    sample: (term: React.ReactNode) => <>The event is called {term}.</>,
    title: 'Language attributes the page read',
    page: 'Page (lang on html)',
    part: 'Event name (nearest lang)',
  },
};

/** 다른 언어로 쓴 구절에 lang을 주고, 페이지와 구절의 언어를 실제 DOM에서 읽는다. */
export const LangReadout = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const term = useRef<HTMLSpanElement>(null);
  const [read, setRead] = useState({ page: '', part: '' });
  const otherLang = locale === 'ko' ? 'en' : 'ko';
  const name = locale === 'ko' ? 'Accessibility for All' : '모두의 접근성';

  useEffect(() => {
    setRead({
      page: document.documentElement.lang,
      part: term.current?.closest('[lang]')?.getAttribute('lang') ?? '',
    });
  }, [locale]);

  return (
    <div className="my-xl flex flex-col gap-md">
      <p className="rounded-sm border border-stroke-light p-md">
        {c.sample(
          <span ref={term} lang={otherLang}>
            {name}
          </span>,
        )}
      </p>
      <ObservedPanel
        title={c.title}
        rows={[
          [c.page, <code key="p">{read.page}</code>],
          [c.part, <code key="t">{read.part}</code>],
        ]}
      />
    </div>
  );
};
