import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '07장 · 6 / 7',
    title: '건너뛰기 링크 · 반복 영역 우회 · 문자 단축키 충돌 해결하기',
    lead: (
      <>
        키보드 사용을 빠르게 하는 기능도 조건이 틀리면 장벽이 됩니다. 이 페이지는{' '}
        <strong className="text-text-default">건너뛰기 링크의 실제 도착 위치</strong>와 한 글자
        단축키가 충족해야 할 조건을 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 2개',
    learnItems: [
      '건너뛰기 링크가 보이는 시점과 도착 위치, 다음 Tab',
      'WCAG 2.4.1의 우회 목적',
      'WCAG 2.1.4의 끄기 · 재지정 · 포커스 범위 조건',
    ],
  },
  en: {
    eyebrow: 'Chapter 07 · 6 of 7',
    title: 'Skip links, bypassing repeated blocks, and character key shortcut conflicts',
    lead: (
      <>
        Features that speed up keyboard use become barriers when their conditions are wrong. This
        page checks <strong className="text-text-default">where a skip link really lands</strong>{' '}
        and the conditions a single-key shortcut must meet.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '2 in-browser exercises',
    learnItems: [
      'When a skip link appears, where it lands, and the next Tab',
      'The purpose of bypassing in WCAG 2.4.1',
      'The turn off, remap, and focus scope conditions of WCAG 2.1.4',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
