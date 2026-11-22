'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { cardClass, cardTitleClass } from '@/components/widgets/shared/styles';
import { navData } from '@/data/nav-content';

const PAGE_SIZE = 4;
const CURRENT_ID = 'navigation-and-current';
const chapterIds = [
  'selection-controls',
  'disclosure-and-accordion',
  'tabs-pattern',
  CURRENT_ID,
  'menus-and-toolbars',
  'slider-values',
  'spinbutton-input',
  'window-splitter',
  'carousel-pattern',
];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '쪽 번호 링크로 옮겨 다니며 주소와 현재 표시를 읽고, 브라우저의 뒤로 가기로 돌아와 보세요. 문서 목록은 가상의 자료입니다.',
    chapterNav: '12장 페이지',
    breadcrumb: '현재 경로',
    home: 'A11y Lab',
    pagination: '문서 목록 쪽 이동',
    listTitle: (page: number, last: number) => `교육용 문서 목록 · ${page} / ${last}쪽`,
    previous: '이전 쪽',
    next: '다음 쪽',
    pageLabel: (page: number) => `${page}쪽`,
    documents: [
      '자막 만들기',
      '실시간 자막 점검',
      '자막 품질 기준',
      '설명 대본 쓰기',
      '오디오 설명 녹음',
      '수어 통역 안내',
      '행사장 이동 경로',
      '좌석 안내문',
      '신청 확인서 양식',
      '문의 접수 기록',
    ],
    observed: '페이지가 읽은 DOM과 주소',
    query: '주소의 쿼리 (location.search)',
    current: 'aria-current="page"인 링크',
    names: '이 실습 안의 nav 이름',
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Move with the page number links while reading the address and the current markers, then return with the browser’s back button. The document list is fictional.',
    chapterNav: 'Chapter 12 pages',
    breadcrumb: 'Breadcrumb',
    home: 'A11y Lab',
    pagination: 'Document list pages',
    listTitle: (page: number, last: number) => `Teaching document list · page ${page} of ${last}`,
    previous: 'Previous page',
    next: 'Next page',
    pageLabel: (page: number) => `Page ${page}`,
    documents: [
      'Making captions',
      'Checking live captions',
      'Caption quality criteria',
      'Writing a descriptive transcript',
      'Recording audio description',
      'Sign language interpreting',
      'Routes inside the venue',
      'Seating notice',
      'Confirmation template',
      'Inquiry log',
    ],
    observed: 'DOM and address the page read',
    query: 'Query of the address (location.search)',
    current: 'Links with aria-current="page"',
    names: 'nav names inside this exercise',
    focus: 'document.activeElement',
    none: 'none',
  },
};

const listClass = 'flex flex-wrap gap-x-md gap-y-xs';
const currentClass = 'aria-[current=page]:font-bold aria-[current=page]:text-text-default';

/**
 * 실제 링크로 만든 사이트 메뉴 · 현재 경로 · 쪽 번호. 쪽 번호는 주소의 page 쿼리를 바꾸는 링크라서
 * 뒤로 가기와 주소 복사가 그대로 동작한다. 첫 쪽과 마지막 쪽에서는 갈 곳이 없는 이전 · 다음 링크를 만들지 않는다.
 * 쪽이 바뀌면 초점을 목록 제목으로 옮긴다. 처음 들어왔을 때는 옮기지 않는다.
 */
export const NavigationDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const id = useId();
  const box = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active] = useActiveElement();
  const [read, setRead] = useState({ query: '', current: '', names: '' });

  const last = Math.ceil(c.documents.length / PAGE_SIZE);
  const requested = Number.parseInt(searchParams.get('page') ?? '1', 10);
  const page = Math.min(Math.max(Number.isNaN(requested) ? 1 : requested, 1), last);
  const shown = c.documents.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hrefOf = (target: number) => (target === 1 ? pathname : `${pathname}?page=${target}`);
  const labels = new Map(
    navData[locale].flatMap((group) => group.items).map((item) => [item.id, item.label]),
  );
  const previousPage = useRef(page);

  useEffect(() => {
    if (previousPage.current !== page) document.getElementById(`${id}-list`)?.focus();
    previousPage.current = page;
    const el = box.current;
    if (!el) return;
    setRead({
      query: window.location.search,
      current: [...el.querySelectorAll('a[aria-current="page"]')]
        .map((link) => link.textContent)
        .join(' / '),
      names: [...el.querySelectorAll('nav')]
        .map((nav) => nav.getAttribute('aria-label'))
        .join(' / '),
    });
  }, [id, page]);

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div ref={box} className="flex flex-col gap-lg text-xsm">
        <nav aria-label={c.chapterNav} className={cardClass}>
          <ul className={listClass}>
            {chapterIds.map((chapterId) => (
              <li key={chapterId}>
                <Link
                  href={`/${chapterId}`}
                  aria-current={chapterId === CURRENT_ID ? 'page' : undefined}
                  className={currentClass}
                >
                  {labels.get(chapterId)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={c.breadcrumb} className={cardClass}>
          <ol className={listClass}>
            <li>
              <Link href="/">{c.home}</Link>
              <span aria-hidden="true" className="ml-md text-text-light">
                /
              </span>
            </li>
            <li>
              <Link href={`/${CURRENT_ID}`} aria-current="page" className={currentClass}>
                {labels.get(CURRENT_ID)}
              </Link>
            </li>
          </ol>
        </nav>

        <div className={cardClass}>
          <h3 id={`${id}-list`} tabIndex={-1} className={cardTitleClass}>
            {c.listTitle(page, last)}
          </h3>
          <ul className="list-disc pl-lg">
            {shown.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
          <nav aria-label={c.pagination}>
            <ul className={listClass}>
              {page > 1 && (
                <li>
                  <Link href={hrefOf(page - 1)} scroll={false}>
                    {c.previous}
                  </Link>
                </li>
              )}
              {Array.from({ length: last }, (_, index) => index + 1).map((target) => (
                <li key={target}>
                  <Link
                    href={hrefOf(target)}
                    scroll={false}
                    aria-current={target === page ? 'page' : undefined}
                    className={currentClass}
                  >
                    {c.pageLabel(target)}
                  </Link>
                </li>
              ))}
              {page < last && (
                <li>
                  <Link href={hrefOf(page + 1)} scroll={false}>
                    {c.next}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.query, <code key="q">{read.query || c.none}</code>],
          [c.current, read.current || c.none],
          [c.names, read.names || c.none],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
