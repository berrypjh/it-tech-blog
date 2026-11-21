import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '07장 · 4 / 7',
    title: '추가 · 삭제 · 비활성화 이후 논리적인 포커스 위치 유지하기',
    lead: (
      <>
        방금 누른 삭제 버튼이 사라지면 키보드 사용자의 위치도 함께 사라질 수 있습니다. 이 페이지는{' '}
        <strong className="text-text-default">동작마다 포커스 도착지를 먼저 정하고</strong>, 꼭
        필요할 때만 옮기는 방법을 다룹니다.
      </>
    ),
    readingTime: '읽는 시간 약 12분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '삭제 · 추가 · 비활성화마다 포커스 도착지를 정하는 방법',
      'DOM 반영 뒤에 옮기고 배경 갱신에서는 옮기지 않는 기준',
      '포커스 이동과 변경 안내의 목적 구분',
    ],
  },
  en: {
    eyebrow: 'Chapter 07 · 4 of 7',
    title: 'Keeping a logical focus position after adding, deleting, and disabling',
    lead: (
      <>
        When the delete button you just pressed disappears, a keyboard user&apos;s position can
        disappear with it. This page covers{' '}
        <strong className="text-text-default">
          deciding a focus destination for each action first
        </strong>{' '}
        and moving focus only when needed.
      </>
    ),
    readingTime: 'About 12 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Deciding the focus destination for delete, add, and disable',
      'Moving after the DOM updates, and not on background updates',
      'The different purposes of moving focus and announcing a change',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
