import { Suspense } from 'react';

import type { Locale } from '@it-tech-blog/preferences';
import { DocH2 } from '@it-tech-blog/ui';

import { Steps } from '@/components/shared/Steps';

import { NavigationDemo } from '../demos/NavigationDemo';
import { getToc } from '../toc';

const content = {
  ko: {
    intro:
      '세 탐색 영역의 링크는 모두 실제 주소로 갑니다. 사이트 메뉴와 현재 경로의 링크를 누르면 이 페이지를 떠나므로, 여기서는 쪽 번호로 조작합니다.',
    steps: [
      '“2쪽”을 눌러 주소의 쿼리와 현재 표시가 함께 바뀌는지 봅니다.',
      '초점이 목록의 제목에 있는지 확인합니다.',
      '“다음 쪽”으로 마지막 쪽에 가서 “다음 쪽” 링크가 없는지 봅니다.',
      '브라우저의 뒤로 가기를 눌러 이전 쪽으로 돌아오는지 확인합니다.',
      '주소 끝을 “?page=99”로 바꿔 열어, 없는 쪽이 어떻게 다뤄지는지 봅니다.',
    ],
  },
  en: {
    intro:
      'Every link in the three navigation areas goes to a real address. Links in the site menu and breadcrumb leave this page, so operate the page numbers here.',
    steps: [
      'Activate “Page 2” and see the query of the address and the current marker change together.',
      'Check that focus is on the list heading.',
      'Go to the last page with “Next page” and see that there is no “Next page” link.',
      'Press the browser’s back button and confirm you return to the previous page of the list.',
      'Open the address ending in “?page=99” and see how a page that does not exist is handled.',
    ],
  },
};

export const PracticeSection = ({ locale }: { locale: Locale }) => {
  const c = content[locale];
  const toc = getToc(locale);

  return (
    <section aria-labelledby={toc.practice.id}>
      <DocH2 {...toc.practice} />
      <p>{c.intro}</p>
      <Steps items={c.steps} />
      <Suspense fallback={null}>
        <NavigationDemo />
      </Suspense>
    </section>
  );
};
