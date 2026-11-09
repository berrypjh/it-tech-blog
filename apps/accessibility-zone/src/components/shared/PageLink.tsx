import { createPageLinks } from '@it-tech-blog/ui';

import { navData } from '@/data';

/** 이 존의 navData로 만든 본문 링크(PageLink)와 다음 페이지 카드(NextPage). */
export const { PageLink, NextPage } = createPageLinks(navData);
