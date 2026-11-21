import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '07장 · 2 / 7',
    title: 'Enter · Space · 방향키와 텍스트 편집의 기본 동작 보존하기',
    lead: (
      <>
        키보드 지원을 더하려다 이미 되던 동작을 망가뜨리는 일이 많습니다. 이 페이지는{' '}
        <strong className="text-text-default">위젯이 맡을 키와 브라우저에 맡길 키</strong>를 나누고,
        한 과업 안에서 실제 키 동작으로 확인합니다.
      </>
    ),
    readingTime: '읽는 시간 약 11분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '링크 · 버튼 · 입력 칸이 이미 가진 키 동작',
      '위젯이 맡는 키와 브라우저 · 텍스트 입력이 맡는 키를 나누는 기준',
      '조합 입력 · 수정 키 조합을 막지 않는 키 처리',
    ],
  },
  en: {
    eyebrow: 'Chapter 07 · 2 of 7',
    title: 'Preserving the default behavior of Enter, Space, arrows, and text editing',
    lead: (
      <>
        Adding keyboard support often breaks what already worked. This page separates{' '}
        <strong className="text-text-default">
          the keys a widget owns from the keys left to the browser
        </strong>
        , and checks them with real key behavior in one task.
      </>
    ),
    readingTime: 'About 11 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'The key behavior links, buttons, and text fields already have',
      'How to separate widget keys from browser and text input keys',
      'Key handling that leaves composition and modifier combinations alone',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
