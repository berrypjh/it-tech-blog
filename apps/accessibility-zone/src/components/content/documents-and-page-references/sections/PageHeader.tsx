import type { Locale } from '@it-tech-blog/preferences';
import { DocPageHeader, type HeaderContent } from '@it-tech-blog/ui';

import { narration } from '../narration';

const content: Record<Locale, HeaderContent> = {
  ko: {
    eyebrow: '09장 · 10 / 10',
    title: '다운로드 문서 · 뷰어 · 고정된 참조 위치의 접근성 다루기',
    lead: (
      <>
        링크를 눌렀더니 예상과 다른 형식의 큰 파일이 내려오거나, 페이지와 문서의 내용이 다르면
        사용자는 어느 쪽을 믿어야 할지 모릅니다. 이 장의 마지막 페이지는{' '}
        <strong className="text-text-default">내려받는 문서와 HTML 판을 대조</strong>하고, 장 전체를
        최종 과업으로 묶습니다.
      </>
    ),
    readingTime: '읽는 시간 약 16분',
    practices: '브라우저 실습 2개',
    learnItems: [
      '내려받기 링크의 형식 · 언어 · 크기를 실제 파일과 맞추기',
      '쪽 구분이 있는 출판물에서 같은 원본 위치 찾기와 KWCAG · WCAG 번호 구분',
      '그림 · 표 · 영상 경로와 글 · 자막 · 대본 경로로 같은 질문에 답하기',
    ],
  },
  en: {
    eyebrow: 'Chapter 09 · 10 of 10',
    title:
      'Handling the accessibility of downloadable documents, viewers, and fixed reference points',
    lead: (
      <>
        When a link downloads a large file in an unexpected format, or the page and the document
        disagree, users cannot tell which to trust. This last page of the chapter{' '}
        <strong className="text-text-default">
          compares the downloaded document with the HTML version
        </strong>{' '}
        and ties the chapter together in a final task.
      </>
    ),
    readingTime: 'About 16 min read',
    practices: '2 in-browser exercises',
    learnItems: [
      'Matching a download link’s format, language, and size to the real file',
      'Finding the same original location in paginated publications, and keeping KWCAG and WCAG numbers apart',
      'Answering the same questions through picture, table, and video paths and through text, caption, and transcript paths',
    ],
  },
};

export const PageHeader = ({ locale }: { locale: Locale }) => (
  <DocPageHeader locale={locale} content={content[locale]} script={narration} />
);
