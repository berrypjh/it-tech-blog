import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '10장 · 5 / 5',
    title: '중복 알림 · 연속 응답 · 취소 · 경쟁 상태에서 정보 일관성 유지하기',
    lead: (
      <>
        “대본”을 검색했는데 늦게 도착한 “자막”의 결과가 화면과 알림을 덮으면, 사용자는 틀린 정보를
        믿게 됩니다. 이 장의 마지막 페이지는 응답 순서를 직접 정해{' '}
        <strong className="text-text-default">역전 · 취소 · 오류 · 중복 완료</strong>를 재현하고,
        활성 요청만 화면을 바꾸게 만듭니다.
      </>
    ),
    readingTime: '읽는 시간 약 16분',
    practices: '브라우저 실습 2개',
    learnItems: [
      '요청 정체성으로 결과 · 알림 · busy를 바꿀 요청 고르기',
      '응답 역전 · 취소 뒤 늦은 응답 · 지난 오류 · 중복 완료 재현하기',
      '재현 기록에 입력 순서 · 요청 ID · 기대값 · 관찰값 · 미확인을 남기기',
    ],
  },
  en: {
    eyebrow: 'Chapter 10 · 5 of 5',
    title:
      'Keeping information consistent through duplicate messages, consecutive responses, cancellation, and races',
    lead: (
      <>
        If you search for “transcript” and the late result of “caption” overwrites the screen and
        the announcement, users trust wrong information. This last page of the chapter sets the
        response order by hand to reproduce{' '}
        <strong className="text-text-default">
          reversal, cancellation, errors, and duplicate completion
        </strong>
        , and makes only the active request change the screen.
      </>
    ),
    readingTime: 'About 16 min read',
    practices: '2 in-browser exercises',
    learnItems: [
      'Choosing which request may change results, announcements, and busy by request identity',
      'Reproducing reversal, a late response after cancel, an old error, and duplicate completion',
      'Recording input order, request IDs, expectations, observations, and what is unconfirmed',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
