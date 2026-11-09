import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '03장 · 5 / 6',
    title: 'NVDA 또는 VoiceOver로 문서 탐색과 폼 조작 시작하기',
    lead: (
      <>
        앞 페이지들은 브라우저까지의 정보를 봤습니다. 이 페이지는 실제 화면 낭독기를 켜서{' '}
        <strong className="text-text-default">
          제목 · 랜드마크 · 링크로 이동하고, 입력란과 체크박스를 조작
        </strong>
        해 봅니다. Windows라면 NVDA, macOS라면 VoiceOver 가운데 할 수 있는 경로 하나를 고릅니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      'NVDA 또는 VoiceOver를 켜고 끄기',
      '제목 · 랜드마크 · 링크로 문서 탐색하기',
      '입력란을 편집하고 체크박스 상태를 확인하기',
      '정확한 발화가 아니라 기대하는 뜻을 기준으로 결과를 기록하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 03 · 5 of 6',
    title: 'Getting started with document navigation and forms in NVDA or VoiceOver',
    lead: (
      <>
        The previous pages looked at information up to the browser. This page turns on a real screen
        reader to{' '}
        <strong className="text-text-default">
          move by headings, landmarks, and links, and operate a text field and a checkbox
        </strong>
        . Pick one path you can do: NVDA on Windows or VoiceOver on macOS.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Turning NVDA or VoiceOver on and off',
      'Navigating a document by headings, landmarks, and links',
      'Editing a text field and checking a checkbox’s state',
      'Recording results by expected meaning, not exact speech',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
