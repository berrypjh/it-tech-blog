import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '11장 · 4 / 7',
    title: '서버 오류 이후 입력값 · 포커스 · 알림을 보존하기',
    lead: (
      <>
        브라우저의 검사를 통과한 값도 서버는 거절할 수 있고, 서버가 아예 답하지 못할 수도 있습니다.
        그때 폼이 비워지거나 초점이 사라지면 사용자는 처음부터 다시 해야 합니다. 이 페이지는 교육용
        로컬 응답으로 <strong className="text-text-default">값 · 수정 위치 · 알림</strong>을 지키는
        복구를 만듭니다.
      </>
    ),
    readingTime: '읽는 시간 약 13분',
    practices: '브라우저 실습 1개',
    learnItems: [
      '필드 오류와 서비스 오류의 복구 경로 나누기',
      '지연 · 중복 제출 · 늦은 응답에서 현재 제출만 화면을 바꾸게 하기',
      '실패한 뒤 입력값과 수정 위치를 그대로 두고 다시 시도하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 11 · 4 of 7',
    title: 'Preserving input, focus, and announcements after server errors',
    lead: (
      <>
        The server can reject a value that passed the browser’s check, or fail to answer at all. If
        the form is cleared or focus is lost then, the user has to start over. This page builds a
        recovery that keeps{' '}
        <strong className="text-text-default">values, the place to fix, and announcements</strong>{' '}
        with local teaching responses.
      </>
    ),
    readingTime: 'About 13 min read',
    practices: '1 in-browser exercise',
    learnItems: [
      'Separating the recovery paths of field errors and service errors',
      'Letting only the current submission change the screen through delays, duplicate submissions, and late responses',
      'Keeping input and the place to fix after a failure, then retrying',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
